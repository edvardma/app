/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import tailwind from 'tailwind-rn'
import { useSelector } from 'react-redux'

import { FontAwesome5 } from '@expo/vector-icons'

const styles = StyleSheet.create({
  root: {
    height: '100%',
  },
})

const Settings = ({ navigation }) => {
  const { name } = useSelector(
    // eslint-disable-next-line no-shadow
    (state) => state.app.user,
  )
  const items = [
    {
      label: 'My Personal Details',
      icon: (
        <Text
          style={tailwind('pl-0.5 self-center pt-2 font-bold text-blue-600')}
        >
          {name[0]}
        </Text>
      ),
    },
    {
      label: 'Change MySJ ID',
      icon: (
        <FontAwesome5
          style={{
            position: 'absolute',
            right: 10,
            paddingTop: 10,
          }}
          name="pen"
          size={14}
          color="black"
        />
      ),
    },
    {
      label: 'Change Password',
      icon: (
        <FontAwesome5
          style={{
            position: 'absolute',
            right: 11,
            paddingTop: 10,
          }}
          name="lock"
          size={14}
          color="black"
        />
      ),
    },
    {
      label: 'MySejahtera Helpdesk',
      icon: (
        <FontAwesome5
          style={{
            position: 'absolute',
            right: 11,
            paddingTop: 10,
          }}
          name="life-ring"
          size={16}
          color="black"
        />
      ),
    },
    {
      label: 'Change Language',
      icon: (
        <FontAwesome5
          style={{
            position: 'absolute',
            right: 10,
            paddingTop: 10,
          }}
          name="globe-americas"
          size={16}
          color="black"
        />
      ),
    },
    {
      label: 'Privacy Policy',
      icon: (
        <FontAwesome5
          style={{
            position: 'absolute',
            right: 10,
            paddingTop: 10,
          }}
          name="door-closed"
          size={16}
          color="black"
        />
      ),
    },
    {
      label: 'Logout',
      icon: (
        <FontAwesome5
          style={{
            position: 'absolute',
            right: 10,
            paddingTop: 10,
          }}
          name="sign-out-alt"
          size={16}
          color="black"
        />
      ),
    },
  ]

  return (
    <View style={styles.root}>
      <View
        style={[
          tailwind('bg-white mt-4'),
          {
            height: 370,
            width: '95%',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 5,
          },
        ]}
      >
        {items.map((item, index) => (
          <TouchableOpacity
            key={item.label + index}
            style={tailwind('flex pt-2 flex-row items-center mb-2')}
          >
            <View
              style={[
                tailwind('ml-2 bg-gray-200 w-9 h-9'),
                { borderRadius: 999 },
              ]}
            >
              {item.icon}
            </View>
            <Text style={tailwind('pl-4 ')}>{item.label}</Text>
            <FontAwesome5
              style={{
                position: 'absolute',
                right: 10,
                paddingTop: 10,
              }}
              name="chevron-right"
              size={16}
              color="gray"
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}
export default Settings
