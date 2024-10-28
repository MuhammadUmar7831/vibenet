import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import AllChatsScreen from './screens/AllChatsScreen';
import ChatScreen from './screens/ChatScreen';
import BottomBar from './components/BottomBar';

export default function App() {
  return (
    <>
      <HomeScreen />
      <BottomBar />
    </>
  );
}
