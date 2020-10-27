import React from 'react';
import './style/common.scss';
import './style/style.scss';
import './style/style2.scss';
import './style/style3.scss';
import './style/_breakpoint.scss';
import './style/_breakpoint2.scss';
import './style/_breakpoint3.scss';
import { BrowserRouter , Route } from 'react-router-dom';

/* 페이지 */

import Index from './pages/index'
import page from './pages/page'
import Login from './pages/login';
import Signup from './pages/signup';
import Signup2 from './pages/signup2';
import Invest_detail from './pages/invest_detail';
import Invest_detail2 from './pages/invest_detail2';
import Invest_detail2_detail from './pages/invest_detail2_detail';
import Invest_detail3 from './pages/invest_detail3';
import Invest_detail3_detail from './pages/invest_detail3_detail';
import Invest_detail3_add from './pages/invest_detail3_add';
import Invest_detail4 from './pages/invest_detail4';
import Invest_detail5 from './pages/invest_detail5';
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
import Invest_search from './pages/invest_search';
import Invest_index from './pages/invest_index';
import Invest_step1 from './pages/invest_step1';
import Invest_step2 from './pages/invest_step2';
import Invest_step3 from './pages/invest_step3';
import Mo_invest_prepare from './pages/mo_invest_prepare';
import Mo_invest_account from './pages/mo_invest_account';
import Mo_invest_test from './pages/mo_invest_test';
import Invest_complete from './pages/invest_complete';
import Index2 from './pages/index2';

import V3_Project from './pages/v3_project';
import V3_Project2 from './pages/v3_project2';
import V3_Project_state from './pages/v3_project_state';
import V3_Account from './pages/v3_account';
import V3_Account2 from './pages/v3_account2';
import V3_Account3 from './pages/v3_account3';
import V3_Account4 from './pages/v3_account4';
import V3_Feedback from './pages/v3_feedback';
import V3_investor_state from './pages/v3_investor_state';
import V3_investor_opinion from './pages/v3_investor_opinion';
import V3_news from './pages/v3_news';
import V3_funding1 from './pages/v3_funding1';
import V3_funding2 from './pages/v3_funding2';
import V3_funding3 from './pages/v3_funding3';



/* 페이지 */

function App() {
  return (
    <BrowserRouter>
        <Route exact path="/" component={Index}/>
        <Route path="/index2" component={Index2}/>
        <Route path="/invest_detail" component={Invest_detail}/>
        <Route path="/invest_detail2" component={Invest_detail2}/>
        <Route path="/invest_detail2_detail" component={Invest_detail2_detail}/>
        <Route path="/invest_detail3" component={Invest_detail3}/>
        <Route path="/invest_detail3_detail" component={Invest_detail3_detail}/>
        <Route path="/invest_detail3_add" component={Invest_detail3_add}/>
        <Route path="/invest_detail4" component={Invest_detail4}/>
        <Route path="/invest_detail5" component={Invest_detail5}/>
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
        <Route path="/mo_invest_prepare" component={Mo_invest_prepare}/>
        <Route path="/mo_invest_account" component={Mo_invest_account}/>
        <Route path="/mo_invest_test" component={Mo_invest_test}/>
        <Route path="/invest_search" component={Invest_search}/>
        <Route path="/invest_index" component={Invest_index}/>
        <Route path="/invest_step1" component={Invest_step1}/>
        <Route path="/invest_step2" component={Invest_step2}/>
        <Route path="/invest_step3" component={Invest_step3}/>
        <Route path="/invest_complete" component={Invest_complete}/>

        <Route path="/v3_project" component={V3_Project}/>
        <Route path="/v3_project2" component={V3_Project2}/>
        <Route path="/v3_project_state" component={V3_Project_state}/>
        <Route path="/v3_account" component={V3_Account}/>
        <Route path="/v3_account2" component={V3_Account2}/>
        <Route path="/v3_account3" component={V3_Account3}/>
        <Route path="/v3_account4" component={V3_Account4}/>
        <Route path="/v3_feedback" component={V3_Feedback}/>
        <Route path="/v3_investor_state" component={V3_investor_state}/>
        <Route path="/v3_investor_opinion" component={V3_investor_opinion}/>
        <Route path="/v3_news" component={V3_news}/>
        <Route path="/v3_funding1" component={V3_funding1}/>
        <Route path="/v3_funding2" component={V3_funding2}/>
        <Route path="/v3_funding3" component={V3_funding3}/>
             
        
    </BrowserRouter>
  );
}

export default App;
