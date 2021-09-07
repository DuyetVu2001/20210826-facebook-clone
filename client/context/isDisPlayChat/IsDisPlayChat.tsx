import { createContext, useState } from 'react';

export const ChatContext = createContext({});

const ChatContextProvider = ({ children }: any) => {
	const [isDisplayChat, setIsDisplayChat] = useState(false);

	const openChat = () => setIsDisplayChat(true);
	const closeChat = () => setIsDisplayChat(false);

	return (
		<ChatContext.Provider value={{ isDisplayChat, closeChat, openChat }}>
			{children}
		</ChatContext.Provider>
	);
};

export default ChatContextProvider;
