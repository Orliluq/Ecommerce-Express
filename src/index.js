import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // para acciones asincrónicas
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist'; // para hacer que la tienda redux sea persistente
import storage from 'redux-persist/lib/storage';
import { Toaster } from 'react-hot-toast'; // para notificaciones

import rootReducer from './services/Reducers/index';
import './styles/index.css';
import App from './components/App';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}> 
        <App />
      </PersistGate>
      <Toaster />
    </Provider>
  </React.StrictMode>
);
