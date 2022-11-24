import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {View, Center, HStack, Button, VStack, Icon, Text} from 'native-base';
import {Field, Formik, FormikHelpers} from 'formik';
import * as Yup from 'yup';

import CustomDivider from 'components/Divider';
import Layout from 'components/Layout';

import Logo from 'assets/icons/logo.svg';
import FacebookIcon from 'assets/icons/facebook.svg';
import GoogleIcon from 'assets/icons/google.svg';
import HeadphonesIcon from 'assets/icons/headphones.svg';
import {CustomInput} from 'components/fields';
import axios from 'axios';
import {useAuth} from 'contexts/AuthContext';

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
});

type FormValues = {
  fullName: string;
  email: string;
  password: string;
};

const SignUp = ({navigation}) => {
  const {signUp} = useAuth();
  const [error, setError] = React.useState('');

  const handleSignUp = (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    signUp(values)
      .then(_ => {
        actions.resetForm();
        setError('');
        navigation.navigate('SignIn');
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
            Create your e-commerce
          </Text>
          <Text colorScheme="textSecondary" textAlign="center">
            Prova Vetrina Live gratuitamente per 7 giorni e apri il tuo negozio
            online in pochi minuti. Nessuna carta di credito richiesta.
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
                name="fullName"
                placeholder="Name and Surname"
                component={CustomInput}
              />
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
          )}
        </Formik>
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
  error: {
    marginTop: 16,
    marginHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 5,
  },
});

export default SignUp;
