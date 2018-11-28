import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import './App.css';
import styleApp from './styleApp';
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
        <Header loggedIn={this.state.loggedIn}/>
        <Layout>
          <Sider width={200} 
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            style={{background: "#fff"}}
            >
            <Navbar collapsed={this.state.collapsed}/>   
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            
            <Content style={styleApp.content}>
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
