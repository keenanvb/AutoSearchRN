import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import rootReducers from '../reducers';

const initialState = {};
const middleware = [thunk];

const store = createStore(
    rootReducers,
    initialState,
    applyMiddleware(...middleware)
);

export default store;
