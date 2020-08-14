import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer';


export default class Login extends React.Component {
    
    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
                <Header />

                <section className="form_page login clearfix2">
                    <div className="bg_gradient mo_none">
                        <img src={ require('../images/form_left_bg.png') } alt="물방울bg"/>
                        <h1 className="title">로그인</h1>   
                        <p className="sub_title">엑스퀘어의 다양한 서비스를 이용하시려면 로그인을 해주세요.</p>
                    </div>
                    <div className="right">
                        <div className="mo_title pc_none">
                            <h1>로그인</h1>
                            <p>엑스퀘어의 다양한 서비스를 이용하시려면 로그인을 해주세요.</p>
                        </div>
                        <form action="">
                            <h2 className="orange_title">SNS 계정으로 간편 로그인</h2>
                            <div className="sns_wrap">
                                <button type="button"><img src={ require('../images/icons/sns_kakao.png') } alt="카카오톡 아이콘"/></button>
                                <button type="button"><img src={ require('../images/icons/sns_google.png') } alt="구글 아이콘"/></button>
                                <button type="button"><img src={ require('../images/icons/sns_face.png') } alt="페이스북 아이콘"/></button>
                                <button type="button"><img src={ require('../images/icons/sns_naver.png') } alt="네이버 아이콘"/></button>
                            </div>
                            <h2 className="orange_title">이메일 계정으로 로그인</h2>
                            <ul className="form_ul">
                                <li>
                                    <div className="input_box">
                                        {/* 아이디,비밀번호 틀렸을시 input class에 error추가시 삭제버튼 노출됩니다↓*/}
                                        <input type="text" placeholder="아이디(이메일)"/>
                                        
                                        <button type="button" className="input_delt_btn "><img src={ require('../images/icons/input_delt_icon.png')} alt="삭제아이콘"/></button>
                                    </div>
                                    {/* 아이디,비밀번호 틀렸을시 노출되는 메시지↓ */}
                                    {/* <p className="error_msg">아이디와 비밀번호가 맞는지 다시 확인해주세요.</p> */}
                                </li>
                                <li>
                                    <div className="input_box"><input type="password" placeholder="비밀번호"/></div>
                                </li>
                                <li className="clearfix2 check_wrap">
                                    <div className="clearfix"><input type="checkbox" id="check"/><label htmlFor="check"></label><label className="label_txt" htmlFor="check">아이디 저장</label>
                                    </div>
                                    <div className="find_txt">
                                        <Link to="/find_id"><span>아이디 · 비밀번호 찾기</span></Link>
                                    </div>
                                </li>
                            </ul>
                            {/* 비활성화 버튼↓*/}
                            <button type="button" className="form_btn">로그인</button>
                            {/* 활성화 버튼↓*/}
                            {/* <button type="button" className="form_btn orange_btn">로그인</button> */}
                            
                            <div className="signup_txt">
                                아직 회원이 아니세요?<Link to="/signup"><span>회원가입</span></Link>
                            </div>
                        </form>
                    </div>
                </section>
                
                <Footer/>
            </>
        )
    }
}