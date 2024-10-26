import {SafeAreaView, View} from 'react-native';
import React from 'react';
import AllChatsHeader from '../components/AllChats/AllChatsHeader';
import ChatList from '../components/AllChats/ChatList';

export default function AllChatsScreen() {
  return (
    <SafeAreaView>
      <AllChatsHeader />
      <ChatList />
    </SafeAreaView>
  );
}
