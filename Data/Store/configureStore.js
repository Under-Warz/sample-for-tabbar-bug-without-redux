import { createStore, applyMiddleware, compose } from 'redux'; // 3.7.2
import { createLogger } from 'redux-logger'; // 3.0.6
import thunk from 'redux-thunk'; // 2.2.0
import { persistStore, autoRehydrate } from 'redux-persist'; // 5.9.1
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'; // 1.0.1

import Config from '../../Config';
import Reducers from '../Reducers';

export default (preloadState) => {
	var middlewares = [];

	// Navigation
	const navigationMiddleware = createReactNavigationReduxMiddleware(
	  "root",
	  state => state.nav
	);
	middlewares.push(navigationMiddleware);

  // Thunk
  middlewares.push(thunk);

	// Create store
	const store = createStore(
		Reducers,
		preloadState,
		applyMiddleware(...middlewares)
	);

  // Startup function
  const startup = (error, data) => {
		// TODO : make startup requests ?
  }

  // Check to ensure latest reducer version
  Config.store.config.storage.getItem('reducerVersion').then((localVersion) => {
    if (localVersion !== Config.store.version) {
    	if (__DEV__) {
      	console.log('Purge store');
      }

      // Purge store
      persistStore(store, Config.store.config).purge().then(() => {
      	Config.store.config.storage.setItem('reducerVersion', Config.store.version);
      	startup();
      });
    } else {
    	persistStore(store, Config.store.config, startup);
    }
  }).catch(() => {
    persistStore(store, Config.store.config.storage, startup);
    Config.store.config.storage.setItem('reducerVersion', Config.store.version);
  });

	// Enable hot reload
	if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../Reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
