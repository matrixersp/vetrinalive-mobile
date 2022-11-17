import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from 'src/screens/Dashboard';
import Products from 'src/screens/Products';
import {HeaderTitle} from 'src/components/HeaderTitle';
import {TouchableOpacity} from 'react-native';
import {HStack, Icon, Pressable} from 'native-base';

import MenuIcon from 'src/assets/icons/menu.svg';
import SearchIcon from 'src/assets/icons/search.svg';
import FilterIcon from 'src/assets/icons/filter.svg';
import NewProduct from 'src/screens/Products/NewProduct';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

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
        component={ProductsNavigation}
        options={{
          headerTitle: () => <HeaderTitle title="Products" />,
          headerRight: () => (
            <HStack mr={4} space={8}>
              <Pressable onPress={() => console.log('Search')}>
                <SearchIcon />
              </Pressable>
              <Pressable onPress={() => console.log('filter')}>
                <FilterIcon />
              </Pressable>
            </HStack>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const ProductsNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="AllProducts">
      <Stack.Screen name="AllProducts" component={Products} />
      <Stack.Screen name="NewProduct" component={NewProduct} />
    </Stack.Navigator>
  );
};

export default DrawerNavigation;
