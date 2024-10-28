import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {
  ChatBubbleLeftIcon,
  HeartIcon,
  PhotoIcon,
  ShareIcon,
} from 'react-native-heroicons/outline';
import {HeartIcon as HeartIconSolid} from 'react-native-heroicons/solid';
import styles from '../../styles/Home/Post/postContent.styles';

const {width} = Dimensions.get('window');

export default function PostContent({
  userName,
  likes,
  comments,
  caption,
  images,
  _isLiked,
  commentList,
  onCommentPress,
}) {
  const [inViewImage, setInViewImage] = useState(0);
  const [seeAllText, setSeeAllText] = useState(false);
  const [isLiked, setIsLiked] = useState(_isLiked);

  return (
    <View style={styles.container}>
      {images.length > 1 && (
        <View style={styles.imageCounter}>
          <PhotoIcon size={25} color="#a2afba" />
          <Text style={styles.imageCounterText}>
            {inViewImage + 1}/{images.length}
          </Text>
        </View>
      )}
      <ScrollView
        pagingEnabled
        horizontal
        onMomentumScrollEnd={e => {
          const scrollX = e.nativeEvent.contentOffset.x;
          const index = Math.round(scrollX / width);
          setInViewImage(index);
        }}>
        {images.map((image, index) => (
          <Image
            key={index}
            source={{
              uri: image,
            }}
            style={styles.image}
          />
        ))}
      </ScrollView>
      {images.length > 1 && (
        <View style={styles.paginationDotsContainer}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                {
                  backgroundColor:
                    inViewImage === index ? '#32b5ff' : '#c4c4c4',
                },
              ]}
            />
          ))}
        </View>
      )}
      <View style={styles.actionsContainer}>
        <View style={styles.actionsLeft}>
          <TouchableOpacity
            onPress={() => setIsLiked(!isLiked)}
            style={styles.likeButton}>
            {isLiked ? (
              <HeartIconSolid size={27} color="red" />
            ) : (
              <HeartIcon size={27} color="#000" />
            )}
            <Text style={styles.likeCommentText}>{likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.commentButton}
            onPress={() => onCommentPress(commentList)}>
            <ChatBubbleLeftIcon size={27} color="#000" />
            <Text style={styles.likeCommentText}>{comments}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <ShareIcon size={25} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.captionContainer}>
        <Text style={styles.captionText}>
          <Text style={styles.userName}>{userName}</Text>{' '}
          {caption.length > 100 && !seeAllText
            ? caption.slice(0, 100) + '...'
            : caption}
          {caption.length > 100 && !seeAllText && (
            <Text
              onPress={() => setSeeAllText(!seeAllText)}
              style={styles.moreText}>
              {' '}
              more
            </Text>
          )}
        </Text>
      </View>
      <Text style={styles.timeAgoText}>10 minutes ago</Text>
    </View>
  );
}
