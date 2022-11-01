import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {AuthContextProvider} from './context/authContext';
import {DarkModeContextProvider} from './context/darkModeContext';
import {persistor} from './redux/Store';
import {Provider} from 'react-redux';
import {store} from './redux/Store';
import {PersistGate} from 'redux-persist/integration/react';

const root = ReactDOM.createRoot (document.getElementById ('root'));
root.render (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <DarkModeContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </DarkModeContextProvider>
    </PersistGate>
  </Provider>
);
