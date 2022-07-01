import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import rootReducer from './slices';
import { Provider } from 'react-redux';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({ 
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }), 
})

const STRIPE_PB_KEY = 'pk_test_51KiKrmFbWGmEnA2mAT3aBbSSPDI4YiBbwi5yXc8ouTB5RNVQCs6cmuBPZGYqAwwNA6eGOqwm4IBGQYvGsNhngsF100py3Qfrm7';

const stripePromise = loadStripe(STRIPE_PB_KEY)

let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </PersistGate>
    </Provider>,
);