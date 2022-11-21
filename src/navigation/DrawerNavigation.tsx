import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Dashboard from 'screens/Dashboard';
import Products from 'screens/Products';
import {HeaderTitle} from 'components/HeaderTitle';
import {TouchableOpacity} from 'react-native';
import {Divider, HStack, Icon, Pressable} from 'native-base';

import MenuIcon from 'assets/icons/menu.svg';
import SearchIcon from 'assets/icons/search.svg';
import FilterIcon from 'assets/icons/filter.svg';
import NewProduct from 'screens/Products/NewProduct';
import Payment from 'screens/Payment';
import Orders from 'screens/Orders';
import OrderDetails from 'screens/Orders/OrderDetails';

const Drawer = createDrawerNavigator<DrawerParamList>();
const Stack = createNativeStackNavigator();

export type DrawerParamList = {
  Dashboard: undefined;
  Products: undefined;
  Orders: undefined;
  Payment: undefined;
};

export type DrawerProps = DrawerScreenProps<DrawerParamList, 'Dashboard'>;
export type DrawerNavigationProps = DrawerProps['navigation'];

const DrawerNavigation = () => {
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
      <Drawer.Screen
        name="Orders"
        component={OrdersNavigation}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

function CustomDrawerContent(props: DrawerContentComponentProps) {
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

type OrdersParamList = {
  AllOrders: undefined;
  OrderDetails: {id: number};
};

export type OrdersProps = NativeStackScreenProps<
  OrdersParamList,
  'OrderDetails'
>;
export type OrdersNavigationProps = OrdersProps['navigation'];
export type OrderDetailsRouteProps = OrdersProps['route'];

const OrdersNavigation = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="AllOrders">
      <Stack.Screen
        name="AllOrders"
        component={Orders}
        options={{
          headerTitle: () => <HeaderTitle title="Orders" />,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon as={MenuIcon} marginRight={4} />
            </TouchableOpacity>
          ),
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
        name="OrderDetails"
        component={OrderDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default DrawerNavigation;
