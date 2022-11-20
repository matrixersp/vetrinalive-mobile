import React from 'react';
import {Text, VStack} from 'native-base';
import {StyleSheet} from 'react-native';

type Props = {
  title: string;
  children: React.ReactNode;
};

const Card = ({title, children}: Props) => {
  return (
    <VStack shadow={3} space={6} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 24,
    backgroundColor: 'white',
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontFamily: 'SourceSansPro-SemiBold',
    lineHeight: 25,
  },
});

export default Card;
