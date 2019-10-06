import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { rem, lineHeight, majorThird } from '../styles/typography';
import { black } from '../styles/colors';

export default function IndexScreen() {
  return (
    <View style={rootStyles.container}>
      <Image
        source={{
          uri:
            'https://vignette.wikia.nocookie.net/to-aru-majutsu-no-index/images/0/09/Indexlibrorumprohibitorum.png/revision/latest?cb=20160704014949',
        }}
        style={rootStyles.image}
      />
      <Text style={rootStyles.instructions}>
        Open up screens/Index.tsx to start working on your app!
      </Text>
    </View>
  );
}

const rootStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 300,
    width: 533.44208808,
    aspectRatio: 1.7781402936,
    marginBottom: rem(1),
    borderRadius: rem(1),
  },
  instructions: {
    fontFamily: 'Inter SemiBold',
    fontSize: majorThird(1),
    lineHeight: lineHeight(1.3, majorThird(1)),
    color: black(),
    textAlign: 'center',
    marginHorizontal: rem(1),
  },
});
