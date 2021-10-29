import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
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
    paddingTop: 21,
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
      <View style={styles.root}>
        <View
          style={[
            { backgroundColor: 'white', height: checkedOut ? 130 : 150 },
            tailwind('flex flex-row items-center pt-3 rounded-md p-3'),
          ]}
        >
          <Svg name="shopPop" height="80" width="60" />
          <View style={tailwind('flex flex-col content-center mt-1')}>
            <TouchableOpacity onPress={goToHistory}>
              <View style={tailwind('flex flex-row justify-end ')}>
                <Text style={tailwind('text-blue-600 text-xs mr-4')}>
                  History
                </Text>
              </View>
            </TouchableOpacity>
            <View style={tailwind('flex flex-row justify-start')}>
              <Text style={tailwind('text-black text-xs pl-2')}>
                Last Check-in
              </Text>
            </View>
            <Text
              style={tailwind('text-black text-lg pl-2 capitalize w-10/12')}
            >
              {location}
            </Text>
            <Text style={tailwind('text-gray-600 text-xs pl-2 ')}>
              <Moment format="MMM D, YYYY, LTS" element={Text}>
                {date}
              </Moment>
            </Text>
            {!checkedOut ? (
              <View style={tailwind('w-72 pl-2 pt-2 pb-4')}>
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
            <Text
              style={tailwind('text-black font-bold absolute bottom-2 right-2')}
            >
              Checked-out
            </Text>
          ) : null}
        </View>
      </View>
    </>
  )
}

export default CheckInHistoryCard
