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
    return (
      <ScrollView
        style={{paddingRight: 10, paddingLeft: 10, backgroundColor: '#b3d9ff'}}>
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
            style={{
              backgroundColor: '#7070db',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>PHP</Text>
          </Button>
          <Button block light>
            <Text style={{color: '#000', fontWeight: 'bold'}}>TypeScript</Text>
          </Button>
          <Button block warning>
            <Text style={{color: '#000', fontWeight: 'bold'}}>Swifit</Text>
          </Button>
          <Button
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
