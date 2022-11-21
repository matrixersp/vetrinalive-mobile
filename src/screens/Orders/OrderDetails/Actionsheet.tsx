import React from 'react';
import {Actionsheet, Box, Button, Center, Text} from 'native-base';

type Props = {
  options: string[];
  selectedOption?: string;
  onItemPress: (option: string) => void;
  title: string;
  startIcon?: JSX.Element | JSX.Element[] | undefined;
  endIcon?: JSX.Element | JSX.Element[] | undefined;
  bg?: string;
  width?: string;
  height?: string;
  _text: Record<string, any>;
};

const CustomActionsheet = ({
  options,
  selectedOption,
  onItemPress,
  title,
  ...props
}: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Center>
      <Button onPress={handleOpen} {...props}>
        {selectedOption}
      </Button>
      <Actionsheet isOpen={isOpen} onClose={handleClose}>
        <Actionsheet.Content>
          {title && (
            <Box h={50} px={4} justifyContent="center">
              <Text fontSize="16" color="textSecondary">
                {title}
              </Text>
            </Box>
          )}
          {options.map(value => (
            <Actionsheet.Item
              key={value}
              onPress={() => {
                onItemPress(value);
                handleClose();
              }}
              _text={{
                color: selectedOption === value ? 'white' : 'textPrimary',
              }}
              bg={selectedOption === value ? 'primary' : 'transparent'}>
              {value}
            </Actionsheet.Item>
          ))}
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
};

export default CustomActionsheet;
