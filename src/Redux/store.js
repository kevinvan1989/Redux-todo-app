import { createStore, applyMiddleware, compose } from "redux";
import todoReducer from "./Reducers/todoReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(todoReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));

export default store;

// const store = createStore(
//   reducer,
//   compose(
//       applyMiddleWare(thunk),
//       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );