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
} from 'native-base';
import Layout from 'src/components/Layout';
import Card from 'src/components/Card';
import Select from 'src/components/Select';
import NewsCard from 'src/screens/Dashboard/NewsCard';

import ExternalLinkIcon from 'src/assets/icons/external-link.svg';
import ToolIcon from 'src/assets/icons/tool.svg';
import EyeIcon from 'src/assets/icons/eye.svg';
import ListIcon from 'src/assets/icons/list.svg';
import FileTextIcon from 'src/assets/icons/file-text.svg';
import DomainIcon from 'src/assets/icons/domain.svg';

const Dashboard = ({navigation}) => {
  return (
    <Layout>
      <View variant="full" pb={16} colorScheme="background">
        <VStack bg={gradient} py={8} px={4} h="240px">
          <Text colorScheme="white" style={styles.welcome}>
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
              <Text
                colorScheme="error"
                ml={6}
                fontSize={34}
                lineHeight={39}
                fontWeight={600}>
                0%
              </Text>
              <Text colorScheme="error" ml={6} fontWeight={600}>
                completato
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
              <Text ml={6} fontSize={34} lineHeight={39} fontWeight={600}>
                0
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
            <VStack>
              <HStack justifyContent="space-between">
                <Text fontSize={20} colorScheme="textSecondary">
                  Orders received:
                </Text>
                <Text fontSize={20} fontWeight={600}>
                  0
                </Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Text fontSize={20} colorScheme="textSecondary">
                  Earnings:
                </Text>
                <Text fontSize={20} fontWeight={600}>
                  € 0,00
                </Text>
              </HStack>
            </VStack>
          </Card>
          <Card icon={FileTextIcon} title="Latest News">
            {[...Array(3).keys()].map(() => (
              <NewsCard />
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
            icon={FileTextIcon}
            title="Extensions Marketplace"
            navigation={navigation}
            screen="Extensions"
            linkText="Discover all extensions">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <VStack space={2}>
                <Center
                  bg="#FFA26B"
                  borderRadius={8}
                  shadow={2}
                  mr={4}
                  p={4}
                  h={160}
                  w={160}>
                  <Icon as={DomainIcon} />
                </Center>
                <Text>Custom Domain</Text>
              </VStack>
              <VStack space={2}>
                <Center
                  bg="#00C48C"
                  borderRadius={8}
                  shadow={2}
                  mr={4}
                  p={4}
                  h={160}
                  w={160}>
                  <Text
                    colorScheme="white"
                    fontSize={36}
                    lineHeight={42}
                    fontWeight={500}>
                    +50
                  </Text>
                  <Text colorScheme="white" fontSize={22} fontWeight={500}>
                    Prodotti
                  </Text>
                </Center>
                <Text>+50 Products</Text>
              </VStack>
            </ScrollView>
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
    fontFamily: 'SourceSansPro-SemiBold',
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
