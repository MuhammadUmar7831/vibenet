import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../styles/Home/header.styles';
import {
  ChatBubbleLeftEllipsisIcon,
  HeartIcon,
  PlusIcon,
} from 'react-native-heroicons/outline';
import React from 'react';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJTnn-mLd4B8MWO2DL3RQf0Kc4P6iomKL6A&s',
        }}
        style={styles.avatar}
      />
      <Text style={styles.logoText}>Vibenet</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <PlusIcon size={27} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.notficationBadge} />
          <HeartIcon size={27} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.messageBadge}>
            <Text style={styles.messageBadgeText}>11</Text>
          </View>
          <ChatBubbleLeftEllipsisIcon size={27} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
