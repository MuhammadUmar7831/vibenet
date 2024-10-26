import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  ChevronLeftIcon,
  EllipsisHorizontalIcon,
} from 'react-native-heroicons/outline';

export default function ChatHeader() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
      }}>
      <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
        <TouchableOpacity>
          <ChevronLeftIcon size={25} color="#000" />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', gap: 5}}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/220px-Outdoors-man-portrait_%28cropped%29.jpg',
            }}
            style={{width: 50, height: 50, borderRadius: 50}}
          />
          <View>
            <Text style={{color: '#000', fontSize: 18, fontWeight: 900}}>
              Vaibhav Shrivastav
            </Text>
            <Text>@shrivastav</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <EllipsisHorizontalIcon size={25} color="#000" />
      </TouchableOpacity>
    </View>
  );
}
