import React from 'react';
import Header from './Header';
import Question from './Question';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className='App'>
      <Header />
      <Question />
      <Sidebar />
    </div>
  );
};

export default Layout;
