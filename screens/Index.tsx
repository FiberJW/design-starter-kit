import React from 'react';
import styled from 'styled-components/native';
import { View, Image, Text } from 'react-native';
import { rem, lineHeight, majorThird } from '../styles/typography';
import { black, canvasWhite, white } from '../styles/colors';

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${canvasWhite()};
  height: 100%;
  `;

const Header = styled(View)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: ${white()};
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  border-bottom-width: 0.5px;
  border-bottom-color: ${black(10)};
  `

const HeaderText = styled(Text)`
  font-family: 'Inter Bold';
  font-size: ${majorThird(1)};
  line-height: ${lineHeight(1, majorThird(1))};
  color: ${black()};
  text-align: center;
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
      <Header>
        <HeaderText>🥤Design Starter Kit</HeaderText>
      </Header>
      <Instructions>Open up screens/Index.tsx to start working on your app!</Instructions>
    </Container>
  );
}
