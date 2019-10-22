import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { fi, majorThird } from '../styles/typography';
import { useHistory } from '../navigation';
import { white, black } from '../styles/colors';

function Button({
  label,
  onPress,
  style,
}: {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
}) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={[styles.buttonTouchable, style]}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

export default function Error404() {
  const history = useHistory();

  return (
    <View style={styles.container}>
      <Text style={styles.errorCode}>404</Text>
      <Button onPress={() => history.replace('/')} label="Return to Index" />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: white(),
    fontFamily: 'Inter Medium',
    fontSize: majorThird(1),
  },
  buttonTouchable: {
    backgroundColor: black(),
    borderRadius: fi(0.5),
    padding: fi(1),
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  errorCode: {
    fontFamily: 'Inter Semibold',
    fontSize: majorThird(5),
    marginBottom: fi(3),
  },
});
