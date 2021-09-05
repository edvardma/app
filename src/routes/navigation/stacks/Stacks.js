import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'theme'
import Home from 'scenes/home'
import Profile from 'scenes/profile'
import Statics from 'scenes/statics'
import CheckIn from 'scenes/check-in'
import HeaderTitle from './HeaderTitle'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: colors.lightBlue, elevation: 0 },
  headerTitleStyle: { fontSize: 18 },
}

// ------------------------------------
// Navigators
// ------------------------------------

export const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={() => ({
        title: 'Home',
        headerTitle: () => <HeaderTitle title="Home" />,
      })}
    />
  </Stack.Navigator>
)

export const ProfileNavigator = () => (
  <Stack.Navigator
    initialRouteName="Profile"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={() => ({
        title: 'Profile',
        headerTitle: () => <HeaderTitle title="Profile" />,
      })}
    />
  </Stack.Navigator>
)

export const CheckInNavigator = () => (
  <Stack.Navigator
    initialRouteName="CheckIn"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Check-In"
      component={CheckIn}
      options={() => ({
        title: 'CheckIn',
        headerTitle: () => <HeaderTitle title="Check-In" />,
      })}
    />
  </Stack.Navigator>
)

export const StaticsNavigator = () => (
  <Stack.Navigator
    initialRouteName="Statitcs"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Statitcs"
      component={Statics}
      options={() => ({
        title: 'Statitcs',
        headerTitle: () => <HeaderTitle title="Statitcs" />,
      })}
    />
  </Stack.Navigator>
)
