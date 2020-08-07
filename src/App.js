import React from 'react';
import './style/common.css';
import './style/style.css';
import { BrowserRouter , Route } from 'react-router-dom';

/* 페이지 */

import index from './pages/index'
import page from './pages/page'

/* 페이지 */

function App() {
  return (
    <BrowserRouter>
        <Route exact path="/" component={index}/>
        <Route path="/page" component={page}/>
    </BrowserRouter>
  );
}

export default App;
