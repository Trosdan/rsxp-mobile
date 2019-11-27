import React, {useState} from 'react';
import {Alert, ActivityIndicator} from 'react-native';

import {Container, NameInput, LoginButton, TextButton} from './styles';

import api from '../../services/api';
import {setUser} from '../../utils/userStore';

function Login({navigation}) {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  async function handlerLogin() {
    try {
      setLoading(true);
      if(name === '') {
        throw new 'Error';
      }
      // const {data: user} = await api.post('/user', {name});
      setTimeout(async () => {
        await setUser({name: 'Jorge'});
        navigation.navigate('DashBoard');
      }, 5000);
    } catch (error) {
      Alert.alert('Erro na conexão', 'não foi possivel efetuar o login');
      setLoading(false);
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
      <LoginButton onPress={() => handlerLogin()} enabled={!loading}>
        {loading ? 
          <ActivityIndicator 
            size={"small"} 
            color={'#fff'}
          /> : 
          <TextButton>Entrar</TextButton> 
          }
        
      </LoginButton>
    </Container>
  );
}

export default Login;
