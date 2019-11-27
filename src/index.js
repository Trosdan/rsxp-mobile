import React from 'react';
import {StatusBar} from 'react-native';

import createRouter from './routes';

export default function src() {
  const Routes = createRouter(false);

  return (
    <>
      <StatusBar backgroundColor="#ffa500" barStyle="dark-content" />
      <Routes />
    </>
  );
}
