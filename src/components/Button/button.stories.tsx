import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Button,{ButtonProps} from './Button';

export default{
  title:"Button",
  component:Button,
} as Meta

const Tempate:Story<ButtonProps>=(args)=><Button {...args}>Button</Button>

export const Default = Tempate.bind({})

export const Link = Tempate.bind({})
Link.args={
  btnType:"link",
  href:"https://google.com"
}