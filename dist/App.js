import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import Icon from './components/Icon/icon';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
library.add(fas);
var App = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(Icon, { icon: "coffee", theme: 'danger', size: '10x' }),
        React.createElement(React.Fragment, null,
            React.createElement(Menu, { mode: 'horizontal', defaultIndex: '0', defaultOpenSubMenus: ['1'] },
                React.createElement(MenuItem, null, "cool link"),
                React.createElement(SubMenu, { title: "dropdown" },
                    React.createElement(MenuItem, null, "cool link"),
                    React.createElement(MenuItem, null, "cool link"),
                    React.createElement(MenuItem, null, "cool link")),
                React.createElement(MenuItem, null, "cool link"))),
        React.createElement(React.Fragment, null,
            React.createElement(Button, { autoFocus: true, btnType: 'default' }, "Hello"),
            React.createElement(Button, { disabled: true }, "Disabled Button"),
            React.createElement(Button, { btnType: 'primary', size: 'lg' }, "Large Primary"),
            React.createElement(Button, { btnType: 'danger', size: 'sm' }, "Small Danger"),
            React.createElement(Button, { btnType: 'link', href: "https://www.baidu.com", size: 'lg' }, "Baidu Link"),
            React.createElement(Button, { btnType: 'link', href: "https://www.baidu.com", size: 'lg', disabled: true }, "Disable Link"))));
};
export default App;
