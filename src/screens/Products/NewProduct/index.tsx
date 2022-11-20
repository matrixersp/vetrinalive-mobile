import {Button, ChevronLeftIcon, Text, View, VStack} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import Layout from 'components/Layout';
import Tabs from 'screens/Products/NewProduct/Tabs';

type Props = {};

const NewProduct = ({navigation}: Props) => {
  return (
    <Layout>
      <View variant="full" bg="background">
        <VStack alignItems="flex-start" space={6} m={4} flexGrow={0}>
          <Button
            variant="outlined"
            height="40px"
            py="0"
            px="16px"
            rounded="full"
            _icon={{
              marginRight: 2,
            }}
            startIcon={<ChevronLeftIcon color="textPrimary" />}
            onPress={() => navigation.navigate('AllProducts')}>
            All products
          </Button>
          <Text style={styles.title}>New Product</Text>
        </VStack>
        <Tabs />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    lineHeight: 32,
    fontFamily: 'SourceSansPro-SemiBold',
  },
});
export default NewProduct;
