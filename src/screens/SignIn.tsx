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

import CustomDivider from 'components/Divider';
import Layout from 'components/Layout';

import Logo from 'assets/icons/logo.svg';
import FacebookIcon from 'assets/icons/facebook.svg';
import GoogleIcon from 'assets/icons/google.svg';
import HeadphonesIcon from 'assets/icons/headphones.svg';
import axios from 'axios';
import {CustomInput} from 'components/fields';
import {FormikHelpers, Formik, Field} from 'formik';
import * as Yup from 'yup';
import {useAuth} from 'contexts/AuthContext';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

type FormValues = {
  email: string;
  password: string;
};

const SignIn = ({navigation}) => {
  const {signIn} = useAuth();
  const [error, setError] = React.useState('');

  const handleSignUp = (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    signIn(values)
      .then(_ => {
        actions.resetForm();
        setError('');
        navigation.navigate('Home');
      })
      .catch(err => {
        actions.setSubmitting(false);
        if (axios.isAxiosError(err) && err.response) {
          setError(err.response.data.error);
        } else {
          setError((err as Error).message);
        }
      });
  };

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
        {error && (
          <Center flex={1} bg="red.100" style={styles.error}>
            <Text color="error">{error}</Text>
          </Center>
        )}
        <Formik
          initialValues={{fullName: '', email: '', password: ''}}
          onSubmit={handleSignUp}
          validationSchema={SignupSchema}>
          {({handleSubmit, isSubmitting}) => (
            <VStack mx={4} mt={6} space={4}>
              <Field
                name="email"
                placeholder="Email"
                component={CustomInput}
                keyboardType="email-address"
              />
              <Field
                name="password"
                placeholder="Password"
                component={CustomInput}
                secureTextEntry
              />
              <Button
                variant="contained"
                shadow={2}
                mt={2}
                size="lg"
                onPress={() => handleSubmit()}
                isDisabled={isSubmitting}>
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
          )}
        </Formik>
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
    marginHorizontal: 52,
    marginTop: 32,
  },
  title: {
    fontFamily: 'NotoSans-Medium',
  },
  error: {
    marginTop: 16,
    marginHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 5,
  },
});

export default SignIn;
