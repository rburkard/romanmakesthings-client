import {createContext, useContext} from 'react';

export default function useIsMobile() {
	const dataView = useContext(IsMobile);
	return dataView;
}

export const IsMobile = createContext<boolean>(false);

IsMobile.displayName = 'IsMobile';
