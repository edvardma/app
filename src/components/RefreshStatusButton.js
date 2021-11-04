import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { fonts, colors } from 'theme'
import { Ionicons } from '@expo/vector-icons'

const RefreshStatusButton = ({ big, notBold }) => {
  const styles = StyleSheet.create({
    title: {
      fontSize: big ? 14 : 12,
      color: 'white',
      fontFamily: notBold ? fonts.Avenir.regular : fonts.Avenir.black,
      paddingRight: 9,
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: colors.lightBlue,
    },
  })
  return (
    <>
      <TouchableOpacity style={styles.container}>
        <Ionicons
          style={{
            paddingRight: 8,
          }}
          name="md-sync"
          size={big ? 20 : 16}
          color="white"
        />
        <Text style={styles.title}>Refresh Status</Text>
      </TouchableOpacity>
    </>
  )
}

export default RefreshStatusButton
