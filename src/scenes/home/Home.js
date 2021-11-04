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
  SafeAreaView,
} from 'react-native'
import tailwind from 'tailwind-rn'
import { fonts, colors } from 'theme'
import Svg from 'components/Svg'
import { Avatar } from 'native-base'
import HomePageActionSheet from 'components/HomePageActionSheet'
// import { useSelector } from 'react-redux'
//   const scans = useSelector((state) => state.checkin.scans)
import Image from 'react-native-scalable-image'
import HeaderTitle from 'components/HeaderTitle'

const styles = StyleSheet.create({
  topContainer: {
    height: 150,
    backgroundColor: colors.lightBlue,
  },
})
const icons = Array(9)
  .fill()
  .map((v, i) => ({ icon: `main${i + 1}` }))

const Home = () => {
  const [activeTab, setActiveTab] = React.useState(0)
  const [titleCenter, setTitleCenter] = React.useState(false)
  return (
    <SafeAreaView>
      <HeaderTitle center={titleCenter} title="MySejahtera" />
      <ScrollView
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
        <View style={[styles.topContainer]} />
        <View style={[tailwind('w-full flex'), { marginTop: -190 }]}>
          <View style={[tailwind('self-center w-11/12')]}>
            <View style={[tailwind('bg-white w-full mt-12 rounded-md')]}>
              <View style={tailwind('flex flex-row mt-4')}>
                <TouchableOpacity style={tailwind('w-4/12')}>
                  <Svg
                    style={{ marginRight: 'auto', marginLeft: 'auto' }}
                    name={icons[0].icon}
                  />
                  <Text style={[tailwind('text-center text-xs font-thin pt-1'), { fontFamily: fonts.Avenir.regular }]}>
                    COVID-19 Status
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={tailwind('w-4/12 ')}>
                  <Svg
                    style={{ marginRight: 'auto', marginLeft: 'auto' }}
                    name={icons[1].icon}
                  />
                  <Text style={[tailwind('text-center text-xs font-thin pt-1'), { fontFamily: fonts.Avenir.regular }]}>
                    COVID-19 Vaccination
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={tailwind('w-4/12')}>
                  <Svg
                    style={{ marginRight: 'auto', marginLeft: 'auto' }}
                    name={icons[2].icon}
                  />
                  <Text style={[tailwind('text-center text-xs font-thin pt-1'), { fontFamily: fonts.Avenir.regular }]}>
                    COVID-19 Self Test
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={tailwind('flex flex-row mt-4')}>
                <TouchableOpacity style={tailwind('w-4/12')}>
                  <Svg
                    style={{ marginRight: 'auto', marginLeft: 'auto' }}
                    name={icons[3].icon}
                  />
                  <Text style={[tailwind('text-center text-xs font-thin pt-1'), { fontFamily: fonts.Avenir.regular }]}>
                    Digital Health
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={tailwind('w-4/12')}>
                  <Svg
                    style={{ marginRight: 'auto', marginLeft: 'auto' }}
                    name={icons[4].icon}
                  />
                  <Text style={[tailwind('text-center text-xs font-thin pt-1'), { fontFamily: fonts.Avenir.regular }]}>
                    Hotspot
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={tailwind('w-4/12')}>
                  <Svg
                    style={{ marginRight: 'auto', marginLeft: 'auto' }}
                    name={icons[5].icon}
                  />
                  <Text style={[tailwind('text-center text-xs font-thin pt-1'), { fontFamily: fonts.Avenir.regular }]}>
                    Helpdesk
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={tailwind('flex flex-row mb-4 mt-4')}>
                <TouchableOpacity style={tailwind('w-4/12')}>
                  <Svg
                    style={{ marginRight: 'auto', marginLeft: 'auto' }}
                    name={icons[6].icon}
                  />
                  <Text style={[tailwind('text-center text-xs font-thin pt-1'), { fontFamily: fonts.Avenir.regular }]}>
                    Manage Dependents
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={tailwind('w-4/12')}>
                  <Svg
                    style={{ marginRight: 'auto', marginLeft: 'auto' }}
                    name={icons[7].icon}
                  />
                  <Text style={[tailwind('text-center text-xs font-thin pt-1'), { fontFamily: fonts.Avenir.regular }]}>
                    Health Facilities
                  </Text>
                </TouchableOpacity>
                <View style={tailwind('w-4/12')}>
                  <HomePageActionSheet />
                </View>
              </View>
            </View>
          </View>
          <View style={[tailwind('w-11/12 self-center mt-4 rounded-md bg-white h-10')]}>
            <View style={tailwind('flex flex-row justify-around ')}>
              <TouchableOpacity
                onPress={() => setActiveTab(0)}
                style={{
                  width: '50%',
                  paddingTop: 9,
                  ...(!activeTab && {
                    borderBottomWidth: 1,
                    borderBottomColor: 'red',
                    borderBottomStyle: 'solid',
                  }),
                }}
              >
                <Text style={{ fontFamily: fonts.Avenir.regular, textAlign: 'center', paddingBottom: 11, fontWeight: !activeTab ? 'bold' : 'normal' }}>
                  Things to know
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setActiveTab(1)}
                style={{
                  width: '50%',
                  paddingTop: 9,
                  ...(activeTab && {
                    borderBottomWidth: 1,
                    borderBottomColor: 'red',
                    borderBottomStyle: 'solid',
                  }),
                }}
              >
                <Text style={{ fontFamily: fonts.Avenir.regular, textAlign: 'center', paddingBottom: 11, fontWeight: activeTab ? 'bold' : 'normal' }}>
                  Things to do
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[tailwind('w-11/12 self-center mt-4 rounded-md bg-white ')]}>
            <View style={tailwind('flex flex-row justify-start p-2')}>
              <Avatar
                bg="green.500"
                source={require('./img2.png')}
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
                <Text style={tailwind('pl-1 text-gray-900 font-bold text-sm')}>
                  Perkara yang perlu diberi perhatian selepas menerima suntikan dos penggalak
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
              width={
                Dimensions.get('window').width
                - Dimensions.get('window').width / 12
              } // height will be calculated automatically
              source={require('./photo5771519251151174057.jpg')}
            />
          </View>
          <View style={[tailwind('w-11/12 self-center mt-4 rounded-md bg-white ')]}>
            <View style={tailwind('flex flex-row justify-start p-2')}>
              <Avatar
                bg="green.500"
                source={require('./img2.png')}
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
                <Text style={tailwind('pl-1 text-gray-900 font-bold text-sm')}>
                  Perkara yang perlu diberi perhatian selepas menerima suntikan dos penggalak
                </Text>
                <Text style={tailwind('pl-1 font-thin text-xs text-gray-800')}>
                  Ikuti kami di:{' '}
                  <Text style={tailwind('text-blue-600')}>
                    http://www.infosihat.go.mt{' '}
                  </Text>
                </Text>
              </View>
            </View>
            <View style={tailwind('flex flex-row justify-start')}>
              <Image
                width={
                Dimensions.get('window').width / 2
                - Dimensions.get('window').width / 12
              } // height will be calculated automatically
                source={require('./photo5771519251151174060.jpg')}
              />

              <Image
                width={
                Dimensions.get('window').width / 2
                - Dimensions.get('window').width / 12
              } // height will be calculated automatically
                source={require('./photo5771519251151174058.jpg')}
              />
            </View>
          </View>
          <View style={[tailwind('w-11/12 self-center mt-4 rounded-md bg-white ')]}>
            <View style={tailwind('flex flex-row justify-start p-2')}>
              <Avatar
                bg="green.500"
                source={require('./img2.png')}
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
                <Text style={tailwind('pl-1 text-gray-900 font-bold text-sm')}>
                  Pesanan sebleum menerima suntikan dos penggalak
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
              width={
                Dimensions.get('window').width
                - Dimensions.get('window').width / 12
              } // height will be calculated automatically
              source={require('./photo5771519251151174056.jpg')}
            />
          </View>
          <View style={[tailwind('w-11/12 self-center mt-4 rounded-md bg-white ')]}>
            <View style={tailwind('flex flex-row justify-start p-2')}>
              <Avatar
                bg="green.500"
                source={require('./img2.png')}
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
                <Text style={tailwind('pl-1 text-gray-900 font-bold text-sm')}>
                  Skim Peduli Kesihatan untuk Kumpulan B480 (PeKa B40)
                </Text>
                <Text style={tailwind('pl-1 font-thin text-xs text-gray-800')}>
                  Terdapat 4 manafaat yang orang ramai dapat melalui PeKa B40
                  antaranya saringan kesihatan bantuan alat oerubatan, insentif melengkaplan rawatan kanse dan insentif tambang pengankutan
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
              width={
                Dimensions.get('window').width
                - Dimensions.get('window').width / 12
              } // height will be calculated automatically
              source={require('./photo5771519251151174059.jpg')}
            />
          </View>
          <View style={[tailwind('w-11/12 self-center mt-4 rounded-md bg-white ')]}>
            <View style={tailwind('flex flex-row justify-start p-2')}>
              <Avatar
                bg="green.500"
                source={require('./img2.png')}
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
              width={
                Dimensions.get('window').width
                - Dimensions.get('window').width / 12
              } // height will be calculated automatically
              source={require('./delta.jpg')}
            />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default Home
