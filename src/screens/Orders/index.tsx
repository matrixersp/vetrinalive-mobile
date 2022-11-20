import {Button, HStack, Icon, Text, View, VStack} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import Layout from 'components/Layout';

import ExternalLinkIcon from 'assets/icons/external-link.svg';
import OrdersTable from 'screens/Orders/OrdersTable';

const Orders = ({navigation}) => {
  return (
    <Layout>
      <View variant="full" py={6} px={4} colorScheme="background">
        <HStack justifyContent="space-between" alignItems="center">
          <VStack space={4} alignItems="flex-start">
            <Text style={styles.text}>
              Orders: <Text fontWeight={600}>24</Text>
            </Text>
          </VStack>
          <VStack justifyContent="center">
            <Button
              variant="contained"
              isDisabled
              onPress={() => navigation.navigate('NewProduct')}
              endIcon={<Icon as={ExternalLinkIcon} color="disabled" />}>
              Ship order
            </Button>
          </VStack>
        </HStack>
        <OrdersTable />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    lineHeight: 22,
  },
});

export default Orders;
