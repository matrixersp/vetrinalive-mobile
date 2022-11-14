import {Divider, HStack} from 'native-base';
import {InterfaceHStackProps} from 'native-base/lib/typescript/components/primitives/Stack/HStack';
import React from 'react';
import {Text, StyleSheet} from 'react-native';

type Props = {
  text?: string;
} & InterfaceHStackProps;

const Line = () => <Divider flex={1} bg="divider" />;

const CustomDivider = ({text, ...props}: Props) => {
  return text ? (
    <HStack style={styles.container} {...props}>
      <Line />
      <Text style={styles.text}>{text}</Text>
      <Line />
    </HStack>
  ) : (
    <HStack {...props}>
      <Line />
    </HStack>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 66,
    textAlign: 'center',
    fontFamily: 'SourceSansPro',
  },
});

export default CustomDivider;
