import { cva } from 'class-variance-authority';

export const getButtonClasses = cva(
  'inline-flex items-center justify-center gap-1 whitespace-nowrap font-medium ring-offset-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    defaultVariants: {
      size: 'md',
      variant: 'default',
      shape: 'normal',
      mode: 'default',
    },
    variants: {
      size: {
        md: 'h-10  px-2 py-1 text-base',
        lg: 'h-12  px-3 py-2 text-lg',
        sm: 'h-7 rounded-xl px-1 py-0.5 text-xs',
      },
      variant: {
        default:
          'bg-brand text-brand-fg hover:bg-brand-medium/90 focus-visible:ring-primary',
        outline: 'border-2 border-brand text-brand focus-visible:ring-primary',
        'outline-danger':
          'border-2 border-danger text-danger hover:bg-danger hover:text-danger-fg focus-visible:ring-primary',
        'outline-success':
          'border-2 border-success text-success hover:bg-success hover:text-success-fg focus-visible:ring-primary',
        ghost: 'focus-visible:ring-primary',
        link: 'underline-offset-4 hover:underline',
        danger: 'bg-danger text-danger-fg',
        success: 'bg-success text-success-fg underline-offset-4',
      },
      shape: {
        pill: 'rounded-au-full',
        normal: 'rounded-au',
      },
      mode: {
        default: '',
        'icon-only': 'size-10 p-0',
      },
    },
    compoundVariants: [
      {
        mode: 'icon-only',
        size: 'lg',
        className: 'size-12',
      },
      {
        mode: 'icon-only',
        size: 'sm',
        className: 'size-8',
      },
    ],
  }
);
