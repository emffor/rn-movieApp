import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { propsNavigationStack } from './stack/models';

import { Home } from '../screens/Home';

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

    </Navigator>
  );
}