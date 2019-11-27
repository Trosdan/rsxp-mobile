import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconAntD from 'react-native-vector-icons/AntDesign';
import {
  Container,
  List,
  Title,
  Title2,
  Button,
  Ranking,
  LogoutButton,
  LogoutText,
} from './styles';
import api from '../../services/api';

const DATA = [
  {
    id: '1',
    title: 'Level 1',
  },
  {
    id: '2',
    title: 'Level 2',
  },
  {
    id: '3',
    title: 'Level 3',
  },
  {
    id: '4',
    title: 'Level 4',
  },
  {
    id: '5',
    title: 'Level 5',
  },
];

export default class Home extends Component {
  // static navigationOptions = () => ({
  //   title: 'Teste',
  // });

  state = {
    ranking: [],
  };

  // async componentDidMount() {
  //   const response = await api.get('/ranking');
  //   console.log(response.data);
  // }

  handleNavigate = id => {
    let level = 'Challenge';
    level = level + id;
    this.props.navigation.navigate(level);
  };

  render() {
    const {navigation} = this.props;
    // const {ranking} = this.state;
    const ranking = [
      '1º Renato: 20 stars',
      '2º João: 16 stars',
      '3º Diogo: 12 stars',
    ];
    return (
      <Container>
        <Ranking>
          <IconAntD name="Trophy" size={36} color="#000" />
          <Title2>{ranking[0]}</Title2>
          <Title2>{ranking[1]}</Title2>
          <Title2>{ranking[2]}</Title2>
        </Ranking>
        <List
          data={DATA}
          renderItem={({item}) => (
            <Button
              onPress={() => this.handleNavigate(item.id)}
              enabled={item.id > 2 ? false : true}>
              <Icon name="gamepad" size={30} color="#FFF" />
              <Title>{item.title}</Title>
            </Button>
          )}
          keyExtractor={item => item.id}
        />
        <LogoutButton onPress={() => navigation.navigate('Login')}>
          <LogoutText>Sair</LogoutText>
        </LogoutButton>
      </Container>
    );
  }
}
