/* eslint-disable react/jsx-wrap-multilines */
import React from 'react'
// eslint-disable-next-line object-curly-newline
import { Actionsheet, useDisclose } from 'native-base'
import { Text, TouchableOpacity } from 'react-native'
import Svg from 'components/Svg'
import tailwind from 'tailwind-rn'

const HomePageActionSheet = () => {
  const { isOpen, onOpen, onClose } = useDisclose()
  return (
    <>
      <TouchableOpacity onPress={onOpen}>
        <Svg style={{ marginRight: 'auto', marginLeft: 'auto' }} name="main9" />
        <Text style={tailwind('text-center text-xs font-thin pt-1')}>More</Text>
      </TouchableOpacity>

      <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
        <Actionsheet.Content>
          <Actionsheet.Item
            startIcon={
              <Svg
                style={{ marginRight: 'auto', marginLeft: 'auto' }}
                name="main1"
              />
            }
          >
            Share
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  )
}

export default HomePageActionSheet
