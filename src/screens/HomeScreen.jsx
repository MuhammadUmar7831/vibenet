import {SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Home/Header';
import Stories from '../components/Home/Stories';
import Post from '../components/Home/Post';
import CommentSection from '../components/Home/CommentSection';

export default function HomeScreen() {
  const [selectedComments, setSelectedComments] = useState(null);

  const openComments = comments => {
    setSelectedComments(comments);
  };

  const closeComments = () => {
    setSelectedComments(null);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <Stories />
        <Post onCommentPress={openComments} />
      </ScrollView>
      {selectedComments && (
        <CommentSection
          comments={selectedComments}
          closeComments={closeComments}
        />
      )}
    </SafeAreaView>
  );
}
