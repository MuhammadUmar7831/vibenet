import React, {useCallback, useRef} from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

const Demo = () => {
  const bottomRef = useRef(null);
  const snapPoints = ['1%', '25%', '50%', '90%'];

  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  const openSheet = () => {
    console.log('Button Pressed');
    bottomRef.current?.expand();
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <TouchableOpacity
        style={{backgroundColor: 'red', alignItems: 'center', padding: 10}}
        onPress={openSheet}>
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
          Open Bottom Sheet
        </Text>
      </TouchableOpacity>

      <BottomSheet
        ref={bottomRef}
        onChange={handleSheetChanges}
        index={0} // Start closed
        snapPoints={snapPoints}>
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
  },
});

export default Demo;
