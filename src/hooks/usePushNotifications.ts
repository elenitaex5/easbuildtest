
import { isDevice } from 'expo-device';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';
import { Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

async function registerForPushNotificationsAsync() {
  if (!isDevice) {
    alert('Must use physical device for Push Notifications');
    return;
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();

    if (status !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
  }
  //TODO It must works in prod
  //token = (await Notifications.getExpoPushTokenAsync()).data;

  /* FIX FOR DEV */
  const appConfig = require('../../app.json');
  const projectId = appConfig?.expo?.extra?.eas?.projectId;
  const token = (await Notifications.getExpoPushTokenAsync({
    projectId
  })).data;


  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
  return token;
}

export const usePushNotifications = () => {
  useEffect(() => {
    registerForPushNotificationsAsync()
  }, []);

  return
}

export default usePushNotifications