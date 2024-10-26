import {FlatList, ScrollView, Text, View} from 'react-native';
import React from 'react';
import ChatListItem from './ChatListItem';
import {CHATS} from '../../constants/data';

export default function ChatList() {
  return (
    <FlatList
      data={CHATS}
      renderItem={({item}) => <ChatListItem {...item} />}
      keyExtractor={chat => chat.id}
      contentContainerStyle={{paddingBottom: 120}}
    />
  );
}
