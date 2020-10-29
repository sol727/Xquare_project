import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer';

export default class V3_invest_prepare2 extends React.Component {
    
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <>
                <Header />

                <section className="v3 invest_page invest_prepare2">
                    <div className="top_banner">
                        <h1>투자하기</h1>
                    </div>
                    <div className="invest_top_box mo_none">
                        <ul className="clearfix">
                            <li>
                                <Link to="/">
                                    <img src={ require('../images/icons/home_icon.png') } alt="홈아이콘"/>
                                </Link>
                            </li>
                            <li>투자하기</li>
                            <li className="on">전체 펀딩보기</li>
                        </ul>
                    </div>
                    <div className="container">
                        <div className="title_wrap centerT mb24">
                            <h1 className="mb16">법인회원의 투자준비</h1>
                            <h3>법인투자자가 되기 위해서는 다음의 서류를 아래의 이메일로 보내주시기 바랍니다.</h3>
                        </div>
                        <div className="wrap clearfix2 mb40">
                            <div className="left">
                                <div className="email_box clearfix">
                                    <p className="white_color point_bg">서류접수</p>
                                    <p>info@xsquare.co.kr</p>
                                </div>
                                <div>
                                    <h4 className="font_18 point_color mt24">필수서류</h4>
                                    <ul className="mt24 txt_ul">
                                        <li className="mb24">
                                            <h6 className="font_15 mb8">대표자의 실명확인증표</h6>
                                            <p className="font_13 gray2_color mb4">- 대표자의 주민등록증·운전면허증·여권 사본</p>
                                            <p className="font_13 gray2_color">- 공동대표의 경우 대표자 모두의 실명확인증표 필요</p>
                                        </li>
                                        <li className="mb24">
                                            <h6 className="font_15 mb8">사업자 등록 증명원</h6>
                                            <p className="font_13 gray2_color">- 대표자의 주민등록번호 포함 필수</p>
                                        </li>
                                        <li className="mb24">
                                            <h6 className="font_15 mb8">등기사항 전부증명서</h6>
                                            <p className="font_13 gray2_color mb4">- 말소사항 포함 필수</p>
                                            <p className="font_13 gray2_color">- 신청일 기준 3개월 이내에 발금된 서류</p>
                                        </li>
                                        <li>
                                            <h6 className="font_15">법인 명의의 종합위탁계좌(증권계좌)</h6>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="right">
                                <h4 className="font_18 point_color">추가서류</h4>
                                <ul className="mt24 txt_ul">
                                    <li className="mb24">
                                        <h6 className="font_15 mb8">담당자가 대표자가 아닌 대리인인 경우</h6>
                                        <p className="font_13 gray2_color mb4">- 위임장</p>
                                        <p className="font_13 gray2_color mb4">- 대리인 신분증</p>
                                        <p className="font_13 gray2_color">- 인감 증명서</p>
                                        <button type="button" className="mt24 downBtn">위임장 양식 다운로드</button>
                                    </li>
                                    <li className="mb24">
                                        <h6 className="font_15 mb8">적격투자자 승급을 원하는 경우</h6>
                                        <div className="gray_box">
                                            <p className="font_13 gray2_color mb4">※ 적격투자자 투자한도</p>
                                            <p className="font_13 gray2_color mb4">- 1년간 '한 발행인에게' 투자 가능한 금액 1000만원</p>
                                            <p className="font_13 gray2_color">- 1년간 '크라우드펀딩'에 투자 가능한 금액 2000만원</p>
                                        </div>
                                        <p className="font_13">- 대표자의 주민등록번호 포함 필수</p>
                                    </li>
                                    <li className="">
                                        <h6 className="font_15 mb8">전문투자자 승급을 원하는 경우</h6>
                                        <div className="gray_box">
                                            <p className="font_13 gray2_color">※ 전문투자자 투자한도 : 없음</p>
                                        </div>
                                        <p className="font_13 mb4">- 법인전문투자자 : 금융투자협회에서 전문투자자 신청 후 증빙서류 제출(링크)</p>
                                        <p className="font_13">- 당연전문투자자 : 당연전문투자자임을 증빙할 수 있는 서류 제출</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="btn_wrap clearfix2 ">
                            <button type="button" className="back_btn" onClick={() => window.history.back()}>이전</button>
                            <button type="button" className="unable_btn" >확인</button>
                            {/* 활성화 버튼↓*/}
                            {/* <button type="button" className="unable_btn orange_btn">확인</button> */}
                        </div>
                    </div>
                </section>
                <Footer/>
            </>
        )
    }
}