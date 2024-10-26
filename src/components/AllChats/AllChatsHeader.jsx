import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {
  ChevronLeftIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  XCircleIcon,
} from 'react-native-heroicons/outline';

export default function AllChatsHeader() {
  const [searchText, setSearchText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <ChevronLeftIcon size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Chats</Text>
        <TouchableOpacity>
          <PencilSquareIcon size={30} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={text => setSearchText(text)}
          value={searchText}
          style={styles.searchInput}
        />

        {!isFocused && !searchText ? (
          <TouchableOpacity style={styles.searchIcon}>
            <MagnifyingGlassIcon size={20} color="#888" />
            <Text style={{fontSize: 17, color: '#888'}}>Search</Text>
          </TouchableOpacity>
        ) : null}

        {searchText ? (
          <TouchableOpacity
            onPress={() => setSearchText('')}
            style={styles.crossIcon}>
            <XCircleIcon size={25} color="#000" />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },
  searchContainer: {
    marginHorizontal: 10,
    marginVertical: 8,
    position: 'relative',
  },
  searchInput: {
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 3,
    paddingHorizontal: 10,
    color: '#000',
  },
  searchIcon: {
    position: 'absolute',
    top: '20%',
    left: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  crossIcon: {
    position: 'absolute',
    top: '20%',
    right: 5,
  },
});
