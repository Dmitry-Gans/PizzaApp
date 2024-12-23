import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
// import { FC } from 'react';

function Button({ children, className, ...props }: ButtonProps) {
	return (
		<button
			className={cn(styles['button'], styles['accent'], className)}
			{...props}
		>
			{children}
		</button>
	);
}

export default Button;

//Второй способ типизации кнопки:

// export const ButtonAlt: FC<ButtonProps> = ({
// 	className,
// 	children,
// 	...props
// }) => {
// 	return (
// 		<button className={cn('button accent', className)} {...props}>
// 			{children}
// 		</button>
// 	);
// };
