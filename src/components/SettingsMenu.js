import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'

const styles = StyleSheet.create({
  button: {
    paddingLeft: 15,
  },
  wrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
  },
})

const HeaderRight = ({ navigation }) => (
  <View style={styles.wrapper}>
    <FontIcon.Button
      name="bars"
      color="white"
      backgroundColor="transparent"
      onPress={() => {
        navigation.navigate('Settings')
      }}
      style={styles.button}
    />
  </View>
)

HeaderRight.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func,
  }),
}

HeaderRight.defaultProps = {
  navigation: { openDrawer: () => null },
}

export default HeaderRight
