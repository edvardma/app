import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { colors } from 'theme'

import { useDispatch, useSelector } from 'react-redux'
import { Formik } from 'formik'
import { setupUser } from 'slices/app.slice'

import {
  VStack, Input, Button, FormControl,
} from 'native-base'

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
        <VStack width="80%" space={4}>
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
              <FormControl.ErrorMessage>{errors[id]}</FormControl.ErrorMessage>
            </FormControl>
          ))}

          <Button onPress={handleSubmit} colorScheme="blue">
            Submit
          </Button>
        </VStack>
      )}
    </Formik>
  )
}

const RegistrationForm = ({ ...props }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <Form {...props} />
  </View>
)

export default RegistrationForm
