import { createStore, compose, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import storage from 'redux-persist/es/storage'

import { persistStore, persistReducer } from 'redux-persist'

import rootReducer from '../reducers'

const logger = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const config = {
  key: 'root',
  storage
}

const persistReducers = persistReducer(config, rootReducer);

export default (initialState) => {
  const store = createStore(
    persistReducers,
    composeEnhancers(
      applyMiddleware(logger)
    )
  );

  const persistor = persistStore(store)

  return { persistor, store }
}
