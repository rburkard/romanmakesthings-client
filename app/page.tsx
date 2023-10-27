'use client';
import Image from 'next/image';
import {useEffect, useRef, useState} from 'react';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24 relative overflow-hidden">
			<div className="flex relative  w-screen md:w-2/3 lg:w-1/2">
				<video
					className="z-10 transform -rotate-12 transition ease-in-out max-w-full"
					src={'/intro-text.mov'}
					autoPlay
					playsInline
					muted
				/>
			</div>
			<div className="flex relative justify-center items-center w-screen md:w-2/3 lg:w-1/2 -mt-24">
				<Image
					className=""
					width={300}
					height={300}
					src={'/roman-on-floor.png'}
					alt={'macbook lying on the floor'}
				/>
			</div>
		</main>
	);
}
