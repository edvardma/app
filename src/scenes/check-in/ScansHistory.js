import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native'
import { colors } from 'theme'
import tailwind from 'tailwind-rn'
import { useSelector } from 'react-redux'
import { Alert } from 'native-base'
import Moment from 'react-moment'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#e4e8f0',
  },
})

const ScansHistory = ({ navigation }) => {
  const { history } = useSelector((state) => state.checkin)

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Alert w="94%" style={tailwind('mt-4 self-center')} status="info">
        <Text style={tailwind('self-start text-xs italic text-green-800')}>
          Your check-in history will be removed if you logout or reinstall the
          application
        </Text>
        <Text style={tailwind('self-start text-xs pt-2 italic text-green-800')}>
          Check-out details will be displayed here. if you have not checked out,
          you can click on a past check-in to check-out accordingly
        </Text>
      </Alert>
      <View style={tailwind('flex flex-col items-center')}>
        {history.map((item) => (
          <TouchableOpacity
            onPress={() => {
              if (item.type === 'checkIn') {
                navigation.navigate('CheckInSuccess', {
                  location: item.location,
                })
              } else navigation.navigate('CheckOut', { id: item.id })
            }}
            key={`history-${item.id}${item.type}`}
            style={[
              { width: '90%' },
              tailwind('bg-white rounded-sm h-14 mt-4'),
            ]}
          >
            <View style={tailwind('flex flex-row items-center')}>
              <Image
                source={require('./location.png')}
                style={tailwind('h-10 w-10 ml-2 mt-2')}
              />
              <View style={tailwind('flex flex-col content-center')}>
                <Text style={tailwind('text-sm pl-2 w-10/12')}>
                  {item.type === 'checkIn' ? 'Check-in ' : 'Check-out '}at{' '}
                  {item.location}
                </Text>
                <Text style={tailwind('text-xs text-gray-700 pl-2')}>
                  <Moment format="MMM D, YYYY, LTS" element={Text}>
                    {item.date}
                  </Moment>
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default ScansHistory
