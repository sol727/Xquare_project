import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer';
import $ from 'jquery'

export default class Set_password extends React.Component {
    
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
                            <h1>비밀번호 재설정</h1>
                        </div>
                        <div className="form_box">
                            <form action="">
                                <ul className="mb24">
                                    <li>
                                        <h3 className="input_title">비밀번호 입력</h3>
                                        {/* 비밀번호 유효성검사미통과시에 class에 red_color 추가↓ */}
                                        <p className="input_sub_title ">영문, 숫자, 특수문자(&#33;&#64;&#35;&#36;&#37;&#94;&amp;&#42;)를 조합한 8~20자 이내, 연속된 3자리 이상의 문자는 사용할 수 없습니다.</p>
                                        <input type="password" placeholder="비밀번호를 입력하세요" className="mt16"/>                                    
                                    </li>
                                    <li className="mt24">
                                        <h3 className="input_title">비밀번호 재입력</h3>
                                        {/* 비밀번호 유효성검사미통과시에 div class에 alert 추가↓ */}
                                        <div className="check_input mt16"><input type="password" placeholder="비밀번호 재입력"/></div>                                 
                                    </li>
                                </ul>
                                {/* 중복확인 비활성화 버튼↓ */}
                                <button type="button" className="unable_btn mb24">완료</button>

                                {/* 중복확인 활성화 버튼↓ */}
                                {/* <button type="button" className="navy_btn mb24" onClick={() => window.location.pathname = "/login"}>완료</button> */}
                            </form>
                        </div>
                    </div>
                </section>
                
                <Footer/>
            </>
        )
    }
}