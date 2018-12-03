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

handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { username, password } = values;
        this.props.login(username, password);
      } 
    });
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
                    <Form onSubmit={this.handleSubmit}>
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
                                    rules: {
                                        required: true, message: 'Please input your password!',
                                    }
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