import React, { useState, useEffect } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import store, { persistor } from 'utils/store'
import 'utils/ignore'
import { NativeBaseProvider } from 'native-base'
import { PersistGate } from 'redux-persist/integration/react'
import { colors } from 'theme'

// assets
import { imageAssets } from 'theme/images'
import { fontAssets } from 'theme/fonts'
import Router from './routes'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.lightBlue,
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8,
  },
})
const App = () => {
  // state
  const [didLoad, setDidLoad] = useState(false)

  // handler
  const handleLoadAssets = async () => {
    // assets preloading
    try {
      await Promise.all([...imageAssets, ...fontAssets])
      setDidLoad(true)
    } catch (e) {
      console.error(e)
    }
  }

  // lifecycle
  useEffect(() => {
    handleLoadAssets()
  }, [])

  // rendering
  if (!didLoad) return <View />
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colors.lightBlue} />
            <Router />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  )
}

export default App
