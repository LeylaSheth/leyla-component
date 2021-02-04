import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Menu, { MenuProps } from './menu';
import MenuItem from './menuItem';
import SubMenu from './subMenu';

export default{
  title:"Menu",
  component:Menu
} as Meta

const Template :Story<MenuProps>=(args)=>(<Menu {...args}>
  <MenuItem>Item1</MenuItem>
  <MenuItem>Item2</MenuItem>
  <MenuItem>Item3</MenuItem>
</Menu>)


const SubTemplate :Story<MenuProps>=(args)=>(<Menu {...args}>
<MenuItem >cool link</MenuItem>
<SubMenu title="dropdown">
  <MenuItem >cool link</MenuItem>
  <MenuItem >cool link</MenuItem>
  <MenuItem >cool link</MenuItem>
</SubMenu>
<MenuItem >cool link</MenuItem>
</Menu>)


export const Horizontal = Template.bind({})
Horizontal.args={
  mode:'horizontal'
}

export const WithSubMenu = SubTemplate.bind({})
WithSubMenu.args={
  mode:'vertical',
  defaultOpenSubMenus:['1']
}