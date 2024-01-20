import { Middleware } from '@reduxjs/toolkit';

const myLogger: Middleware = (store) => (next) => (action) => {
	console.log('My Action: ', action);
	console.log('My State: ', store.getState());
	return next(action);
};

export default myLogger;
