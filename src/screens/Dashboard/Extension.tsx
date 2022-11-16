import {Center, Text, VStack} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';

type Props = {
  title: string;
  bg: string;
  children: React.ReactNode;
};

const Extension = ({title, bg, children}: Props) => {
  return (
    <VStack space={2}>
      <Center bg={bg} shadow={2} style={styles.container}>
        {children}
      </Center>
      <Text>{title}</Text>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 160,
    width: 160,
    padding: 16,
    borderRadius: 10,
  },
});

export default Extension;
