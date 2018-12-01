import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Row, Col} from 'antd';
import style from './style';
import gramsLogo from "./images/grams-logo.png";

const { Header } = Layout;

const HeaderDiv = props => (
    <Layout>
        <Header style={style.header} className="header">
            <Row type="flex" gutter={32}>
                <Col span={3}>
                    <div style={style.imgDiv}>
                        <Link to="/"><img alt="grams-logo" src={gramsLogo} style={style.logo}/></Link>
                    </div>
                </Col>
                <Col span={15}>
                    <div style={style.helloUser}>
                        {(props.loggedIn) ? <h4>Hello User</h4> : <h4>Restaurant Management Made Easy</h4>}
                        
                    </div>
                </Col>
                <Col span={6}>
                    {(() => {
                            if (props.loggedIn) {
                                return (
                                    <div style={style.nav}>
                                        <span style={style.navDiv}>
                                            <h4>Logout</h4>
                                        </span>
                                    </div>
                                );
                            } else {
                                return (
                                    <div style={style.nav}>
                                        <span style={style.navDiv}>
                                            <Link to="/register"><h4>Create an Account</h4></Link>
                                        </span>
                                        <span>
                                            <h4 style={style.navDiv}>Login</h4>
                                        </span>
                                    </div>
                                );
                            }
                        })()
                    }
                    
                </Col>
            </Row>
            
            <Menu></Menu>
        </Header>
    </Layout>
);
export default HeaderDiv;