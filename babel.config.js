module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin', // have to be last in the list
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          components: 'src/components',
          screens: 'src/screens',
          navigation: 'src/navigation',
          styles: 'src/styles',
          assets: 'src/assets',
        },
      },
    ],
  ],
};
