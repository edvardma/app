import React from 'react'
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native'
import tailwind from 'tailwind-rn'
import Svg from 'components/Svg'
import Moment from 'react-moment'
import { Button } from 'native-base'
import { checkOut } from 'slices/checkin.slice'
import { useDispatch } from 'react-redux'

const styles = StyleSheet.create({
  root: {
    paddingRight: 10,
    paddingLeft: 10,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 30,
    paddingBottom: 30,

  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },

})

const CheckInHistoryCard = ({
  location,
  date,
  checkedOut,
  id,
  handleCheckOut,
  goToHistory,
}) => {
  const dispatch = useDispatch()
  return (
    <>
      <View style={[styles.root, styles.shadow]}>
        <View
          style={[
            { backgroundColor: 'white' },
            tailwind('w-full flex flex-row items-center pt-5 pb-6 rounded-md px-3'),
          ]}
        >
          <Svg name="shopPop" height="80" width="60" />
          <View style={tailwind('w-10/12 flex flex-col content-center mt-1 ')}>
            <TouchableOpacity onPress={goToHistory} style={tailwind('absolute -mt-4 right-1')}>
              <Text style={tailwind('text-blue-600 text-xs ')}>
                History
              </Text>
            </TouchableOpacity>
            <View style={tailwind('flex flex-row justify-start')}>
              <Text style={tailwind('text-black text-xs pl-2')}>
                Last Check-in
              </Text>
            </View>
            <Text
              style={tailwind('text-black uppercase pl-2  w-10/12')}
            >
              {location}
            </Text>
            <Text style={tailwind('text-gray-600 text-xs pl-2 ')}>
              <Moment format="MMM D, YYYY, LTS" element={Text}>
                {date}
              </Moment>
            </Text>
            {!checkedOut ? (
              <View style={tailwind('w-full pl-2 pt-2 ')}>
                <Button
                  colorScheme="darkBlue"
                  size="md"
                  variant="outline"
                  onPress={() => {
                    handleCheckOut(id)
                    dispatch(checkOut({ id }))
                  }}
                >
                  Check-out
                </Button>
              </View>
            ) : null}
          </View>
          {checkedOut ? (
            <View style={tailwind('absolute bottom-2 right-2')}>
              <Text
                style={tailwind('text-black font-bold ')}
              >
                Checked-out
              </Text>
            </View>
          ) : null}
        </View>
      </View>
    </>
  )
}

export default CheckInHistoryCard
