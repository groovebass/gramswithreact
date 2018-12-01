import React from 'react';
import { Form, Input, Tooltip, Icon, Button, Row, Col} from 'antd';
import styleRegis from './style';

import Pitch from '../../components/Pitch/Pitch';

const FormItem = Form.Item;



class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Row gutter={16}>
          <div style={styleRegis.headerDiv}>
            <h1 style={styleRegis.headerTag}>Create An Account</h1>
          </div>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <div style={styleRegis.imgBg}>
              <img alt="people-dinin" src="https://images.unsplash.com/photo-1520209268518-aec60b8bb5ca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b2b04f771779f9ce281cb3e6035f360e&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb" style={styleRegis.image}/>
            </div>
            <Pitch />
          </Col>
          <Col span={12}>
            <Form onSubmit={this.handleSubmit}>
              <Row gutter={16}>
                <Col span={12}>
                  <FormItem
                    label="First Name"
                  >
                    {getFieldDecorator('firstName', {
                      rules: [{ required: true, message: 'Please input your first name.', whitespace: true }],
                    })(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    label="Last Name"
                  >
                    {getFieldDecorator('lastName', {
                      rules: [{ required: true, message: 'Please input your last name.', whitespace: true }],
                    })(
                      <Input />
                    )}
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <FormItem
                    label="Username"
                  >
                    {getFieldDecorator('username', {
                      rules: [{ required: true, message: 'Please input your username!', whitespace: true }],
                    })(
                      <Input />
                    )}
                  </FormItem>
              </Row>
              <Row gutter={16}>
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
                <Col span={12}>
                  <FormItem
                    label="Confirm Password"
                  >
                    {getFieldDecorator('confirm', {
                      rules: [{
                        required: true, message: 'Please confirm your password!',
                      }, {
                        validator: this.compareToFirstPassword,
                      }],
                    })(
                      <Input type="password" onBlur={this.handleConfirmBlur} />
                    )}
                  </FormItem>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <FormItem
                    label="E-mail"
                  >
                    {getFieldDecorator('email', {
                      rules: [{
                        type: 'email', message: 'The input is not valid E-mail!',
                      }, {
                        required: true, message: 'Please input your E-mail!',
                      }],
                    })(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    label="Phone Number"
                  >
                    {getFieldDecorator('phone', {
                      rules: [{ required: true, message: 'Please input your phone number!' }],
                    })(
                      <Input style={{ width: '100%' }} />
                    )}
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <FormItem>
                  <Button type="primary" htmlType="submit" style={styleRegis.btn}>Register</Button>
                </FormItem>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
};
const Registration = Form.create()(RegistrationForm);
export default Registration;