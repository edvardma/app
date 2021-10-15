import React from 'react'
import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native'
import { colors } from 'theme'
import Image from 'react-native-scalable-image'
import tailwind from 'tailwind-rn'
import Button from 'components/Button'
const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
})

const InvalidQR = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <View style={[tailwind('w-full p-5 bg-white'), { margin: 45 }]}>
      <Image
        width={
          Dimensions.get('window').width - Dimensions.get('window').width / 10
        } // height will be calculated automatically
        source={require('./warning.png')}
      />
      <Text style={{ fontSize: 21, textAlign: 'center' }}>
        This is not a vald MySejahtera QR code
      </Text>
      <Button
        onPress={() => {
          navigation.goBack()
        }}
        title="Try Again"
        color="white"
        style={{
          marginRight: 'auto',
          marginLeft: 'auto',
          width: 125,
          marginTop: 45,
          borderRadius: 45,
          backgroundColor: 'rgb(59, 130, 246)',
        }}
      />
    </View>
  </View>
)

export default InvalidQR
