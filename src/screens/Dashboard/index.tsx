import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  Text,
  View,
  VStack,
  Icon,
  HStack,
  Center,
  ScrollView,
  Divider,
  Avatar,
  Button,
} from 'native-base';
import Layout from 'components/Layout';
import Select from 'screens/Dashboard/Select';
import Card from 'screens/Dashboard/Card';
import NewsCard from 'screens/Dashboard/NewsCard';
import Extension from 'screens/Dashboard/Extension';

import ExternalLinkIcon from 'assets/icons/external-link.svg';
import ToolIcon from 'assets/icons/tool.svg';
import EyeIcon from 'assets/icons/eye.svg';
import ListIcon from 'assets/icons/list.svg';
import FileTextIcon from 'assets/icons/file-text.svg';
import ExtensionsIcon from 'assets/icons/extensions.svg';
import DomainIcon from 'assets/icons/domain.svg';
import CapterraIcon from 'assets/icons/capterra.svg';
import TrustpilotIcon from 'assets/icons/trustpilot.svg';
import ArrowRightIcon from 'assets/icons/arrow-right.svg';
import HeadphonesIcon from 'assets/icons/headphones.svg';
import UsersIcon from 'assets/icons/users.svg';
import {B} from 'components/BoldText';

const Dashboard = ({navigation}) => {
  return (
    <Layout>
      <View variant="full" pb={16} colorScheme="background">
        <VStack bg={gradient} py={8} px={4} h="240px">
          <Text variant="heading" colorScheme="white" style={styles.welcome}>
            Welcome {'Mario'}!
          </Text>
          <TouchableOpacity>
            <HStack>
              <Text colorScheme="white">app.vetrinalive.com/mario-store</Text>
              <Icon as={ExternalLinkIcon} ml={4} color="white" />
            </HStack>
          </TouchableOpacity>
        </VStack>
        <VStack style={styles.cards} space={6}>
          <Card
            icon={ToolIcon}
            title="Configura la tua vetrina"
            navigation={navigation}
            screen="Setup"
            linkText="Completa la configurazione!">
            <Center>
              <Text colorScheme="error" fontSize={34} lineHeight={39}>
                <B>0%</B>
              </Text>
              <Text colorScheme="error">
                <B>completato</B>
              </Text>
            </Center>
            <Center>
              <Text style={styles.configDescription}>
                Completa tutti i step per ricevere maggiore visibilità e una
                vetrina accattivante
              </Text>
            </Center>
          </Card>

          <Card
            icon={EyeIcon}
            title="Visitors"
            navigation={navigation}
            screen="Visitors"
            linkText="Vuoi ricevere più visite? Contattaci!"
            timeFrameSelector={
              <Select
                handleTimeFrameChange={value => {
                  console.log('Visitors time frame changed', value);
                }}
              />
            }>
            <Center>
              <Text ml={6} fontSize={34} lineHeight={39}>
                <B>0</B>
              </Text>
            </Center>
          </Card>

          <Card
            icon={ListIcon}
            title="Orders"
            navigation={navigation}
            screen="Orders"
            linkText="10 free tips to increase your sales"
            timeFrameSelector={
              <Select
                handleTimeFrameChange={value => {
                  console.log('Orders time frame changed', value);
                }}
              />
            }>
            <VStack space={2}>
              <HStack justifyContent="space-between">
                <Text fontSize={20} colorScheme="textSecondary">
                  Orders received:
                </Text>
                <Text fontSize={20}>
                  <B>0</B>
                </Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Text fontSize={20} colorScheme="textSecondary">
                  Earnings:
                </Text>
                <Text fontSize={20}>
                  <B>€ 0,00</B>
                </Text>
              </HStack>
            </VStack>
          </Card>

          <Card icon={FileTextIcon} title="Latest News">
            {[...Array(3).keys()].map(item => (
              <NewsCard key={item} />
            ))}
            <TouchableOpacity>
              <HStack justifyContent="center">
                <Text colorScheme="primary" style={styles.linkText}>
                  Visita il nostro Blog
                </Text>
                <Icon as={ExternalLinkIcon} ml={4} color="primary" />
              </HStack>
            </TouchableOpacity>
          </Card>

          <Card
            icon={ExtensionsIcon}
            title="Extensions Marketplace"
            navigation={navigation}
            screen="Extensions"
            linkText="Discover all extensions">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <HStack space={4}>
                <Extension title="Custom Domain" bg="#FFA26B">
                  <Icon as={DomainIcon} />
                </Extension>
                <Extension title="+50 Products" bg="#00C48C">
                  <Text
                    colorScheme="white"
                    fontSize={36}
                    lineHeight={42}
                    fontFamily="NotoSans-Medium">
                    +50
                  </Text>
                  <Text
                    colorScheme="white"
                    fontSize={22}
                    fontFamily="NotoSans-Medium">
                    Prodotti
                  </Text>
                </Extension>
              </HStack>
            </ScrollView>
          </Card>

          <VStack bg="#103B66" borderRadius={10} p={6}>
            <VStack space={4}>
              <Icon as={CapterraIcon} />
              <Text colorScheme="white">
                Write a{' '}
                <Text color="secondary" fontFamily="SourceSansPro-Bold">
                  positive
                </Text>{' '}
                review on Capterra and receive the extension with{' '}
                <Text fontFamily="SourceSansPro-Bold">
                  50 additional products.
                </Text>
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Capterra')}>
                <HStack>
                  <Text colorScheme="secondary" style={styles.linkText}>
                    Write a review on Capterra
                  </Text>
                  <Icon as={ArrowRightIcon} ml={4} color="secondary" />
                </HStack>
              </TouchableOpacity>
            </VStack>
            <Divider thickness={2} my={6} />
            <VStack space={4}>
              <Icon as={TrustpilotIcon} />
              <Text colorScheme="white">
                Show us your love by leaving a{' '}
                <Text color="secondary" fontFamily="SourceSansPro-Bold">
                  positive
                </Text>{' '}
                review on trust pilot and receive the extension of{' '}
                <Text fontFamily="SourceSansPro-Bold">
                  50 additional products.
                </Text>
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Capterra')}>
                <HStack>
                  <Text colorScheme="secondary" style={styles.linkText}>
                    Write a review on Capterra
                  </Text>
                  <Icon as={ArrowRightIcon} ml={4} color="secondary" />
                </HStack>
              </TouchableOpacity>
            </VStack>
            <Text colorScheme="white" mt={6} fontSize={12}>
              * The two promotions are cumulative
            </Text>
          </VStack>

          <Card icon={HeadphonesIcon} title="Customer support">
            <VStack space={6}>
              <HStack space={4} alignItems="center">
                <Avatar
                  bg="gray.500"
                  alignSelf="center"
                  size="40px"
                  source={require('assets/images/support-agent.jpg')}
                />
                <Text fontSize={20}>Simone is here to help you</Text>
              </HStack>
              <Button variant="contained" alignSelf="center" px={4}>
                Contact us
              </Button>
            </VStack>
          </Card>
          <Card
            icon={UsersIcon}
            title="Invite a friend!"
            navigation={navigation}
            screen="invite"
            linkText="Start inviting friends!">
            <Text>
              <Text color="secondary" fontFamily="SourceSansPro-Bold">
                Receive 50 products
              </Text>{' '}
              by inviting a friend who subscribes to a plan. Your friend will
              receive a 30% discount coupon valid for any plan.
            </Text>
          </Card>
        </VStack>
      </View>
    </Layout>
  );
};

const gradient = {
  linearGradient: {
    colors: ['#21B8F9', 'rgba(33, 184, 249, 0)'],
    start: [0, 0],
    end: [0, 1.32],
  },
};

const styles = StyleSheet.create({
  welcome: {
    fontSize: 34,
    lineHeight: 39,
    marginBottom: 16,
  },
  cards: {
    marginTop: -84,
    marginHorizontal: 16,
  },
  configDescription: {
    fontSize: 20,
    lineHeight: 28,
    color: '#7D8A99',
    paddingHorizontal: 16,
    textAlign: 'center',
  },
  linkText: {
    textDecorationLine: 'underline',
  },
});

export default Dashboard;
