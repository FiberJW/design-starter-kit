import React from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { fi, lineHeight, majorThird } from '../styles/typography';
import { black, canvasWhite, white } from '../styles/colors';

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${canvasWhite()};
  height: 100%;
`;

const Header = styled(View)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background-color: ${white()};
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: ${fi(1)}px;
  border-bottom-width: 0.5px;
  border-bottom-color: ${black(10)};
`;

const HeaderText = styled(Text)`
  font-family: 'Inter Bold';
  font-size: ${majorThird(1)}px;
  color: ${black()};
  text-align: center;
`;

const Instructions = styled(Text)`
  font-family: 'Inter SemiBold';
  font-size: ${majorThird(1)}px;
  line-height: ${lineHeight(majorThird(1), 1.5)}px;
  color: ${black()};
  text-align: center;
  margin-horizontal: ${fi(1)}px;
`;

export default function IndexScreen() {
  return (
    <Container>
      <Header>
        <HeaderText>🥤Design Starter Kit</HeaderText>
      </Header>
      <Instructions>Open up screens/Index.tsx to start working on your app!</Instructions>
    </Container>
  );
}
