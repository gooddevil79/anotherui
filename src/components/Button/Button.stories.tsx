import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { User2 } from 'lucide-react';

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
    mode: {
      control: 'inline-radio',
      options: ['default', 'icon-only'],
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'md',
    shape: 'normal',
    mode: 'default',
  },
  decorators: [
    (_story, context) => (
      <div className="space-x-2">
        <Button {...context.args} size="sm" />
        <Button {...context.args} size="md" />
        <Button {...context.args} size="lg" />
      </div>
    ),
  ],
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'md',
    shape: 'normal',
    mode: 'default',
  },
  decorators: [
    (_story, context) => (
      <div className="space-x-2">
        <Button {...context.args} size="sm" />
        <Button {...context.args} size="md" />
        <Button {...context.args} size="lg" />
      </div>
    ),
  ],
};

export const Success: Story = {
  args: {
    variant: 'success',
    size: 'md',
    shape: 'normal',
    mode: 'default',
  },
  decorators: [
    (_story, context) => (
      <div className="space-x-2">
        <Button {...context.args} size="sm" />
        <Button {...context.args} size="md" />
        <Button {...context.args} size="lg" />
      </div>
    ),
  ],
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
  decorators: [
    (_story, context) => (
      <div className="space-x-2">
        <Button {...context.args} size="sm" />
        <Button {...context.args} size="md" />
        <Button {...context.args} size="lg" />
      </div>
    ),
  ],
};

export const Link: Story = {
  args: {
    variant: 'link',
  },
  decorators: [
    (_story, context) => (
      <div className="space-x-2">
        <Button {...context.args} size="sm" />
        <Button {...context.args} size="md" />
        <Button {...context.args} size="lg" />
      </div>
    ),
  ],
};

export const OutLine: Story = {
  args: {
    variant: 'outline',
  },
  decorators: [
    (_story, context) => (
      <div className="space-x-2">
        <Button {...context.args} size="sm" />
        <Button {...context.args} size="md" />
        <Button {...context.args} size="lg" />
      </div>
    ),
  ],
};

export const OutLineDanger: Story = {
  args: {
    variant: 'outline-danger',
  },
  decorators: [
    (_story, context) => (
      <div className="space-x-2">
        <Button {...context.args} size="sm" />
        <Button {...context.args} size="md" />
        <Button {...context.args} size="lg" />
      </div>
    ),
  ],
};


export const OutLineSuccess: Story = {
  args: {
    variant: 'outline-success',
  },
  decorators: [
    (_story, context) => (
      <div className="space-x-2">
        <Button {...context.args} size="sm" />
        <Button {...context.args} size="md" />
        <Button {...context.args} size="lg" />
      </div>
    ),
  ],
};


export const IconOnly: Story = {
  args: {
    variant: 'default',
    size: 'md',
    shape: 'normal',
  },
  decorators: [
    (_story, context) => (
      <div className="space-x-2">
        <Button
          {...context.args}
          size="sm"
          mode="icon-only"
          prefixIcon={<User2 />}
        />
        <Button
          {...context.args}
          size="md"
          mode="icon-only"
          prefixIcon={<User2 />}
        />
        <Button
          {...context.args}
          size="lg"
          mode="icon-only"
          prefixIcon={<User2 />}
        />
      </div>
    ),
  ],
};



export const Loading: Story = {
  args: {
    variant: 'default',
    size: 'md',
    shape: 'normal',
    loading:true
  },
  decorators: [
    (_story, context) => (
      <div className="flex items-center space-x-2">
        <Button
          {...context.args}
          size="sm"
        />
        <Button
          {...context.args}
          size="md"
        />
        <Button
          {...context.args}
          size="lg"
        />
      </div>
    ),
  ],
};


export const Disabled: Story = {
  args: {
    variant: 'default',
    size: 'md',
    shape: 'normal',
    disabled:true
  },
  decorators: [
    (_story, context) => (
      <div className="flex items-center space-x-2">
        <Button
          {...context.args}
          size="sm"
        />
        <Button
          {...context.args}
          size="md"
        />
        <Button
          {...context.args}
          size="lg"
        />
      </div>
    ),
  ],
};