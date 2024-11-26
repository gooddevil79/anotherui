import type { VariantProps } from 'class-variance-authority';
import type { ReactNode } from 'react';

import { cn } from '@src/utils/cn';
import { cva } from 'class-variance-authority';
import { cloneElement, isValidElement } from 'react';

const classes = cva('shrink-0', {
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      lg: 'size-6',
      md: 'size-5',
      sm: 'size-4 stroke-[2.3px]',
    },
  },
});

export interface CreateIconOptions {
  className?: string;
  size?: VariantProps<typeof classes>['size'];
}

export const createIcon = (
  node: ReactNode,
  options: CreateIconOptions = {}
) => {
  const { className, size } = options;

  if (isValidElement(node)) {
    // eslint-disable-next-line @eslint-react/no-clone-element
    return cloneElement(node, {
      ...node.props,
      className: cn(
        'text-inherit',
        classes({ size }),
        className,
        node.props.className
      ),
    });
  }

  return node;
};
