import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { Layout, Menu } from 'antd';

const { Header, Content, Sider } = Layout;

class App extends Component {
  state = {
    loggedIn: false,
    collapsed: false
  }

  onCollapse = () => {
    this.setState({collapsed: !this.state.collapsed})
  }

  render() {
    return (
      <div className="App">
      <Layout>
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px', textAlign: 'right'}}
          >
            <Menu.Item key="1">Register</Menu.Item>
            <Menu.Item key="2">Login</Menu.Item>
            <Menu.Item key="3">Logout</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} 
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            style={{ background: '#fff' }}>
            <Navbar />   
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              Content
            </Content>
          </Layout>
    </Layout>
  </Layout>
        
      </div>
    );
  }
}

export default App;
