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

import CustomDivider from 'src/components/Divider';
import Layout from 'src/components/Layout';

import Logo from 'src/assets/icons/logo.svg';
import FacebookIcon from 'src/assets/icons/facebook.svg';
import GoogleIcon from 'src/assets/icons/google.svg';
import HeadphonesIcon from 'src/assets/icons/headphones.svg';

const SignIn = ({navigation}) => {
  return (
    <Layout>
      <View variant="full" style={styles.container}>
        <Center>
          <Logo />
        </Center>
        <VStack space={2} style={styles.headerContainer}>
          <Text variant="heading" style={styles.title}>
            Welcome
          </Text>
          <Text colorScheme="textSecondary" textAlign="center">
            Enter your email and password to access your account
          </Text>
        </VStack>
        <VStack mx={4} mt={6} space={4}>
          <Input placeholder="Email" keyboardType="email-address" />
          <Input placeholder="Password" secureTextEntry />
          <Button
            variant="contained"
            shadow={2}
            mt={2}
            onPress={() => navigation.navigate('Home')}>
            Login
          </Button>
          <CustomDivider text="OR" mt={2} mx={3} />
          <VStack mt={2} space={3}>
            <Button variant="outlined" leftIcon={<FacebookIcon />}>
              Sign in with Facebook
            </Button>
            <Button variant="outlined" leftIcon={<GoogleIcon />}>
              Sign in with Google
            </Button>
          </VStack>
        </VStack>
        <Center mt={6}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ForgotPassword');
            }}>
            <Text>Did you forget your password?</Text>
          </TouchableOpacity>
        </Center>
        <Center mt="6">
          <HStack>
            <Text>Do not have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              <Text ml={1} colorScheme="primary">
                Register now
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
    marginHorizontal: 48,
    marginTop: 32,
  },
  title: {
    fontFamily: 'NotoSans',
    fontWeight: '500',
  },
});

export default SignIn;
