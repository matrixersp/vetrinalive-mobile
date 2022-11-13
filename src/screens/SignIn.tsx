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
import FacebookIcon from 'src/assets/icons/facebook.svg';
import GoogleIcon from 'src/assets/icons/google.svg';
import HeadphonesIcon from 'src/assets/icons/headphones.svg';
import {colors, globalStyles} from 'src/styles/global';

const SignIn = ({navigation}) => {
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
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.description}>
              Enter your email and password to access your account
            </Text>
          </View>
          <View style={styles.fieldsContainer}>
            <TextInput style={globalStyles.input} placeholder="Email" />
            <TextInput
              style={globalStyles.input}
              placeholder="Password"
              secureTextEntry
            />

            <TouchableOpacity
              style={styles.buttonCta}
              onPress={() => {
                navigation.navigate('Dashboard');
              }}>
              <Text style={styles.buttonCtaText}>Login</Text>
            </TouchableOpacity>

            <View style={globalStyles.dividerContainer}>
              <View style={globalStyles.divider} />
              <View>
                <Text style={globalStyles.dividerText}>OR</Text>
              </View>
              <View style={globalStyles.divider} />
            </View>

            <TouchableOpacity style={styles.buttonWithIcon}>
              <FacebookIcon />
              <Text style={styles.buttonWithIconText}>
                Sign up with Facebook
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonWithIcon}>
              <GoogleIcon />
              <Text style={styles.buttonWithIconText}>Sign up with Google</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ForgotPassword');
            }}>
            <Text style={styles.forgotPasswordLink}>
              Did you forget your password?
            </Text>
          </TouchableOpacity>
          <View style={styles.signInContainer}>
            <Text style={styles.signUpText}>Do not have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              <Text style={styles.signUpLink}>Register now</Text>
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
  buttonWithIcon: {
    ...globalStyles.button,
    borderWidth: 1,
    borderColor: colors.primary,
    marginTop: 16,
  },
  buttonWithIconText: {
    ...globalStyles.buttonText,
    marginLeft: 20,
  },
  forgotPasswordLink: {
    textAlign: 'center',
    color: '#103B66',
    marginTop: 24,
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  signUpText: {
    color: colors.textPrimary,
  },
  signUpLink: {
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

export default SignIn;
