/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native'
import tailwind from 'tailwind-rn'
import { colors } from 'theme'
import Svg from 'components/Svg'
import { Avatar, Button } from 'native-base'

import { useSelector } from 'react-redux'

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
  const { name, email, state, passportNumber } = useSelector(
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
                Low risk, No Symptopm
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
      </ScrollView>
    </View>
  )
}
export default Home
