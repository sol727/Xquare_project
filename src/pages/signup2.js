import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer';


export default class Signup2 extends React.Component {
    
    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
                <Header />

                <section className="form_page signup signup2 clearfix2">
                    <div className="bg_gradient mo_none">
                        <img src={ require('../images/form_left_bg.png') } alt="물방울bg"/>
                        <h1 className="title">엑스퀘어<br/>회원가입</h1>   
                        <p className="sub_title">엑스퀘어는 [자본시장과 금융투자업에 관한 법률]에 따라 실명회원을 대상으로 서비스를 제공합니다. 본인인증을 진행해주세요.</p>   
                    </div>
                    <div className="right">
                        <div className="mo_title pc_none">
                            <h1>회원가입</h1>
                            <p>에너지엑스 스퀘어의 다양한 서비스를 이용하시려면 회원가입을 해주세요.</p>
                        </div>
                        <form action="">
                            <div className="confirm_wrap">
                                <h2 className="title">본인인증</h2>
                                <p className="sub_title">엑스퀘어는 [자본시장과 금융투자업에 관한 법률]에 따라 실명회원을 대상으로 서비스를 제공합니다. 본인인증을 진행해주세요.</p>
                                <div>
                                    <button type="button" className="navy_btn">본인인증 하러가기</button>
                                    <input type="text" placeholder="성함"/>
                                    <input type="text" placeholder="휴대전화 연락처"/>
                                </div>
                            </div>
                            <div className="info_wrap">
                                <h2 className="title">계정정보</h2>
                                <ul>
                                    <li>
                                        <h3 className="input_title">아이디</h3>
                                        <p className="input_sub_title">이메일 주소를 입력해주세요</p>
                                        <select name="" id="">
                                            <option value="" >이메일 선택</option>
                                        </select>

                                        {/* select 선택하면 나오는 input box */}
                                        <div className="email_select">
                                            <div className="clearfix2">
                                                <input type="text" placeholder="username"/><input type="text" value="naver.com" readOnly disabled/>
                                            </div>
                                            <button type="button">사용 가능</button>
                                        </div>

                                    </li>
                                    <li>
                                        <h3 className="input_title">비밀번호</h3>
                                        <p className="input_sub_title">영문, 숫자, 특수문자(!@#$%^&*)를 조합한 8~20자 이내, 연속된 3자리 이상의 문자는 사용할 수 없습니다.</p>
                                        <input type="password" placeholder="비밀번호 입력"/>
                                        <input type="password" placeholder="비밀번호 확인"/>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="title">이용약관</h2>
                                <ul>
                                    <li>
                                       <div className="check_wrap">
                                           <input type="checkbox"/><label htmlFor=""></label><label htmlFor="">전체동의</label>
                                           <img src="" alt=""/>
                                        </div> 
                                        <div>
                                            회원가입 약관과 엑스퀘어 이용약관, 개인정보 취급방침, 엑스퀘어 소식과 다양한 안내(선택)
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </section>
                
                <Footer/>
            </>
        )
    }
}