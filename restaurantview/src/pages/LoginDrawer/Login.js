import React from 'react';
import { Drawer, Form, Input, Button, Row, Col } from 'antd';
import styleLogin from './styleLogin';

    const FormItem = Form.Item;
class LoginDrawer extends React.Component { 
constructor (props) {
    super(props);
    this.state = {

    }
}
render () {
    const { getFieldDecorator } = this.props.form;
    return (
            <div>
                <Drawer
                    title="Login"
                    placement="right"
                    onClose={this.props.onClose}
                    visible={this.props.visible}
                >
                    <Form onSubmit={this.handleLoginSubmit}>
                        <Row gutter={8}>
                            <Col span={12}>
                                <FormItem
                                    label="Username"
                                >
                                    {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your username!', whitespace: true }],
                                    })(
                                    <Input />
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem
                                    label="Password"
                                >
                                    {getFieldDecorator('password', {
                                    rules: [{
                                        required: true, message: 'Please input your password!',
                                    }, {
                                        validator: this.validateToNextPassword,
                                    }],
                                    })(
                                    <Input type="password" />
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <FormItem>
                                <Button type="primary" htmlType="submit" style={styleLogin.btn}>Login</Button>
                            </FormItem>
                        </Row>
                    </Form>  
                    
                </Drawer>
            </div>
    );
}
}

const Login = Form.create()(LoginDrawer);
export default Login;