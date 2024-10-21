import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/Home/Header';
import Stories from '../components/Home/Stories';
import Post from '../components/Home/Post';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <Stories />
        <Post />
      </ScrollView>
    </SafeAreaView>
  );
}
