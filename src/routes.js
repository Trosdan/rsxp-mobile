import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './pages/Login';
import Home from './pages/Home';
import Challenge1 from './pages/Challenge1';
import Challenge2 from './pages/Challenge2';
import Challenge3 from './pages/Challenge3';
import Challenge4 from './pages/Challenge4';
import Challenge5 from './pages/Challenge5';

const DashBoard = createStackNavigator(
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
      headerTitle: 'Desafios',

      headerStyle: {
        backgroundColor: '#ffa500',
      },
      headerTintColor: '#FFF',
    },
  },
)

const Routes = (isLogged = false) => createAppContainer(
    createSwitchNavigator({
      Login,
      DashBoard,
    }, {
      initialRouteName: isLogged ? 'DashBoard' : 'Login',
    })
);

export default Routes;
