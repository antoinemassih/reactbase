import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import createLogger from 'redux-logger'


const debugware = [];
if (process.env.NODE_ENV !== 'production') {

const logger = createLogger(({collapsed: true}));
    debugware.push(logger);
}

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index').default;

            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
