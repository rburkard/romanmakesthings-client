import {FC} from 'react';

export const Projects: FC<{}> = () => {
	return (
		<div className="flex flex-col md:flex-row relative w-full text-sm h-96  md: max-w-2xl gap-4 font-monospace text-black p-9 pt-10">
			<video
				className="h-full"
				src={'/projects/flowstate.mp4'}
				autoPlay
				playsInline
				muted
			/>
			<div className="flex flex-col w-full h-full gap-4 p-2">
				<p>
					FlowState is a new venture that helps programmers to find their most
					productive hours in the day. Additionaly it helps to stay in the flow
					longer by pausing notifications and setting the mood once a high
					productivity is detected.
				</p>
				<p>Frontend using NextJS, Typescript and TailwindCSS</p>
				<p>
					Backend using NodeJS, Typescript, Express, Google Cloud Run and
					Firebase
				</p>
				<p>Design using Figma</p>
			</div>
		</div>
	);
};
