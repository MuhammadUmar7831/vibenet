import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import AllChatsScreen from './screens/AllChatsScreen';
import ChatScreen from './screens/ChatScreen';
import BottomBar from './components/BottomBar';
import Demo from './components/Demo';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <HomeScreen />
      <BottomBar />
    </GestureHandlerRootView>
  );
}
