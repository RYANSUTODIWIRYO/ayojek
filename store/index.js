import { createStore } from "redux"
import rootReducer from "./reducer"

import { persistStore, persistReducer} from "redux-persist"
import AsyncStorage from "@react-native-community/async-storage"

// Redux-Persist
const persistConfig = {
    key: "root",
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store, persistor }