import React from 'react'
import { View, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'

// stack navigators
import Svg from 'components/Svg'
import {
  HomeNavigator,
  CheckInNavigator,
  StaticsNavigator,
  ProfileNavigator,
} from '../stacks'

const Tab = createBottomTabNavigator()
const barcodebIcon = require('./barcodeb.png')
const barcodegIcon = require('./barcodeg.png')
const dashboardgIcon = require('./dashboard-outline.png')
const dashboardbIcon = require('./dashboard.png')

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        switch (route.name) {
          case 'Home':
            return (
              <FontIcon
                name="home"
                color={focused ? colors.lightBlue : colors.gray}
                size={20}
                solid
              />
            )
          case 'CheckIn':
            return (
              <Image
                style={{ width: 25, height: 25 }}
                source={focused ? barcodebIcon : barcodegIcon}
              />
            )
          case 'Statics':
            return (
              <Image
                style={{ width: 25, height: 25 }}
                source={focused ? dashboardbIcon : dashboardgIcon}
              />
            )
          case 'Profile':
            return (
              <FontIcon
                name="user"
                color={focused ? colors.lightBlue : colors.gray}
                size={21}
                solid
              />
            )
          default:
            return <View />
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.lightBlue,
      inactiveTintColor: colors.gray,
      style: {
        // backgroundColor: 'white',
        // borderTopColor: 'gray',
        // borderTopWidth: 1,
        // paddingBottom: 5,
        // paddingTop: 5,
      },
    }}
    initialRouteName="Home"
    swipeEnabled={false}
  >
    <Tab.Screen name="Home" component={HomeNavigator} />
    <Tab.Screen name="CheckIn" component={CheckInNavigator} />
    <Tab.Screen name="Statics" component={StaticsNavigator} />
    <Tab.Screen name="Profile" component={ProfileNavigator} />
  </Tab.Navigator>
)

export default TabNavigator
