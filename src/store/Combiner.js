import { combineReducers } from "redux"
import personReducer from "./reducers/Person"


export default combineReducers({person: personReducer})
