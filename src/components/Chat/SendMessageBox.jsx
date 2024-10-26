import {TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {PaperAirplaneIcon} from 'react-native-heroicons/solid';

export default function SendMessageBox() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 3,
      }}>
      <TextInput
        placeholder="Hi..."
        style={{
          backgroundColor: '#f0f0f0',
          width: '87%',
          paddingHorizontal: 10,
          borderRadius: 10,
        }}
      />
      <View style={{transform: [{rotate: '-25deg'}]}}>
        <TouchableOpacity>
          <PaperAirplaneIcon size={25} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
