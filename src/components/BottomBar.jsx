import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {
  BellIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  ServerIcon,
} from 'react-native-heroicons/outline';
import {
  BellIcon as SolidBellIcon,
  HomeIcon as SolidHomeIcon,
  MagnifyingGlassIcon as SolidMagnifyingGlassIcon,
  ServerIcon as SolidServerIcon,
} from 'react-native-heroicons/solid';
import {USER} from '../constants/data';

export default function BottomBar() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setActiveTab('Home')}>
        {activeTab === 'Home' ? (
          <SolidHomeIcon size={25} color="#fff" />
        ) : (
          <HomeIcon size={25} color="#8899a6" />
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setActiveTab('Search')}>
        {activeTab === 'Search' ? (
          <SolidMagnifyingGlassIcon size={25} color="#fff" />
        ) : (
          <MagnifyingGlassIcon size={25} color="#8899a6" />
        )}
      </TouchableOpacity>

      <View style={styles.plusIcon}>
        <PlusIcon size={20} color="#fff" />
      </View>

      <TouchableOpacity onPress={() => setActiveTab('Notifications')}>
        {activeTab === 'Notifications' ? (
          <SolidBellIcon size={25} color="#fff" />
        ) : (
          <BellIcon size={25} color="#8899a6" />
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setActiveTab('Profile')}>
        {/* {activeTab === 'Server' ? (
          <SolidServerIcon size={25} color="#fff" />
        ) : (
          <ServerIcon size={25} color="#8899a6" />
        )} */}
        <Image
          source={{uri: USER.avatar}}
          width={29}
          height={29}
          style={{
            borderRadius: 50,
            borderColor: '#8899a6',
            borderWidth: activeTab === 'Profile' ? 1 : 0,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 3,
    flexDirection: 'row',
    backgroundColor: '#1f1f2f',
    width: '95%',
    paddingVertical: 10,
    justifyContent: 'space-around',
    marginHorizontal: 10,
    borderRadius: 18,
    zIndex: 0,
  },
  plusIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e65b0c',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
});
