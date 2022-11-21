import {Divider, HStack, Icon, Text, VStack} from 'native-base';
import React, {useEffect, useMemo, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import InfoIcon from 'assets/icons/info.svg';
import WhatsappIcon from 'assets/icons/whatsapp.svg';
import TelegramIcon from 'assets/icons/telegram.svg';
import ChevronDownIcon from 'assets/icons/chevron-down.svg';
import {B} from 'components/BoldText';
import Menu from 'screens/Orders/Menu';
import Actionsheet from 'screens/Orders/OrderDetails/Actionsheet';

type Option = string | number;

const Info = () => {
  const [orderStatus, setOrderStatus] = useState(orderStatuses[0]);
  const [shipmentOption, setShipmentOption] = useState(shipmentOptions[0]);
  const subtotalPrice = 47.0;

  const handleSelectedStatus = (status: string) => {
    setOrderStatus(status);
  };

  const handleShipmentOption = (option: Option) => {
    setShipmentOption(option as string);
  };

  const formatPrice = (price: number) => {
    return price.toFixed(2).replace(/\./, ',');
  };

  const shipmentPrice = useMemo(
    () => getShipmentPrice(shipmentOption),
    [shipmentOption],
  );

  const totalPrice = useMemo(
    () => formatPrice(subtotalPrice + shipmentPrice),
    [subtotalPrice, shipmentPrice],
  );

  return (
    <ScrollView>
      <VStack space={6} py={6} px={4}>
        <VStack space={6} divider={<Divider />}>
          <VStack space={4}>
            <Text style={styles.date} color="textSecondary">
              29/05/2020 18:54
            </Text>
            <B style={styles.sectionTitle}>Cliente</B>
            <B style={styles.text}>mario Rossi</B>
            <TouchableOpacity>
              <Text style={styles.text} color="primary">
                mariorossi@vetirinalive.fr
              </Text>
            </TouchableOpacity>
            <HStack>
              <Text style={styles.text}>Telefono: </Text>
              <TouchableOpacity>
                <Text style={styles.text} color="primary">
                  +39 3333232331
                </Text>
              </TouchableOpacity>
            </HStack>
            <Text style={styles.text}>Codice Fiscale: RSSMAR22T33M123K</Text>
            <TouchableOpacity>
              <HStack alignItems="center">
                <WhatsappIcon />
                <Text style={styles.text} color="secondary" ml={4}>
                  Contatta su Whatsapp
                </Text>
              </HStack>
            </TouchableOpacity>
            <TouchableOpacity>
              <HStack alignItems="center">
                <TelegramIcon />
                <Text style={styles.text} color="primary" ml={4}>
                  Contatta su Telegram
                </Text>
              </HStack>
            </TouchableOpacity>
          </VStack>
          <VStack space={4}>
            <B style={styles.sectionTitle}>Shipping Address</B>
            <Text style={styles.shippingAddress}>
              Via Roma, 59, Torre del Greco, NA, 80059
            </Text>
          </VStack>
          <VStack space={4}>
            <B style={styles.sectionTitle}>Shipping Info</B>
            <Text style={styles.text}>Nome corriere</Text>
            <Text style={styles.text}>Numero/Link ordine: FR12342123 2314</Text>
            <HStack alignItems="center" mt={2}>
              <Icon as={InfoIcon} mr={3} />
              <Menu
                options={shipmentOptions}
                selectedOption={shipmentOption}
                icon={<Icon as={ChevronDownIcon} color="textPrimary" />}
                onItemPress={handleShipmentOption}
                _popover={{width: 200}}
                _option={styles.text}
              />
            </HStack>
            <Text style={styles.shippingDesc} mt={-2} color="textSecondary">
              Se cambi la modalità e i costi di consegna, ricordati di
              comunicarlo al cliente.
            </Text>
            <VStack space={6} mt={16}>
              <HStack alignItems="center" justifyContent="space-between">
                <Text>Subtotal</Text>
                <Text>€ 47,00</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text>{shipmentOption}</Text>
                <HStack alignItems="center">
                  <Text>€ {formatPrice(shipmentPrice)}</Text>
                  <Icon as={ChevronDownIcon} ml={1} />
                </HStack>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <B>Total</B>
                <B>€ {totalPrice}</B>
              </HStack>
              <Actionsheet
                title="Select a status"
                options={orderStatuses}
                selectedOption={orderStatus}
                onItemPress={handleSelectedStatus}
                endIcon={<Icon as={ChevronDownIcon} color="white" />}
                bg="#6979F8"
                width="100%"
                height="72px"
                _text={styles.shippingStatusText}
              />
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </ScrollView>
  );
};

const shipmentOptions = ['Courier shipment', 'Standard delivery'];

const getShipmentPrice = (shipmentOption: string) => {
  switch (shipmentOption) {
    case 'Courier shipment':
      return 2.0;
    case 'Standard delivery':
      return 1.5;
    default:
      return 0;
  }
};

const orderStatuses = [
  'Preparing',
  'shipped',
  'delivered',
  'returned',
  'canceled',
  'refunded',
];

const styles = StyleSheet.create({
  date: {
    fontSize: 15,
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 18,
    lineHeight: 24,
  },
  text: {
    fontSize: 15,
    lineHeight: 20,
  },
  shippingAddress: {
    fontSize: 16,
    lineHeight: 22,
  },
  shippingDesc: {
    fontSize: 13,
    lineHeight: 16,
  },
  shippingStatusText: {
    color: 'white',
    fontSize: 18,
    lineHeight: 24,
    fontFamily: 'SourceSansPro',
  },
});

export default Info;
