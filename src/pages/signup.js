import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer';


export default class Signup extends React.Component {
    
    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
                <Header />

                <section className="form_page signup clearfix2">
                    <div className="bg_gradient mo_none">
                        <img src={ require('../images/form_left_bg.png') } alt="물방울bg"/>
                        <h1 className="title">엑스퀘어<br/>회원가입</h1>   
                        <p className="sub_title">엑스퀘어의 다양한 서비스를 이용하시려면 회원가입을 해주세요.</p>   
                    </div>
                    <div className="right">
                        <div className="mo_title pc_none">
                            <h1>회원가입</h1>
                            <p>엑스퀘어의 다양한 서비스를 이용하시려면 회원가입을 해주세요.</p>
                        </div>
                        <form action="">
                            <h2 className="orange_title">SNS 계정으로 간편 로그인</h2>
                            <div className="sns_wrap">
                                <button type="button"><img src={ require('../images/icons/sns_kakao.png') } alt="카카오톡 아이콘"/>카카오로 가입하기</button>
                                <button type="button"><img src={ require('../images/icons/sns_google.png') } alt="구글 아이콘"/>네이버로 가입하기</button>
                                <button type="button"><img src={ require('../images/icons/sns_face.png') } alt="페이스북 아이콘"/>구글로 가입하기</button>
                                <button type="button"><img src={ require('../images/icons/sns_naver.png') } alt="네이버 아이콘"/>페이스북으로 가입하기</button>
                            </div>
                            <button type="button" className="email_signup_btn" onClick={() => window.location.pathname = "/signup2"}>
                                <img src={ require('../images/icons/email_signup_icon.png') } alt="이메일 아이콘"/>이메일로 가입하기
                            </button>
                            <div className="signup_txt">
                                <p>펀딩 오픈 혹은 법인으로 투자하기를 원하시나요?</p>
                                <Link to="/corporation_signup"><span>법인 회원가입</span>을 진행해주세요.</Link>
                            </div>
                        </form>
                    </div>
                </section>
                
                <Footer/>
            </>
        )
    }
}