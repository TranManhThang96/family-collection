import React from 'react';
import clsx from 'clsx';
import './button.scss';
import Link from 'next/link';

const Button = ({
  children,
  className,
  href,
  ...otherProps
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  otherProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}) => {
  if (href) {
    return (
      <Link
        className={clsx(
          'button-link box-border inline-flex h-10 items-center gap-2 rounded-[24px] px-4 py-0 text-sm leading-5 text-[#656f79] no-underline',
          className
        )}
        href={href}
        {...otherProps}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      {...otherProps}
      className={clsx(
        'box-border inline-flex h-10 items-center gap-2 rounded-[40px] px-4 py-0 text-sm leading-5 no-underline',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
