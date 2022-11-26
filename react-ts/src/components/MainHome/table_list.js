import React, { useEffect, useState } from 'react';
import { Button, Space, Table } from 'antd';
import { CloseOutlined } from '@ant-design/icons'
import axios from 'axios';
const { Column, ColumnGroup } = Table;

const TableList = () => {
  const [data, SetData] = useState([]);
  const Column = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Password',
      dataIndex: 'password',
      key: 'password'
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <Button danger>
            <CloseOutlined onClick={()=>{
              DeleteUser(record.id)
            }} />
          </Button>
        </Space>
      )
    },
  ]
  const ApiUrl = 'http://localhost:5000/user'
  console.log(data)
  useEffect(() => {
    GetUser()
  }, [])
  function GetUser() {
    axios.get(`${ApiUrl}/ListUser`).then((response) => {
      console.log(response.data)
      SetData(response.data)
    })
      .catch((error) => {
        console.log("err: ", error)
      })
  }

  function DeleteUser(userid) {
    axios.delete(`${ApiUrl}/DeleteUser/`+userid).then((response)=>{
      console.log(response.data)
      GetUser()
    }).catch((error)=>{
      console.log("err:",error)
    })
  }
  return (
    <div>
      <Table dataSource={data} columns={Column} />
    </div>

  );
};
export default TableList;