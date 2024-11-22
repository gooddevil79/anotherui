import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

export type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  args: {
    children: 'Click Me',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'outline',
        'outline-danger',
        'outline-success',
        'ghost',
        'link',
        'danger',
        'success',
      ],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    shape: {
      control: 'select',
      options: ['normal', 'pill'],
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'md',
    shape: 'normal',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    shape: 'pill',
  },
};

export const Danger: Story = {
  args: {
    variant: 'outline-danger',
    size: 'lg',
    shape: 'normal',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    size: 'sm',
    shape: 'pill',
  },
};
