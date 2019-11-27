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

export default class Challenge2 extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <ScrollView
        style={{paddingRight: 10, paddingLeft: 10, backgroundColor: '#ffff99'}}>
        <View>
          <Text style={style.textoPrincipal}>
            2- Qual o nome da IDE referente a imagem apresentada abaixo?
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            style={style.imagem}
            source={require('../../assets/images/sublime_png.png')}
          />
        </View>
        <View style={style.espacoButton}>
          <Button
            onPress={() =>
              Alert.alert('Sua resposta está...', 'Errada! Tente novamente :(')
            }
            style={{
              backgroundColor: '#b3b3b3',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>Eclipse</Text>
          </Button>
          <Button
            onPress={() =>
              Alert.alert('Sua resposta está...', 'Errada! Tente novamente :(')
            }
            style={{
              backgroundColor: '#e08585',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>Netbeans</Text>
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
            style={{
              backgroundColor: '#1affc6',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <Text style={{color: '#000', fontWeight: 'bold'}}>
              Sublime Text
            </Text>
          </Button>
          <Button
            onPress={() =>
              Alert.alert('Sua resposta está...', 'Errada! Tente novamente :(')
            }
            style={{backgroundColor: '#ffff00', justifyContent: 'center'}}>
            <Text style={{color: '#000', fontWeight: 'bold'}}>
              Visual Studio
            </Text>
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
