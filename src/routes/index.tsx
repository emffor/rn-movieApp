import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AppStackRoutes } from './stack.routes';

export function Routes() {
  useEffect(() => {
    console.log('Routes: useEffect');
  },[]);

  return (
    <NavigationContainer>
        <AppStackRoutes />
    </NavigationContainer>
  )
}