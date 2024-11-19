import { ButtonHTMLAttributes } from 'react';
import { ButtonVariant } from './types';

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
  variant?: ButtonVariant;
};

const Button: React.FC<ButtonProps> = ({ variant = 'contained', children, ...props }) => (
  <button
    {...props}
    className={`px-4 py-4 min-w-[20rem] rounded-full border-2 
        text-white text-3xl font-bold transition-all
        ${
          variant === 'contained'
            ? 'bg-[#00C782] border-[#00C782] hover:bg-[#1D976C] hover:border-[#1D976C]'
            : 'bg-transparent border-white hover:bg-white hover:text-black'
        }`}
  >
    {children}
  </button>
);

export default Button;
