import React from 'react';
import { Layout, Menu} from 'antd';
import style from './style';
import gramsLogo from "./images/grams-logo.png";

const { Header } = Layout;

class HeaderDiv extends React.Component {
    
    render () {
        return (
            <Layout>
                <Header style={style.header} className="header">
                
                    <div style={style.imgDiv} className="logo">
                        <img alt="grams-logo" src={gramsLogo} style={style.logo}/>
                    </div>
                    
                   <div>
                       <h5>Login</h5>
                   </div>
                </Header>
            </Layout>
        )
    }
}

export default HeaderDiv;