import {Text, View, Pressable, Divider, VStack} from 'native-base';
import React from 'react';
import {useWindowDimensions, StyleSheet} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import InfoRoute from 'screens/Orders/OrderDetails/Info';

const Products = () => <View />;
const Shipping = () => <View />;

const renderScene = SceneMap({
  info: InfoRoute,
  products: Products,
  shipping: Shipping,
});

export default function Tabs() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'info', title: 'Info order'},
    {key: 'products', title: 'Products'},
    {key: 'shipping', title: 'Shipping'},
  ]);

  const renderTabBar = ({navigationState}: any) => {
    return (
      <VStack>
        <View style={styles.tabBar}>
          {navigationState.routes.map((route, i) => {
            return (
              <Pressable
                key={route.key}
                style={styles.tabItem}
                borderBottomColor={index === i ? 'primary' : 'transparent'}
                onPress={() => setIndex(i)}>
                <Text
                  style={styles.tabItemText}
                  color={index === i ? 'primary' : 'textSecondary'}>
                  {route.title}
                </Text>
              </Pressable>
            );
          })}
        </View>
        <Divider my={1} />
      </VStack>
    );
  };

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabBar}
      sceneContainerStyle={styles.sceneContainer}
    />
  );
}

const styles = StyleSheet.create({
  sceneContainer: {
    flexGrow: 1,
  },
  tabBar: {
    flexDirection: 'row',
  },
  tabItem: {
    alignItems: 'center',
    padding: 10,
    minWidth: 120,
    borderBottomWidth: 3,
  },
  tabItemText: {
    lineHeight: 16,
    fontSize: 12,
    fontFamily: 'SourceSansPro-SemiBold',
  },
});
