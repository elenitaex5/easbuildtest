
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import React, { useEffect } from 'react';
import { Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    //TODO It must works in prod
    //token = (await Notifications.getExpoPushTokenAsync()).data;

    /* FIX FOR DEV */
    const appConfig = require('../../../app.json');
    const projectId = appConfig?.expo?.extra?.eas?.projectId;
    token = (await Notifications.getExpoPushTokenAsync({
	    projectId
    })).data;

  } else {
    alert('Must use physical device for Push Notifications');
  }

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

export const PushNotificationWrapper = () => {
  useEffect(() => {
    registerForPushNotificationsAsync()
  }, []);

  return <></>
}

export default PushNotificationWrapper