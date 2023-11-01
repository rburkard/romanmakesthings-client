'use client';
import Image from 'next/image';
import {createContext, useContext, useEffect, useRef, useState} from 'react';
import {MOBILE_BREAKPOINT_N} from './constants';
import {CenterPiece} from './centerPiece';
import {IsMobile} from './provider';
import {Scaffold} from './scaffold';

export default function Home() {
	const [isMobile, setIsMobile] = useState<boolean>();

	const [about, setAbout] = useState(false);
	const [project, setProject] = useState(false);
	const [job, setJob] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT_N);
		};

		setIsMobile(window.innerWidth < MOBILE_BREAKPOINT_N);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleMainClick = () => {
		if (about || project || job) {
			setAbout(false);
			setProject(false);
			setJob(false);
		}
	};

	return (
		<IsMobile.Provider value={!!isMobile}>
			<Scaffold>
				<main
					className={`flex min-h-full flex-col md:flex-row items-center justify-center relative overflow-hidden bg-gray-300`}
				>
					<div
						onClick={handleMainClick}
						className={`absolute transition-all ease-in-out duration-700
					${!about && !project && !job && 'transform: translate-x-0 translate-y-0'}
					${about && ' transform:  translate-y-full'} 
					${project && 'transform: -translate-y-full -translate-x-24'}
					${job && 'transform: -translate-y-full translate-x-24'}
					`}
					>
						<CenterPiece
							about={about}
							job={job}
							project={project}
							setAbout={setAbout}
							setJob={setJob}
							setProject={setProject}
						/>
					</div>
				</main>
			</Scaffold>
		</IsMobile.Provider>
	);
}
