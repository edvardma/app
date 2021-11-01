import React, { useState, useEffect } from 'react'
import {
  TouchableOpacity, View, Dimensions, Image,
} from 'react-native'
import Button from 'components/Button'
import { useDispatch } from 'react-redux'
import { saveScanned } from 'slices/checkin.slice'
import uuid from 'react-native-uuid'
import { Camera } from 'expo-camera'
import { BarCodeScanner } from 'expo-barcode-scanner'
import tailwind from 'tailwind-rn'

const Scan = ({ navigation }) => {
  const dispatch = useDispatch()
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)
  const [scanner, setScanner] = useState(false)
  const [flash, setFlash] = useState('off')

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync()
      setHasPermission(status === 'granted')
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
    const id = uuid.v4()
    dispatch(
      saveScanned({
        id,
        location,
        date: new Date(),
        checkedOut: false,
      }),
    )
    navigation.navigate('CheckInSuccess', { location, id })
  }
  const dimensions = React.useRef(Dimensions.get('window'))
  const screenWidth = dimensions.current.width
  const height = Math.round((screenWidth * 16) / 9)

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
        padding: 0,
        shadowColor: '#000',
        shadowOffset: {
          width: 150,
          height: 150,
        },
        shadowOpacity: 0.12,
        shadowRadius: 60,
      }}
    >
      { hasPermission ? (
        <Camera
          barCodeScannerSettings={{
            barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
          }}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          ratio="16:9"
          flashMode={flash}
          style={{
            marginTop: 10,
            height,
            width: '100%',
          }}
        >
          <TouchableOpacity
            onPress={() => {
              flash === 'off' ? setFlash('torch') : setFlash('off')
            }}
            style={[
              {
                position: 'absolute',
                top: 20,
                right: 20,
              },
              tailwind('bg-gray-600 bg-opacity-60'),
            ]}
          >
            <Image
              source={require('./toggle_torch.png')}
              style={{
                resizeMode: 'cover',
                padding: 20,
                width: 50,
                height: 50,
              }}
            />
          </TouchableOpacity>
        </Camera>
      ) : null}
    </View>
  )
}
export default Scan
