'use client';
import Image from 'next/image';
import {Button} from '../../components/button';
import {generateTags} from '@/functions/generateTags';
import {useState} from 'react';
import {addDays} from 'date-fns';

export default function HomeDashboard() {
	const url =
		'https://project-server-6p2zykct3q-ew.a.run.app/dashboard-adding-task';

	const [task, setTask] = useState('');
	const [date, setDate] = useState(new Date());

	const [disabled, setDisabled] = useState(false);

	const convertDate = (date: Date) => {
		const today = date;
		return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`; // yyyy-mm-dd
	};

	const submit = async (event: React.FormEvent<HTMLButtonElement>) => {
		event.preventDefault();
		setDisabled(true);

		console.log('apikey', process.env.NEXT_PUBLIC_API_KEY);
		const dateString = convertDate(date);
		const response = await fetch(url, {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': String(process.env.NEXT_PUBLIC_API_KEY),
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify({date: dateString, task}), // body data type must match "Content-Type" header
		});

		if (response.ok) {
			setTask('');
		}

		setDisabled(false);
	};

	return (
		<main className="flex min-h-screen flex-col items-center justify-center gap-8 p-24">
			<input
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				value={task}
				placeholder="Task decription"
				maxLength={10}
				onChange={(e) => {
					setTask(e.currentTarget.value);
				}}
			/>
			<div className="flex gap-4 justify-center items-center">
				<p>{`${date.getDate()}.${
					date.getMonth() + 1
				}.${date.getFullYear()}`}</p>
				<Button
					title={'Next Day'}
					onClick={() => {
						const newDate = addDays(date, 1);
						return setDate(newDate);
					}}
				/>
			</div>
			<Button title={'Add Task'} onClick={submit} />
		</main>
	);
}
