import React from 'react';
import './style/common.scss';
import './style/style.scss';
import './style/style2.scss';
import './style/_breakpoint.scss';
import { BrowserRouter , Route } from 'react-router-dom';

/* 페이지 */

import index from './pages/index'
import page from './pages/page'
import Login from './pages/login';

/* 페이지 */

function App() {
  return (
    <BrowserRouter>
        <Route exact path="/" component={index}/>
        <Route path="/page" component={page}/>
        <Route path="/login" component={Login}/>

    </BrowserRouter>
  );
}

export default App;
