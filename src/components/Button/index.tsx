import { FC } from "react";

type ButtonStyle = {
	[key: string]: string | number;
};

type ButtonAttr = {
	title?: string;
	onClick?: () => void;
	icon?: React.ReactNode;
	className?: string;
	style?: ButtonStyle;
};

const Button: FC<ButtonAttr> = ({ title, icon, onClick, className, style }) => {
	return (
		<>
			<button style={style} onClick={onClick} className={className}>
				{icon && icon}
				{title && title}
			</button>
		</>
	);
};

export default Button;
