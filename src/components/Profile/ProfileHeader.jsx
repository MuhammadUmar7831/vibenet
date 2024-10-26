import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';

export default function ProfileHeader({
  fullName,
  userName,
  avatar,
  bio,
  posts,
  followers,
  following,
}) {
  return (
    <View style={{paddingHorizontal: 10, paddingVertical: 30}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 20,
        }}>
        <Image
          source={{
            uri: avatar,
          }}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <View>
          <Text style={{fontSize: 28, fontWeight: 'bold', color: 'black'}}>
            {fullName}
          </Text>
          <Text style={{fontWeight: 'bold'}}>@{userName}</Text>
        </View>
      </View>
      <Text style={{marginTop: 15, fontSize: 15, color: 'black'}}>{bio}</Text>
      <View
        style={{
          marginTop: 10,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 5,
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
            {posts}
          </Text>
          <Text style={{fontSize: 15}}>Posts</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 5,
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
            {followers}
          </Text>
          <Text style={{fontSize: 15}}>Followers</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 5,
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
            {following}
          </Text>
          <Text style={{fontSize: 15}}>Following</Text>
        </View>
      </View>
    </View>
  );
}
