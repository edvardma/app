/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native'
import tailwind from 'tailwind-rn'
import { colors } from 'theme'
import Svg from 'components/Svg'
import { Avatar, Button } from 'native-base'
import Moment from 'react-moment'
import { useSelector } from 'react-redux'

const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  root: {
    height: '100%',
  },
  topContainer: {
    height: 180,
    backgroundColor: colors.lightBlue,
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
  } = useSelector(
    // eslint-disable-next-line no-shadow
    (state) => state.app.user,
  )

  return (
    <View style={styles.root}>
      <ScrollView>
        <View style={[styles.topContainer]} />
        <View style={[tailwind('w-full -mt-8 flex')]}>
          <View
            style={[
              tailwind(
                'w-11/12 self-center flex flex-row items-center bg-white rounded-md -mt-32 h-16 p-2',
              ),
            ]}
          >
            <TouchableOpacity
              onLongPress={() => {
                navigation.navigate('Setup')
              }}
              delayLongPress={2000}
            >
              <Avatar
                size="md"
                bg="gray.100"
                // source={{
                //   uri: '',
                // }}
              >
                {name[0]}
              </Avatar>
            </TouchableOpacity>

            <View style={[tailwind('flex flex-col pl-2')]}>
              <Text style={tailwind('pl-1 font-bold text-sm')}>{name}</Text>
              <Text style={tailwind('pl-1 font-thin text-gray-700 text-sm')}>
                Low risk No Symptopm
              </Text>
            </View>
          </View>
        </View>
        <View
          style={[
            tailwind(
              'w-11/12 -mt-8 self-center flex flex-col bg-white rounded-md  h-32 p-2',
            ),
          ]}
        >
          <View style={tailwind('flex flex-row  pt-4 justify-between')}>
            <Text style={tailwind('text-left  text-sm text-gray-700')}>
              MySJ ID
            </Text>
            <Text style={tailwind('text-right text-sm text-black')}>
              {email}
            </Text>
          </View>

          <View style={tailwind('flex flex-row pt-4 justify-between')}>
            <Text style={tailwind('text-left  text-sm text-gray-700')}>
              IC / Passport No
            </Text>
            <Text style={tailwind('text-right text-sm text-black')}>
              {passportNumber}
            </Text>
          </View>

          <View style={tailwind('flex flex-row pt-4 justify-between')}>
            <Text style={tailwind('text-left  text-sm text-gray-700')}>
              State
            </Text>
            <Text style={tailwind('text-right text-sm text-black')}>
              {state}
            </Text>
          </View>
        </View>
        <View
          style={[
            tailwind(
              'w-11/12 mt-8 self-center justify-between flex flex-row bg-white rounded-3xl  h-10 p-2',
            ),
          ]}
        >
          <Text style={tailwind('text-left pl-10 text-sm text-gray-700')}>
            Click to refresh your profile
          </Text>
          <Button
            _text={{ style: { color: 'black' } }}
            size="xs"
            backgroundColor={colors.lightGrayPurple}
          >
            Refresh
          </Button>
        </View>
        <View
          style={[
            { minHeight: 400 },
            tailwind(
              'w-11/12 mt-8 self-center flex flex-col justify-start content-start bg-white rounded-xl p-2',
            ),
          ]}
        >
          <Text
            style={tailwind('text-left  pl-2 italic text-sm text-gray-700')}
          >
            As of 19 Sep 2021, 5:16 PM
          </Text>
          <View
            style={[
              tailwind('flex flex-row mt-4  bg-blue-400 w-full  h-20 p-2'),
            ]}
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
              <Text style={[tailwind('text-left text-xs p-2  text-gray-700')]}>
                Current Location Risk :
                <Text style={[tailwind('text-left text-xs p-2  text-red-700')]}>
                  Red
                </Text>
              </Text>
            </View>

            <View
              style={[
                tailwind('h-10 border border-gray-200 pt-1 w-5/12 bg-white'),
                { borderLeftColor: 'green', borderLeftWidth: 6 },
              ]}
            >
              <Text style={[tailwind('text-left text-xs p-1  text-gray-700')]}>
                High Ris dependent:
                <Text
                  style={[tailwind('text-left text-xs p-1  text-green-700')]}
                >
                  No
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <View
          style={[
            tailwind('bg-gray-100 h-14 border-gray-300'),
            { borderBottomRightRadius: 22, borderBottomLeftRadius: 22 },
            { borderTopWidth: 1 },
          ]}
        >
          <View style={tailwind('flex flex-row')}>
            <View style={tailwind('pl-4 w-9/12')}>
              <Text style={tailwind('text-xs text-black mt-2')}>
                Sla tunjukkan tiket ini kepadda pemilik permis apabila diminta
              </Text>
            </View>
            <View style={tailwind('pr-4 w-2/12 mt-2')}>
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
            height: windowHeight - (windowHeight * 2.1) / 10,
            backgroundColor: '#FDD875',
            marginRight: 'auto',
            marginLeft: 'auto',
            borderWidth: 1,
            borderColor: '#3d3a3a',
            borderRadius: 50,
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
  )
}
export default Home
