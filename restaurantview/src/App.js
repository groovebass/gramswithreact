import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import './App.css';
import { Layout, Menu } from 'antd';

const { Content, Sider } = Layout;

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
        <Header />
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
