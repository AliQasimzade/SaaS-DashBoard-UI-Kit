import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

// const removeAllConsole = () =>{
// 	if(process.env.NODE_ENV === 'development'){
// 		console.log = function () {}
// 	}
// }

const persistConfig = {
	key: 'root',
	storage,
	
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export let store = createStore(
	persistedReducer,
	composeWithDevTools(applyMiddleware(logger)),
	// removeAllConsole()
);
export let persistor = persistStore(store);
