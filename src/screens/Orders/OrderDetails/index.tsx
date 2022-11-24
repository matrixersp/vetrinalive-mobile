import {useNavigation, useRoute} from '@react-navigation/native';
import Layout from 'components/Layout';
import {Divider, HStack, Pressable, Text, View} from 'native-base';
import {
  OrderDetailsRouteProps,
  OrdersNavigationProps,
} from 'navigation/DrawerNavigation';
import React from 'react';
import {TouchableOpacity} from 'react-native';

import CloseIcon from 'assets/icons/close.svg';
import StarFilledIcon from 'assets/icons/star-filled.svg';
import {StyleSheet} from 'react-native';
import {useFullHeight} from 'utils/useFullHeight';
import Tabs from 'screens/Orders/OrderDetails/Tabs';

const OrderDetails = () => {
  const minHeight = useFullHeight();
  const route = useRoute<OrderDetailsRouteProps>();
  const navigation = useNavigation<OrdersNavigationProps>();

  return (
    <Layout>
      <View px={6} bg="white" minH={minHeight}>
        <HStack justifyContent="space-between" pt={6}>
          <Text style={styles.orderNo}>Order: #{route.params?.id}</Text>
          <TouchableOpacity>
            <HStack alignItems="center">
              <StarFilledIcon />
              <Text style={styles.printText} color="primary">
                Stampa ordine
              </Text>
            </HStack>
          </TouchableOpacity>
          <Pressable onPress={() => navigation.navigate('AllOrders')}>
            <CloseIcon />
          </Pressable>
        </HStack>
        <Divider my={6} />
        <Tabs />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  orderNo: {
    fontSize: 17,
    lineHeight: 22,
  },
  printText: {
    fontSize: 15,
    lineHeight: 20,
    marginLeft: 10,
  },
});

export default OrderDetails;
