import {extendTheme} from 'native-base';
import {Dimensions} from 'react-native';

const screenHeight = Dimensions.get('window').height;

export const customTheme = extendTheme({
  colors: {
    primary: '#21B8F9',
    secondary: '#00C48C',
    textPrimary: '#103B66',
    textSecondary: '#546679',
    divider: '#6C7C8C',
    white: '#FFFFFF',
    error: '#F33451',
    background: '#F8F9FB',
    disabled: '#B6BEC6',
  },
  components: {
    View: {
      variants: {
        full: ({colorScheme}: any) => ({
          backgroundColor: colorScheme,
          minHeight: screenHeight,
        }),
      },
    },
    Text: {
      baseStyle: {
        fontFamily: 'SourceSansPro',
      },
      defaultProps: {
        variant: 'body',
      },
      variants: {
        heading: ({colorScheme}: any) => ({
          fontSize: 28,
          lineHeight: 32,
          color: colorScheme || 'textPrimary',
          fontFamily: 'SourceSansPro-SemiBold',
        }),
        body: ({colorScheme}: any) => ({
          fontSize: 18,
          lineHeight: 24,
          color: colorScheme || 'textPrimary',
        }),
      },
    },
    Button: {
      baseStyle: {
        borderRadius: 5,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        _text: {
          fontFamily: 'SourceSansPro-SemiBold',
          margin: 0,
          padding: 0,
        },
        _icon: {
          marginRight: 14,
        },
      },
      defaultProps: {
        variant: 'text',
        size: 'md',
      },
      variants: {
        outlined: ({colorScheme}: any) => ({
          borderWidth: 1,
          borderColor: colorScheme,
          _text: {
            color: 'textPrimary',
          },
          _pressed: {
            opacity: 0.8,
            shadow: 0,
          },
        }),
        contained: ({colorScheme}: any) => ({
          backgroundColor: colorScheme,
          _text: {
            color: 'white',
          },
          _pressed: {
            opacity: 0.8,
            shadow: 0,
          },
          _disabled: {
            opacity: 1,
            backgroundColor: '#E7E9EC',
            _text: {
              color: 'disabled',
            },
          },
        }),
      },
      sizes: {
        lg: {
          height: 50,
        },
        md: {
          _text: {
            fontSize: 14,
          },
        },
        xs: {
          style: {
            height: 'auto',
          },
          _text: {
            fontSize: 12,
            lineHeight: 16,
          },
        },
      },
    },
    Input: {
      baseStyle: {
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'rgba(10, 37, 64, 0.32)',
        color: 'textPrimary',
        backgroundColor: 'white',
        paddingLeft: '20px',
        paddingRight: '20px',
        style: {
          fontSize: 14,
          fontFamily: 'NotoSans',
        },
        _focus: {
          borderColor: 'primary',
        },
        _disabled: {
          backgroundColor: '#E7E9EC',
          opacity: 1,
        },
      },
      defaultProps: {
        variant: 'outlined',
        size: 'md',
      },
      variants: {
        outlined: ({colorScheme}: any) => ({
          borderWidth: 1,
          _focus: {
            borderColor: colorScheme,
          },
        }),
      },
      sizes: {
        sm: {
          paddingLeft: '12px',
          paddingRight: '12px',
          height: 44,
          borderRadius: 6,
        },
      },
    },
    Divider: {
      baseStyle: {
        backgroundColor: '#E7E9EC',
      },
    },
    Headers: {
      baseStyle: {
        backgroundColor: '#21B8F9',
      },
    },
    Body: {
      baseStyle: {
        backgroundColor: '#21B8F9',
      },
    },
  },
  config: {
    initialColorMode: 'light',
  },
});

type CustomThemeType = typeof customTheme;

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
