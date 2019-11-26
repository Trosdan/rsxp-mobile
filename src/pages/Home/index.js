import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Container, List, Title, Button} from './styles';

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


export default function Home({ navigation }) {

  handleNavigate = (id) => {
    let level = "Challenge";
    level = level+id;

    navigation.navigate(level);
    console.log(level);
    
    // switch (id) {
    //   case 1:  
    //     navigation.navigate('level1');
    //     break;

    //   case 2:  
    //     navigation.navigate('Challenge');
    //     break;

    //   case 2:  
    //     navigation.navigate('Challenge');
    //     break;   

    //   default:
    //     break;
    // }
  };
  

  return (
    <Container>
      <List
        data={DATA}
        renderItem={({item}) => (
          <Button onPress={() => handleNavigate(item.id)}>
            <Icon name="gamepad" size={30} color="#FFF"/>
            <Title>{item.title}</Title>
          </Button>
        )}
        keyExtractor={item => item.id}
      />
    </Container>
  );
}
