import React, {useState} from 'react';
import {Alert} from 'react-native';

import {Container, NameInput, LoginButton, TextButton} from './styles';

import api from '../../services/api';
import {setUser} from '../../utils/userStore';

function Login({navigation}) {
  const [name, setName] = useState('');

  async function handlerLogin() {
    try {
      if (user === '') {
        throw 'Error';
      }
      const {data: user} = await api.post('/user', {name});
      await setUser(user);
      navigation.navigate('DashBoard');
    } catch (error) {
      console.log(error);
      Alert.alert('Erro na conexão', 'não foi possivel efetuar o login');
    }
  }

  return (
    <Container>
      <NameInput
        value={name}
        onChangeText={setName}
        placeholder="Digite seu nome"
        returnKeyType="send"
        onSubmitEditing={() => handlerLogin()}
      />
      <LoginButton onPress={() => handlerLogin()}>
        <TextButton>Entrar</TextButton>
      </LoginButton>
    </Container>
  );
}

export default Login;
