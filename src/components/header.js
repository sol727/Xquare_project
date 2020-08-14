import React from 'react'
import { Link } from 'react-router-dom';
import $ from 'jquery'
export default class Header extends React.Component {

    constructor(props) {
    super(props);
    }
    componentDidMount(){

        $('header .pc_header.container .left_box .center .menu').mouseenter(function(){
            $(this).children('.sub_menu').show();
        });

        $('header .pc_header.container .left_box .center .menu .sub_menu').mouseleave(function(){
            $(this).hide();
        });

        $('.mo_header .menu_list>li').click(function(){
            $(this).children('.sub_menu').slideToggle();
            $(this).children('.more').toggleClass('off');
        });

        $('.mo_header .hamburger_wrap .close_btn').click(function(){
            $('.mo_header .hamburger_wrap .menu_wrap').animate({'right':'-100%'},500,function(){
                $('.mo_header .hamburger_wrap').hide();
            });
        }); 

        $('.mo_header .burger_btn').click(function(){
            $('.mo_header .hamburger_wrap').show();
            $('.mo_header .hamburger_wrap .menu_wrap').animate({'right':'0'},500);
        });
        $('.mo_header .logout_btn').click(function(){
            $('.mo_header .hamburger_wrap').show();
            $('.mo_header .hamburger_wrap .menu_wrap').animate({'right':'0'},500);
        });
    }
    onClickLink (link) {
        window.location.pathname = link
      }

    render() {
        return (
            <header>
                <div className="container pc_header mo_none clearfix2">
                    <div className="clearfix2 left_box">
                        <Link to="/" className="logo"><img src={ require('../images/img_logo_xquare.png') } alt="로고"/></Link>
                        <ul className="center clearfix">
                            <li><Link to=""><span className="menu">엑스퀘어 소개</span></Link></li>
                            <li><Link to="/invest_prepare"><span className="menu">투자하기</span></Link></li>
                            <li><Link to=""><span className="menu">소식</span></Link>
                                <ul className="sub_menu">
                                    <li className="title">소식</li>
                                    <li><Link to=""><span>공지사항</span></Link></li>
                                    <li><Link to=""><span>언론보도</span></Link></li>
                                    <li><Link to=""><span>이벤트</span></Link></li>
                                </ul>
                            </li>
                            {/* 로그인후 노출 ▽*/}
                            <li className="project"><Link to="/" ><span className="menu">프로젝트 개설</span></Link></li>
                        </ul>
                    </div>
                     {/* 로그인전 노출영역 */}
                 {/*<ul className="right">
                        <Link to="/login"><span className="menu">로그인</span></Link>
                        <Link to="/signUp"><span className="menu">회원가입</span></Link>
                        <Link to="/"><span className="menu">안내/문의</span></Link>
                    </ul> */}
                {/* 로그인후 노출영역 */}
                    <ul className="right clearfix">
                        <li className="bell"><p className="notice_bell"><img src={ require('../images/icons/bell.png') } alt="벨아이콘"/><span className="playF">99</span> </p></li>
                        <li><span className="menu">마이페이지</span>
                            <ul className="sub_menu">
                                <li className="title">마이페이지</li>
                                <li><Link to=""><span>나의 투자</span></Link></li>
                                <li><Link to=""><span>내정보 관리</span></Link></li>
                            </ul>
                        </li>
                        <li><Link to="/login"><span className="menu">로그아웃</span></Link></li>
                        <li>
                            <span className="menu">안내/문의</span>
                            <ul className="sub_menu">
                                <li className="title">안내/문의</li>
                                <li><Link to=""><span>이용가이드</span></Link></li>
                                <li><Link to=""><span>FAQ</span></Link></li>
                                <li><Link to=""><span>1:1 문의</span></Link></li>
                            </ul>
                        </li>
                    </ul>
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
                                <Link to=""><img src={ require('../images/img_logo_xquare.png') } alt="로고" className="logo"/></Link>
                                <button className="close_btn"><img src={ require('../images/icons/close_btn.png') } alt="닫기버튼"/></button>
                            </div>                            
                            <div className="menu">
                                <div className="before_login">
                                    <ul className="clearfix">
                                        <li><Link to="/signUp">회원가입</Link></li>
                                        <li><Link to="/login">로그인</Link></li>
                                    </ul>
                                </div>
                                {/* <div className="after_login clearfix2">
                                    <p className="date_txt"><span>개인회원</span>가입일 : yyyy.mm.dd</p>
                                    <p className="notice_bell"><img src={ require('../images/icons/bell.png') } alt="벨아이콘"/><span className="playF">99</span> </p>
                                </div> */}
                                <ul className="menu_list">
                                    <li><Link to="">엑스퀘어 소개<img src={ require('../images/icons/view_more.png') } alt="더보기아이콘"/></Link> </li>
                                    <li><Link to="/Invest_index">투자하기<img src={ require('../images/icons/view_more.png') } alt="더보기아이콘"/></Link></li>
                                    <li><Link to="">소식</Link><img src={ require('../images/icons/view_more.png') } alt="더보기아이콘" className="more"/>
                                        <ul className="sub_menu">
                                            <li><Link to="">공지사항<img src={ require('../images/icons/view_more.png') } alt="더보기아이콘"/></Link></li>
                                            <li><Link to="">언론보도<img src={ require('../images/icons/view_more.png') } alt="더보기아이콘"/></Link></li>
                                            <li><Link to="">이벤트<img src={ require('../images/icons/view_more.png') } alt="더보기아이콘"/></Link></li>
                                        </ul>
                                    </li>
                                    {/* 마이페이지는 로그인시에만 노출 */}
                                    <li><Link to="">마이페이지</Link><img src={ require('../images/icons/view_more.png') } alt="더보기아이콘" className="more"/>
                                        <ul className="sub_menu">
                                            <li><Link to="">나의 투자<img src={ require('../images/icons/view_more.png') } alt="더보기아이콘"/></Link></li>
                                            <li><Link to="">내정보 관리<img src={ require('../images/icons/view_more.png') } alt="더보기아이콘"/></Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="">안내/문의</Link><img src={ require('../images/icons/view_more.png') } alt="더보기아이콘" className="more"/>
                                        <ul className="sub_menu">
                                            <li><Link to="">공지사항<img src={ require('../images/icons/view_more.png') } alt="더보기아이콘"/></Link></li>
                                            <li><Link to="">FAQ<img src={ require('../images/icons/view_more.png') } alt="더보기아이콘"/></Link></li>
                                            <li><Link to="">1:1 문의<img src={ require('../images/icons/view_more.png') } alt="더보기아이콘"/></Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                                {/* 로그아웃버튼은 로그인시에만 노출 */}
                            <button type="button" className="logout_btn" onClick={() => this.onClickLink("/login")}>로그아웃</button>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}