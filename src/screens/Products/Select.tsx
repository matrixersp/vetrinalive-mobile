import React from 'react';
import {Box, Select, CheckIcon, HStack} from 'native-base';

type Props = {
  options: Record<string, any>[];
};

const CustomSelect = ({options}: Props) => {
  const [option, setOption] = React.useState('');

  return (
    <Select
      selectedValue={option}
      minWidth="100%"
      accessibilityLabel="Select category"
      placeholder="Select category"
      _selectedItem={{
        bg: 'teal.600',
        endIcon: <CheckIcon size="5" />,
      }}
      mt={1}
      onValueChange={itemValue => setOption(itemValue)}>
      {options.map(({label, value}) => (
        <Select.Item key={value} label={label} value={value} />
      ))}
    </Select>
  );
};

export default CustomSelect;
