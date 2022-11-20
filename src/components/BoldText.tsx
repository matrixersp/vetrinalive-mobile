import React from 'react';
import {Text} from 'native-base';
import {InterfaceTextProps} from 'native-base/lib/typescript/components/primitives/Text/types';

export const B = (props: InterfaceTextProps) => (
  <Text fontFamily="SourceSansPro-SemiBold" {...props} />
);
