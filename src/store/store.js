import React from 'react'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'
import storage from 'redux-persist/lib/storage'
import reducers from '../reducers'

const persistConfig = {
    key: 'root',
    storage,
}

const pReducer = persistReducer(persistConfig, reducers)

const store = createStore(pReducer, composeWithDevTools(applyMiddleware(thunk)))

const persistor = persistStore(store)

export { persistor, store }