import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {HStack, VStack, Image, Text} from 'native-base';
import {B} from 'components/BoldText';

const NewsCard = () => {
  return (
    <HStack shadow={3} space={2} style={styles.container}>
      <Image
        source={require('assets/images/news-image-1.jpg')}
        alt="Alternate Text"
        width="90px"
        height="full"
      />
      <VStack space={2} px={3} py={5} flex={1}>
        <Text colorScheme="primary" style={styles.title}>
          E-commerce tips
        </Text>
        <Text fontSize={16} noOfLines={2}>
          <B>13 tips on How to Write a Business Plan with success</B>
        </Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>Stima lettura: 5 min</Text>
        </TouchableOpacity>
      </VStack>
    </HStack>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 12,
    lineHeight: 16,
  },
  linkText: {
    textDecorationLine: 'underline',
    color: '#7D8A99',
    fontSize: 12,
    lineHeight: 14,
  },
});

export default NewsCard;
