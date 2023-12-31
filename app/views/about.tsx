import {Button} from '@/components/button';
import {FC} from 'react';

export const About: FC<{}> = () => {
	return (
		<div className="flex flex-col relative w-full text-xs h-96 sm:max-w-md sm:text-sm  gap-4 font-monospace text-black p-9 mb-16 animate-appear opacity-0">
			<p>Is anybody reading this?</p>
			<p>Okok, here are some infos about me...</p>
			<p>
				I am Roman - a creative developer based in wonderful Zurich Switzerland.
				I specialize in ideating and building digital products since more than 6
				years. Since 3 years I also build them myself in React and Typescript.
			</p>
			<p>
				Sometimes the leap is as small as reducing the waiting time at the local
				sauna. Other times its large innovation projects at corporates or
				venture backed startups.
			</p>
			<p>I just really like building cool stuff.</p>
		</div>
	);
};
