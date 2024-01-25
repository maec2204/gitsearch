import { classMerge } from '@/util/classMerge';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  className,
  ...props
}) => {
  const buttonClass = classMerge(
    'px-4 py-2 bg-transparent rounded flex items-center flex-wrap',
    className
  );

  return (
    <button className={buttonClass} {...props}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
