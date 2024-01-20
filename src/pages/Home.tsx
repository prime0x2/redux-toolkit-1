import React from 'react';

import {
	increment,
	incrementByAmount,
	decrement,
	decrementByAmount,
} from '../store/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '../store/hook';

interface Props {}

const Home: React.FC<Props> = () => {
	const dispatch = useAppDispatch();
	const { value } = useAppSelector((state) => state.counter);

	const addRef = React.useRef<HTMLInputElement>(null);
	const subRef = React.useRef<HTMLInputElement>(null);

	const handleAdd = () => {
		const value = addRef.current!.value;

		if (value) {
			dispatch(incrementByAmount(Number(value)));
		} else {
			dispatch(increment());
		}
	};

	const handleSub = () => {
		const value = subRef.current!.value;

		if (value) {
			dispatch(decrementByAmount(Number(value)));
		} else {
			dispatch(decrement());
		}
	};

	return (
		<div className='w-full h-screen flex gap-8 items-center justify-center'>
			<div className='flex items-center'>
				<button
					onClick={handleSub}
					className='w-10 h-10 flex items-center justify-center bg-red-100 border border-rose-600 rounded-l-md text-2xl'
				>
					-
				</button>
				<input
					type='text'
					ref={subRef}
					className='w-28 h-10 outline-none border border-gray-300 rounded-r-md px-4'
				/>
			</div>

			{value}

			<div className='flex items-center'>
				<input
					type='text'
					ref={addRef}
					className='w-28 h-10 outline-none border border-gray-300 rounded-l-md px-4'
				/>

				<button
					onClick={handleAdd}
					className='w-10 h-10 flex items-center justify-center bg-emerald-100 border border-emerald-600 rounded-r-md text-2xl'
				>
					+
				</button>
			</div>
		</div>
	);
};

export default Home;
