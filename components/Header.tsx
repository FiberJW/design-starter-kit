import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { majorThird } from '../styles/typography';
import { black, white } from '../styles/colors';

export default function Header({ label }: { label: string }) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    backgroundColor: white,
    flexDirection: 'row',
    left: 0,
    padding: 16,
    position: 'absolute',
    right: 0,
    shadowColor: black,
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    top: 0,
    width: '100%',
  },
  headerText: {
    color: black,
    fontFamily: 'Inter Bold',
    fontSize: majorThird(1),
    textAlign: 'center',
  },
});
