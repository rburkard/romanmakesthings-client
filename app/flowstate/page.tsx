'use client';
import Image from 'next/image';
import {Button} from '../../components/button';
import {generateTags} from '@/functions/generateTags';
import {useEffect, useRef, useState} from 'react';

const statements = [
	{
		statement: `Focus. Concentration. It's just a vibe.`,
		author: 'Jonny Burger',
		company: 'Chief Hacker at Remotion',
	},
	{
		statement: `What? Sorry I wasn't listening.`,
		author: 'Luke Zirngibl',
		company: 'CEO at For One Red',
	},
];

export default function FlowState() {
	const random = useRef<number | null>(null);

	useEffect(() => {
		random.current = Math.floor(Math.random() * statements.length);
	}, []);

	const statement = statements[random.current ? random.current : 0];

	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24 gap-20">
			<div className="flex items-end gap-4">
				<Image
					width={300}
					height={200}
					src={'logo.svg'}
					alt={'flowstate-logo'}
				></Image>
				<p className="flex -mb-2">is</p>
			</div>
			<div>
				<p className="italic text-xl">{statement.statement}</p>
				<p className="text-slate-600">~ {statement.author}</p>
				<p className="text-slate-600">{statement.company}</p>
			</div>
			<div>
				<svg width={650 + 200} height={375 + 100}>
					<path
						className="animate-draw-graph"
						d="M 100 300 Q 150 100 200 300 Q 250 550 300 300 Q 350 50 400 300 C 450 550 450 50 550 50 C 650 50 650 550 750 200"
						stroke="white"
						strokeWidth={3}
						strokeDasharray={2000}
						strokeDashoffset={2000}
					></path>
				</svg>
			</div>
		</main>
	);
}
