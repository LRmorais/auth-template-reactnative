import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AuthProvider} from './contexts/auth';
import Routes from './routes';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
