import useIsMobile from '@/app/provider';
import {Project} from '@/app/views/projects';
import {FC} from 'react';

export const ProjectComponent: FC<{project: Project}> = ({project}) => {
	const isMobile = useIsMobile();
	return (
		<div className="flex flex-col relative w-full text-sm h-96  sm:flex-row max-w-2xl gap-4 font-monospace text-black pt-16 animate-appear">
			<video
				className="h-full sm:h-72"
				src={project.videoSrc}
				autoPlay
				playsInline
				muted
				loop
			/>
			{!isMobile && (
				<div className="flex flex-col w-full h-full gap-4 p-2">
					<p>{project.description}</p>
					<p>{project.frontend}</p>
					<p>{project.backend}</p>
					<p>{project.design}</p>
				</div>
			)}
		</div>
	);
};
