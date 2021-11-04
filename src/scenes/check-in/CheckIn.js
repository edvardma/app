import React from 'react'
import {
  StyleSheet, View, Text, Image, ScrollView,
} from 'react-native'
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
    height: 245,
    backgroundColor: colors.lightBlue,
  },
})

const Details = ({ navigation }) => {
  const { name, passportNumber } = useSelector((state) => state.app.user)
  const { scans } = useSelector((state) => state.checkin)

  const handleCheckOut = (id) => {
    navigation.navigate('CheckOut', { id })
  }
  const goToHistory = () => {
    navigation.navigate('ScansHistory')
  }
  return (
    <>
      <View style={[tailwind('flex flex-row justify-between'), { backgroundColor: colors.lightBlue }]}>
        <HeaderTitle title="Check-in" />
        <RefreshStatusButton big />
      </View>
      <ScrollView>
        <View style={[styles.topContainer]} />
        <View style={[tailwind('w-full  flex'), { marginTop: -225 }]}>
          <View style={[tailwind('self-center ')]}>
            <Image
              source={require('./checkin-icon.png')}
              style={{ resizeMode: 'cover', width: 120, height: 120 }}
            />
          </View>
          <View style={tailwind('pb-12 pt-2')}>
            <Text style={tailwind('text-white text-xl font-bold pb-1 pt-2 self-center')}>
              {name}
            </Text>
            <Text style={tailwind('text-white self-center')}>
              {passportNumber}
            </Text>
          </View>
        </View>
        <View style={tailwind('w-full flex flex-col pb-24')}>
          <CheckInCard
            icon={<Svg name="virus" width={35} height={35} />}
            bgColor="#62b4ec"
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
            icon={(
              <Image
                source={require('./vaccineb.png')}
                style={{ width: 35, height: 35 }}
              />
          )}
            bgColor="#fdd774"
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
      </ScrollView>
      <View style={tailwind('absolute bottom-0 w-full bg-white')}>
        <Button
          title="Check-in"
          color="white"
          style={tailwind('mx-5 mt-4 mb-3 w-11/12')}
          backgroundColor={colors.lightBlue}
          onPress={async () => {
            navigation.navigate('Scan')
            // navigation.navigate('CheckI/nSuccess', { location: 'xxxxxxx' })

            // dispatch(
            //   saveScanned({
            //     location: 'VENG SEDFCOSP SDFKSDF PDSOFDKSF',
            //     id: uuid.v4(),
            //     date: new Date(),
            //     checkedOut: false,
            //   }),
            // )
            // setTimeout(async () => {
            //   await persistor.purge()
            // }, 500)
            // alert('done')

            // navigation.navigate('InvalidQR')
          }}
        />
      </View>

    </>
  )
}
export default Details
