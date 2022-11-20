import {Button, HStack, Switch, Text, View, VStack} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';

import Layout from 'components/Layout';
import ProductsTable from 'screens/Products/ProductsTable';

import PlusIcon from 'assets/icons/plus.svg';

const Products = ({navigation}: {navigation: DrawerNavigationProp<any>}) => {
  return (
    <Layout>
      <View variant="full" p={4} colorScheme="background">
        <HStack justifyContent="space-between">
          <VStack space={4} alignItems="flex-start">
            <Text style={styles.text}>Products (24/100)</Text>
            <Text style={styles.text}>Featured products (7/10)</Text>
            <Switch size="md" />
          </VStack>
          <VStack justifyContent="center">
            <Button
              variant="contained"
              onPress={() => navigation.navigate('NewProduct')}>
              <PlusIcon />
            </Button>
          </VStack>
        </HStack>
        <ProductsTable />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    lineHeight: 16,
  },
});

export default Products;
