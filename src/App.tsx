import 'react-native-gesture-handler';
import {NativeBaseProvider} from 'native-base';
import React from 'react';

import {customTheme} from 'styles/theme';
import Navigation from 'navigation';

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
