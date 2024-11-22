import type { VariantProps } from 'class-variance-authority';

import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';

import { getButtonClasses } from './libs/getButtonClasses';

export type ButtonVariants = VariantProps<typeof getButtonClasses>;

export type ButtonProps = ButtonVariants &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, size, variant, shape, color, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={getButtonClasses({ className, shape, size, variant })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
