import { createStore, combineReducers } from "redux";
import { itemReducer } from "./reducers";
// import thunk from 'redux-thunk'

//combine reducers
const allReducers = combineReducers({
  item: itemReducer,
});

//main store always to be set as a single store the reducers are pass
// into this store combined together because you can have multiple reducers
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
