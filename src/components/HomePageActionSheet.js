/* eslint-disable react/jsx-wrap-multilines */
import React from 'react'
// eslint-disable-next-line object-curly-newline
import { Actionsheet, useDisclose } from 'native-base'
import { Text, TouchableOpacity, ScrollView } from 'react-native'
import Svg from 'components/Svg'
import tailwind from 'tailwind-rn'

const items = [
  { icon: 'RiskStatus_new', label: 'Update My COVID-19 Risk Status' },
  { icon: 'Hotspot_new', label: 'Hotspot Tracker' },
  { icon: 'dependents_new', label: 'Manage Dependents' },
  { icon: 'main2', label: 'COVID-19 Vaccination' },
  { icon: 'Home_Test', label: 'COVID-19 Self Test' },
  { icon: 'NearestHospital_new', label: 'Locate Health Screening Facility' },

  { icon: 'creative', label: 'Behavioural Risk' },
  { icon: 'DigitalHealth_new', label: 'Digital Healthcare' },
  { icon: 'additionalResources_new', label: 'Additional Resources' },

  { icon: 'SOP_new', label: 'Standard Operatting Procedure (SOP)' },
  { icon: 'advice', label: 'Helpdesk' },
  { icon: 'FAQ_new', label: 'FAQs' },
]
const HomePageActionSheet = () => {
  const { isOpen, onOpen, onClose } = useDisclose()
  return (
    <>
      <TouchableOpacity onPress={onOpen}>
        <Svg style={{ marginRight: 'auto', marginLeft: 'auto' }} name="main9" />
        <Text style={tailwind('text-center text-xs font-thin pt-1')}>More</Text>
      </TouchableOpacity>
      <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
        <Actionsheet.Content>
          <ScrollView
            style={{ width: '100%' }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            {items.map((item, index) => (
              <Actionsheet.Item
                key={item.icon + index}
                style={{ marginTop: 10 }}
                startIcon={
                  <Svg
                    width={35}
                    height={35}
                    style={{ position: 'absolute', left: 1 }}
                    name={item.icon}
                  />
                }
              >
                <Text style={{ marginLeft: 35, fontSize: 13 }}>
                  {' '}
                  {item.label}
                </Text>
              </Actionsheet.Item>
            ))}
          </ScrollView>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  )
}

export default HomePageActionSheet
