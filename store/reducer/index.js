import AuthReducer from "./auth"
import { combineReducers } from "redux"

// Combine all of the reducers
const rootReducer = combineReducers({
    AuthReducer
})

export default rootReducer