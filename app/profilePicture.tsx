import Image from 'next/image';
import {FC} from 'react';

export const ProfilePicture: FC = () => {
	return (
		<div className="flex relative justify-center items-center w-64 h-96">
			<video
				className="z-10 hover:scale-110 transition ease-in-out cursor-pointer h-24"
				src={'/about.mov'}
				autoPlay
				playsInline
				muted
			/>
			<div className="flex absolute w-28 h-72 z-30 hover:scale-110 transition ease-in-out cursor-pointer">
				<Image
					className="object-contain drop-shadow-md"
					fill
					src={'/roman-with-shadow.png'}
					alt={'macbook lying on the floor'}
				/>
			</div>
			<div className="flex absolute w-36 h-32 z-30 transform -mr-52 -mb-52 hover:scale-110 transition ease-in-out cursor-pointer">
				<Image
					className="object-contain drop-shadow-md"
					fill
					src={'/backpack.png'}
					alt={'backpack lying on the floor'}
				/>
			</div>
			<div className="flex absolute w-16 h-16 z-30 transform rotate-12 -ml-52 -mb-72 hover:scale-110 transition ease-in-out cursor-pointer">
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
