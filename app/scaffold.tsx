import {FC, ReactNode} from 'react';
import {
	AiOutlineGithub,
	AiOutlineTwitter,
	AiOutlineMail,
	AiOutlineLinkedin,
} from 'react-icons/ai';

export const Scaffold: FC<{children: ReactNode}> = ({children}) => {
	return (
		<div className="flex flex-col bg-gray-300 h-screen overflow-hidden">
			{children}
			<div className="flex justify-center items-center gap-5 bottom-0 fixed w-full h-12 border-black border-2 bg-black">
				<a
					href="https://github.com/rburkard"
					target="_blank"
					rel="noopener noreferrer"
				>
					<AiOutlineGithub />
				</a>
				<a
					href="https://www.linkedin.com/in/rburkard"
					target="_blank"
					rel="noopener noreferrer"
				>
					<AiOutlineLinkedin />
				</a>
				<a
					href="https://twitter.com/RomanMakes3000"
					target="_blank"
					rel="noopener noreferrer"
				>
					<AiOutlineTwitter />
				</a>
				<a href="mailto:romanmakesthings@gmail.com">
					<AiOutlineMail />
				</a>
			</div>
		</div>
	);
};
