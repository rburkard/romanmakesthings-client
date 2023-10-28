import Image from 'next/image';
import {FC} from 'react';

export const ProfilePicture: FC = () => {
	return (
		<div className="flex relative justify-center items-center w-64 h-96">
			<p>testing2</p>
			<div className="flex absolute w-28 h-72 z-30">
				<Image
					className="object-contain drop-shadow-md"
					fill
					src={'/roman-with-shadow.png'}
					alt={'macbook lying on the floor'}
				/>
			</div>
			<p>testing</p>
			<Image
				className="absolute object-contain z-10 drop-shadow-md"
				fill
				src={'/carpet.png'}
				alt={'carpet'}
			/>
		</div>
	);
};
