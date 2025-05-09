
import React, { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'accent' | 'secondary' | 'white';
  size?: 'sm' | 'md' | 'lg';
  bordered?: boolean;
  className?: string;
}

const PixelButton: React.FC<PixelButtonProps> = ({
  children,
  color = 'primary',
  size = 'md',
  bordered = true,
  className = '',
  ...props
}) => {
  const colorClasses = {
    primary: 'bg-gaming-primary hover:bg-gaming-secondary text-white',
    accent: 'bg-gaming-accent hover:bg-gaming-accent/90 text-white',
    secondary: 'bg-gaming-secondary hover:bg-gaming-secondary/90 text-white',
    white: 'bg-white hover:bg-gray-100 text-gaming-dark',
  };

  const sizeClasses = {
    sm: 'text-xs py-1 px-3',
    md: 'text-sm py-2 px-4',
    lg: 'text-base py-3 px-6',
  };

  const borderStyle = bordered
    ? 'border-b-4 border-r-4 active:border-b-2 active:border-r-2 active:transform active:translate-y-[2px] active:translate-x-[2px]'
    : '';

  const borderColorClass = {
    primary: bordered ? 'border-gaming-secondary/70' : '',
    accent: bordered ? 'border-gaming-accent/70' : '',
    secondary: bordered ? 'border-gaming-secondary/50' : '',
    white: bordered ? 'border-gray-300' : '',
  };

  return (
    <button
      className={cn(
        'font-bold relative transition-all duration-75 select-none',
        'transform hover:scale-[1.02]',
        'shadow-sm',
        'outline-none focus:outline-none focus:ring-2 focus:ring-gaming-primary/50',
        colorClasses[color],
        sizeClasses[size],
        borderStyle,
        borderColorClass[color],
        'before:absolute before:inset-0 before:border-2 before:border-black/10 before:pointer-events-none before:z-10',
        className
      )}
      {...props}
    >
      <span className="relative z-0 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default PixelButton;
