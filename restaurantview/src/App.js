import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Registration from './pages/Registration/Registration';
import Login from './pages/LoginDrawer/Login';
import Home from './pages/Home/Home';
import './App.css';
import styleApp from './styleApp';
import { Layout } from 'antd';

const { Content, Sider } = Layout;

class App extends Component {
  state = {
    loggedIn: false,
    collapsed: false,
    user: {},
    loginVisibility: true
  }

  loginOnClose = () => {
    this.setState({loginVisibility: !this.state.loginVisibility})
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
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content style={styleApp.content}>
              <Switch>
                <Route exact path="/" render={() => <Home user={this.state.user}/>} />
                <Route exact path="/register" component={Registration} />
                <Route exact path="/login" render={() => <Login onClose={this.loginOnClose} visible={this.state.loginVisibility} />} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
        
      </div>
    );
  }
}

export default App;
