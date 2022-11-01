import {configureStore, combineReducers} from '@reduxjs/toolkit';
import cartReducer from './cartRedux';
import ProductId from './ProductId';
import productReducer from './productRedux';
import crudReducer from './crudUser';
import reviewRedux from './reviewRedux';
import orderRedux from './orderRedux';
import CommentRedux from './Comment';
import userRedux from './userRedux';
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
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers ({
  cart: cartReducer,
  product: productReducer,
  cuser: crudReducer,
  review: reviewRedux,
  order: orderRedux,
  post: ProductId,
  comment: CommentRedux,
  user: userRedux,
});

const persistedReducer = persistReducer (persistConfig, rootReducer);

export const store = configureStore ({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware ({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore (store);
