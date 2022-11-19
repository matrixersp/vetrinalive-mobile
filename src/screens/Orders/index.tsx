import {
  Button,
  Divider,
  HStack,
  Icon,
  Text,
  View,
  VStack,
  Pressable,
  Center,
  Checkbox,
} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import Layout from 'components/Layout';
import Menu from 'screens/Orders/Menu';

import MoreHorizontalIcon from 'assets/icons/more-horizontal.svg';
import ChevronLeftIcon from 'assets/icons/chevron-left.svg';
import ChevronRightIcon from 'assets/icons/chevron-right.svg';
import ExternalLinkIcon from 'assets/icons/external-link.svg';
import ChevronDownIcon from 'assets/icons/chevron-down-small.svg';
import ChevronUpIcon from 'assets/icons/chevron-up-small.svg';

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
        <VStack divider={<Divider />} shadow={3} style={styles.tableContainer}>
          <HStack divider={<Divider />} alignItems="center">
            <HStack p={3} space={2} w={92} alignItems="center">
              <Checkbox
                value="all"
                defaultIsChecked={false}
                colorScheme="blue"
                accessibilityLabel="number"
              />
              <Text style={styles.headerColumnText}>#</Text>
              <VStack>
                <Pressable>
                  <Icon as={ChevronUpIcon} />
                </Pressable>
                <Pressable>
                  <Icon as={ChevronDownIcon} />
                </Pressable>
              </VStack>
            </HStack>
            <HStack p={3} minW={83} space={2} w={153} alignItems="center">
              <Text style={styles.headerColumnText}>Name</Text>
              <VStack>
                <Pressable>
                  <Icon as={ChevronUpIcon} />
                </Pressable>
                <Pressable>
                  <Icon as={ChevronDownIcon} />
                </Pressable>
              </VStack>
            </HStack>
            <HStack p={3} minW={83} space={2} w={83} alignItems="center">
              <Text style={styles.headerColumnText}>Stato</Text>
              <VStack>
                <Pressable>
                  <Icon as={ChevronUpIcon} />
                </Pressable>
                <Pressable>
                  <Icon as={ChevronDownIcon} />
                </Pressable>
              </VStack>
            </HStack>
            <Center p={3} minW={12} />
          </HStack>
          {rows.map(({number, name, status}, index) => (
            <HStack divider={<Divider />} alignItems="center" key={index}>
              <HStack p={3} flexGrow="1" alignItems="center" w="90px">
                <Checkbox
                  value={String(number)}
                  defaultIsChecked={false}
                  colorScheme="blue"
                  accessibilityLabel="number"
                />
                <Text style={styles.columnText} ml={3}>
                  {number}
                </Text>
              </HStack>
              <Center p={3} minW={83}>
                <Text style={styles.columnText}>{name}</Text>
              </Center>
              <Center p={3} minW={83}>
                <Text
                  style={[
                    styles.columnText,
                    styles.status,
                    {backgroundColor: getStatusBackground(status)},
                  ]}>
                  {status}
                </Text>
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
      </View>
    </Layout>
  );
};

const getStatusBackground = (status: string) => {
  switch (status) {
    case 'New':
      return '#21B8F9';
    case 'Shipped':
      return '#BE52F2';
    case 'In progress':
      return '#FFA26B';
    case 'Cancelled':
      return '#F33451';
    default:
      return 'primary';
  }
};

const rows = [
  {
    number: 2222,
    name: 'Cameron Williamson',
    status: 'New',
  },
  {
    number: 2222,
    name: 'Cameron Williamson',
    status: 'New',
  },
  {
    number: 2222,
    name: 'Cameron Williamson',
    status: 'Shipped',
  },
  {
    number: 2222,
    name: 'Cameron Williamson',
    status: 'In progress',
  },
  {
    number: 2222,
    name: 'Cameron Williamson',
    status: 'New',
  },
  {
    number: 2222,
    name: 'Cameron Williamson',
    status: 'New',
  },
  {
    number: 2222,
    name: 'Cameron Williamson',
    status: 'Shipped',
  },
  {
    number: 2222,
    name: 'Cameron Williamson',
    status: 'New',
  },
  {
    number: 2222,
    name: 'Cameron Williamson',
    status: 'In progress',
  },
  {
    number: 2222,
    name: 'Cameron Williamson',
    status: 'Cancelled',
  },
  {
    number: 2222,
    name: 'Cameron Williamson',
    status: 'New',
  },
  {
    number: 2222,
    name: 'Cameron Williamson',
    status: 'New',
  },
  {
    number: 2222,
    name: 'Cameron Williamson',
    status: 'Shipped',
  },
  {
    number: 2222,
    name: 'Cameron Williamson',
    status: 'In progress',
  },
];

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    lineHeight: 22,
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
  status: {
    backgroundColor: 'red',
    paddingVertical: 8,
    width: 66,
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 16,
    borderRadius: 4,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  paginationText: {
    fontSize: 10,
    lineHeight: 18,
    fontWeight: '600',
    color: '#6C7C8C',
  },
});

export default Orders;
