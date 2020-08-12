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
import Invest_index2 from './pages/invest_index2';
import Invest_index2_detail from './pages/invest_index2_detail';
import Invest_index3 from './pages/invest_index3';
import Invest_index3_detail from './pages/invest_index3_detail';
import Invest_index3_add from './pages/invest_index3_add';
import Invest_index4 from './pages/invest_index4';
import Invest_index5 from './pages/invest_index5';
import Corporation_signup from './pages/corporation_signup';
import Find_id from './pages/find_id';
import Corporation_find_id from './pages/corporation_find_id';
import Set_password from './pages/set_password';
import Terms1 from './pages/terms1';
import Terms2 from './pages/terms2';
import Terms3 from './pages/terms3';
import Error_page from './pages/error_page';
import Invest_prepare from './pages/invest_prepare';
import Invest_check from './pages/invest_check';


/* 페이지 */

function App() {
  return (
    <BrowserRouter>
        <Route exact path="/" component={index}/>
        <Route path="/invest_index" component={Invest_index}/>
        <Route path="/invest_index2" component={Invest_index2}/>
        <Route path="/invest_index2_detail" component={Invest_index2_detail}/>
        <Route path="/invest_index3" component={Invest_index3}/>
        <Route path="/invest_index3_detail" component={Invest_index3_detail}/>
        <Route path="/invest_index3_add" component={Invest_index3_add}/>
        <Route path="/invest_index4" component={Invest_index4}/>
        <Route path="/invest_index5" component={Invest_index5}/>
        <Route path="/page" component={page}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signup2" component={Signup2}/>
        <Route path="/corporation_signup" component={Corporation_signup}/>
        <Route path="/find_id" component={Find_id}/>
        <Route path="/corporation_find_id" component={Corporation_find_id}/>
        <Route path="/set_password" component={Set_password}/>
        <Route path="/terms1" component={Terms1}/>
        <Route path="/terms2" component={Terms2}/>
        <Route path="/terms3" component={Terms3}/>
        <Route path="/error_page" component={Error_page}/>
        <Route path="/invest_prepare" component={Invest_prepare}/>
        <Route path="/invest_check" component={Invest_check}/>
    </BrowserRouter>
  );
}

export default App;
