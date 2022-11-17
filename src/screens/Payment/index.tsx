import {Text, View, VStack} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import Layout from 'src/components/Layout';
import Card from 'src/screens/Payment/Card';

import CashIcon from 'src/assets/icons/cash.svg';
import WireTransferIcon from 'src/assets/icons/wire-transfer.svg';
import StripeIcon from 'src/assets/icons/stripe.svg';
import PaypalIcon from 'src/assets/icons/paypal.svg';
import RazorpayIcon from 'src/assets/icons/razorpay.svg';
import AliPayIcon from 'src/assets/icons/alipay.svg';
import PaystackIcon from 'src/assets/icons/paystack.svg';

const Payment = () => {
  return (
    <Layout>
      <View variant="full" bg="background">
        <VStack space={4} pt={12} pb="80px" px={4}>
          <Text variant="heading" style={styles.title} mb={6}>
            Payment methods
          </Text>
          {cards.map(card => (
            <Card key={card.name} {...card} />
          ))}
        </VStack>
      </View>
    </Layout>
  );
};

const cards = [
  {
    name: 'Cash',
    icon: CashIcon,
    status: 'enabled',
  },
  {
    name: 'Wire Transfer',
    icon: WireTransferIcon,
    status: 'disabled',
  },
  {
    name: 'Stripe',
    icon: StripeIcon,
    status: 'disabled',
  },
  {
    name: 'Paypall',
    icon: PaypalIcon,
    status: 'disabled',
  },
  {
    name: 'Razoplay',
    icon: RazorpayIcon,
    status: 'disabled',
  },
  {
    name: 'AliPay',
    icon: AliPayIcon,
    status: 'coming soon',
  },
  {
    name: 'Paystack',
    icon: PaystackIcon,
    status: 'coming soon',
  },
];

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    lineHeight: 27,
    fontFamily: 'SourceSansPro-SemiBold',
  },
});

export default Payment;
