import React from 'react';
import './style/common.scss';
import './style/style.scss';
import './style/style2.scss';
import './style/_breakpoint.scss';
import './style/_breakpoint2.scss';
import { BrowserRouter , Route } from 'react-router-dom';

/* 페이지 */

import index from './pages/index'
import page from './pages/page'
import Login from './pages/login';
import Signup from './pages/signup';
import Signup2 from './pages/signup2';
import Invest_index from './pages/invest_index';
import Corporation_signup from './pages/corporation_signup';
import Find_id from './pages/find_id';


/* 페이지 */

function App() {
  return (
    <BrowserRouter>
        <Route exact path="/" component={index}/>
        <Route path="/invest_index" component={Invest_index}/>
        <Route path="/page" component={page}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signup2" component={Signup2}/>
        <Route path="/corporation_signup" component={Corporation_signup}/>
        <Route path="/find_id" component={Find_id}/>
    </BrowserRouter>
  );
}

export default App;
