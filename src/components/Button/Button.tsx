import type { VariantProps } from 'class-variance-authority';

import { B, F, G } from '@mobily/ts-belt';
import { Slot } from '@radix-ui/react-slot';
import { Loader2 } from 'lucide-react';
import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from 'react';

import { createIcon } from './libs/createIcon';
import { getButtonClasses } from './libs/getButtonClasses';

export type ButtonVariants = VariantProps<typeof getButtonClasses>;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    asChild?: boolean;
    prefixIcon?: ReactNode;
    suffixIcon?: ReactNode;
    loading?: boolean;
    mode?: 'default' | 'icon-only';
    loadingMessage?: string;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      size,
      variant,
      children,
      shape,
      color,
      prefixIcon,
      suffixIcon,
      loading = false,
      disabled = false,
      asChild = false,
      loadingMessage = 'Loading',
      mode = 'default',
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const isDisabled = B.or(disabled, loading);

    const renderLoadingState = () =>
      B.ifElse(
        loading,
        () => (
          <>
            {createIcon(<Loader2 />, { className: 'animate-spin', size })}
            {F.equals(mode, 'default') && <span>{loadingMessage}</span>}
          </>
        ),
        () => null
      );

    const renderContent = () => (
      <>
        {B.ifElse(
          F.equals(mode, 'icon-only'),
          () => createIcon(prefixIcon, { size }),
          () => (
            <>
              {G.isNotNullable(prefixIcon) && createIcon(prefixIcon, { size })}
              {children}
              {G.isNotNullable(suffixIcon) && createIcon(suffixIcon, { size })}
            </>
          )
        )}
      </>
    );
    return (
      <Comp
        disabled={isDisabled}
        ref={ref}
        className={getButtonClasses({
          className,
          shape,
          size,
          variant,
          mode,
        })}
        {...props}
      >
        {B.ifElse(loading, renderLoadingState, renderContent)}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button };
