import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'theme'
import Home from 'scenes/home'
import Profile from 'scenes/profile'
import SetupUser from 'scenes/profile/SetupUser'
import Settings from 'scenes/profile/Settings'
import Statics from 'scenes/statics'
import CheckIn from 'scenes/check-in'
import InvalidQR from 'scenes/check-in/InvalidQR'
import CheckInSuccess from 'scenes/check-in/CheckInSuccess'
import CheckOut from 'scenes/check-in/CheckOut'
import ScansHistory from 'scenes/check-in/ScansHistory'
import RefreshStatusButton from 'components/RefreshStatusButton'
import HeaderTitle from './HeaderTitle'
import HeaderRight from './HeaderRight'

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
        title: 'MySejahtera',
        headerTitle: () => <HeaderTitle title="MySejahtera" />,
      })}
    />
  </Stack.Navigator>
)

export const ProfileNavigator = ({ navigation }) => (
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
        headerRight: () => <HeaderRight navigation={navigation} />,
      })}
    />

    <Stack.Screen
      name="Setup"
      component={SetupUser}
      options={() => ({
        title: 'Setup',
        headerTitle: () => <HeaderTitle title="Setup" />,
      })}
    />
    <Stack.Screen
      name="Settings"
      component={Settings}
      options={() => ({
        title: 'Settings',
        headerTitle: () => <HeaderTitle title="Settings" />,
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
        headerTitle: () => <HeaderTitle title="Check-in" />,
        headerRight: () => <RefreshStatusButton />,
      })}
    />
    <Stack.Screen
      name="InvalidQR"
      component={InvalidQR}
      options={() => ({
        title: '',
        headerTitle: '',
      })}
    />

    <Stack.Screen
      name="CheckInSuccess"
      component={CheckInSuccess}
      options={() => ({
        headerShown: false,
        title: '',
        headerTitle: '',
      })}
    />
    <Stack.Screen
      name="CheckOut"
      component={CheckOut}
      options={() => ({
        headerShown: false,
        title: '',
        headerTitle: '',
      })}
    />
    <Stack.Screen
      name="ScansHistory"
      component={ScansHistory}
      options={() => ({
        title: '',
        headerTitle: <HeaderTitle title="History" />,
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
