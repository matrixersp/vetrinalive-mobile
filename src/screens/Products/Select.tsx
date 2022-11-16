import React from 'react';
import {StyleSheet} from 'react-native';
import {Menu, HStack, ChevronDownIcon, Pressable, Text} from 'native-base';

type Props = {
  options: number[];
};

const Select = ({options}: Props) => {
  const [option, setOption] = React.useState(options[0]);
  return (
    <Menu
      w="190"
      trigger={triggerProps => {
        return (
          <Pressable accessibilityLabel="More options menu" {...triggerProps}>
            <HStack alignItems="center">
              <Text style={styles.selectedValue} colorScheme="textSecondary">
                {option}
              </Text>
              <ChevronDownIcon />
            </HStack>
          </Pressable>
        );
      }}>
      {options.map(value => (
        <Menu.Item
          key={value}
          onPress={() => {
            setOption(value);
          }}>
          <Text>{value}</Text>
        </Menu.Item>
      ))}
    </Menu>
  );
};

const styles = StyleSheet.create({
  selectedValue: {
    fontSize: 10,
    lineHeight: 18,
    marginRight: 10,
    fontWeight: '600',
  },
});

export default Select;
