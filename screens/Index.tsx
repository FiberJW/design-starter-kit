import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';
import { fi, lineHeight, majorThird } from '../styles/typography';
import { black, canvasWhite } from '../styles/colors';
import Header from '../components/Header';
import { useStore as useStringsStore } from '../stores/stringsStore';

export default observer(function IndexScreen() {
  const { strings } = useStringsStore();

  return (
    <View style={styles.container}>
      <Header label={strings.get('headerText')} />
      <Text style={styles.instructions}>
        Open up screens/Index.tsx to start working on your app!
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: canvasWhite(),
    flex: 1,
    height: '100%',
    justifyContent: 'center',
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
