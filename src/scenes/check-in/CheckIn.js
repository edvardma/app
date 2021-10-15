import React, { useState, useEffect } from 'react'
import {
  StyleSheet, View, Text, Image, ScrollView,
} from 'react-native'
import tailwind from 'tailwind-rn'
import { colors } from 'theme'
import Button from 'components/Button'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { useSelector, useDispatch } from 'react-redux'
import { saveScanned } from 'slices/checkin.slice'
import CheckInCard from 'components/CheckInCard'
import CheckInHistoryCard from 'components/CheckInHistoryCard'
import Svg from 'components/Svg'
import { persistor } from 'utils/store'
// import { useSelector } from 'react-redux'
//   const scans = useSelector((state) => state.checkin.scans)
import uuid from 'react-native-uuid'

const styles = StyleSheet.create({
  topContainer: {
    height: 200,
    backgroundColor: colors.lightBlue,
  },
})

const Details = ({ navigation }) => {
  const dispatch = useDispatch()
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)
  const [scanner, setScanner] = useState(false)
  const { status, passportNumber } = useSelector((state) => state.app.user)
  const { scans } = useSelector((state) => state.checkin)
  useEffect(() => {
    (async () => {
      const { _status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(_status === 'granted')
    })()
  }, [])

  const handleBarCodeScanned = ({ data }) => {
    if (!data.toString().includes('mysejahtera.malaysia.gov.my')) {
      navigation.navigate('InvalidQR')
      return
    }
    setScanned(true)
    setScanner(false)
    const location = data
      .split('=')[2]
      .split('&')[0]
      .replace(/_/g, ' ')
      .replace(/-/g, ' ')

    navigation.navigate('CheckInSuccess', { location })
    dispatch(
      saveScanned({
        id: uuid.v4(),
        location,
        date: new Date(),
        checkedOut: false,
      }),
    )
  }

  return (
    <>
      {scanner ? (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      ) : (
        <>
          <ScrollView style={{ marginBottom: 65 }}>
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
              <CheckInCard icon={<Svg name="virus" />} bgColor="#51b6b8">
                <View style={tailwind('flex flex-col content-center')}>
                  <Text style={tailwind('text-white  pl-2 ')}>
                    COVID-19 Risk Status
                  </Text>
                  <Text style={tailwind('text-white text-lg font-bold pl-2 ')}>
                    Low Risk, No Symptom
                  </Text>
                </View>
              </CheckInCard>

              <CheckInCard icon={<Svg name="vaccine" />} bgColor="#51b6b8">
                <View style={tailwind('flex flex-col content-center')}>
                  <Text style={tailwind('text-white pl-2 ')}>
                    Covid-19 Vaccination Status
                  </Text>
                  <Text style={tailwind('text-white text-lg font-bold pl-2 ')}>
                    Vaccinated
                  </Text>
                </View>
              </CheckInCard>
              {scans.map((item, index) => (
                <CheckInHistoryCard
                  key={`history-item-${index}`}
                  location={item.location}
                  date={item.date}
                  id={item.id}
                  checkedOut={item.checkedOut}
                />
              ))}
            </View>
          </ScrollView>
          <View style={tailwind('absolute bottom-0 w-full bg-white')}>
            <Button
              title="Check-in"
              color="white"
              style={tailwind('m-5 w-11/12')}
              backgroundColor={colors.lightBlue}
              onPress={async () => {
                // setScanned(false)
                // setScanner(true)
                dispatch(
                  saveScanned({
                    location: 'VENG SEDFCOSP SDFKSDF PDSOFDKSF',
                    id: uuid.v4(),
                    date: new Date(),
                    checkedOut: false,
                  }),
                )
                setTimeout(async () => {
                  await persistor.purge()
                }, 500)
                alert('done')

                // navigation.navigate('InvalidQR')
              }}
            />
          </View>
        </>
      )}
    </>
  )
}
export default Details
