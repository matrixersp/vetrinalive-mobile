import {
  VStack,
  Divider,
  HStack,
  Icon,
  Avatar,
  Text,
  Pressable,
} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';

import Menu from 'screens/Products/Menu';

import MoreHorizontalIcon from 'assets/icons/more-horizontal.svg';
import ChevronLeftIcon from 'assets/icons/chevron-left.svg';
import ChevronRightIcon from 'assets/icons/chevron-right.svg';

const width = {
  name: '62%',
  price: '24%',
};

const ProductsTable = () => {
  return (
    <VStack divider={<Divider />} shadow={3} style={styles.tableContainer}>
      <HStack divider={<Divider />}>
        <HStack style={styles.cell} w={width.name}>
          <Text style={styles.headerColumnText}>Product name</Text>
        </HStack>
        <HStack style={styles.cell} w={width.price}>
          <Text style={styles.headerColumnText}>Price</Text>
        </HStack>
        <HStack style={styles.cell}>
          <Pressable>
            <Icon as={MoreHorizontalIcon} />
          </Pressable>
        </HStack>
      </HStack>
      {rows.map(({title, price}, index) => (
        <HStack divider={<Divider />} key={index}>
          <HStack style={styles.cell} w={width.name}>
            <Avatar
              bg="gray.500"
              alignSelf="center"
              size={8}
              source={require('assets/images/t-shirt.jpg')}
            />
            <Text style={styles.columnText} ml={3} noOfLines={2}>
              {title}
            </Text>
          </HStack>
          <HStack style={styles.cell} w={width.price}>
            <Text style={styles.columnText} noOfLines={1}>
              {price}
            </Text>
          </HStack>
          <HStack style={styles.cell}>
            <Pressable>
              <Icon as={MoreHorizontalIcon} />
            </Pressable>
          </HStack>
        </HStack>
      ))}
      <HStack px={8} py={4} justifyContent="space-between">
        <HStack space={2} alignItems="center">
          <Text style={styles.paginationText}>P</Text>
          <Menu options={[5, 10, 25]} />
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
  );
};

const rows = [
  ...Array(7).fill({
    title: 'T shirt',
    price: 30,
  }),
];

const styles = StyleSheet.create({
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
    flex: 1,
  },
  cell: {
    padding: 12,
    alignItems: 'center',
  },
  paginationText: {
    fontSize: 10,
    lineHeight: 18,
    fontWeight: '600',
    color: '#6C7C8C',
  },
});

export default ProductsTable;
