import React, { useEffect, useState } from 'react';
import TableList from '../src/components/MainHome/table_list.js'
import InsertForm from './components/MainHome/insert_form.js';

const App = () => {
  
  return (
    <div>
      <h1>
        Test Rest Api.
      </h1>
      <TableList/>
      <InsertForm/>
    </div>
  );
};
export default App;