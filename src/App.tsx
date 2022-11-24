import 'react-native-gesture-handler';
import {NativeBaseProvider} from 'native-base';
import React from 'react';

import {customTheme} from 'styles/theme';
import Navigation from 'navigation';
import {AuthProvider} from 'contexts/AuthContext';

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

const App = () => {
  return (
    <AuthProvider>
      <NativeBaseProvider theme={customTheme} config={config}>
        <Navigation />
      </NativeBaseProvider>
    </AuthProvider>
  );
};

export default App;
