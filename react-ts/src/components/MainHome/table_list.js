import React, { useEffect, useState } from 'react';
import {Table} from 'antd';
import axios from 'axios';
const { Column, ColumnGroup} = Table;

const TableList = () => {
  const [data,SetData] = useState([]);
  const ApiUrl = 'http://localhost:5000/user/ListUser'
  console.log(data)
  useEffect(()=>{
    GetUser()
  },[])
  function GetUser(){
    axios.get(ApiUrl).then((response)=>{
     console.log(response.data)
     SetData(response.data)
    })
    .catch((error)=>{
     console.log("err: ",error)
    })
   }

  function DeleteUser(userid){
    axios.delete()
  }
  return (
    <div>
      <Table dataSource={data}>
          <ColumnGroup title='User Data'>
          <Column title = 'UserID' dataIndex='id' key='id'/>
          <Column title = 'Username' dataIndex='username' key='username'/>
          <Column title = 'Email' dataIndex='email' key='email'/>
          <Column title = 'Password' dataIndex='password' key='password'/>
          </ColumnGroup>
      </Table>
      
    </div>
   
  );
};
export default TableList;