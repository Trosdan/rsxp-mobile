import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './pages/Home';
import LevelUm from './pages/LevelUm';

const Routes = createAppContainer(
  createStackNavigator(
    {
      LevelUm,
      Home,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#DDD',
        },
        headerTintColor: '#FFF',
      },
    },
  ),
);

export default Routes;
