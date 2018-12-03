import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Registration from './pages/Registration/Registration';
import Login from './pages/LoginDrawer/Login';
import Home from './pages/Home/Home';

import Auth from './utils/Auth';
import API from './utils/API';

import './App.css';
import styleApp from './styleApp';

import { Layout } from 'antd';

const { Content, Sider } = Layout;

class App extends Component {
  state = {
    loggedIn: false,
    collapsed: false,
    user: null,
    loginVisibility: true
  }

  componentDidMount() {
		Auth.getUser().then(response => {
			console.log(response.data);
			if (!!response.data.user) {
				this.setState({
					loggedIn: true,
					user: response.data.user
				});
			} else {
				this.setState({
					loggedIn: false,
					user: null
				});
			}
		})
	}

  loginDrawerOnClose = () => {
    this.setState({loginVisibility: !this.state.loginVisibility})
  }

  signUp = (signUpData, adminData) => {
    Auth.signup(signUpData)
      .then(user => {
        const id = user.data._id;
        return API.createAdmin(id, adminData);
      })
      .then(user => {
        console.log("userWithAdmin", user.data)
        const { username, password } = signUpData;
        return Auth.login(username, password);
      })
      .then(user => this.setState({user: user.data, loggedIn: true}))
      .catch(err => console.log(err));
  }

  login = (username, password) => {
    Auth.login(username, password)
      .then(user => this.setState({user: user.data, loggedIn: true}))
  }

  logout = () => {
    Auth.logout();
  }



  onCollapse = () => {
    this.setState({collapsed: !this.state.collapsed})
  }

  render() {
    console.log(this.state.user);
    console.log("LoggedIn", this.state.loggedIn)
    return (
      <div className="App">
      {!this.state.loggedIn && (
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
                  <Route exact path="/register" render={() => <Registration signUp={this.signUp}/>} />
                  <Route exact path="/login" render={() => <Login onClose={this.loginDrawerOnClose} visible={this.state.loginVisibility} login={this.login} />} />
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      )}

      {this.state.loggedIn && (
        <Layout>
          <Header loggedIn={this.state.loggedIn} logout={this.logout}/>
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
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      )}
        
      </div>
    );
  }
}

export default App;
