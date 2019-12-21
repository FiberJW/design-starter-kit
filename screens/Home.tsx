import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { lineHeight, majorThird } from '~/styles/typography';
import { black, canvasWhite } from '~/styles/colors';
import { Header } from '~/components/Header';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header label="🥤Design Starter Kit" />
      <Text style={styles.instructions}>
        Open up screens/Home.tsx to start working on your app!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: canvasWhite,
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  instructions: {
    color: black,
    fontFamily: 'Inter SemiBold',
    fontSize: majorThird(1),
    lineHeight: lineHeight(majorThird(1), 1.5),
    marginHorizontal: 16,
    textAlign: 'center',
  },
});
