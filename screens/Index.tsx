import React from 'react';
import styled from 'styled-components/native';
import { View, Image, Text } from 'react-native';
import { rem, lineHeight, majorThird } from '../styles/typography';
import { black } from '../styles/colors';

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const IndexImage = styled(Image)`
  height: 300px;
  width: 533.44208808px;
  aspect-ratio: 1.7781402936;
  margin-bottom: ${rem(1)};
  border-radius: ${rem(1)};
`;

const Instructions = styled(Text)`
  font-family: 'Inter SemiBold';
  font-size: ${majorThird(1)};
  line-height: ${lineHeight(1.3, majorThird(1))};
  color: ${black()};
  text-align: center;
  margin-horizontal: ${rem(1)};
`;

export default function IndexScreen() {
  return (
    <Container>
      <IndexImage
        source={{
          uri:
            'https://vignette.wikia.nocookie.net/to-aru-majutsu-no-index/images/0/09/Indexlibrorumprohibitorum.png/revision/latest?cb=20160704014949',
        }}
      />
      <Instructions>Open up screens/Index.tsx to start working on your app!</Instructions>
    </Container>
  );
}
