import {Text, View, Pressable} from 'native-base';
import React from 'react';
import {useWindowDimensions, StyleSheet} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import InfoRoute from 'screens/Products/NewProduct/Info';

const VariantsRoute = () => <View />;

const renderScene = SceneMap({
  info: InfoRoute,
  variants: VariantsRoute,
});

export default function Tabs() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'info', title: 'Info'},
    {key: 'variants', title: 'Variants'},
  ]);

  const renderTabBar = ({navigationState}: any) => {
    return (
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
    marginHorizontal: 16,
  },
  tabItem: {
    alignItems: 'center',
    padding: 10,
    minWidth: 137,
    borderBottomWidth: 3,
  },
  tabItemText: {
    lineHeight: 16,
    fontSize: 12,
    fontWeight: '600',
  },
});
