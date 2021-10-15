import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text } from 'react-native'
import { fonts } from 'theme'

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    color: 'white',
    fontFamily: fonts.Avenir.black,
  },
})

const HeaderTitle = ({ title }) => <Text style={styles.title}>{title}</Text>

HeaderTitle.propTypes = { title: PropTypes.string }
HeaderTitle.defaultProps = { title: '' }

export default HeaderTitle
