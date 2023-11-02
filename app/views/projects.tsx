import {ProjectComponent} from '@/components/project';
import {FC, useState} from 'react';

export type Project = {
	videoSrc: string;
	title: string;
	description: string;
	frontend: string;
	backend: string;
	design: string;
};

export const Projects: FC<{}> = () => {
	const projects = [
		{
			videoSrc: '/projects/flowstate.mp4',
			title: 'Flow State',
			description:
				'Flow State is my newest venture - it helps programmers to discover their most productive hours in the day. Additionaly it helps to stay in the flow by pausing notifications if a high productivity is detected.',
			frontend: 'Frontend using NextJS, React, Typescript and TailwindCSS',
			backend:
				'Backend using NodeJS, Typescript, Express, Google Cloud Run and Firestore',
			design: 'Designed using Figma',
		},
		{
			videoSrc: '/projects/cyberquest.mp4',
			title: 'Cyber Quest',
			description:
				'Cyber Quest is an interactive gamified platform for eductation in cybersecurity and employee onboarding. It was built at For One Red AG for a client in the cybersecurity space.',
			frontend: 'Frontend using React, Typescript and Styled Components',
			backend: 'Backend using NodeJS, Typescript, Express and MongoDB',
			design: 'Designed by Isabell Fink using Figma',
		},
		{
			videoSrc: '/projects/saunaguru.mp4',
			title: 'Sauna Guru',
			description:
				'Sauna Guru predicts the occupancy of the local sauna in Zurich. It started as a weekend project and was then extended with a digital queue for sauna visitors. It is now used by thousands of sauna fans.',
			frontend:
				'Frontend using React, GraphJS, Typescript and Styled Components',
			backend: 'Backend using NodeJS, Typescript, Express and MongoDB',
			design: 'Designed using Figma',
		},
		{
			videoSrc: '/projects/cyberworld.mp4',
			title: 'Cyber World',
			description:
				'Cyber World is an interactive exhibition of the worlds most devastating cybersecurity attacks. It was built at For One Red AG as innovation lab for a client in the cybersecurity space.',
			frontend: 'Frontend using React, Typescript and Styled Components',
			backend: 'Backend using NodeJS, Typescript, Express and MongoDB',
			design: 'Designed by Isabell Fink using Figma',
		},
		{
			videoSrc: '/projects/zwoelfi.mp4',
			title: 'Zwoelfi',
			description:
				'Zwoelfi makes company paid lunches a breeze. It was built at For One Red AG to facilitate our own lunch experience. By popular demand we extended it to 5 more companies counting 60 users that ordered their company lunch over Zwoelfi.',
			frontend: 'Frontend using React, Typescript and TailwindCSS',
			backend: 'Backend using NodeJS, Typescript, Express, Google Firebase',
			design: 'Designed by Maria Pavlou using Figma and Illustrations',
		},
	];

	const [currentProject, setCurrentProject] = useState(0);

	const randomNr = () => Math.floor(Math.random() * projects.length);

	const updateProject = () => {
		const old = currentProject;

		let updated = old;

		while (old === updated) {
			updated = randomNr();
		}

		return updated;
	};

	return (
		<div
			className="flex relative flex-col overflow-y-auto justify-center items-center max-h-96 animate-appear cursor-pointer"
			onClick={() => setCurrentProject(updateProject)}
		>
			<ProjectComponent
				key={projects[currentProject].title}
				project={projects[currentProject]}
			/>
		</div>
	);
};
