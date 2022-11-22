import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  View,
  Center,
  HStack,
  Button,
  VStack,
  Icon,
  Input,
  Text,
} from 'native-base';

import Layout from 'components/Layout';

import Logo from 'assets/icons/logo.svg';
import HeadphonesIcon from 'assets/icons/headphones.svg';

const ForgotPassword = ({navigation}) => {
  return (
    <Layout>
      <View variant="full" style={styles.container}>
        <Center>
          <Logo />
        </Center>
        <VStack space={2} style={styles.headerContainer}>
          <Text variant="heading" style={styles.title}>
            Create your e-commerce
          </Text>
          <Text colorScheme="textSecondary" textAlign="center">
            Enter your email and you will receive an email to recover your
            password
          </Text>
        </VStack>
        <VStack mx={4} mt={6} space={4}>
          <Input placeholder="Email" keyboardType="email-address" />
          <Button variant="contained" shadow={2} mt={2} size="lg">
            Login
          </Button>
        </VStack>
        <Center mt="6">
          <HStack>
            <Text>Do you have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignIn');
              }}>
              <Text ml={1} colorScheme="primary">
                Sign in now
              </Text>
            </TouchableOpacity>
          </HStack>
        </Center>
        <HStack justifyContent="center" mt="8">
          <Button
            variant="outlined"
            colorScheme="secondary"
            rounded="full"
            px={6}
            size="lg"
            shadow={2}
            _icon={{marginRight: 1}}
            leftIcon={<Icon as={HeadphonesIcon} size="1" />}>
            Support
          </Button>
        </HStack>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 62,
    backgroundColor: 'white',
  },
  headerContainer: {
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 32,
  },
  title: {
    fontFamily: 'NotoSans-Medium',
  },
});

export default ForgotPassword;
