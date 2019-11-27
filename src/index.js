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
      <Routes />
    </>
  );
}
