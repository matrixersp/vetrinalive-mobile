import React from 'react';
import {StyleSheet} from 'react-native';
import {HStack, Text, View, VStack, Switch, Button} from 'native-base';
import Layout from 'components/Layout';
import {B} from 'components/BoldText';
import Card from 'screens/Subscription/Card';

const Subscription = () => {
  const [switchOn, setSwitchOn] = React.useState(true);

  return (
    <Layout>
      <View variant="full" p={4} colorScheme="background">
        <VStack alignItems="center">
          <Text variant="heading" style={styles.title}>
            Choose your plan
          </Text>
          <HStack w="full" alignItems="center" justifyContent="center" mt={6}>
            <HStack alignItems="center">
              <B>Monthly</B>
              <Switch
                defaultIsChecked
                isChecked={switchOn}
                size="lg"
                mx={6}
                onTrackColor="primary"
                onToggle={() => setSwitchOn(!switchOn)}
              />
              <B>Yearly</B>
            </HStack>
            <Button
              variant="contained"
              bg="secondary"
              size="xs"
              style={styles.promo}>
              Promo
            </Button>
          </HStack>
          <VStack mt={16} space={4} w="full">
            {switchOn
              ? yearlySubscriptions.map((subscription, index) => (
                  <Card
                    key={index}
                    type={subscription.type}
                    price={subscription.price}
                    advantage={subscription.advantage}
                    bonus={subscription.bonus}
                  />
                ))
              : monthlySubscriptions.map((subscription, index) => (
                  <Card
                    key={index}
                    type={subscription.type}
                    price={subscription.price}
                    advantage={subscription.advantage}
                    bonus={subscription.bonus}
                  />
                ))}
          </VStack>
        </VStack>
      </View>
    </Layout>
  );
};

const yearlySubscriptions = [
  {
    type: 'Free',
    advantage: 'Max 150 prodotti',
  },
  {
    type: 'Vetrina',
    advantage: 'Max 150 prodotti',
    price: 109,
    bonus: '2 mesi in regalo',
  },
  {
    type: 'Negozio',
    advantage: 'Max 150 prodotti',
    price: 209,
    bonus: '2 mesi in regalo',
  },
  {
    type: 'Vetrina',
    advantage: 'Max 150 prodotti',
    price: 399,
    bonus: '2 mesi in regalo',
  },
];

const monthlySubscriptions = [
  {
    type: 'Free',
    advantage: 'Max 10 prodotti',
  },
  {
    type: 'Vetrina',
    advantage: 'Max 10 prodotti',
    price: 19,
    bonus: '2 mesi in regalo',
  },
  {
    type: 'Negozio',
    advantage: 'Max 10 prodotti',
    price: 29,
    bonus: '2 mesi in regalo',
  },
  {
    type: 'Vetrina',
    advantage: 'Max 10 prodotti',
    price: 39,
    bonus: '2 mesi in regalo',
  },
];

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    lineHeight: 27,
  },
  promo: {
    position: 'absolute',
    right: 8,
  },
});

export default Subscription;
