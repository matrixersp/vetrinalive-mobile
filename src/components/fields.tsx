import {FormControl, IInputProps, Input, Text} from 'native-base';
import React from 'react';

export const CustomInput = ({
  field,
  form,
  ...props
}: IInputProps & {field: any; form: any}) => {
  const {name, value} = field;
  const {errors, touched} = form;
  const hasError = errors[name] && touched[name];

  return (
    <FormControl isInvalid={hasError}>
      <Input
        {...props}
        onChangeText={form.handleChange(name)}
        onBlur={form.handleBlur(name)}
        value={value}
        {...(hasError && {borderColor: 'error'})}
      />
      <FormControl.ErrorMessage>
        <Text color="error">{errors[name]}</Text>
      </FormControl.ErrorMessage>
    </FormControl>
  );
};
