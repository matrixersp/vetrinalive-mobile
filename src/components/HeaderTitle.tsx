import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'native-base';

export const HeaderTitle = ({title}: {title: string}) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    lineHeight: 25,
    fontSize: 20,
    fontFamily: 'SourceSansPro-SemiBold',
  },
});
