import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'

import useCachedResources from './src/hooks/useCachedResources'
import useColorScheme from './src/hooks/useColorScheme'
import Navigation from './src/navigation'
import PushNotificationWrapper from './src/wrappers/PushNotificationWrapper'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <NativeBaseProvider>
        <PushNotificationWrapper />
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </NativeBaseProvider>
    )
  }
}
