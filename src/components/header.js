import React from 'react'
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <header>
                <div className="container">
                    <div className="clearfix2">                        
                        <Link to="/"><img src={ require('../images/img_logo_xquare.png') } alt="로고"/></Link>                                              
                        <div className="right">
                            <Link to="/"><span className="menu">로그인</span></Link>
                            <Link to="/"><span className="menu">회원가입</span></Link>
                            <Link to="/"><span className="menu">안내/문의</span></Link>
                        </div>                     
                    </div> 
                    <div className="center">
                        <Link to="/"><span className="menu">엑스퀘어 소개</span></Link>
                        <Link to="/"><span className="menu">투자하기</span></Link>
                        <Link to="/"><span className="menu">소식</span></Link>
                    </div>                   
                </div>
            </header>
        )
    }
}