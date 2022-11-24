import { React, useState } from "react";
import {Button,  Form, Input } from "antd";
import axios, {isCancel, AxiosError} from 'axios';

const InsertForm = () => {

  const [DataInsert, SetDataInsert] = useState({
    username : "",
    email : "",
    password : ""
  });

  function handleChangeForm(event) {
    const { name, value } = event.target;
    SetDataInsert((userData) => {
      return {
        ...userData,
        [name]: value,
      };
    });
  }
  console.log(DataInsert)

  const ApiUrl = 'http://localhost:5000/user/CreateUser'
  function CreateUser(DataInsert){
    axios({
        method: 'post',
        url: ApiUrl,
        data : {
            username: DataInsert.username,
            email: DataInsert.email,
            password: DataInsert.password
        }
    })
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
            <Input name={'username'} value={'username'} onChange={handleChangeForm}/>
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
            <Input name={'email'} value={'email'} onChange={handleChangeForm}/>
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
            <Input.Password name={'password'} value={'password'} onChange={handleChangeForm}/>
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
