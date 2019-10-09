import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fi, lineHeight, majorThird } from '../styles/typography';
import { black, canvasWhite, white } from '../styles/colors';

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>🥤Design Starter Kit</Text>
      </View>
      <Text style={styles.instructions}>
        Open up screens/Index.tsx to start working on your app!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: canvasWhite(),
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: white(),
    borderBottomColor: black(10),
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    left: 0,
    padding: fi(1),
    position: 'absolute',
    right: 0,
    top: 0,
    width: '100%',
  },
  headerText: {
    color: black(),
    fontFamily: 'Inter Bold',
    fontSize: majorThird(1),
    textAlign: 'center',
  },
  instructions: {
    color: black(),
    fontFamily: 'Inter SemiBold',
    fontSize: majorThird(1),
    lineHeight: lineHeight(majorThird(1), 1.5),
    marginHorizontal: fi(1),
    textAlign: 'center',
  },
});
