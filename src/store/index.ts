import { createStore, applyMiddleware, compose } from "redux";
// import createSagaMiddleware from "redux-saga";
import { combineReducers } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";

import { history } from "helpers";
// import reducers from "./reducers";
// import rootSaga from "./sagas";

// const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    // ...reducers,
    router: connectRouter(history),
  })
  // composeEnhancers(applyMiddleware(sagaMiddleware, routeMiddleware))
);

// sagaMiddleware.run(rootSaga);

export { history, store };
