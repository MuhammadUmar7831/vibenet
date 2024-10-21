import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {EllipsisHorizontalIcon} from 'react-native-heroicons/outline';
import styles from '../../styles/Home/Post/postHeader.styles';

export default function PostHeader({userName, userAvatar, fullName}) {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image
          source={{
            uri: userAvatar,
          }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.userName}>{fullName}</Text>
          <Text>@{userName}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <EllipsisHorizontalIcon size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
}
