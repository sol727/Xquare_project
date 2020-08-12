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
    
    }

    render() {
        return (
            <>
                <Header />

                <section className="search_page">
                    <div className="container">
                        <div className="title_wrap">
                            <h1>아이디·비밀번호 찾기</h1>
                            <p>엑스퀘어의 로그인 정보를 찾아드립니다.</p>
                        </div>
                        <div className="form_box">
                            <form action="">
                                <div className="certify_btn_wrap">
                                    <button type="button" className="navy_btn">본인인증</button>
                                    {/* 본인인증 완료 후 버튼노출↓*/}
                                    {/* <button type="button" className="unable_btn">본인인증</button> */}
                                </div>

                                <div className="corporation_find_wrap">
                                    <Link>법인회원 아이디·비밀번호찾기</Link>
                                </div>

                                {/* 본인인증 후 노출↓ */}
                                <div className="certify_after">
                                    <p className="date_txt"><span>개인회원</span>가입일 : yyyy.mm.dd</p>
                                    <div className="email_box">
                                        {/* 이메일가입시 노출↓*/}
                                        <h3 className="font_13"><span className="point_color font_13">이메일 계정으로 로그인</span> 해주세요.</h3>

                                        {/* SNS가입시 노출↓*/}
                                        <h3 className="font_13"><span className="point_color font_13">네이버</span>로 회원가입 하셨습니다.<br/>
                                            <span className="point_color font_13">SNS 계정으로 간편 로그인</span> 해주세요.
                                        </h3>

                                        <h4>username@mail.com</h4>

                                        {/* 가입이력이 없을시 노출↓*/}
                                        <h3 className="font_13">회원가입한 이력이 없습니다.</h3>
                                    </div>
                                    <div className="btn_wrap clearfix2">
                                        <button type="button" className="navy_btn" onClick={() => window.location.pathname = "/login"}>로그인</button>
                                        <button type="button" className="navy_btn">비밀번호 재설정</button>
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