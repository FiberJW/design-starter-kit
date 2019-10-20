import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fi, majorThird } from '../styles/typography';
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
});
