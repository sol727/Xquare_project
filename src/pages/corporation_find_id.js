import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer';
import $ from 'jquery'

export default class Corporation_find_id extends React.Component {
    
    constructor(props) {
    super(props);
    }

    componentDidMount(){
        
        //tab
        $('.tab_btn_box li').on('click',function(){
            var idx = $(this).index();
            $('.tab_btn_box li').removeClass('on');
            $(this).addClass('on');
            $('.tab_cont_wrap .tab_cont').hide();
            $('.tab_cont_wrap .tab_cont').eq(idx).show();
        });
        $('.tab_cont_wrap .tab_cont').hide();
        if($('.tab_btn_box li').hasClass('on')){
            var idx = $('.tab_btn_box li.on').index();
            $('.tab_cont_wrap .tab_cont').eq(idx).show();
        };
    
    }

    render() {
        return (
            <>
                <Header />

                <section className="search_page">
                    <div className="container">
                        <div className="title_wrap">
                            <h1>법인회원<br/>아이디·비밀번호찾기</h1>
                        </div>
                        <div className="form_box">
                            <form action="">
                                <ul className="tab_btn_box clearfix">
                                    <li className="on">아이디 찾기</li>
                                    <li>비밀번호 찾기</li>
                                </ul>
                                <div className="tab_cont_wrap">
                                    <div className="tab_cont">
                                        <h3 className="input_title">사업자 등록번호</h3>
                                        <p className="error_msg">사업자등록번호를 다시 확인해주세요.</p>
                                        <input type="text" placeholder="10자리 숫자를 입력하세요" className="mt16"/>

                                        {/* 아이디찾기후 노출↓ */}
                                        <div className="certify_after certify_after2">
                                            <p className="date_txt"><span>법인회원</span>가입일 : yyyy.mm.dd</p>
                                            <div className="email_box">
                                                <h4>usern***@mail.com</h4>
                                            </div>
                                        </div>

                                        {/* 비활성화 버튼↓ */}
                                        <button type="button" className="unable_btn mt24">아이디 찾기</button>

                                        {/*  활성화 버튼↓ */}
                                        {/* <button type="button" className="navy_btn mt24">아이디 찾기</button> */}
                                        <div className="txt_box">
                                            <p>아이디가 기억나지 않으시나요?<br/><Link>1:1문의하기</Link>를 남겨주세요.</p>
                                        </div>
                                    </div>

                                    <div className="tab_cont">
                                        <ul>
                                            <li>
                                                <h3 className="input_title">아이디</h3>
                                                <p className="error_msg">아이디를 다시확인해주세요.</p>
                                                <input type="text" placeholder="이메일 주소를 입력하세요" className="mt16"/>
                                            </li>
                                            <li className="mt24">
                                                <h3 className="input_title">사업자 등록번호</h3>
                                                <p className="error_msg">사업자등록번호를 다시 확인해주세요.</p>
                                                <input type="text" placeholder="10자리 숫자를 입력하세요" className="mt16"/>
                                            </li>
                                        </ul>

                                        {/* 비활성화 버튼↓ */}
                                        <button type="button" className="unable_btn mt24">비밀번호 찾기</button>

                                        {/*  활성화 버튼↓ */}
                                        {/* <button type="button" className="navy_btn mt24">비밀번호 찾기</button> */}
                                        <div className="txt_box">
                                            <p>아이디가 기억나지 않으시나요?<br/><Link>1:1문의하기</Link>를 남겨주세요.</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </section>
                
                <Footer/>
            </>
        )
    }
}