import styled from 'styled-components/native';
import {TextInput, Text} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #ffa500;
  padding: 16px;
  justify-content: center;
`;

export const NameInput = styled(TextInput)`
  background-color: #ffff;
  margin-bottom: 10px;
  padding: 10px;
`;

export const LoginButton = styled(RectButton)`
  background-color: black;
  align-items: center;
  justify-content: center;
  height: 50;
`;

export const TextButton = styled(Text)`
  color: white;
`;
