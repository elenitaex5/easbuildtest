import { StatusBar } from 'expo-status-bar';
import { Box, NativeBaseProvider } from 'native-base';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  //reordering navigation
  //having notifications in app.tsx


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NativeBaseProvider>

        <Navigation colorScheme={colorScheme} />
        <StatusBar />
        <Box>Hello world</Box>
        </NativeBaseProvider>

    );
  }
}
