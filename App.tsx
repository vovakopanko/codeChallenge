import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Main from './src/pages/Main';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={background(isDarkMode).backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={background(isDarkMode).backgroundStyle.backgroundColor}
      />
      <Main />
    </SafeAreaView>
  );
}

const background = (isDarkMode: boolean) =>
  StyleSheet.create({
    backgroundStyle: {
      flex: 1,
      justifyContent: 'space-around',
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    },
  });

export default App;
