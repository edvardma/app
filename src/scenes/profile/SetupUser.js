import React from 'react'
import {
  StyleSheet, View, StatusBar, ScrollView,
} from 'react-native'
import { colors } from 'theme'

import { useDispatch, useSelector } from 'react-redux'
import { Formik } from 'formik'
import { setupUser } from 'slices/app.slice'

import {
  VStack, Input, Button, FormControl,
} from 'native-base'

const isInvalidDate = (dateString) => new Date(dateString).toString() === 'Invalid Date'

/* StyleSheet */
const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 30,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    alignSelf: 'flex-start',
    paddingLeft: 30,
    textAlign: 'right',
    fontSize: 24,
    marginBottom: 20,
  },
})
const fields = [
  {
    id: 'name',
    placeholder: 'Name',
    autoCompleteType: 'name',
    type: 'text',
    validation: (data) => !!data.length,
  },
  {
    id: 'status',
    placeholder: 'Status',
    autoCompleteType: 'off',
    type: 'text',
    validation: (data) => !!data.length,
  },
  {
    id: 'email',
    placeholder: 'Email',
    autoCompleteType: 'email',
    type: 'email',
    validation: (data) => !!data.length,
  },
  {
    id: 'passportNumber',
    placeholder: 'Passport Number',
    autoCompleteType: 'off',
    type: 'text',
    validation: (data) => !!data.length,
  },
  {
    id: 'state',
    placeholder: 'State',
    autoCompleteType: 'off',
    type: 'text',
    validation: (data) => !!data.length,
  },
  {
    id: 'certificateHospitalName',
    placeholder: 'Hospital Name for Certificate',
    autoCompleteType: 'off',
    type: 'text',
    validation: (data) => !!data.length,
  },
  {
    id: 'vaccineManufacturer',
    placeholder: 'Vaccine Manufacturer',
    autoCompleteType: 'off',
    type: 'text',
    validation: (data) => !!data.length,
  },
  {
    id: 'vaccineFaciality',
    placeholder: 'Vaccine Faciality',
    autoCompleteType: 'off',
    type: 'text',
    validation: (data) => !!data.length,
  },
  {
    id: 'dose1Batch',
    placeholder: 'Batch Code for Dose 1',
    autoCompleteType: 'off',
    type: 'text',
    validation: (data) => !!data.length,
  },
  {
    id: 'dose2Batch',
    placeholder: 'Batch Code for Dose 2',
    autoCompleteType: 'off',
    type: 'text',
    validation: (data) => !!data.length,
  },
  {
    id: 'dose1Date',
    placeholder: 'Dose 1 Injection Date',
    autoCompleteType: 'off',
    type: 'text',
    validation: (data) => !isInvalidDate(data),
  },
  {
    id: 'dose2Date',
    placeholder: 'Dose 1 Injection Date',
    autoCompleteType: 'off',
    type: 'text',
    validation: (data) => !isInvalidDate(data),
  },
]

const Form = ({ navigation: { goBack } }) => {
  const dispatch = useDispatch()
  const initialVal = useSelector((state) => state.app.user)
  const onSubmit = (data) => {
    dispatch(setupUser(data))
    goBack()
  }
  const validate = (values) => {
    const errors = {}
    fields.forEach(({ id, placeholder, validation }) => {
      if (id === 'confirm-password') {
        if (!validation(values[id], values.password)) {
          errors[id] = `${placeholder} is not valid`
        }
      } else if (!validation(values[id])) {
        errors[id] = `${placeholder} is not valid.`
      }
    })
    return errors
  }

  return (
    <ScrollView style={{ width: '100%' }}>
      <Formik
        initialValues={Object.fromEntries(
          fields.map((field) => [field.id, initialVal[field.id]]),
        )}
        onSubmit={onSubmit}
        validate={validate}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({
          handleChange, handleBlur, handleSubmit, values, errors,
        }) => (
          <VStack width="100%" space={4}>
            {fields.map(({
              type, id, placeholder, autoCompleteType,
            }) => (
              <FormControl key={id} isRequired isInvalid={id in errors}>
                <Input
                  type={type}
                  onBlur={handleBlur(id)}
                  placeholder={placeholder}
                  onChangeText={handleChange(id)}
                  autoCompleteType={autoCompleteType}
                  value={values[id]}
                />
                <FormControl.ErrorMessage>
                  {errors[id]}
                </FormControl.ErrorMessage>
              </FormControl>
            ))}

            <Button onPress={handleSubmit} colorScheme="blue">
              Submit
            </Button>
          </VStack>
        )}
      </Formik>
    </ScrollView>
  )
}

const RegistrationForm = ({ ...props }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <Form {...props} />
  </View>
)

export default RegistrationForm
