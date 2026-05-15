'use client'
import React from 'react';
import { Provider } from 'react-redux';
import {store} from './store'

interface StoreProviderProps {
  children: React.ReactNode
}
export default function StoreProvider({children}:StoreProviderProps) {
  // children - takes any content that we pass in within the store provider tags and gives them access to the Redux store
  return (
    <Provider store={store} >
      {children}
    </Provider>
  )
}

