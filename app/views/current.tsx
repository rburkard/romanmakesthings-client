import {FC} from 'react';

export const Current: FC<{}> = () => {
	return (
		<div className="flex flex-col relative w-full text-sm sm:max-w-md h-96  gap-4 font-monospace text-black p-9 pt-24 text-center animate-appear">
			<p>
				Currenly I am looking for new opportunities at the intersection of
				digital products and coding. Interested in working with me?
			</p>
			<a
				className="font-bold underline"
				href="mailto:romanmakesthings@gmail.com"
			>
				Email me
			</a>
			{/* <p>
				In my spare time I build the various smart and stupid ideas that are on
				my mind on my new Youtube channel.
			</p> */}
		</div>
	);
};
