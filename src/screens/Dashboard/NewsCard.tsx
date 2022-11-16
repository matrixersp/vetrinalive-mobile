import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {HStack, VStack, Image, Text} from 'native-base';

const NewsCard = () => {
  return (
    <HStack shadow={3} space={2} style={styles.container}>
      <Image
        source={require('src/assets/images/news-image-1.jpg')}
        alt="Alternate Text"
        width="90px"
        height="full"
      />
      <VStack space={2} px={3} py={5} flex={1}>
        <Text colorScheme="primary" style={styles.title}>
          E-commerce tips
        </Text>
        <Text fontSize={16} fontWeight={600}>
          13 tips on How to Write a Business Plan with success
        </Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>Visita il nostro Blog</Text>
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
