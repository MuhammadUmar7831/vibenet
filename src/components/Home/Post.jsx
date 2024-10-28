import React from 'react';
import {Text, View} from 'react-native';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import {POSTS} from '../../constants/data';

export default function Post({onCommentPress}) {
  return (
    <View>
      {POSTS.map((post, index) => (
        <View key={index}>
          <PostHeader
            fullName={post.fullName}
            userName={post.userName}
            userAvatar={post.userAvatar}
          />
          <PostContent
            caption={post.caption}
            images={post.images}
            onCommentPress={onCommentPress}
            commentList={post.commentList}
            comments={post.comments}
            likes={post.likes}
            userName={post.userName}
            _isLiked={post.isLiked}
          />
        </View>
      ))}
    </View>
  );
}
