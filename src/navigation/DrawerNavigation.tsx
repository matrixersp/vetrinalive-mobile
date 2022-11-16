import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from 'src/screens/Dashboard';
import Products from 'src/screens/Products';
import {HeaderTitle} from 'src/components/HeaderTitle';
import {TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';

import MenuIcon from 'src/assets/icons/menu.svg';

const Drawer = createDrawerNavigator();

type Props = {};

const DrawerNavigation = ({}: Props) => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={({navigation}) => ({
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon as={MenuIcon} marginLeft={4} />
          </TouchableOpacity>
        ),
      })}>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerTitle: () => <HeaderTitle title="Dashboard" />,
        }}
      />
      <Drawer.Screen
        name="Products"
        component={Products}
        options={{
          headerTitle: () => <HeaderTitle title="Products" />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
