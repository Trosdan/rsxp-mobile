import styled from 'styled-components/native';
import {SafeAreaView, FlatList, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Ranking = styled(View)`
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  padding-bottom: 16px;
  border-bottom-width: 1px;
  border-bottom-color: gray;
`;

export const List = styled(FlatList)`
  flex: 1;
`;

export const Title = styled(Text)`
  font-size: 32;
  color: #fff;
  margin-left: 15px;
`;

export const Title2 = styled(Text)`
  font-size: 15;
  color: black;
  margin-left: 15px;
`;

export const Button = styled(RectButton)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${prop => (prop.enabled ? '#ffa500' : '#cdcdc1')};
  border-radius: 4px;
  margin-left: 10px;
  margin-top: 10px;
  padding: 0 12px;
  flex-direction: row;
`;

export const LogoutButton = styled(RectButton)`
  height: 50px;
  background-color: red;
  margin-bottom: 16px;
  margin-left: 10px;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const LogoutText = styled(Text)`
  color: #fff;
  font-weight: bold;
  font-size: 28px;
`;
