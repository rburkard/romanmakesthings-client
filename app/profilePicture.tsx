import Image from 'next/image';
import {FC, useEffect, useRef, useState} from 'react';

export const ProfilePicture: FC = () => {
	const projectRef = useRef<HTMLVideoElement>(null);
	const aboutRef = useRef<HTMLVideoElement>(null);
	const jobRef = useRef<HTMLVideoElement>(null);

	const [hoverProject, setHoverProject] = useState(false);
	const [hoverAbout, setHoverAbout] = useState(false);
	const [hoverJob, setHoverJob] = useState(false);

	useEffect(() => {
		if (hoverProject && projectRef.current) {
			projectRef.current.play();
		}
		if (hoverAbout && aboutRef.current) {
			aboutRef.current.play();
		}
		if (hoverJob && jobRef.current) {
			jobRef.current.play();
		}
	}, [hoverAbout, hoverJob, hoverProject]);

	return (
		<div className="flex relative justify-center items-center w-64 h-96">
			<div
				onMouseEnter={() => setHoverAbout(true)}
				onMouseLeave={() => setHoverAbout(false)}
				className="flex absolute w-28 h-80 z-30 hover:scale-110 transition ease-in-out cursor-pointer"
			>
				<Image
					className="object-contain drop-shadow-md"
					fill
					src={'/roman-with-shadow.png'}
					alt={'macbook lying on the floor'}
				/>
				{hoverAbout && (
					<video
						ref={aboutRef}
						className="z-40 h-24  -mt-24"
						src={'/about.mov'}
						autoPlay={false}
						playsInline
						muted
					/>
				)}
			</div>
			<div
				onMouseEnter={() => setHoverProject(true)}
				onMouseLeave={() => setHoverProject(false)}
				className="flex absolute w-36 h-32 z-30 transform -mr-52 -mb-52 hover:scale-110 transition ease-in-out cursor-pointer"
			>
				<Image
					className="object-contain drop-shadow-md"
					fill
					src={'/backpack.png'}
					alt={'backpack lying on the floor'}
				/>
				{hoverProject && (
					<video
						ref={projectRef}
						className=" mt-28 z-40 h-24"
						src={'/projects.mov'}
						autoPlay
						playsInline
						muted
					/>
				)}
			</div>
			<div
				onMouseEnter={() => setHoverJob(true)}
				onMouseLeave={() => setHoverJob(false)}
				className="flex absolute w-16 h-16 z-30 transform rotate-12 -ml-52 -mb-72 hover:scale-110 transition ease-in-out cursor-pointer"
			>
				<Image
					className="object-contain drop-shadow-md"
					fill
					src={'/slippers.png'}
					alt={'macbook lying on the floor'}
				/>
				{hoverJob && (
					<video
						ref={jobRef}
						className="z-40 h-24 mt-12"
						src={'/about.mov'}
						autoPlay
						playsInline
						muted
					/>
				)}
			</div>
			<Image
				className="absolute object-contain z-10 drop-shadow-md"
				fill
				src={'/carpet.png'}
				alt={'carpet'}
			/>
		</div>
	);
};
