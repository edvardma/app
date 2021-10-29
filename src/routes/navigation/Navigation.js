import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { HomeNavigator } from './stacks'

export default () => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  )
}
