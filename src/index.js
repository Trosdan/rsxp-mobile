<<<<<<< HEAD
import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './routes';

export default function src() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#ffa500" />
=======
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

import createRouter from './routes';
import {getUser} from './utils/userStore';

export default function src() {
  const user = getUser();

  const Routes = createRouter(false);

  return (
    <>
      <StatusBar backgroundColor="#ffa500" barStyle="dark-content" />
>>>>>>> b29517d66d404335da8f0bb23a786734349f540b
      <Routes />
    </>
  );
}
