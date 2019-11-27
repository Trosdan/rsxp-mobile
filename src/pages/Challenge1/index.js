import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
  StatusBar,
} from 'react-native';
import {Button} from 'native-base';
// import logoJs from '../../assets/images/js';

export default class Challenge1 extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <ScrollView
        style={{paddingRight: 10, paddingLeft: 10, backgroundColor: '#ffff99'}}>
        <View>
          <Text style={style.textoPrincipal}>
            1- Qual linguagem de programação a imagem abaixo representa?
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            style={style.imagem}
            source={require('../../assets/images/js.png')}
          />
        </View>
        <View style={style.espacoButton}>
          <Button
            onPress={() =>
              Alert.alert('Sua resposta está...', 'Errada! Tente novamente :(')
            }
            style={{
              backgroundColor: '#7070db',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>PHP</Text>
          </Button>
          <Button
            onPress={() =>
              Alert.alert('Sua resposta está...', 'Errada! Tente novamente :(')
            }
            block
            light>
            <Text style={{color: '#000', fontWeight: 'bold'}}>TypeScript</Text>
          </Button>
          <Button
            onPress={() =>
              Alert.alert('Sua resposta está...', 'Errada! Tente novamente :(')
            }
            block
            warning>
            <Text style={{color: '#000', fontWeight: 'bold'}}>Swifit</Text>
          </Button>
          <Button
            onPress={() =>
              Alert.alert(
                'Sua resposta está...',
                'Correta! Parabéns,você desbloqueou o próximo level! :)',
                [
                  {
                    text: 'Voltar para tela inicial',
                    onPress: () => navigation.navigate('Home'),
                  },
                ],
              )
            }
            style={{backgroundColor: '#ffff00', justifyContent: 'center'}}>
            <Text style={{color: '#000', fontWeight: 'bold'}}>JavaScript</Text>
          </Button>
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  textoPrincipal: {
    color: '#000',
    fontSize: 20,
    paddingLeft: 20,
  },
  imagem: {
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
    paddingTop: 20,
    width: 200,
    height: 200,
  },
  colorButton: {
    color: '#00ff99',
  },
  espacoButton: {
    paddingTop: 30,
    marginTop: 30,
  },
});
