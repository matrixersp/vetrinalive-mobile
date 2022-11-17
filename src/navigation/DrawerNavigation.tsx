import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from 'src/screens/Dashboard';
import Products from 'src/screens/Products';
import {HeaderTitle} from 'src/components/HeaderTitle';
import {TouchableOpacity} from 'react-native';
import {Divider, HStack, Icon, Pressable} from 'native-base';

import MenuIcon from 'src/assets/icons/menu.svg';
import SearchIcon from 'src/assets/icons/search.svg';
import FilterIcon from 'src/assets/icons/filter.svg';
import NewProduct from 'src/screens/Products/NewProduct';
import Payment from '../screens/Payment';

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
      })}
      drawerContent={props => <CustomDrawerContent {...props} />}>
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
      <Stack.Screen
        name="Payment"
        component={Payment}
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

function CustomDrawerContent(props) {
  const {navigation} = props;

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <Divider />
      <DrawerItem
        label="Logout"
        onPress={() => navigation.navigate('SignIn')}
      />
    </DrawerContentScrollView>
  );
}

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
