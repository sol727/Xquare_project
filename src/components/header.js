import React from 'react'
import { Link } from 'react-router-dom';
export default class Header extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <header>
                <div className="container pc_header mo_none">
                    <div className="clearfix2">                        
                        <Link to="/"><img src={ require('../images/img_logo_xquare.png') } alt="로고"/></Link>                                              
                        <div className="right">
                            <Link to="/login"><span className="menu">로그인</span></Link>
                            <Link to="/signUp"><span className="menu">회원가입</span></Link>
                            <Link to="/"><span className="menu">안내/문의</span></Link>
                        </div>                     
                    </div> 
                    <div className="center">
                        <Link to="/"><span className="menu">엑스퀘어 소개</span></Link>
                        <Link to="/invest_prepare"><span className="menu">투자하기</span></Link>
                        <Link to="/"><span className="menu">소식</span></Link>
                    </div>                   
                </div>
                <div className="mo_header pc_none">
                    <div className="clearfix2">
                        <Link to="/"><img src={ require('../images/img_logo_xquare.png') } alt="로고" className="logo"/></Link>
                        <div className="clearfix2">
                            <p className="notice_bell"><img src={ require('../images/icons/bell.png') } alt="벨아이콘"/><span className="playF">99</span> </p>
                            <button className="burger_btn"><img src={ require('../images/icons/hamburger.png') } alt="햄버거아이콘"/></button>
                        </div>                        
                    </div> 
                    <div className="hamburger_wrap">
                        <div className="dim"></div>
                        <div className="menu_wrap">                            
                            <div className="clearfix2 top">
                                <Link to="/"><img src={ require('../images/img_logo_xquare.png') } alt="로고" className="logo"/></Link>
                                <button className="burger_btn"><img src={ require('../images/icons/close_btn.png') } alt="닫기버튼"/></button>
                            </div>                            
                            <div className="menu">
                                <div className="before_login">
                                    <ul className="clearfix">
                                        <li><Link to="/signUp">회원가입</Link></li>
                                        <li><Link to="/login">로그인</Link></li>
                                    </ul>
                                </div>
                                <ul className="menu_list">
                                    <li><Link to="/">엑스퀘어 소개</Link></li>
                                </ul>
                            </div>                           
                        </div>                       
                    </div>               
                </div>
            </header>
        )
    }
}