/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import { Asset } from 'expo-asset'

// svg
import Logo from '../../assets/images/logo.svg'
import main1 from '../../assets/images/homeicons/main1.svg'
import main2 from '../../assets/images/homeicons/main2.svg'
import main3 from '../../assets/images/homeicons/main3.svg'
import main4 from '../../assets/images/homeicons/main4.svg'
import main5 from '../../assets/images/homeicons/main5.svg'
import main7 from '../../assets/images/homeicons/main7.svg'
import main8 from '../../assets/images/homeicons/main8.svg'
import main9 from '../../assets/images/homeicons/main9.svg'
import shopPop from '../../assets/images/homeicons/shopPop.svg'
import virus from '../../assets/images/homeicons/virus.svg'
import vaccine from '../../assets/images/homeicons/vaccine.svg'
import vaccineb from '../../assets/images/homeicons/vaccineb.svg'
import Lambang_Malaysia from '../../assets/images/homeicons/Lambang_Malaysia.svg'

import RiskStatus_new from '../../assets/images/svgs/RiskStatus_new.svg'
import Hotspot_new from '../../assets/images/svgs/Hotspot_new.svg'
import dependents_new from '../../assets/images/svgs/dependents_new.svg'
import vaccinem from '../../assets/images/svgs/vaccine.svg'
import NearestHospital_new from '../../assets/images/svgs/NearestHospital_new.svg'
import vaccineinformation from '../../assets/images/svgs/vaccineinformation.svg'
import DigitalHealth_new from '../../assets/images/svgs/DigitalHealth_new.svg'
import Home_Test from '../../assets/images/svgs/COVID-19_Home_Test.svg'
import additionalResources_new from '../../assets/images/svgs/additionalResources_new.svg'
import SOP_new from '../../assets/images/svgs/SOP_new.svg'
import creative from '../../assets/images/svgs/creative.svg'
import FAQ_new from '../../assets/images/svgs/FAQ_new.svg'
import advice from '../../assets/images/svgs/advice.svg'

export const svgs = {
  logo: Logo,
  main1,
  main2,
  main3,
  main4,
  main5,
  main6: advice,
  main7,
  main8,
  Home_Test,
  main9,
  shopPop,
  virus,
  vaccine,
  vaccineb,
  Lambang_Malaysia,
  RiskStatus_new,
  Hotspot_new,
  DigitalHealth_new,
  additionalResources_new,
  vaccineinformation,
  SOP_new,
  creative,
  advice,
  FAQ_new,
  NearestHospital_new,
  vaccinem,
  dependents_new,
}

// png/jpeg
export const images = {
  logo_sm: require('../../assets/images/logo-sm.png'),
  logo_lg: require('../../assets/images/logo-lg.png'),
}

// image preloading
export const imageAssets = Object.keys(images).map((key) => Asset.fromModule(images[key]).downloadAsync())
