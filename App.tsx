import useCachedResources from '@proapp/hooks/useCachedResources'
import useColorScheme from '@proapp/hooks/useColorScheme'
import usePushNotifications from '@proapp/hooks/usePushNotifications'
import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'
import React from 'react'

import Navigation from './src/navigation'

export const App = () => {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()
  usePushNotifications()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <NativeBaseProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </NativeBaseProvider>
    )
  }
}

export default App
