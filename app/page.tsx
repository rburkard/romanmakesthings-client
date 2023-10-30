'use client';
import Image from 'next/image';
import {useEffect, useRef, useState} from 'react';
import {ProfilePicture} from './profilePicture';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col md:flex-row items-center justify-center relative overflow-hidden bg-gray-300">
			{/* <div className="mx-16">
				<video
					className="z-10 hover:scale-110 transition ease-in-out cursor-pointer h-24"
					src={'/about.mov'}
					autoPlay
					playsInline
					muted
				/>
			</div> */}
			<ProfilePicture />
			{/* <div className="mx-16">
				<video
					className="z-10 hover:scale-110 transition ease-in-out cursor-pointer h-16"
					src={'/projects.mov'}
					autoPlay
					playsInline
					muted
				/>
			</div> */}
		</main>
	);
}
