import * as Font from 'expo-font'

export const fonts = {
  Avenir: {
    black: 'Avenir_Black',
    roman: 'Avenir_Roman',
    regular: 'Avenir_regular',
    regularItalic: 'Avenir_regular_italic',
    semiBold: 'Avenir_Med',
    semiBoldItalic: 'Avenir_semiBold_italic',
    bold: 'Avenir_bold',
    boldItalic: 'Avenir_bold_italic',
  },
  Helvetica: {
    regular: 'Helvetica',

  },
}

// fonts preloading
export const fontsAll = [
  {
    Helvetica: require('../../assets/fonts/Helvetica.ttf'),
  },
  {
    Avenir_Med: require('../../assets/fonts/AvenirNextLTPro-Medium.otf'),
  },
  {
    Avenir_Black: require('../../assets/fonts/Avenir-Black.ttf'),
  },
  {
    Avenir_Roman: require('../../assets/fonts/Avenir-Roman-12.ttf'),
  },
  {
    Avenir_regular: require('../../assets/fonts/AvenirNextLTPro-Regular.otf'),
  },
  {
    Avenir_regular_italic: require('../../assets/fonts/AvenirNextLTPro-Regular.otf'),
  },
  {
    Avenir_semiBold: require('../../assets/fonts/AvenirNextLTPro-Bold.otf'),
  },
  {
    Avenir_semiBold_italic: require('../../assets/fonts/AvenirNextLTPro-Bold.otf'),
  },
  {
    Avenir_bold: require('../../assets/fonts/AvenirNextLTPro-Bold.otf'),
  },
  {
    Avenir_bold_italic: require('../../assets/fonts/AvenirNextLTPro-Bold.otf'),
  },
]
export const fontAssets = fontsAll.map((x) => Font.loadAsync(x))
