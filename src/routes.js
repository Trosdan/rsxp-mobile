import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './pages/Home';
import Challenge1 from './pages/Challenge1';
import Challenge2 from './pages/Challenge2';
import Challenge3 from './pages/Challenge3';
import Challenge4 from './pages/Challenge4';
import Challenge5 from './pages/Challenge5';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Challenge1,
      Challenge2,
      Challenge3,
      Challenge4,
      Challenge5,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerTitle: 'Ranking',
        headerStyle: {
          backgroundColor: '#ffa500',
        },
        headerTintColor: '#FFF',
      },
    },
  ),
);

export default Routes;
