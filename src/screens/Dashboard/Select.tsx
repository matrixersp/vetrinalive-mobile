import React from 'react';
import {StyleSheet} from 'react-native';
import {Menu, HStack, ChevronDownIcon, Pressable, Text} from 'native-base';

type Props = {
  handleTimeFrameChange: (timeFrame: string) => void;
};

const Select = ({handleTimeFrameChange}: Props) => {
  const [timeFrame, setTimeFrame] = React.useState(timeFrameOptions[0].label);
  return (
    <Menu
      w="190"
      trigger={triggerProps => {
        return (
          <Pressable accessibilityLabel="More options menu" {...triggerProps}>
            <HStack alignItems="center">
              <Text style={styles.selectedValue} colorScheme="textSecondary">
                {timeFrame}
              </Text>
              <ChevronDownIcon />
            </HStack>
          </Pressable>
        );
      }}>
      {timeFrameOptions.map(({label, value}) => (
        <Menu.Item
          key={label}
          onPress={() => {
            setTimeFrame(label);
            handleTimeFrameChange(value);
          }}>
          {label}
        </Menu.Item>
      ))}
    </Menu>
  );
};

const timeFrameOptions = [
  {label: 'This month', value: 'month'},
  {label: 'This week', value: 'week'},
  {label: 'This day', value: 'day'},
];

const styles = StyleSheet.create({
  selectedValue: {
    fontSize: 13,
    lineHeight: 16,
    marginRight: 8,
  },
});

export default Select;
