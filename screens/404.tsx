import React from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { fi, majorThird } from '../styles/typography';
import { useHistory } from '../navigation';
import { white, black } from '../styles/colors';

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ErrorCode = styled(Text)`
  font-family: 'Inter Semibold';
  font-size: ${majorThird(5)}px;
  margin-bottom: ${fi(3)}px;
`;

function Button({ label, onPress, style }) {
  return (
    <ButtonTouchable activeOpacity={0.8} onPress={onPress} style={style}>
      <ButtonText>{label}</ButtonText>
    </ButtonTouchable>
  );
}

const ButtonTouchable = styled(TouchableOpacity)`
  padding: ${fi(1)}px;
  border-radius: ${fi(0.5)}px;
  background-color: ${black()};
`;

const ButtonText = styled(Text)`
  font-size: ${majorThird(1)}px;
  font-family: 'Inter Medium';
  color: ${white()};
`;

export default function Error404() {
  const history = useHistory();

  return (
    <Container>
      <ErrorCode>404</ErrorCode>
      <Button onPress={() => history.replace('/')} label="Return to Index" activeOpacity={0.8} />
    </Container>
  );
}
