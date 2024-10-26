import {Dimensions, Image, FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {Square2StackIcon} from 'react-native-heroicons/outline';
import {PROFILE_POSTS} from '../../constants/data'; // Ensure the data is imported correctly

const {width} = Dimensions.get('window');
const spaceBetween = 4;

export default function PostsTab() {
  const renderItem = ({item}) => (
    <View style={styles.imageContainer}>
      <Image source={{uri: item.image}} style={styles.postImage} />
      {item.multi && (
        <Square2StackIcon
          size={30}
          color="#fff"
          style={styles.iconOverlay}
        />
      )}
    </View>
  );

  return (
    <FlatList
      data={PROFILE_POSTS}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spaceBetween / 2,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  imageContainer: {
    position: 'relative',
    marginBottom: spaceBetween,
    width: width / 2 - spaceBetween,
    height: 300,
  },
  postImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  iconOverlay: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
});
