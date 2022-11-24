import React from 'react';
import {StyleSheet} from 'react-native';
import {Menu, HStack, Pressable, Text} from 'native-base';

type Option = number | string;

type Props = {
  options: Option[];
  icon: React.ReactNode;
  selectedOption?: Option;
  onItemPress: (option: number | string) => void;
  _menu?: Record<string, any>;
  _option?: Record<string, any>;
  _popover?: Record<string, any>;
};

const CustomMenu = ({
  options,
  icon,
  selectedOption,
  onItemPress,
  _menu,
  _option,
  _popover,
}: Props) => {
  return (
    <Menu
      w="190"
      style={_popover}
      trigger={triggerProps => {
        return (
          <Pressable
            accessibilityLabel="More options menu"
            {...triggerProps}
            style={_menu}>
            <HStack alignItems="center" justifyContent="center">
              {selectedOption && (
                <Text style={[styles.selectedOption, _option]}>
                  {selectedOption}
                </Text>
              )}
              {icon}
            </HStack>
          </Pressable>
        );
      }}>
      {options.map(value => (
        <Menu.Item key={value} onPress={() => onItemPress(value)}>
          <Text>{value}</Text>
        </Menu.Item>
      ))}
    </Menu>
  );
};

const styles = StyleSheet.create({
  selectedOption: {
    fontSize: 10,
    lineHeight: 18,
    marginRight: 10,
    fontWeight: '600',
  },
});

export default CustomMenu;
