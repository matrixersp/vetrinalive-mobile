import {B} from 'components/BoldText';
import {Box, Button, HStack, Text, VStack} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';

type Props = {
  type: string;
  bonus?: string;
  price?: number;
  advantage: string;
};

const Card = ({type, bonus, price, advantage}: Props) => {
  const formatPrice = (value: number) => {
    return value.toFixed(2).replace(/\./, ',');
  };

  return (
    <Box style={styles.container} shadow={1}>
      <HStack justifyContent="space-between">
        <VStack justifyContent="space-between">
          <Text style={styles.plan}>{type}</Text>
          <B style={styles.free} color="secondary">
            {bonus}
          </B>
          <HStack>
            <B style={styles.planPrice}>
              €{' '}
              <Text color="primary" style={styles.price}>
                {type === 'Free' ? '0,00' : formatPrice(price as number)}
              </Text>
              /year
            </B>
          </HStack>
        </VStack>
        <VStack space={6}>
          <Text style={styles.advantage}>{advantage}</Text>
          <Button variant="contained">Change plan</Button>
        </VStack>
      </HStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  plan: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 20,
    lineHeight: 25,
  },
  advantage: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 15,
    lineHeight: 20,
  },
  planPrice: {
    fontSize: 17,
    lineHeight: 22,
  },
  free: {
    fontSize: 12,
    lineHeight: 16,
  },
  price: {
    fontSize: 24,
    lineHeight: 32,
  },
});

export default Card;
