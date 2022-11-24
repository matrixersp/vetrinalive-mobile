module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          components: 'src/components',
          screens: 'src/screens',
          navigation: 'src/navigation',
          contexts: 'src/contexts',
          styles: 'src/styles',
          assets: 'src/assets',
          utils: 'src/utils',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
    'react-native-reanimated/plugin', // have to be last in the list
  ],
};
