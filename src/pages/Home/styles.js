import styled from 'styled-components/native';
import {SafeAreaView, FlatList, Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 30px;
`;

export const List = styled(FlatList)`
  flex: 1;
  padding: 30px;
`;

export const Title = styled(Text)`
  font-size: 32;
  color: #fff;
`;

export const Button = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  margin-left: 10px;
  margin-top: 10px;
  padding: 0 12px;
  flex-direction: column;
`;
