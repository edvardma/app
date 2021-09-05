import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  StyleSheet, View, Text, Image,
} from 'react-native'
import tailwind from 'tailwind-rn'
import { colors } from 'theme'
import { Button } from 'react-native-elements'
import { BarCodeScanner } from 'expo-barcode-scanner'

const styles = StyleSheet.create({
  root: {
    height: '100%',
  },
  topContainer: {
    height: '30%',
    backgroundColor: colors.lightBlue,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
})

const Details = () => {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)
  const [scannedData, setScannedData] = useState(null)
  const [scanner, setScanner] = useState(false)
  const { name, status, email } = useSelector((state) => state.app.user)
  useEffect(() => {
    (async () => {
      const { _status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(_status === 'granted')
    })()
  }, [])

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true)
    setScanner(false)
    setScannedData(data)
    // eslint-disable-next-line no-alert
    alert(type)
    alert(scannedData)
  }

  // if (hasPermission === null) {
  //   return <Text>Requesting for camera permission</Text>
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>
  // }
  return (
    <View style={styles.root}>
      {scanner ? (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      ) : (
        <>
          <View style={[styles.topContainer]} />
          <View style={[tailwind('w-10/12 -mt-36 h-96 self-center')]}>
            <View
              style={[
                tailwind(
                  'h-full mb-12 w-full self-center bg-white p-5 pb-20 bg-white rounded-md',
                ),
                styles.shadow,
              ]}
            >
              <Image
                source={require('./scan.png')}
                style={{ resizeMode: 'cover', width: '100%', height: '100%' }}
              />

              <View style={tailwind('mb-12 ')}>
                <Text style={tailwind('text-gray-500 font-bold self-center')}>
                  {name}
                </Text>
                <Text style={tailwind('text-gray-500 font-bold  self-center')}>
                  {status}
                </Text>
                <Text style={tailwind('text-gray-500 self-center')}>
                  {email}
                </Text>
              </View>
            </View>

            <Button
              style={tailwind('pt-20')}
              title="Check-in"
              onPress={() => {
                setScanned(false)
                setScanner(true)
              }}
            />
          </View>
        </>
      )}
    </View>
  )
}
export default Details
