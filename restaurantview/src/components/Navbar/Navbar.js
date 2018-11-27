import React from 'react';
import { Menu } from 'antd';
import style from './style';


class Navbar extends React.Component {
    
    render () {
        return (
            <Menu
            theme="light"
            mode="vertical"
            defaultSelectedKeys={['1']}
            style={style.header}
            >
                <Menu.Item key="1">Register</Menu.Item>
                <Menu.Item key="2">Login</Menu.Item>
                <Menu.Item key="3">Logout</Menu.Item>
          </Menu>
        )
    }
}

export default Navbar;