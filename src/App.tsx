import 'react-native-gesture-handler';
import {NativeBaseProvider} from 'native-base';
import {customTheme} from 'src/styles/theme';
import React from 'react';
import Navigation from 'src/navigation';

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

const App = () => {
  return (
    <NativeBaseProvider theme={customTheme} config={config}>
      <Navigation />
    </NativeBaseProvider>
  );
};

export default App;
