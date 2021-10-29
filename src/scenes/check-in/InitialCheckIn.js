import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import tailwind from 'tailwind-rn'
import { colors } from 'theme'
import Button from 'components/Button'
import { useSelector } from 'react-redux'
import CheckInCard from 'components/CheckInCard'
import CheckInHistoryCard from 'components/CheckInHistoryCard'
import Svg from 'components/Svg'
import HeaderTitle from 'components/HeaderTitle'
import RefreshStatusButton from 'components/RefreshStatusButton'

const styles = StyleSheet.create({
  topContainer: {
    height: 200,
    backgroundColor: colors.lightBlue,
  },
})

const Details = ({ navigation }) => {
  const { status, passportNumber } = useSelector((state) => state.app.user)
  const { scans } = useSelector((state) => state.checkin)

  const handleCheckOut = (id) => {
    navigation.navigate('CheckOut', { id })
  }
  const goToHistory = () => {
    navigation.navigate('ScansHistory')
  }
  return (
    <View style={tailwind('h-full w-full bg-gray-200')}>
      <View
        style={[
          tailwind('flex flex-row justify-between px-4 pt-2 '),
          { backgroundColor: colors.lightBlue },
        ]}
      >
        <TouchableOpacity>
          <RefreshStatusButton />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={tailwind('bg-gray-200 rounded-full')}
        >
          <Text
            style={[{ color: colors.lightBlue }, tailwind('text-xs  px-2')]}
          >
            Close
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.topContainer]} />
      <View style={[tailwind('w-full -mt-48 flex')]}>
        <View style={[tailwind('self-center ')]}>
          <Image
            source={require('./checkin-icon.png')}
            style={{ resizeMode: 'cover', width: 120, height: 120 }}
          />
        </View>
        <View style={tailwind('pb-12 ')}>
          <Text style={tailwind('text-white font-bold pt-3 self-center')}>
            {status}
          </Text>
          <Text style={tailwind('text-white self-center')}>
            {passportNumber}
          </Text>
        </View>
      </View>
      <View style={tailwind('w-full flex flex-col ')}>
        <CheckInCard
          icon={<Svg name="virus" width={35} height={35} />}
          bgColor="#5caaff"
        >
          <View style={tailwind('flex flex-col content-center')}>
            <Text style={tailwind('text-white  pl-2 ')}>
              COVID-19 Risk Status
            </Text>
            <Text style={tailwind('text-white text-lg font-bold pl-2 ')}>
              Low Risk No Symptom
            </Text>
          </View>
        </CheckInCard>

        <CheckInCard
          icon={
            <Image
              source={require('./vaccineb.png')}
              style={{ width: 35, height: 35 }}
            />
          }
          bgColor="#FDD875"
        >
          <View style={tailwind('flex flex-col content-center')}>
            <Text style={tailwind('text-black pl-2 ')}>
              Covid-19 Vaccination Status
            </Text>
            <Text style={tailwind('text-black text-lg font-bold pl-2 ')}>
              Fully Vaccinated
            </Text>
          </View>
        </CheckInCard>
        {scans.length ? (
          <CheckInHistoryCard
            key="history-item"
            location={scans[0].location}
            date={scans[0].date}
            id={scans[0].id}
            handleCheckOut={handleCheckOut}
            goToHistory={goToHistory}
            checkedOut={scans[0].checkedOut}
          />
        ) : null}
      </View>
      <View style={tailwind('absolute bottom-0 w-full bg-white')}>
        <Button
          title="Check-in"
          color="white"
          style={tailwind('mx-5 my-3 w-11/12')}
          backgroundColor={colors.lightBlue}
          onPress={async () => {
            navigation.navigate('Scan')
          }}
        />
      </View>
    </View>
  )
}
export default Details
