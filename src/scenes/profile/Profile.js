/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  Text,
  Easing,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native'
import tailwind from 'tailwind-rn'
import { colors } from 'theme'
import Svg from 'components/Svg'
import { Avatar, Button } from 'native-base'
import Moment from 'react-moment'
import { useSelector, useDispatch } from 'react-redux'
import HeaderTitle from 'components/HeaderTitle'
import SettingsMenu from 'components/SettingsMenu'
import { FontAwesome5 } from '@expo/vector-icons'
import { updateProfileRefreshDate } from 'slices/app.slice'

const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  root: {
    height: '100%',
    position: 'relative',
  },
  topContainer: {
    height: 150,
    backgroundColor: colors.lightBlue,
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
const icons = Array(9)
  .fill()
  .map((v, i) => ({ icon: `main${i + 1}` }))

const Home = ({ navigation }) => {
  const {
    name,
    email,
    state,
    passportNumber,
    certificateHospitalName,
    dose1Date,
    dose2Date,
    dose1Batch,
    dose2Batch,
    vaccineManufacturer,
    vaccineFaciality,
    pcrDate,
  } = useSelector(
    // eslint-disable-next-line no-shadow
    (state) => state.app.user,
  )

  const { profileRefreshDate } = useSelector((state) => state.app)
  const [titleCenter, setTitleCenter] = React.useState(false)
  const [rotation, setRotation] = React.useState(new Animated.Value(0))
  const dispatch = useDispatch()
  const handleRefresh = () => {
    dispatch(updateProfileRefreshDate())
    Animated.timing(
      rotation,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.bounce,
        useNativeDriver: true,
      },
    ).start()

    setTimeout(() => {
      setRotation(new Animated.Value(0))
    }, 1000)
  }
  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '2160deg'],
  })

  return (
    <>
      <View
        style={[tailwind('relative'), { backgroundColor: colors.lightBlue }]}
      >
        <View style={tailwind('w-full')}>
          <HeaderTitle center={titleCenter} title="Profile" />
        </View>
        <View style={tailwind('absolute right-2')}>
          <SettingsMenu navigation={navigation} />
        </View>
      </View>
      <View style={tailwind('relative')}>
        <View style={[styles.topContainer]} />

        <ScrollView
          style={[tailwind('w-full  mb-32 flex'), { marginTop: -140 }]}
          onScroll={(e) => {
            e.nativeEvent.contentOffset.y >= 10
              ? !titleCenter
                ? setTitleCenter(true)
                : false
              : titleCenter
                ? setTitleCenter(false)
                : false
          }}
          scrollEventThrottle={5}
        >
          <View
            style={[
              tailwind(
                'w-11/12 self-center flex flex-row items-center bg-white rounded-md mb-10  h-14 p-2',
              ),
              styles.shadow,
            ]}
          >
            <TouchableOpacity
              onLongPress={() => {
                navigation.navigate('Setup')
              }}
              delayLongPress={2000}
            >
              <View
                style={tailwind('h-10 border border-gray-200 w-10 bg-gray-100 rounded-full text-center flex flex-row items-center justify-center')}
              >
                <Text style={tailwind('text-center text-blue-500 font-bold')}>
                  {name.split(' ').length ? name.split(' ')[0][0] + name.split(' ')[1][0] : name[0]}
                </Text>
              </View>
            </TouchableOpacity>

            <View style={[tailwind('flex flex-col pl-2')]}>
              <Text style={tailwind('pl-1 font-bold text-sm')}>{name}</Text>
              <Text style={tailwind('pl-1 font-thin text-gray-700 text-sm')}>
                Low Risk No Symptopm
              </Text>
            </View>
          </View>
          <View
            style={[
              tailwind(
                'w-11/12 -mt-6 self-center flex flex-col bg-white rounded-md pr-2 pl-2',
              ),
              styles.shadow,
            ]}
          >
            <View style={tailwind('flex flex-row  pt-6 justify-between')}>
              <Text style={tailwind('text-left  text-sm text-gray-700')}>
                MySJ ID
              </Text>
              <Text style={tailwind('text-right text-sm font-bold text-black')}>
                {email}
              </Text>
            </View>

            <View style={tailwind('flex flex-row pt-4 justify-between')}>
              <Text style={tailwind('text-left  text-sm   text-gray-700')}>
                IC / Passport No
              </Text>
              <Text style={tailwind('text-right text-sm font-bold  text-black')}>
                {passportNumber}
              </Text>
            </View>

            <View style={tailwind('flex flex-row pt-4 pb-6 justify-between')}>
              <Text style={tailwind('text-left  text-sm text-gray-700')}>
                State
              </Text>
              <Text style={tailwind('text-right text-sm font-bold  text-black')}>
                {state}
              </Text>
            </View>
          </View>
          <View
            style={[
              tailwind(
                'w-11/12 mt-4 self-center justify-between flex flex-row bg-white rounded-3xl   p-2',
              ), styles.shadow,
            ]}
          >
            <View style={[tailwind('flex flex-row items-center py-2'), styles.shadow]}>
              <Animated.View
                style={{ transform: [{ rotate: spin }] }}
              >
                <FontAwesome5 name="sync" size={18} color="black" />
              </Animated.View>
              <Text style={tailwind('text-left pl-4 text-sm text-gray-700')}>
                Click to refresh your profile
              </Text>
            </View>
            <TouchableOpacity
              onPress={handleRefresh}
              style={tailwind('rounded-xl bg-gray-200 flex-col justify-center flex pr-2 pl-2')}
            >
              <Text style={tailwind('text-xs text-center')}>Refresh
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              { minHeight: 400 },

              tailwind(
                'w-11/12 mt-4 self-center flex flex-col justify-start content-start bg-white rounded-xl p-2',
              ),
            ]}
          >
            <Text
              style={tailwind('text-left  pl-2 italic text-sm text-gray-700')}
            >
              As of{' '}
              <Moment element={Text} format="D MMM y, LT">
                {profileRefreshDate}
              </Moment>
            </Text>
            <View
              style={[
                tailwind('flex flex-row mt-4 w-full  h-20 p-2'),
              ], { backgroundColor: '#62b4ec' }}
            >
              <View style={[tailwind('flex flex-col')]}>
                <Text
                  style={tailwind('text-left pl-2 font-bold text-xs text-white')}
                >
                  Status Risiko COVID-19
                </Text>
                <Text
                  style={tailwind('text-left pl-2 font-bold text-xs text-white')}
                >
                  COVID-19 Risk Status
                </Text>

                <Text
                  style={tailwind(
                    'text-left pt-2 pl-2 font-bold text-lg  text-white',
                  )}
                >
                  Risiko Redndah / Low Risk
                </Text>
              </View>

              <Image
                source={require('./mosti.png')}
                style={{
                  resizeMode: 'contain',
                  position: 'absolute',
                  top: 2,
                  right: 5,
                  width: 70,
                  height: 90,
                }}
              />
            </View>

            <Image
              source={require('./qr.png')}
              style={{
                resizeMode: 'contain',
                marginTop: 20,
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '100%',
                height: 200,
              }}
            />
            <View style={tailwind('flex flex-row justify-between mt-4 mb-2')}>
              <View
                style={[
                  tailwind('h-10 border border-gray-200 w-6/12 bg-white'),
                  { borderLeftColor: 'red', borderLeftWidth: 6 },
                ]}
              >
                <Text
                  multiline={false}
                  style={[
                    tailwind('text-left pl-1 pt-3  text-gray-700'),
                    { fontSize: 10 },
                  ]}
                >
                  Current Location Risk :
                  <Text
                    multiline={false}
                    style={[
                      { fontSize: 10 },
                      tailwind('text-left pl-1 pt-3  text-red-700'),
                    ]}
                  >
                    Red Zone
                  </Text>
                </Text>
              </View>

              <View
                style={[
                  tailwind('h-10 border border-gray-200 w-5/12 bg-white'),
                  { borderLeftColor: 'green', borderLeftWidth: 6 },
                ]}
              >
                <Text
                  multiline={false}
                  style={[
                    { fontSize: 10 },
                    tailwind('text-left pl-1  pt-3 text-gray-700'),
                  ]}
                >
                  High Risk dependent:
                  <Text
                    multiline={false}
                    style={[
                      { fontSize: 10 },
                      tailwind('text-left  pl-1 pt-3  text-green-700'),
                    ]}
                  >
                    No
                  </Text>
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[
              tailwind('bg-gray-200 h-16 w-11/12 border-gray-300 -mt-2 '),
              { borderBottomRightRadius: 15, borderBottomLeftRadius: 15 },
              { borderTopWidth: 1 },
              { marginLeft: 'auto', marginRight: 'auto' },
            ]}
          >
            <View style={tailwind('flex flex-row')}>
              <View style={tailwind(' w-9/12')}>
                <Text style={tailwind('text-xs text-gray-800 ml-2 mt-2')}>
                  This is the QR code for your MySejahtera profile. Please show this to authorities when requested.
                </Text>
              </View>
              <View style={tailwind('pr-2 pl-2 w-2/12 mt-2')}>
                <View style={tailwind('flex flex-row justify-between')}>
                  <Image
                    source={require('./img1.png')}
                    style={{
                      resizeMode: 'contain',
                      width: 30,
                      height: 30,
                      marginRight: 5,
                    }}
                  />
                  <Image
                    source={require('./img2.png')}
                    style={{
                      resizeMode: 'contain',
                      width: 30,
                      height: 30,
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
          <View
            style={[
              tailwind(' h-36 rounded-xl w-11/12 flex flex-row my-4'),
              { marginLeft: 'auto', marginRight: 'auto' },
              { backgroundColor: '#699c4c' },
            ]}
          >
            <View style={tailwind('flex flex-col w-7/12')}>
              <View
                style={tailwind('w-11/12 h-7 bg-gray-200 rounded-full mt-2 ml-2')}
              >
                <Text
                  style={[
                    { color: '#58843F' },
                    tailwind('text-xs text-center font-bold pt-1 px-2'),
                  ]}
                >
                  COVID-19 Negative
                </Text>
                <Text
                  multiline={false}
                  style={tailwind('text-xs text-white ml-2 mt-10')}
                >
                  Confirmation date:
                  <Moment element={Text} format="DD/MM/Y">
                    {pcrDate}
                  </Moment>
                </Text>
              </View>
            </View>
            <View style={tailwind('flex relative flex-col w-5/12')}>
              <Image
                source={require('./Lambang_Malaysia.png')}
                style={{
                  resizeMode: 'cover',
                  position: 'absolute',
                  width: 40,
                  height: 40,
                  right: 8,
                  top: 8,
                }}
              />
              <Text
                style={[
                  tailwind(
                    'text-lg absolute text-white top-16 right-2 text-center font-bold ',
                  ),
                ]}
              >
                PT-PCR
              </Text>
              <Text
                style={[
                  tailwind(
                    'text-xs absolute text-white bottom-2 right-2 text-center  ',
                  ),
                ]}
              >
                Source MKAK, KMM
              </Text>
            </View>
          </View>
          <View
            style={[
              {
                width: 100,
                height: 90,
                backgroundColor: 'white',
                marginRight: 'auto',
                marginLeft: 'auto',
                zIndex: 10,
                borderWidth: 1,
                borderColor: '#3d3a3a',
                borderRadius: 999999999,
              },
              tailwind('-mb-12'),
            ]}
          >
            <View style={tailwind('pl-2 pt-1')}>
              <Image
                source={require('./Lambang_Malaysia.png')}
                style={{
                  resizeMode: 'cover',
                  width: 85,
                  height: 60,
                  margin: 'auto',
                  marginTop: 8,
                }}
              />
            </View>
          </View>

          <View
            style={{
              width: '95%',
              height: 650,
              backgroundColor: '#FDD875',
              marginRight: 'auto',
              marginLeft: 'auto',
              borderWidth: 1,
              borderColor: '#3d3a3a',
              borderRadius: 50,
              marginBottom: 150,
            }}
          >
            <Text style={tailwind('text-center mt-16 font-bold text-xl')}>
              COVID-19 VACCINATION
            </Text>
            <Text style={tailwind('text-center mt-2 text-lg')}>
              Digital Certificate
            </Text>

            <View
              style={[
                tailwind('w-11/12 mt-1 bg-black'),
                { marginLeft: 'auto', marginRight: 'auto', height: 2 },
              ]}
            />
            <Text style={tailwind('text-center mt-1 text-lg')}>
              {name.toUpperCase()}
            </Text>
            <Text style={tailwind('text-center mt-1 text-lg')}>
              {passportNumber}
            </Text>
            <Text style={tailwind('text-center mt-1 text-lg')}>
              {certificateHospitalName}
            </Text>
            <View
              style={{
                width: '95%',
                height: 150,
                backgroundColor: 'rgba(255, 255, 255,0.6)',
                marginRight: 'auto',
                marginLeft: 'auto',
                borderRadius: 5,
              }}
            >
              <View style={tailwind('pl-2 pt-2')}>
                <Text style={tailwind('text-left font-bold text-sm')}>
                  Dose 1 :
                </Text>
                <Text style={tailwind('text-left text-gray-700 text-sm')}>
                  Date:{' '}
                  <Moment element={Text} format="DD-MMM-Y">
                    {dose1Date}
                  </Moment>
                  11:48 AM
                </Text>
                <Text style={tailwind('text-left text-gray-700 text-sm')}>
                  Manufacturer: {vaccineManufacturer}
                </Text>
                <Text style={tailwind('text-left text-gray-700 text-sm')}>
                  Facilitiey: {vaccineFaciality}
                </Text>
                <Text style={tailwind('text-left text-gray-700 text-sm')}>
                  Batch: {dose1Batch}
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '95%',
                height: 150,
                backgroundColor: 'rgba(255, 255, 255,0.6)',
                marginRight: 'auto',
                marginLeft: 'auto',
                marginTop: 10,
                borderRadius: 5,
              }}
            >
              <View style={tailwind('pl-2 pt-2')}>
                <Text style={tailwind('text-left font-bold text-sm')}>
                  Dose 2 :
                </Text>
                <Text style={tailwind('text-left text-gray-700 text-sm')}>
                  Date:{' '}
                  <Moment element={Text} format="DD-MMM-Y">
                    {dose2Date}
                  </Moment>
                  01:48 PM
                </Text>
                <Text style={tailwind('text-left text-gray-700 text-sm')}>
                  Manufacturer:{vaccineManufacturer}
                </Text>
                <Text style={tailwind('text-left text-gray-700 text-sm')}>
                  Facilitiey: {vaccineFaciality}
                </Text>
                <Text style={tailwind('text-left text-gray-700 text-sm')}>
                  Batch: {dose2Batch}
                </Text>
              </View>
            </View>
            <View style={tailwind('flex flex-row mt-2 justify-center')}>
              <View
                style={{
                  width: 70,
                  height: 75,
                  backgroundColor: 'rgba(255, 255, 255,0.6)',
                  marginRight: 5,
                  borderWidth: 1,
                  borderColor: 'black',
                  borderRadius: 5,
                }}
              >
                <Image
                  source={require('./big-qr.png')}
                  style={{
                    resizeMode: 'cover',
                    width: 35,
                    height: 35,
                    marginTop: 5,
                    marginRight: 'auto',
                    marginLeft: 'auto',
                  }}
                />
                <Text style={tailwind('text-gray-700 mt-2 text-center text-xs')}>
                  Show QR
                </Text>
              </View>
              <View
                style={{
                  width: 70,
                  height: 75,
                  borderWidth: 1,
                  borderColor: 'black',
                  marginLeft: 5,
                  backgroundColor: 'rgba(255, 255, 255,0.6)',
                  borderRadius: 5,
                }}
              >
                <Image
                  source={require('./pdf.png')}
                  style={{
                    resizeMode: 'cover',
                    width: 35,
                    height: 35,
                    marginTop: 5,
                    marginRight: 'auto',
                    marginLeft: 'auto',
                  }}
                />
                <Text style={tailwind('text-gray-700 mt-2 text-center text-xs')}>
                  Dwonload
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  )
}
export default Home
