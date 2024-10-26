import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';

const curlRight = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1.1 -0.1 2.473 1.644">
	<path d="M 0 0 C 0 0 0 1 1 1 C 2 1 0 2 -1 1 L -1 0 L 0 0" fill="#e65b0c"/>
</svg>
`;

export default function ChatBubble({text, time, isMyMessage}) {
  const styles = StyleSheet.create({
    bubbleContainer: {
      backgroundColor: isMyMessage ? '#e65b0c' : '#fff',
      padding: 10,
      borderRadius: 5,
      alignSelf: isMyMessage ? 'flex-end' : 'flex-start',
      marginVertical: 5,
      elevation: 1,
      flexDirection: isMyMessage ? 'row-reverse' : 'row',
      gap: 10,
      alignItems: 'center',
    },
    bubbleText: {
      color: isMyMessage ? '#fff' : '#000',
      flexShrink: 1,
    },
    timeText: {
      color: isMyMessage ? '#f3ad85' : '#888',
      fontSize: 12,
    },
  });

  return (
    <View style={styles.bubbleContainer}>
      <Text style={styles.timeText}>{time}</Text>
      <Text style={styles.bubbleText}>{text}</Text>
      {isMyMessage && (
        <SvgXml
          xml={curlRight}
          width={20}
          height={20}
          style={{
            position: 'absolute',
            bottom: -5,
            right: -10,
            elevation: 3,
          }}
        />
      )}
    </View>
  );
}
