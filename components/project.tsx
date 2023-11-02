import useIsMobile from '@/app/provider';
import {Project} from '@/app/views/projects';
import {FC} from 'react';

export const ProjectComponent: FC<{project: Project}> = ({project}) => {
	const isMobile = useIsMobile();
	return (
		<div className="flex relative w-full p-9 text-sm h-96  sm:max-w-2xl gap-4 font-monospace text-black pt-16 animate-appear opacity-0">
			<video
				className="h-44 sm:h-full"
				src={project.videoSrc}
				autoPlay
				playsInline
				muted
				loop
			/>

			<div className="flex flex-col w-full h-full gap-4 text-xs sm:text-sm">
				<p>{project.description}</p>
				<p>{project.frontend}</p>
				<p>{project.backend}</p>
				<p>{project.design}</p>
			</div>
		</div>
	);
};
