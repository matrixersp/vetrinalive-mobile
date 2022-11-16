import {
  Button,
  Divider,
  HStack,
  Icon,
  Switch,
  Text,
  View,
  VStack,
  Pressable,
  Center,
  Avatar,
} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import Layout from 'src/components/Layout';
import Select from 'src/screens/Products/Select';

import PlusIcon from 'src/assets/icons/plus.svg';
import MoreHorizontalIcon from 'src/assets/icons/more-horizontal.svg';
import ChevronLeftIcon from 'src/assets/icons/chevron-left.svg';
import ChevronRightIcon from 'src/assets/icons/chevron-right.svg';

const Products = () => {
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
            <Button variant="contained">
              <PlusIcon />
            </Button>
          </VStack>
        </HStack>
        <VStack divider={<Divider />} shadow={3} style={styles.tableContainer}>
          <HStack divider={<Divider />} alignItems="center">
            <HStack p={3} flexGrow="1">
              <Text style={styles.headerColumnText}>Product name</Text>
            </HStack>
            <Center p={3} minW={83}>
              <Text style={styles.headerColumnText}>Price</Text>
            </Center>
            <Center p={3}>
              <Pressable>
                <Icon as={MoreHorizontalIcon} />
              </Pressable>
            </Center>
          </HStack>
          {rows.map(({title, price}, index) => (
            <HStack divider={<Divider />} alignItems="center" key={index}>
              <HStack p={3} flexGrow="1" alignItems="center">
                <Avatar
                  bg="gray.500"
                  alignSelf="center"
                  size={8}
                  source={require('src/assets/images/t-shirt.jpg')}
                />
                <Text style={styles.columnText} ml={3}>
                  {title}
                </Text>
              </HStack>
              <Center p={3} minW={83}>
                <Text style={styles.columnText}>{price}</Text>
              </Center>
              <Center p={3}>
                <Pressable>
                  <Icon as={MoreHorizontalIcon} />
                </Pressable>
              </Center>
            </HStack>
          ))}
          <HStack px={8} py={4} justifyContent="space-between">
            <HStack space={2} alignItems="center">
              <Text style={styles.paginationText}>P</Text>
              <Select options={[5, 10, 25]} />
            </HStack>
            <HStack alignItems="center">
              <Text style={styles.paginationText}>1-25 of 25</Text>
            </HStack>
            <HStack alignItems="center" space={2}>
              <Pressable>
                <Icon as={ChevronLeftIcon} />
              </Pressable>
              <Pressable>
                <Icon as={ChevronRightIcon} />
              </Pressable>
            </HStack>
          </HStack>
        </VStack>
      </View>
    </Layout>
  );
};

const rows = [...Array(7).fill({title: 'T shirt', price: 30})];

const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    lineHeight: 16,
  },
  tableContainer: {
    backgroundColor: 'white',
    marginTop: 24,
    borderRadius: 10,
  },
  headerColumnText: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '700',
    color: '#233B53',
  },
  columnText: {
    fontSize: 14,
    lineHeight: 16,
  },
  paginationText: {
    fontSize: 10,
    lineHeight: 18,
    fontWeight: '600',
    color: '#6C7C8C',
  },
});

export default Products;
