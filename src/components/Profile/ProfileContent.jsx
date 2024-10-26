import * as React from 'react';
import {Dimensions, ScrollView, Text, View} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import PostsTab from './PostsTab'; // Ensure this is correctly imported

const SecondRoute = () => (
  <View style={{flex: 1, justifyContent: "center", alignItems: 'center', backgroundColor: 'whire'}} >
    <Text style={{fontSize: 30}}>Comming Never!</Text>
  </View>
);

const renderScene = SceneMap({
  Posts: PostsTab,
  OtherTab: SecondRoute,
});

export default function ProfileContent() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Posts', title: 'Posts'},
    {key: 'OtherTab', title: 'Other Tab'},
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      activeColor="#e65b0c"
      inactiveColor="black"
      indicatorStyle={{backgroundColor: '#e65b0c'}}
      style={{backgroundColor: 'white'}}
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{width: Dimensions.get('window').width}}
    />
  );
}
