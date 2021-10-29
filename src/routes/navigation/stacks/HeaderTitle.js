import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text } from 'react-native'
import { fonts, colors } from 'theme'

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    color: 'white',
    fontFamily: fonts.Avenir.black,
    backgroundColor: colors.lightBlue,
    paddingTop: 10,
    paddingBottom: 10,
  },
})

const HeaderTitle = ({ title }) => <Text style={styles.title}>{title}</Text>

HeaderTitle.propTypes = { title: PropTypes.string }
HeaderTitle.defaultProps = { title: '' }

export default HeaderTitle
