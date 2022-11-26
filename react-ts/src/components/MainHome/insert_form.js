import { React, useState } from "react";
import {Button,  Form, Input, Result } from "antd";
import axios, {isCancel, AxiosError} from 'axios';

const InsertForm = () => {
  const [username,SetUsername] = useState('');
  const [email,SetEmail] = useState('');
  const [password,SetPassword] = useState('');

  const ApiUrl = 'http://localhost:5000/user/CreateUser'
    async function CreateUser(DataInsert) {
    console.log('Submit Do')
        const response = await axios({
            method: 'post',
            url: ApiUrl,
            data : {
                username: username,
                email: email,
                password: password,
            }
        })
        console.log(response.data)
  }
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrappCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      
    >
        <Form.Item
            label='Username'
            name='username'
            rules={[
                {
                    required: true,
                    message: 'Please input your username!'
                }

            ]}
        >
            <Input name={'username'} value={'username'} 
                onChange={(e)=> SetUsername(e.target.value)}/>
        </Form.Item>
        <Form.Item
            label='Email'
            name='email'
            rules={[
                {
                    required: true,
                    message: 'Please input your email!'
                    
                    
                }

            ]}
        >
            <Input name={'email'} value={'email'} 
                onChange={(e)=> SetEmail(e.target.value)}/>
        </Form.Item>
        <Form.Item
            label='Password'
            name='password'
            rules={[
                {
                    required: true,
                    message: 'Please input your password!'
                }

            ]}
        >
            <Input.Password name={'password'} value={'password'} 
                onChange={(e)=> SetPassword(e.target.value)}/>
        </Form.Item>
        <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16
            }}
        >
            <Button type='primary' htmlType="submit" onClick={CreateUser}>
                Submit
            </Button>
        </Form.Item>
    </Form>
  );
};

export default InsertForm;
