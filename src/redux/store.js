import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const contactsPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

const rootReducer = combineReducers({
  contacts: persistReducer(contactsPersistConfig, contactsReducer),
  filters: filtersReducer,
});

const serializableIgnore = [
  "persist/PERSIST",
  "persist/REHYDRATE",
  "persist/PAUSE",
  "persist/FLUSH",
  "persist/PURGE",
  "persist/REGISTER",
];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: serializableIgnore,
      },
    }),
});

export const persistor = persistStore(store);
