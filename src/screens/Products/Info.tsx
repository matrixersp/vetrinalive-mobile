import {Checkbox, HStack, Icon, Input, Radio, Text, VStack} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {actions, RichEditor, RichToolbar} from 'react-native-pell-rich-editor';

import CustomSelect from 'screens/Products/Select';

import CurrencyIcon from 'assets/icons/currency.svg';
import WeightIcon from 'assets/icons/weight.svg';
import AvailabilityIcon from 'assets/icons/availability.svg';
import InfoIcon from 'assets/icons/info.svg';

const Info = () => {
  const richText = React.useRef<RichEditor>(null);

  return (
    <ScrollView>
      <VStack space={6} py={6} px={4}>
        <VStack
          bg="white"
          shadow={3}
          borderRadius={10}
          p={6}
          space={6}
          width="full">
          <Text fontSize={20} fontWeight={600}>
            General Information
          </Text>

          <VStack space={4}>
            <Text colorScheme="textSecondary" style={styles.inputLabel}>
              Product name
            </Text>
            <Input size="sm" placeholder="Product name" />
          </VStack>
          <VStack space={4}>
            <Text colorScheme="textSecondary" style={styles.inputLabel}>
              Description
            </Text>
            <VStack borderWidth={1} borderColor="gray.300" borderRadius={6}>
              <RichToolbar
                editor={richText}
                selectedIconTint="#103B66"
                iconTint="#8592A0"
                actions={[
                  actions.setBold,
                  actions.setItalic,
                  actions.setStrikethrough,
                  actions.setUnderline,
                  actions.insertBulletsList,
                  actions.insertLink,
                ]}
              />
              <RichEditor
                ref={richText}
                placeholder="Description (0/5000)"
                androidLayerType="software"
                androidHardwareAccelerationDisabled={true}
                initialHeight={250}
                style={styles.richEditor}
              />
            </VStack>
          </VStack>
        </VStack>
        <VStack
          bg="white"
          shadow={3}
          borderRadius={10}
          p={6}
          space={6}
          width="full">
          <Text fontSize={20} fontWeight={600}>
            Price
          </Text>

          <VStack space={4}>
            <Text colorScheme="textSecondary" style={styles.inputLabel}>
              Original price
            </Text>
            <Input
              size="sm"
              value="0"
              placeholder="Lorem ipsum"
              InputLeftElement={
                <Icon as={CurrencyIcon} ml={3} color="textPrimary" />
              }
            />
          </VStack>
          <VStack space={4}>
            <Text colorScheme="textSecondary" style={styles.inputLabel}>
              Discounted price
            </Text>
            <Input
              variant="filled"
              size="sm"
              placeholder="Lorem ipsum"
              isDisabled
              InputLeftElement={
                <Icon as={CurrencyIcon} ml={3} color="#B6BEC6" />
              }
            />
            <Checkbox value="discounted-price" colorScheme="blue" my={2}>
              <Text fontSize={16}>Activate discounted price</Text>
            </Checkbox>
          </VStack>
        </VStack>
        <VStack
          bg="white"
          shadow={3}
          borderRadius={10}
          p={6}
          space={6}
          width="full">
          <Text fontSize={20} fontWeight={600}>
            Details
          </Text>

          <VStack space={4}>
            <Text colorScheme="textSecondary" style={styles.inputLabel}>
              Category
            </Text>
            <CustomSelect options={productCategories} />
          </VStack>
          <VStack space={4}>
            <HStack justifyContent="space-between">
              <Text colorScheme="textSecondary" style={styles.inputLabel}>
                Product code / SKU
              </Text>
              <InfoIcon />
            </HStack>
            <Input
              size="sm"
              placeholder="Leave empty to automatically generate"
            />
          </VStack>
          <VStack space={4}>
            <Text colorScheme="textSecondary" style={styles.inputLabel}>
              Weight
            </Text>
            <Input
              size="sm"
              placeholder="Lorem ipsum"
              value="0 g"
              InputLeftElement={<Icon as={WeightIcon} ml={3} />}
            />
          </VStack>
          <VStack space={4}>
            <Text colorScheme="textSecondary" style={styles.inputLabel}>
              Availability
            </Text>
            <Input
              size="sm"
              placeholder="Lorem ipsum"
              value="0"
              InputLeftElement={<Icon as={AvailabilityIcon} ml={3} />}
            />
          </VStack>
          <Checkbox value="discounted-price" colorScheme="blue" my={2}>
            This is a feature product
          </Checkbox>
        </VStack>
        <VStack
          bg="white"
          shadow={3}
          borderRadius={10}
          p={6}
          space={6}
          width="full">
          <Text fontSize={20} fontWeight={600}>
            Product type
          </Text>
          <Radio.Group
            name="exampleGroup"
            accessibilityLabel="select an option"
            defaultValue="1">
            <HStack space={3}>
              <Radio value="1" colorScheme="blue" my={1}>
                Physical
              </Radio>
              <Radio value="2" colorScheme="blue" my={1}>
                Digital
              </Radio>
            </HStack>
          </Radio.Group>
        </VStack>
      </VStack>
    </ScrollView>
  );
};

const productCategories = [
  {label: 'Home and Garden', value: 'home'},
  {label: 'Beauty and Health', value: 'beauty'},
  {label: 'Electronics', value: 'electronics'},
  {label: 'Fashion', value: 'fashion'},
  {label: 'Sports', value: 'sports'},
];

const styles = StyleSheet.create({
  inputLabel: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '600',
  },
  richEditor: {
    padding: 6,
  },
});

export default Info;
