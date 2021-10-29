import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'theme'
import SetupUser from 'scenes/profile/SetupUser'
import Settings from 'scenes/profile/Settings'
import InvalidQR from 'scenes/check-in/InvalidQR'
import CheckInSuccess from 'scenes/check-in/CheckInSuccess'
import CheckOut from 'scenes/check-in/CheckOut'
import InitialCheckIn from 'scenes/check-in/InitialCheckIn'
import ScansHistory from 'scenes/check-in/ScansHistory'
import Scan from 'scenes/check-in/Scan'
import { Ionicons } from '@expo/vector-icons'
import Home from '../tabs'
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
    initialRouteName="InitialCheckIn"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="InitialCheckIn"
      component={InitialCheckIn}
      options={() => ({
        headerShown: false,
      })}
    />
    <Stack.Screen
      name="Home"
      component={Home}
      screenOptions={{}}
      options={() => ({
        headerShown: false,
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
    <Stack.Screen
      name="InvalidQR"
      component={InvalidQR}
      options={() => ({
        title: '',
        headerTitle: '',
      })}
    />
    {/* <Stack.Screen
      name="InitialCheckIn"
      component={InitialCheckIn}
      options={() => ({
        headerShown: true,
        title: '',
        headerRight: () => (
          <View
            style={{
              flexDirection: 'row',
              display: 'flex',
              justifyContent: 'center',
              marginRight: 10,
            }}
          >
            <Ionicons name="scan-outline" size={23} color="white" />
          </View>
        ),
      })}
    /> */}
    <Stack.Screen
      name="CheckInSuccess"
      component={CheckInSuccess}
      options={() => ({
        headerShown: true,
        title: '',
        headerRight: () => (
          <View
            style={{
              flexDirection: 'row',
              display: 'flex',
              justifyContent: 'center',
              marginRight: 10,
            }}
          >
            <Ionicons name="scan-outline" size={23} color="white" />
          </View>
        ),
      })}
    />
    <Stack.Screen
      name="CheckOut"
      component={CheckOut}
      options={() => ({
        headerShown: true,
        title: '',
        headerRight: () => (
          <View
            style={{
              flexDirection: 'row',
              display: 'flex',
              justifyContent: 'center',
              marginRight: 10,
            }}
          >
            <Ionicons name="scan-outline" size={23} color="white" />
          </View>
        ),
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
    <Stack.Screen
      name="Scan"
      component={Scan}
      options={() => ({
        headerShown: false,
      })}
    />
  </Stack.Navigator>
)

export default HomeNavigator
