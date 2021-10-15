import React from 'react'
import { StyleSheet, View } from 'react-native'
import tailwind from 'tailwind-rn'

const styles = StyleSheet.create({
  root: {
    paddingRight: 10,
    paddingLeft: 10,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 21,
  },
})

const CheckInCard = ({ bgColor, icon, children }) => (
  <>
    <View style={styles.root}>
      <View
        style={[
          { backgroundColor: bgColor ?? ' white', height: 65 },
          tailwind(
            'flex flex-row pt-3 content-center items-center rounded-md p-3',
          ),
        ]}
      >
        {icon}

        {children}
      </View>
    </View>
  </>
)

export default CheckInCard
