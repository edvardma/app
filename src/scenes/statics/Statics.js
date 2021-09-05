import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import tailwind from 'tailwind-rn'
import { colors } from 'theme'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveCategory } from 'slices/statics.slice'

const styles = StyleSheet.create({
  root: {
    height: '100%',
    width: '100%',
  },
  topContainer: {
    height: '30%',
    width: '100%',
    backgroundColor: colors.lightBlue,
  },
  mainContainer: {
    alignSelf: 'center',
  },
  chips: {
    alignSelf: 'center',
  },
  cards: { alignSelf: 'center' },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  'mx-auto': {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})

const Statics = () => {
  const dispatch = useDispatch()

  const categories = useSelector((state) => state.statics.categories)
  const cards = useSelector((state) => state.statics.statics)

  const Chip = ({ label, active, index }) => (
    <TouchableOpacity
      onPress={() => {
        dispatch(setActiveCategory(index))
      }}
    >
      <View
        style={[
          styles.shadow,
          tailwind(
            `flex h-10 w-28 items-center m-1 font-medium py-3 px-2 bg-white rounded-full ${
              active
                ? 'bg-white text-blue-500'
                : 'bg-transparent text-white border-white border'
            }`,
          ),
        ]}
      >
        <Text
          style={[
            tailwind(`${active ? 'text-blue-500' : 'text-white'}`),
            styles['mx-auto'],
          ]}
        >
          {label.toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  )
  const Card = ({ title, content }) => (
    <View
      style={[
        tailwind('max-w-md py-4 mx-4 px-8 bg-white rounded-lg my-5'),
        styles.shadow,
      ]}
    >
      <View>
        <Text style={tailwind('text-gray-800 text-3xl font-semibold')}>
          {title}
        </Text>
        <Text style={tailwind('mt-2 text-gray-600')}>{content}</Text>
      </View>
    </View>
  )

  return (
    <View style={styles.root}>
      <View style={styles.topContainer} />
      <View
        style={[
          tailwind(' h-full w-full '),
          styles.mainContainer,
          styles['mx-auto'],
        ]}
      >
        <ScrollView
          horizontal
          style={[styles.chips, tailwind('-mt-44 -mb-32 flex-row')]}
        >
          {categories.map((cat, index) => (
            <Chip index={index} active={cat.active} label={cat.label} />
          ))}
        </ScrollView>

        <ScrollView
          vertical
          style={[styles.cards, styles['mx-auto'], tailwind(' py-4')]}
        >
          {cards.map((card) => (
            <Card title={card.title} content={card.content} />
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

Statics.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Statics.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Statics
