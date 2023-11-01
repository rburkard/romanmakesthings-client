import {FC, ReactNode} from 'react';
import {
	AiOutlineGithub,
	AiOutlineTwitter,
	AiOutlineMail,
	AiOutlineLinkedin,
} from 'react-icons/ai';

export const Scaffold: FC<{children: ReactNode}> = ({children}) => {
	return (
		<div className="flex flex-col bg-white h-screen overflow-hidden">
			{children}
			<div className="flex justify-center items-center gap-5 bottom-0 fixed w-full h-12 bg-bottomBar">
				<a href="mailto:romanmakesthings@gmail.com">
					<AiOutlineMail size={24} />
				</a>
				<a
					href="https://github.com/rburkard"
					target="_blank"
					rel="noopener noreferrer"
				>
					<AiOutlineGithub size={24} />
				</a>
				<a
					href="https://www.linkedin.com/in/rburkard"
					target="_blank"
					rel="noopener noreferrer"
				>
					<AiOutlineLinkedin size={24} />
				</a>
				<a
					href="https://twitter.com/RomanMakes3000"
					target="_blank"
					rel="noopener noreferrer"
				>
					<AiOutlineTwitter size={24} />
				</a>
			</div>
		</div>
	);
};
