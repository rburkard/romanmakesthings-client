'use client';
import Image from 'next/image';
import {useEffect, useRef, useState} from 'react';

export default function Home() {
	const videoRef = useRef<HTMLVideoElement>(null);

	const [hover, setHover] = useState(false);

	useEffect(() => {
		if (hover && videoRef.current) {
			videoRef.current.play();
		}
	}, [hover]);

	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24 relative overflow-hidden">
			<div
				className="flex relative md:w-1/3 md:left-1 cursor-pointer"
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				<video
					className="z-10 transform -rotate-12 transition ease-in-out max-w-full"
					src={'/intro-text.mov'}
					autoPlay
					playsInline
					muted
				/>
				{hover && (
					<video
						ref={videoRef}
						className="z-10 transform -rotate-12 transition ease-in-out absolute left-2/3 top-1/4 w-1/4"
						src={'/select.mov'}
						width={100}
						playsInline
						muted
					/>
				)}
			</div>
			<div className="flex items-center justify-center animate-pulse forward">
				<Image
					className="transform -scale-y-100"
					width={300}
					height={300}
					src={'/macbook.png'}
					alt={'macbook lying on the floor'}
				/>
			</div>
		</main>
	);
}
