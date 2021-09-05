import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  title: {
    fontSize: 19,
    color: 'white',
  },
})

const HeaderTitle = ({ title }) => <Text style={styles.title}>{title}</Text>

HeaderTitle.propTypes = { title: PropTypes.string }
HeaderTitle.defaultProps = { title: '' }

export default HeaderTitle
