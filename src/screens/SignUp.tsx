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

const SignUp = ({navigation}) => {
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
            Prova Vetrina Live gratuitamente per 7 giorni e apri il tuo negozio
            online in pochi minuti. Nessuna carta di credito richiesta.
          </Text>
        </VStack>
        <VStack mx={4} mt={6} space={4}>
          <Input placeholder="Name and Surname" />
          <Input placeholder="Email" keyboardType="email-address" />
          <Input placeholder="Password" secureTextEntry />
          <Button variant="contained" shadow={2} mt={2}>
            Create your shop
          </Button>
          <CustomDivider text="OR" mt={2} mx={3} />
          <VStack mt={2} space={3}>
            <Button variant="outlined" leftIcon={<FacebookIcon />}>
              Sign up with Facebook
            </Button>
            <Button variant="outlined" leftIcon={<GoogleIcon />}>
              Sign up with Google
            </Button>
          </VStack>
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
    fontFamily: 'NotoSans',
    fontWeight: '500',
  },
});

export default SignUp;
