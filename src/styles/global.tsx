import {Dimensions, StyleSheet} from 'react-native';

const screenHeight = Dimensions.get('window').height;

export const colors = {
  primary: '#21B8F9',
  secondary: '#00C48C',
  textPrimary: '#103B66',
  textSecondary: '#546679',
  divider: '#6C7C8C',
  white: '#FFFFFF',
};

export const globalStyles = StyleSheet.create({
  container: {
    paddingVertical: 62,
    minHeight: screenHeight,
    // backgroundColor: '#fff',
  },
  heading: {
    fontSize: 28,
    // fontFamily: 'NotoSans-Medium',
    fontWeight: '500',
    color: colors.textPrimary,
    lineHeight: 32,
  },
  body: {
    color: colors.textPrimary,
    lineHeight: 24,
  },
  paragraph: {
    fontFamily: 'SourceSansPro',
    color: colors.textSecondary,
    fontSize: 18,
    lineHeight: 24,
  },
  input: {
    height: 50,
    marginTop: 16,
    borderWidth: 1,
    borderColor: 'rgba(10, 37, 64, 0.32)',
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  button: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontFamily: 'SourceSansPro-Bold',
    color: colors.textPrimary,
  },
  dividerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  divider: {
    flex: 1,
    borderBottomColor: colors.divider,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  dividerText: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 66,
    textAlign: 'center',
    color: colors.divider,
    fontFamily: 'SourceSansPro',
  },
});

// const colors = {
//   primary: '#21B8F9',
//   secondary: '#103B66',
//   success: '#00C48C',
//   danger: '#FF3B30',
//   warning: '#FF9500',
//   info: '#007AFF',
//   light: '#F4F5F8',
//   dark: '#000000',
//   white: '#FFFFFF',
//   black: '#000000',
//   transparent: 'transparent',
//   gray: '#9DA3B4',
//   grayLight: '#C5CCD6',
//   grayDark: '#7B8794',
//   textPrimary: '#103B66',
//   textSecondary: '#546679',
// };
