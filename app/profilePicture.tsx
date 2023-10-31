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
			<div className="flex absolute w-36 h-40 z-30 transform -mr-52 -mb-52">
				<Image
					className="object-contain drop-shadow-md"
					fill
					src={'/backpack.png'}
					alt={'macbook lying on the floor'}
				/>
			</div>
			<div className="flex absolute w-16 h-16 z-30 transform rotate-12 -ml-52 -mb-72">
				<Image
					className="object-contain drop-shadow-md"
					fill
					src={'/slippers.png'}
					alt={'macbook lying on the floor'}
				/>
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
