import {FlatList, View} from 'react-native';
import React from 'react';
import ChatHeader from '../components/Chat/ChatHeader';
import ChatBubble from '../components/Chat/ChatBubble';
import MESSAGES from '../constants/data';
import SendMessageBox from '../components/Chat/SendMessageBox';

export default function ChatScreen() {
  return (
    <View style={{paddingBottom: 140}}>
      <ChatHeader />
      <FlatList
        data={MESSAGES}
        renderItem={({item}) => <ChatBubble {...item} />}
        contentContainerStyle={{padding: 10, gap: 10}}
        keyExtractor={(item, index) => index.toString()}
        inverted
      />
      <SendMessageBox />
    </View>
  );
}
