import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { propsNavigationStack } from './stack/models';

import { Home } from '../screens/Home';
import { Details } from '../screens/Details';

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>();

export function AppStackRoutes() {
  return (
    <Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false,
        }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Details" component={Details} />

    </Navigator>
  );
}