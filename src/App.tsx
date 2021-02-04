import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './App.css';
import Button, { ButtonSize, ButtonType } from './components/Button/Button';
import Icon from './components/Icon/icon';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
library.add(fas)
const App:React.FC = () =>{
  return (
   <>
   <Icon icon="coffee" theme='danger' size='10x' />
    <>
    <Menu mode='horizontal' defaultIndex='0' defaultOpenSubMenus={['1']}>
      <MenuItem >cool link</MenuItem>
      <SubMenu title="dropdown">
        <MenuItem >cool link</MenuItem>
        <MenuItem >cool link</MenuItem>
        <MenuItem >cool link</MenuItem>
      </SubMenu>
      <MenuItem >cool link</MenuItem>
    </Menu>
    
    </>
    <>
      <Button autoFocus btnType='default'>Hello</Button>
      <Button disabled>Disabled Button</Button>
      <Button btnType='primary' size='lg'>Large Primary</Button>
      <Button btnType='danger' size='sm'>Small Danger</Button>
      <Button btnType='link' href="https://www.baidu.com" size='lg' >Baidu Link</Button>
      <Button btnType='link' href="https://www.baidu.com" size='lg' disabled>Disable Link</Button>
    </>
   </>
  )
}

export default App;
