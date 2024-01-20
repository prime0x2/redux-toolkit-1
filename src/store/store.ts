// import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';

import myLogger from './middlewares/myLogger';
import counterReducer from './features/counter/counterSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myLogger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
