import React from 'react';
import Header from './components/Header';
import InputBox from './components/InputBox';

function TodoList() {
  return (
    
    <div className="w-[400px] min-h-[300px] max-h-[600px] bg-white rounded-xl shadow-lg      overflow-hidden">
      <Header />
      <InputBox />
    </div>
    
  )
}

export default TodoList
