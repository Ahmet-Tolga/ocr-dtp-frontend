import { configureStore, combineReducers } from '@reduxjs/toolkit';
import offerReducer from './reducers/OfferReducer';
import fileReducer from './reducers/FileReducer';
import uploadFileReducer from './reducers/UploadFileReducer';
import uploadProjectReducer from './reducers/UploadProjectReducer';

const rootReducer = combineReducers({
  offer: offerReducer,
  file: fileReducer,
  uploadFile: uploadFileReducer,
  projects: uploadProjectReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
