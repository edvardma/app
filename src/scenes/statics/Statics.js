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
import Button from 'components/Button'
import { colors } from 'theme'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveCategory } from 'slices/statics.slice'

const styles = StyleSheet.create({
  topContainer: {
    height: 152,
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
})

const Statics = () => {
  const dispatch = useDispatch()

  const categories = useSelector((state) => state.statics.categories)
  const [activeCat, setActiveCat] = React.useState('updates')
  const cards = useSelector((state) => state.statics.statics)

  const Chip = ({ label, id }) => (
    <TouchableOpacity
      onPress={() => {
        setActiveCat(id)
      }}
    >
      <View
        style={[
          tailwind(
            `flex flex-row items-center h-8 items-center font-medium  px-4 bg-white rounded-full ${
              activeCat === id
                ? 'bg-white text-blue-500'
                : 'bg-transparent text-white border-white border'
            }`,
          ),
          { marginLeft: 7, marginRight: 7 },
        ]}
      >
        <Text
          style={[
            tailwind(
              `${
                activeCat === id ? 'text-blue-500' : 'text-white'
              } font-bold text-sm`,
            ),
          ]}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  )
  const Card = ({
    title, content, number, color, buttonTitle,
  }) => (
    <View
      style={[
        {
          backgroundColor: color,
        },
        tailwind('py-4 mx-2 px-8 rounded-lg my-5 h-56'),
        styles.shadow,
      ]}
    >
      <View>
        <Text style={tailwind('text-white text-center text-xl font-semibold')}>
          {title}
        </Text>
        <Text style={tailwind('mt-2 text-center text-white')}>{content}</Text>
        <Text
          style={[tailwind('mt-5 text-center text-white'), { fontSize: 39 }]}
        >
          {number}
        </Text>
        {buttonTitle !== null && (
        <Button
          style={tailwind('mt-5')}
          title={buttonTitle}
          backgroundColor="white"
          color={color === 'black' ? 'red' : color}
        />
        )}
      </View>
    </View>
  )

  return (
    <ScrollView
      vertical
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={[styles.cards, tailwind('w-full')]}
    >
      <View style={[styles.topContainer, tailwind('-mt-4')]} />
      <View style={[tailwind('-mt-32  w-full '), styles.mainContainer]}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal
          style={[styles.chips, tailwind(' flex-row')]}
        >
          {categories.map((cat) => (
            <Chip key={`chip${cat.id}`} id={cat.id} label={cat.label} />
          ))}
        </ScrollView>

        {cards[activeCat].map((card, index) => (
          <React.Fragment key={`card${index}`}>
            {card.type === 'card' && (
              <Card
                title={card.title}
                buttonTitle={card.buttonTitle ? card.buttonTitle : null}
                color={card.color}
                content={card.description}
                number={card.number}
              />
            )}
          </React.Fragment>
        ))}
      </View>
    </ScrollView>
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
