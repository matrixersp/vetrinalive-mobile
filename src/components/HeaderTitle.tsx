import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'native-base';
import MenuIcon from 'src/assets/icons/menu.svg';

export const HeaderTitle = ({title}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => alert('Pressed')}>
        <MenuIcon marginRight={16} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    lineHeight: 25,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'SourceSansPro-SemiBold',
  },
});
