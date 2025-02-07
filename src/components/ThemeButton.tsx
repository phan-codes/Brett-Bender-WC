import { useTheme } from "../providers/ThemeContext";
import React, { useContext } from "react";
const ThemeButton: React.FC = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<button onClick={toggleTheme} className="p-2 mx-8 cursor-pointer">
			{theme === "light" ? (
				<img src="/svgs/darkmode.svg" alt="dark icon" width={30} height={30} />
			) : (
				<img src="/svgs/lightmode.svg" alt="light icon" width={30} height={30} />
			)}
		</button>
	);
};

export default ThemeButton;
