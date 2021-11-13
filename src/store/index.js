import { createStore } from "redux"
import reducers from "./Combiner"


const store = createStore(reducers)


export default store;

