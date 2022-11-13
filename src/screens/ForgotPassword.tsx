import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Logo from 'src/assets/icons/logo.svg';
import HeadphonesIcon from 'src/assets/icons/headphones.svg';
import {colors, globalStyles} from 'src/styles/global';

const ForgotPassword = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            ...globalStyles.container,
          }}>
          <View style={styles.logoContainer}>
            <Logo />
          </View>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.description}>
              Enter your email and you will receive an email to recover your
              password
            </Text>
          </View>
          <View style={styles.fieldsContainer}>
            <TextInput style={globalStyles.input} placeholder="Email" />

            <TouchableOpacity style={styles.buttonCta}>
              <Text style={styles.buttonCtaText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signInContainer}>
            <Text style={styles.signInText}>Do you have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignIn');
              }}>
              <Text style={styles.signInLink}>Sign in now</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.buttonSupport}>
            <HeadphonesIcon />
            <Text style={styles.buttonSupportText}>Support</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerContainer: {
    marginHorizontal: 62,
    marginTop: 32,
    marginBottom: 16,
  },
  fieldsContainer: {
    marginHorizontal: 44,
  },
  title: {
    ...globalStyles.heading,
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    textAlign: 'center',
    ...globalStyles.paragraph,
  },
  buttonCta: {
    ...globalStyles.button,
    marginTop: 16,
    backgroundColor: colors.primary,
  },
  buttonCtaText: {
    ...globalStyles.buttonText,
    color: colors.white,
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  signInText: {
    color: colors.textPrimary,
  },
  signInLink: {
    color: colors.primary,
    marginLeft: 4,
  },
  buttonSupport: {
    ...globalStyles.button,
    alignSelf: 'center',
    marginTop: 32,
    borderColor: colors.secondary,
    borderRadius: 50,
    borderWidth: 1,
  },
  buttonSupportText: {
    ...globalStyles.buttonText,
    marginLeft: 10,
  },
});

export default ForgotPassword;
