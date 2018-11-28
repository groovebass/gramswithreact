import React from 'react';
import { Layout, Menu, Row, Col} from 'antd';
import style from './style';
import gramsLogo from "./images/grams-logo.png";

const { Header } = Layout;

const HeaderDiv = props => (
    <Layout>
        <Header style={style.header} className="header">
            <Row>
                <Col span={3}>
                    <div style={style.imgDiv}>
                        <img alt="grams-logo" src={gramsLogo} style={style.logo}/>
                    </div>
                </Col>
                <Col span={5}>
                    <div style={style.helloUser}>
                        <h4>Hello User</h4>
                    </div>
                </Col>
                <Col span={16}>
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
                                            <h4>Create an Account</h4>
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