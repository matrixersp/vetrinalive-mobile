import {
  VStack,
  Divider,
  HStack,
  Checkbox,
  Pressable,
  Icon,
  Text,
  Center,
} from 'native-base';
import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Menu from 'screens/Orders/Menu';

import MoreHorizontalIcon from 'assets/icons/more-horizontal.svg';
import ChevronLeftIcon from 'assets/icons/chevron-left.svg';
import ChevronRightIcon from 'assets/icons/chevron-right.svg';
import ChevronDownIcon from 'assets/icons/chevron-down-small.svg';
import ChevronUpIcon from 'assets/icons/chevron-up-small.svg';
import {OrdersNavigationProps} from 'navigation/DrawerNavigation';

const width = {
  number: '23%',
  name: '39%',
  status: '24%',
};

type Option = string | number;

const OrdersTable = () => {
  const navigation = useNavigation<OrdersNavigationProps>();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const totalPages = useMemo(
    () => Math.ceil(orders.length / rowsPerPage),
    [rowsPerPage],
  );

  const handleMoreActions = (id: number) => (option: Option) => {
    switch (option) {
      case 'View':
        navigation.navigate('OrderDetails', {id});
        break;
      case 'Delete':
        console.log('Delete');
        break;
      default:
        console.log('default');
    }
  };

  const handleRowsPerPage = (option: Option) => {
    setRowsPerPage(option as number);
  };

  const handlePageChange = (direction: 'next' | 'prev') => {
    if (direction === 'next' && page < totalPages - 1) {
      setPage(page + 1);
    } else if (direction === 'prev' && page > 0) {
      setPage(page - 1);
    }
  };

  const handleOrderPressed = (id: number) => () => {
    navigation.navigate('OrderDetails', {id});
  };

  return (
    <VStack divider={<Divider />} shadow={3} style={styles.tableContainer}>
      <HStack divider={<Divider />} alignItems="center">
        <HStack space={2} style={styles.cell} w={width.number}>
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
        <HStack space={2} style={styles.cell} w={width.name}>
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
        <HStack space={2} style={styles.cell} w={width.status}>
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
        <HStack minW={12} style={styles.cell} />
      </HStack>
      {orders
        .slice(rowsPerPage * page, page * rowsPerPage + rowsPerPage)
        .map(({id, number, name, status}) => (
          <Pressable key={id} onPress={handleOrderPressed(id)}>
            <HStack divider={<Divider />} alignItems="center">
              <HStack style={styles.cell} w={width.number}>
                <Checkbox
                  value={String(number)}
                  defaultIsChecked={false}
                  colorScheme="blue"
                  accessibilityLabel="number"
                />
                <Text style={styles.columnText} ml={2} numberOfLines={1}>
                  {number}
                </Text>
              </HStack>
              <HStack style={styles.cell} w={width.name}>
                <Text style={styles.columnText} numberOfLines={2}>
                  {name}
                </Text>
              </HStack>
              <HStack style={styles.cell} w={width.status}>
                <Text
                  style={[
                    styles.columnText,
                    styles.status,
                    {backgroundColor: getStatusBackground(status)},
                  ]}
                  noOfLines={1}>
                  {status}
                </Text>
              </HStack>
              <HStack style={styles.cell}>
                <Menu
                  options={['View', 'Delete']}
                  icon={<Icon as={MoreHorizontalIcon} />}
                  onItemPress={handleMoreActions(id)}
                />
              </HStack>
            </HStack>
          </Pressable>
        ))}
      <HStack px={8} py={4} justifyContent="space-between">
        <HStack space={2} alignItems="center">
          <Text style={styles.paginationText}>P</Text>
          <Menu
            options={[5, 10, 25]}
            selectedOption={rowsPerPage}
            icon={<Icon as={ChevronDownIcon} />}
            onItemPress={handleRowsPerPage}
          />
        </HStack>
        <HStack alignItems="center">
          <Text style={styles.paginationText}>
            {page + 1}-{totalPages} of {totalPages}
          </Text>
        </HStack>
        <HStack alignItems="center" space={2}>
          <Pressable onPress={() => handlePageChange('prev')}>
            <Icon as={ChevronLeftIcon} />
          </Pressable>
          <Pressable onPress={() => handlePageChange('next')}>
            <Icon as={ChevronRightIcon} />
          </Pressable>
        </HStack>
      </HStack>
    </VStack>
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
    case 'Reso effettuato':
      return '#6979F8';
    default:
      return 'primary';
  }
};

const orders = [
  {
    id: 1,
    number: 2222,
    name: 'Cameron Williamson',
    status: 'New',
  },
  {
    id: 2,
    number: 2222,
    name: 'Cameron Williamson',
    status: 'New',
  },
  {
    id: 3,
    number: 2222,
    name: 'Cameron Williamson',
    status: 'Shipped',
  },
  {
    id: 4,
    number: 2222,
    name: 'Cameron Williamson',
    status: 'In progress',
  },
  {
    id: 5,
    number: 2222,
    name: 'Cameron Williamson',
    status: 'Reso effettuato',
  },
  {
    id: 6,
    number: 2222,
    name: 'Cameron Williamson',
    status: 'New',
  },
  {
    id: 7,
    number: 2222,
    name: 'Cameron Williamson',
    status: 'Shipped',
  },
  {
    id: 8,
    number: 2222,
    name: 'Cameron Williamson',
    status: 'New',
  },
  {
    id: 9,
    number: 2222,
    name: 'Cameron Williamson',
    status: 'In progress',
  },
  {
    id: 10,
    number: 2222,
    name: 'Cameron Williamson',
    status: 'Cancelled',
  },
  {
    id: 11,
    number: 2222,
    name: 'Cameron Williamson',
    status: 'New',
  },
  {
    id: 12,
    number: 2222,
    name: 'Cameron Williamson',
    status: 'New',
  },
  {
    id: 13,
    number: 2222,
    name: 'Cameron Williamson',
    status: 'Shipped',
  },
  {
    id: 14,
    number: 2222,
    name: 'Cameron Williamson',
    status: 'In progress',
  },
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
    fontFamily: 'SourceSansPro-SemiBold',
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
  status: {
    backgroundColor: 'red',
    paddingVertical: 8,
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 16,
    borderRadius: 4,
    color: 'white',
  },
  paginationText: {
    fontSize: 10,
    lineHeight: 18,
    fontWeight: '600',
    color: '#6C7C8C',
  },
});

export default OrdersTable;
