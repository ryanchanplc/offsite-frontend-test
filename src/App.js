import React from 'react'

import 'App.scss'
import { Provider } from 'react-redux'
import { store, persistor } from 'redux/store/index'
import Home from 'page/Home'
import { PersistGate } from 'redux-persist/integration/react'
import LoadingSpinner from 'component/LoadingSpinner/LoadingSpinner'
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingSpinner />} persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  )
}

export default App
