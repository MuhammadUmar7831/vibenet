import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function ChatListItem(props) {
  const {avatar, name, lastMessage, lastMessageTime, unseenMessages} = props;
  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          paddingVertical: 10,
          alignItems: 'center',
          borderBottomColor: '#e5e5e5',
          borderBottomWidth: 1,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <Image
            source={{
              uri: avatar,
            }}
            style={{width: 60, height: 60, borderRadius: 50}}
          />
          <View>
            <Text style={{fontSize: 20, color: '#000', fontWeight: 900}}>
              {name}
            </Text>
            <Text>
              {lastMessage.length > 30
                ? lastMessage.slice(0, 27) + '...'
                : lastMessage}
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'flex-end', gap: 3}}>
          <Text>{lastMessageTime}</Text>
          <View
            style={{
              backgroundColor: '#e65b0c',
              paddingHorizontal: 5,
              borderRadius: 50,
            }}>
            {unseenMessages && (
              <Text style={{color: '#fff'}}>
                {unseenMessages > 9 ? '9+' : unseenMessages}
              </Text>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
