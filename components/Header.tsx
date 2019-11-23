import React from 'react';
import { View, Text } from 'react-native';
import * as Stylehooks from 'react-native-stylehooks';
import { majorThird } from '../styles/typography';
import { black, white } from '../styles/colors';

export function Header({ label }: { label: string }) {
  const styles = useStyles();

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{label}</Text>
    </View>
  );
}

const useStyles = Stylehooks.create({
  headerContainer: ({ window: { width } }) => ({
    alignItems: 'center',
    backgroundColor: width <= 1024 ? black : white,
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
  }),
  headerText: ({ window: { width } }) => ({
    color: width <= 1024 ? white : black,
    fontFamily: 'Inter Bold',
    fontSize: majorThird(1),
    textAlign: 'center',
  }),
});
