'use client';

import {
	QueryClient,
	UseMutateFunction,
	useMutation,
	useQuery,
} from '@tanstack/react-query';
import {Scaffold} from '../scaffold';
import {FC} from 'react';

export default function Dashboard() {
	return <p></p>;
	return (
		<Scaffold>
			<DashboardContent />
		</Scaffold>
	);
}

export function DashboardContent() {
	const {isLoading, error, data} = useQuery({
		queryKey: ['repoData'],
		queryFn: async () =>
			fetch('http://0.0.0.0:8080/weekly-overview').then((res) => res.json()),
	});

	if (isLoading) return 'Loading...';

	if (error) return 'An error has occurred: ' + error.message;

	console.log(data);
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24 gap-20"></main>
	);
}
