import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text } from 'react-native'
import { fonts, colors } from 'theme'

const HeaderTitle = ({ title, center }) => {
  const styles = StyleSheet.create({
    title: {
      textAlign: center ? 'center' : 'left',
      fontSize: center ? 19 : 30,
      color: 'white',
      fontFamily: fonts.Avenir.black,
      paddingLeft: center ? 0 : 15,
      paddingTop: 5,
      paddingBottom: 5,
    },
    container: {
      height: 45,
      backgroundColor: colors.lightBlue,
    },
  })
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}
HeaderTitle.propTypes = { title: PropTypes.string }
HeaderTitle.defaultProps = { title: '' }

export default HeaderTitle
