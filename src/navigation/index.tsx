import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import ForgotPassword from 'screens/ForgotPassword';
import SignIn from 'screens/SignIn';
import SignUp from 'screens/SignUp';
import DrawerNavigation from 'navigation/DrawerNavigation';
import {useAuth} from 'contexts/AuthContext';
import {Text} from 'native-base';
import Layout from 'components/Layout';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {user, loading} = useAuth();

  if (loading) {
    return (
      <Layout>
        <Text>loading...</Text>
      </Layout>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="SignIn">
        {user ? (
          <Stack.Screen name="Home" component={DrawerNavigation} />
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
