import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer'

export default class Inquiry_check extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
                <Header />
                <section className="invest_page inquiry_check">
                    <div className="container">
                        <div className="title_wrap centerT">
                            <h1 className="mb16">비회원의 1:1문의하기</h1>
                            <h3>엑스퀘어에 문의하고자 하는 내용을 남겨주시면,<br/>빠른 시일 내에 답변 드립니다.</h3>
                        </div>
                        <form action="">
                            <ul className="form_ul mt60">
                                <li className="mb24">
                                    <h4 className="font_18 mb16">휴대전화번호 유효성 검사</h4>
                                    <p className="font_13 mb24">유효한 핸드폰 번호인지 확인합니다. 핸드폰번호를 입력 후 코드발송을 클릭해주세요.</p>
                                    <ul className="number_box">
                                        <li className="clearfix2 mb24">
                                            <input type="text" placeholder="휴대전화번호 입력"/>

                                            {/* 비활성화버튼 ↓ */}
                                            <button type="button" className="unable_btn">코드발송</button>

                                            {/* 활활성화버튼 ↓ */}
                                            {/* <button type="button" className="navy_btn">코드발송</button> */}

                                            {/* 활활성화버튼 ↓ */}
                                            {/* <button type="button" className="navy_btn">재발송</button> */}

                                            {/* 인증완료후 버튼 ↓ */}
                                            {/* <button type="button" className="unable_btn">재발송</button> */}
                                        </li>
                                        <li className="clearfix2">

                                            {/* code_box 클래스에 time 추가하면 인증확인 시간노출됩니다 ↓ */}
                                            <div className="code_box">
                                                <input type="text" placeholder="인증번호 5자리" disabled readonly/><span>4:59</span>
                                            </div>

                                            {/* 비활성화버튼 ↓ */}
                                            <button type="button" className="unable_btn">인증확인</button>

                                            {/* 활성화버튼 ↓ */}
                                            {/* <button type="button" className="navy_btn">인증확인</button> */}

                                            {/* 인증완료후 버튼 ↓ */}
                                            {/* <button type="button" className="unable_btn">인증완료</button> */}
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <h4 className="font_18 mb24">성함입력</h4>
                                    <input type="text" placeholder="성함을 입력해주세요" className="mb24"/>

                                    {/* 비활성화버튼 ↓ */}
                                    <button type="button" className="unable_btn font_15">문의하기</button>
                                    
                                    {/* 활성화버튼 ↓ */}
                                    {/* <button type="button" className="navy_btn font_15">문의하기</button> */}
                                </li>
                            </ul>
                        </form>
                    </div>
                </section>
                <Footer />
            </>
        )
    }
}