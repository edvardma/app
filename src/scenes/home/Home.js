/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import tailwind from 'tailwind-rn'
import { colors } from 'theme'
import Svg from 'components/Svg'
import { Avatar } from 'native-base'
import HomePageActionSheet from 'components/HomePageActionSheet'
// import { useSelector } from 'react-redux'
//   const scans = useSelector((state) => state.checkin.scans)
import Image from 'react-native-scalable-image'

const styles = StyleSheet.create({
  topContainer: {
    height: '32%',
    backgroundColor: colors.lightBlue,
  },
})
const icons = Array(9)
  .fill()
  .map((v, i) => ({ icon: `main${i + 1}` }))

const Home = () => {
  const [activeTab, setActiveTab] = React.useState(0)
  return (
    <ScrollView>
      <View style={[styles.topContainer]} />
      <View style={[tailwind('w-full -mt-96 flex')]}>
        <View style={[tailwind('self-center w-11/12')]}>
          <View style={[tailwind('bg-white h-72 w-full mt-12 rounded-md')]}>
            <View style={tailwind('flex flex-row mt-4')}>
              <View style={tailwind('w-4/12')}>
                <Svg
                  style={{ marginRight: 'auto', marginLeft: 'auto' }}
                  name={icons[0].icon}
                />
                <Text style={tailwind('text-center text-xs font-thin pt-1')}>
                  COVID-19 Status
                </Text>
              </View>
              <View style={tailwind('w-4/12 ')}>
                <Svg
                  style={{ marginRight: 'auto', marginLeft: 'auto' }}
                  name={icons[1].icon}
                />
                <Text style={tailwind('text-center text-xs font-thin pt-1')}>
                  COVID-19 Vaccination
                </Text>
              </View>
              <View style={tailwind('w-4/12')}>
                <Svg
                  style={{ marginRight: 'auto', marginLeft: 'auto' }}
                  name={icons[2].icon}
                />
                <Text style={tailwind('text-center text-xs font-thin pt-1')}>
                  COVID-19 Self Test
                </Text>
              </View>
            </View>
            <View style={tailwind('flex flex-row mt-8')}>
              <View style={tailwind('w-4/12')}>
                <Svg
                  style={{ marginRight: 'auto', marginLeft: 'auto' }}
                  name={icons[3].icon}
                />
                <Text style={tailwind('text-center text-xs font-thin pt-1')}>
                  Digital Health
                </Text>
              </View>
              <View style={tailwind('w-4/12')}>
                <Svg
                  style={{ marginRight: 'auto', marginLeft: 'auto' }}
                  name={icons[4].icon}
                />
                <Text style={tailwind('text-center text-xs font-thin pt-1')}>
                  Hotspot
                </Text>
              </View>
              <View style={tailwind('w-4/12')}>
                <Svg
                  style={{ marginRight: 'auto', marginLeft: 'auto' }}
                  name={icons[5].icon}
                />
                <Text style={tailwind('text-center text-xs font-thin pt-1')}>
                  Helpdesk
                </Text>
              </View>
            </View>
            <View style={tailwind('flex flex-row mt-8')}>
              <View style={tailwind('w-4/12')}>
                <Svg
                  style={{ marginRight: 'auto', marginLeft: 'auto' }}
                  name={icons[6].icon}
                />
                <Text style={tailwind('text-center text-xs font-thin pt-1')}>
                  Manage Dependents
                </Text>
              </View>
              <View style={tailwind('w-4/12')}>
                <Svg
                  style={{ marginRight: 'auto', marginLeft: 'auto' }}
                  name={icons[7].icon}
                />
                <Text style={tailwind('text-center text-xs font-thin pt-1')}>
                  Health Facilities
                </Text>
              </View>
              <View style={tailwind('w-4/12')}>
                <HomePageActionSheet />
              </View>
            </View>
          </View>
        </View>
        <View style={[tailwind('w-11/12 self-center mt-8 bg-white h-10')]}>
          <View style={tailwind('flex flex-row justify-around ')}>
            <TouchableOpacity
              onPress={() => setActiveTab(0)}
              style={{
                width: '50%',
                paddingTop: 8,
                ...(!activeTab && {
                  borderBottomWidth: 1,
                  borderBottomColor: 'red',
                  borderBottomStyle: 'solid',
                }),
              }}
            >
              <Text style={{ textAlign: 'center', paddingBottom: 11 }}>
                Things to know
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setActiveTab(1)}
              style={{
                width: '50%',
                paddingTop: 8,
                ...(activeTab && {
                  borderBottomWidth: 1,
                  borderBottomColor: 'red',
                  borderBottomStyle: 'solid',
                }),
              }}
            >
              <Text style={{ textAlign: 'center', paddingBottom: 11 }}>
                Things to do
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[tailwind('w-11/12 self-center mt-8 bg-white ')]}>
          <View style={tailwind('flex flex-row justify-start p-5')}>
            <Avatar
              bg="green.500"
              source={{
                uri: 'https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg',
              }}
            >
              SS
            </Avatar>

            <View>
              <Text style={tailwind('pl-2 font-thin text-sm')}>CPRC KKM</Text>
              <Text style={tailwind('pl-2 font-thin text-xs text-gray-600 ')}>
                29 Sep 2021,10:20 AM
              </Text>
            </View>
          </View>
          <View style={tailwind('flex flex-row justify-start pl-5')}>
            <View>
              <Text style={tailwind('pl-1 font-thin text-sm')}>
                Varian Delta
              </Text>
              <Text style={tailwind('pl-1 font-thin text-xs text-gray-800')}>
                Ikuti kami di:{' '}
                <Text style={tailwind('text-blue-600')}>
                  http://www.infosihat.go.mt{' '}
                </Text>
              </Text>
            </View>
          </View>
          <Image
            width={Dimensions.get('window').width} // height will be calculated automatically
            source={require('./delta.jpg')}
          />
        </View>

        <View style={[tailwind('w-11/12 self-center mt-8 bg-white ')]}>
          <View style={tailwind('flex flex-row justify-start p-5')}>
            <Avatar
              bg="green.500"
              source={{
                uri: 'https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg',
              }}
            >
              SS
            </Avatar>

            <View>
              <Text style={tailwind('pl-2 font-thin text-sm')}>CPRC KKM</Text>
              <Text style={tailwind('pl-2 font-thin text-xs text-gray-600 ')}>
                29 Sep 2021,10:20 AM
              </Text>
            </View>
          </View>
          <View style={tailwind('flex flex-row justify-start pl-5')}>
            <View>
              <Text style={tailwind('pl-1 font-thin text-sm')}>
                Varian Delta
              </Text>
              <Text style={tailwind('pl-1 font-thin text-xs text-gray-800')}>
                Ikuti kami di:{' '}
                <Text style={tailwind('text-blue-600')}>
                  http://www.infosihat.go.mt{' '}
                </Text>
              </Text>
            </View>
          </View>
          <Image
            width={Dimensions.get('window').width} // height will be calculated automatically
            source={require('./delta.jpg')}
          />
        </View>
      </View>
    </ScrollView>
  )
}
export default Home
