import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import Input, { InputProps } from './input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    prepend: { control: 'text' },
    append: { control: 'text' },
    icon: { control: 'text' },
  },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const defaultInput = Template.bind({});

defaultInput.args = {
  style: { width: '300px' },
  placeholder: 'placeholder',
  onChange: action('changed'),
};

export const iconInput = Template.bind({});
iconInput.args = {
  style: { width: '300px' },
  placeholder: 'input with icon',
  icon: 'search',
};

export const prependInput = Template.bind({});

prependInput.args = {
  style: { width: '300px' },
  defaultValue: 'google',
  prepend: 'https://',
};

export const appendInput = Template.bind({});

appendInput.args = {
  style: { width: '300px' },
  defaultValue: 'google',
  append: '.com',
};
