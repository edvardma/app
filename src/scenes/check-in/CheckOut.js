import React from 'react'
import {
  StyleSheet, Text, View, ScrollView, Image,
} from 'react-native'
import { colors, fonts } from 'theme'
import tailwind from 'tailwind-rn'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import Moment from 'react-moment'
import { useSelector } from 'react-redux'

const styles = StyleSheet.create({
  root: {

    backgroundColor: colors.gray,
  },
  container: {
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    marginBottom: 100,
    backgroundColor: 'white',
    borderRadius: 22,
  },
  containerHeader: {
    height: '30%',
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
    backgroundColor: colors.gray,
  },
  HeaderIconContainer: {
    width: 70,
    height: 70,
    borderRadius: 999,
    borderWidth: 3,
    borderColor: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: 10,
  },
})

const CheckOut = ({ route }) => {
  const { id } = route.params
  const { scans } = useSelector((state) => state.checkin)
  const scan = scans[scans.findIndex((item) => item.id === id)]
  const { name, email } = useSelector((state) => state.app.user)
  return (
    <ScrollView style={styles.root}>
      <View style={styles.container}>
        <View style={[styles.containerHeader, tailwind('bg-blue-500')]}>
          <View
            style={[
              styles.HeaderIconContainer,
              tailwind('bg-blue-500 -mt-8 flex flex-col items-center'),
            ]}
          >
            <FontIcon
              style={tailwind('mt-2')}
              name="arrow-left"
              color={colors.white}
              size={25}
              solid
            />
            <Text
              style={{
                fontSize: 18,
                fontFamily: fonts.Helvetica.regular,
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              OUT
            </Text>
          </View>
          <View
            style={[
              tailwind('bg-blue-500 -mt-8 flex flex-row justify-between'),
              { borderTopLeftRadius: 22, borderTopRightRadius: 22 },
            ]}
          >
            <Image
              source={require('./checkin-icon.png')}
              style={{
                resizeMode: 'cover',
                width: 80,
                height: 80,
                margin: 20,
              }}
            />
            <View style={[tailwind('flex flex-col mt-5'), { padding: 20 }]}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 18,
                }}
              >
                Terima Kasih
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 11,
                }}
              >
                Pendaftaran anda berjaya!
              </Text>
            </View>
          </View>
        </View>
        <Text style={tailwind('text-center pt-5')}>Maklumat Check-In</Text>
        <Text style={tailwind('text-left pl-3 pt-2 text-xs text-gray-700')}>
          Lokasi
        </Text>
        <Text style={tailwind('text-left pl-3 text-sm text-black')}>
          {scan.location.toUpperCase()}
        </Text>
        <View style={tailwind('flex flex-row justify-between')}>
          <View>
            <Text style={tailwind('text-left pl-3 pt-3 text-xs text-gray-700')}>
              Nama
            </Text>
            <Text style={tailwind('text-left pl-3 text-sm text-black')}>
              {name}
            </Text>
          </View>

          <View>
            <Text
              style={tailwind('text-right pr-3 pt-3 text-xs text-gray-700')}
            >
              E-mail
            </Text>
            <Text style={tailwind('text-right pr-3 text-sm text-black')}>
              {email}
            </Text>
          </View>
        </View>
        <View style={tailwind('flex flex-row justify-between')}>
          <View>
            <Text style={tailwind('text-left pl-3 pt-3 text-xs text-gray-700')}>
              Tarikh
            </Text>
            <Text style={tailwind('text-left pl-3 text-sm text-black')}>
              <Moment format="MMM D, YYYY" element={Text}>
                {new Date()}
              </Moment>
            </Text>
          </View>
          <View>
            <Text
              style={tailwind('text-right pr-3 pt-3 text-xs text-gray-700')}
            >
              Masa
            </Text>
            <Text style={tailwind('text-right pr-3 text-sm text-black')}>
              <Moment format="LTS" element={Text}>
                {new Date()}
              </Moment>
            </Text>
          </View>
        </View>

        <View
          style={tailwind('flex flex-row justify-around mt-4 pb-3 bg-white')}
        >
          <View
            style={[
              tailwind('ml-2 rounded-lg h-12  w-5/12 '),
              { backgroundColor: '#11610c' },
            ]}
          >
            <Text style={tailwind('text-center text-xs pt-1 text-white')}>
              Status Risiko
            </Text>

            <Text style={tailwind('text-center text-white')}>Low</Text>
          </View>

          <View
            style={[
              tailwind('mr-2 rounded-lg h-12 w-5/12 bg-white '),
              {
                borderWidth: 1,
                borderColor: '#d6ded5',
                backgroundColor: '#FDD875',
              },
            ]}
          >
            <Text style={tailwind('text-center text-xs pt-1 text-gray-700')}>
              Status Vaksinasi
            </Text>

            <Text style={tailwind('text-center text-black')}>
              Fully Vaccinated
            </Text>
          </View>
        </View>
        <View
          style={[
            tailwind('bg-gray-100 h-14 border-gray-300 pb-2'),
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
      </View>
    </ScrollView>
  )
}
export default CheckOut
