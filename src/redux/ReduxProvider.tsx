'use client'

import React from 'react'
import { Provider as ReactReduxProvider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { store } from './store'
import Loading from '@/components/Loading'

export default function ReduxProvider({children}:{children:React.ReactNode}) {
  let reduxPersistor = persistStore(store);
  return (
    <ReactReduxProvider store={store}>
      <PersistGate loading={<Loading/>} persistor={reduxPersistor}>
        {children}
      </PersistGate>
     </ReactReduxProvider>
  )
}
