import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer';
import $ from 'jquery'

export default class Invest_step1 extends React.Component {

    constructor(props) {
    super(props);
    }

    componentDidMount(){

    }

    render() {
        return (
            <>
                <Header />
                <section className="invest_page step">
                     {/*상단부분---------------- */}
                    <div className="top_banner">
                        <h1>투자하기</h1>
                    </div>
                    <div className="invest_top_box">
                        <ul className="clearfix">
                            <li className="mo_none">
                                <Link to="/index">
                                    <img src={ require('../images/icons/home_icon.png') } alt="홈아이콘"/>
                                </Link>
                            </li>
                            <li>투자하기</li>
                            <li className="on">지금 투자하기</li>
                        </ul>
                    </div>
                    {/* -------------상단부분끝 */}
                    <div className="container step1">
                        <div className="step_progress">
                            <ul className="">
                                <li className="now"><div></div><p>투자정보입력</p></li>
                                <li><div>02</div><p className="centerT">약관 및 투자위험</p></li>
                                <li className="clearfix3"><div className="">03</div><p className="rightT">투자금 결제</p></li>
                            </ul>
                            <div className="step_bar step_bar1"></div>
                            <div className="step_bar step_bar2"></div>
                        </div>
                        <div className="title_box centerT">
                            <p className="font_13 gray4_color">STEP 01</p>
                            <h1 className="title">투자정보입력</h1>
                        </div>
                        <div className="cont_wrap">
                            <ul className="top_table clearfix">
                                <li className="th">투자등급</li>
                                <li>개인회원/일반투자자</li>
                                <li className="th">연간 총 투자한도</li>
                                <li>3,500,000</li>
                                <li className="th">동일 발행인 투자한도</li>
                                <li>2,000,000</li>
                            </ul>
                            <div className="cont clearfix2">
                                <div className=" w50 mr24 item_wrap">
                                    <div className="title_area">
                                        <h2>선택한 투자 상품</h2>
                                    </div>
                                    <div className="item_box">
                                        <div className="img_box">
                                            <img src={ require('../images/sample.png') } alt="투자상품이미지"/>
                                        </div>
                                        <div className="text">
                                            <ul className="label_wrap mb8 clearfix">
                                                <li>태양광/소형</li>
                                                <li>주식형(보통주)</li>
                                            </ul>
                                            <h4>상품 제목이 나타납니다. 상품 제목이 나타납니다. 상품 제목이 나타납니다.상품 제목이 나타납니다. 상품 제목이 나타납니다. 상품 제목이 나타납니다.</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="w50">
                                    <div className="title_area">
                                        <h2>투자금액 설정</h2>
                                        <p>이 펀딩에 투자 가능한 주식수는 <span>최소 10주 ~ 최대 46주 </span>입니다.</p>
                                        {/* 투자한도 문제생겼을 시 ------------------ */}
                                         {/*<p>이 펀딩의 1인당 최소 투자 가능 금액은 <span>100만원</span>으로 홍길동 님이 투자하실 수 있는 최대 금액인 <span>50만원</span>보다 크기 때문에 <span>투자가 불가합니다.</span></p>
                                       <div className="btn_wrap">
                                            <button type="button" className="btn">투자한도 증액하러 가기</button>
                                       </div> */}
                                       {/* ------------------투자한도 문제생겼을 시  */}
                                    </div>
                                    
                                    <div className="gray_bg2 mb16 funding_box">
                                        <p className="font_15 fw600">몇 주를 투자 하시겠습니까?</p>
                                        <p className="font_13 gray2_color">· 1주당 가격 : 450원</p>
                                        <p className="red_color font_13">투자 가능한 수량을 다시 확인해주세요</p>
                                        <input type="text" placeholder="주식 수 입력"/>
                                    </div>
                                    <div className="total rightT">
                                        <h3>총 투자금액: <span className="playF point_color">4,500,000원</span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="cont">
                                <div>
                                    <div className="title_area">
                                        <h2>증권계좌 선택</h2>
                                    </div>
                                    <div className="slide_area">
                                        <ul>
                                            <li>
                                                <div class="account_box"><h4 class="mb12">KB 증권</h4><p class="font_14">123-9999-9999-9999</p></div>
                                            </li>
                                            <li>
                                                 <div class="account_box"><h4 class="mb12">KB 증권</h4><p class="font_14">123-9999-9999-9999</p></div>
                                            </li>
                                            <li>
                                                <div class="account_box"><h4 class="mb12">KB 증권</h4><p class="font_14">123-9999-9999-9999</p></div>
                                            </li>
                                            <li>
                                                <div class="account_box"><h4 class="mb12">KB 증권</h4><p class="font_14">123-9999-9999-9999</p></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="cont radio">
                                <div>
                                    <div className="title_area">
                                        <h2>공개 여부 설정</h2>
                                    </div>
                                    <ul className="clearfix2">
                                        <li className="mr24 clearfix2">
                                            <p className="font_15 fw600">이름 노출 여부</p>
                                            <ul className="radio_wrap clearfix">
                                                <li><input type="radio" name="name" id="name1" /><label htmlFor="name1">비공개</label></li>
                                                <li><input type="radio" name="name" id="name2"/><label htmlFor="name2">공개</label></li>
                                            </ul>
                                        </li>
                                        <li className="clearfix2">
                                            <p className="font_15 fw600">금액 노출 여부</p>
                                            <ul className="radio_wrap clearfix">
                                                <li><input type="radio" name="money" id="money1" /><label htmlFor="money1">비공개</label></li>
                                                <li><input type="radio" name="money" id="money2"/><label htmlFor="money2">공개</label></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="page_btn centerT">
                            <button className="point_color font_15 mr24 d_ib">이전</button>
                            <button className="unable_btn d_ib" >다음</button>
                        </div>
                    </div>
                </section>
                <Footer />

            </>
        )
    }
}