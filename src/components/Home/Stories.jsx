import {Image, ScrollView, Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {USERS} from '../../constants/data';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../../styles/Home/stories.style';
import { PlusIcon } from 'react-native-heroicons/outline';

export default function Stories() {
  return (
    <View style={styles.container}>
      <Text style={styles.storyText}>Stories</Text>
      <ScrollView horizontal contentContainerStyle={styles.scrollContent}>
        <View>
          <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJTnn-mLd4B8MWO2DL3RQf0Kc4P6iomKL6A&s"}} style={styles.thumbnail} />
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.5)', 'transparent', 'rgba(0, 0, 0, 0.5)']}
            style={styles.gradient}
          />
          <View style={styles.myStroy}>
            <PlusIcon size={30} color="#000" />
            {/* <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJTnn-mLd4B8MWO2DL3RQf0Kc4P6iomKL6A&s"}} style={styles.avatar} /> */}
          </View>
          <Text style={styles.userName}>{"Vito"}</Text>
        </View>
        {USERS.map((user, index) => (
          <View key={index}>
            <Image source={{uri: user.thumbnail}} style={styles.thumbnail} />
            <LinearGradient
              colors={[
                'rgba(0, 0, 0, 0.5)',
                'transparent',
                'rgba(0, 0, 0, 0.5)',
              ]}
              style={styles.gradient}
            />
            <View style={styles.avatarContainer}>
              <Image source={{uri: user.avatar}} style={styles.avatar} />
            </View>
            <Text style={styles.userName}>{user.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
