import React from 'react';
import {HStack, VStack, Icon, Text, Button} from 'native-base';
import {StyleSheet} from 'react-native';

type Props = {
  name: string;
  icon: React.ReactNode;
  status: 'enabled' | 'disabled' | 'coming soon';
};

const Card = ({name, icon, status}: Props) => {
  const backgroundColor =
    status === 'enabled'
      ? '#E0FFF6'
      : status === 'disabled'
      ? '#E7E9EC'
      : '#F0F2FE';
  const color =
    status === 'enabled'
      ? '#00C48C'
      : status === 'disabled'
      ? '#7D8A99'
      : '#6979F8';

  return (
    <HStack shadow={2} style={styles.container}>
      <VStack justifyContent="space-between">
        <Icon as={icon} />
        <Text style={styles.title}>{name}</Text>
      </VStack>
      <Button
        size="sm"
        variant="contained"
        p={0}
        height={8}
        style={{backgroundColor}}>
        <Text style={[styles.status, {color}]}>
          {status === 'enabled'
            ? 'Disable'
            : status === 'disabled'
            ? 'Enable'
            : 'Coming soon'}
        </Text>
      </Button>
    </HStack>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    height: 134,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 17,
    lineHeight: 22,
    fontFamily: 'SourceSansPro-SemiBold',
  },
  status: {
    fontSize: 14,
    fontHeight: 16,
    paddingHorizontal: 18,
    height: 32,
    textAlignVertical: 'center',
    borderRadius: 4,
    fontWeight: '400',
    color: '#7D8A99',
  },
});

export default Card;
