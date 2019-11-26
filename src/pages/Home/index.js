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

export default function Home() {
  return (
    <Container>
      <List
        data={DATA}
        renderItem={({item}) => (
          <Button>
            <Icon name="gamepad" size={20} />
            <Title>{item.title}</Title>
          </Button>
        )}
        keyExtractor={item => item.id}
      />
    </Container>
  );
}
