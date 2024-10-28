import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import React, {useCallback, useRef} from 'react';
import {HeartIcon} from 'react-native-heroicons/outline';
import {HeartIcon as HeartIconSolid} from 'react-native-heroicons/solid';

export default function CommentSection({comments, closeComments}) {
  const bottomSheetRef = useRef(null);
  const snapPoints = ['75%', '90%'];

  const renderComment = ({item}) => (
    <View style={styles.commentContainer}>
      <Image source={{uri: item.avatar}} style={styles.avatar} />
      <View style={styles.commentTextContainer}>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.commentText}>{item.comment}</Text>
        <Text style={styles.likesText}>{item.likes} likes</Text>
      </View>
      <TouchableOpacity style={styles.heartIcon}>
        {item.isLiked ? (
          <HeartIconSolid size={18} color="#ff5252" />
        ) : (
          <HeartIcon size={18} color="#000" />
        )}
      </TouchableOpacity>
    </View>
  );

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        onPress={closeComments}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    [],
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}>
      <BottomSheetView style={styles.contentContainer}>
        <FlatList
          data={comments}
          renderItem={renderComment}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </BottomSheetView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  commentTextContainer: {
    flex: 1,
  },
  username: {
    fontWeight: '600',
    color: '#000',
    fontSize: 14,
  },
  commentText: {
    fontSize: 14,
    color: '#444',
    marginTop: 2,
  },
  likesText: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  heartIcon: {
    justifyContent: 'center',
    paddingLeft: 8,
  },
  backdrop: {},
});
