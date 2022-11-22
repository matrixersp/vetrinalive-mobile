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
            <Card type="Free" advantage="Max 150 prodotti" />
            <Card
              type="Vetrina"
              advantage="Max 150 prodotti"
              price={109}
              bonus="2 mesi in regalo"
            />
            <Card
              type="Negozio"
              advantage="Max 150 prodotti"
              price={209}
              bonus="2 mesi in regalo"
            />
            <Card
              type="Vetrina"
              advantage="Max 150 prodotti"
              price={399}
              bonus="2 mesi in regalo"
            />
          </VStack>
        </VStack>
      </View>
    </Layout>
  );
};

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
