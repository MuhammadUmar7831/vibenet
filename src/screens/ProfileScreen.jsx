import {Dimensions, ScrollView, View} from 'react-native';
import React from 'react';
import ProfileHeader from '../components/Profile/ProfileHeader';
import {USER} from '../constants/data';
import ProfileContent from '../components/Profile/ProfileContent';

export default function ProfileScreen() {
  return (
    <View style={{flex: 1}}>
      <ProfileHeader {...USER} />
      <ProfileContent />
    </View>
  );
}
