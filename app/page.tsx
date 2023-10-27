'use client';
import Image from 'next/image';
import {useEffect, useRef, useState} from 'react';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden">
			<div className="flex relative w-screen max-w-lg">
				<video
					className="transform -rotate-12 transition ease-in-out max-w-full"
					src={'/intro-text.mov'}
					autoPlay
					playsInline
					muted
				/>
			</div>
			<div className="flex relative justify-center items-center w-screen h-96 -mt-11 z-10">
				<Image
					className="object-contain"
					fill
					src={'/roman-on-floor.png'}
					alt={'macbook lying on the floor'}
				/>
			</div>
		</main>
	);
}
