import { Asset } from 'expo-asset'

// svg
import Logo from '../../assets/images/logo.svg'
import main1 from '../../assets/images/homeicons/main1.svg'
import main2 from '../../assets/images/homeicons/main2.svg'
import main3 from '../../assets/images/homeicons/main3.svg'
import main4 from '../../assets/images/homeicons/main4.svg'
import main5 from '../../assets/images/homeicons/main5.svg'
import main6 from '../../assets/images/homeicons/main6.svg'
import main7 from '../../assets/images/homeicons/main7.svg'
import main8 from '../../assets/images/homeicons/main8.svg'
import main9 from '../../assets/images/homeicons/main9.svg'
import shopPop from '../../assets/images/homeicons/shopPop.svg'
import virus from '../../assets/images/homeicons/virus.svg'
import vaccine from '../../assets/images/homeicons/vaccine.svg'
import vaccineb from '../../assets/images/homeicons/vaccineb.svg'

export const svgs = {
  logo: Logo,
  main1,
  main2,
  main3,
  main4,
  main5,
  main6,
  main7,
  main8,
  main9,
  shopPop,
  virus,
  vaccine,
  vaccineb,
}

// png/jpeg
export const images = {
  logo_sm: require('../../assets/images/logo-sm.png'),
  logo_lg: require('../../assets/images/logo-lg.png'),
}

// image preloading
export const imageAssets = Object.keys(images).map((key) =>
  Asset.fromModule(images[key]).downloadAsync(),
)
