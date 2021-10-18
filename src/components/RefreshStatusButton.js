import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { fonts } from 'theme'
import { Ionicons } from '@expo/vector-icons'

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    color: 'white',
    fontFamily: fonts.Avenir.regular,
    paddingRight: 9,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 21,
  },
})

const RefreshStatusButton = () => (
  <>
    <View style={styles.container}>
      <Ionicons
        style={{
          paddingRight: 8,
        }}
        name="md-sync"
        size={16}
        color="white"
      />
      <Text style={styles.title}>Refresh Status</Text>
    </View>
  </>
)

export default RefreshStatusButton
