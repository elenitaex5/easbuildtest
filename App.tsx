import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import usePushNotifications from './src/hooks/usePushNotifications';
import Navigation from './src/navigation';

export const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  usePushNotifications()


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NativeBaseProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
     </NativeBaseProvider>
    );
  }
}

export default App
