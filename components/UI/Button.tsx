import React from 'react';
import clsx from 'clsx';
import classes from './button.module.scss';

const Button = ({
  children,
  className,
  ...otherProps
}: {
  children: React.ReactNode;
  className?: string;
  otherProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}) => {
  return (
    <button {...otherProps} className={clsx(classes.button, className)}>
      {children}
    </button>
  );
};

export default Button;
