import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {VStack, HStack, Text, Icon} from 'native-base';

import ArrowRightIcon from 'src/assets/icons/arrow-right.svg';

type Props = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  navigation?: any;
  screen?: string;
  linkText?: string;
  style?: Record<string, any>;
  timeFrameSelector?: React.ReactNode;
};

const Card = ({
  icon,
  title,
  children,
  navigation,
  screen,
  linkText,
  style,
  timeFrameSelector,
}: Props) => {
  return (
    <VStack shadow={2} space={6} style={{...styles.card, ...style}}>
      <HStack alignItems="center" justifyContent="space-between">
        <HStack>
          <Icon as={icon} />
          <Text ml={6} fontSize={22} fontWeight={600}>
            {title}
          </Text>
        </HStack>
        {timeFrameSelector}
      </HStack>
      {children}
      {navigation && screen && (
        <TouchableOpacity onPress={() => navigation.navigate(screen)}>
          <HStack justifyContent="space-between">
            <Text colorScheme="primary" style={styles.linkText}>
              {linkText}
            </Text>
            <Icon as={ArrowRightIcon} ml={4} />
          </HStack>
        </TouchableOpacity>
      )}
    </VStack>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 10,
  },
  linkText: {
    textDecorationLine: 'underline',
  },
});

export default Card;
