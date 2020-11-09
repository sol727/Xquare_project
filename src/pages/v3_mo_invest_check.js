import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer';

export default class V3_mo_invest_check extends React.Component {
    
    constructor(props) {
    super(props);
    }

    componentDidMount(){
        
    
    }

    render() {
        return (
            <>
                <Header />

                <section className="invest_account_pop invest_check_pop mo_invest">
                    <div className="">
                        <h2 className="font_18 mb12 ml16">타행계좌를 통한 본인확인</h2>

                        {/* 본인인증용계좌입력 부분 */}
                        {/* <div className="content">
                            <div className="top_title_box">
                                <ul className="clearfix">
                                    <li className="on"></li>
                                    <li></li>
                                </ul>
                                <h4 className="font_18 mb10">본인인증용 계좌 입력</h4>
                                <p className="font_13">입력하신 계좌로 엑스퀘어가 1원을 보내드립니다.</p>
                            </div>
                            <div className="top_txt centerT">
                                <h5 className="font_13 centerT"><img src={ require('../images/icons/check_input_alert.png') } alt="빨간느낌표 아이콘"/>반드시 본인 명의의 증권계좌만 가능합니다.</h5>
                                10분 이내로 입금자명 확인이 가능한 계좌번호 입력을 권유드립니다.
                            </div>
                            <div>
                                <form action="">
                                    <ul className="mt24">
                                        <li className="mb24">
                                            <h3 className="input_title mb8">은행 선택</h3>
                                            <p className="font_13 gray2_color mb8">· 법인의 경우, 법인명의의 계좌를 입력해주세요.</p>
                                            <select name="" id="">
                                                <option value="" hidden selected>선택</option>
                                            </select>
                                        </li>
                                        <li className="mb24">
                                            <h3 className="input_title mb8">계좌번호</h3>
                                            <input type="text" placeholder="‘-’없이 숫자만 입력하세요"/>
                                        </li>
                                    </ul>
                                    <div className="btn_wrap">
                                        <button type="button" className="unable_btn orange_btn w100">1원 보내기</button>
                                    </div>
                                </form>
                            </div>
                        </div> */}

                        {/* 받은인증번호입력 부분 */}
                        <div className="content">
                            <div className="top_title_box">
                                <ul className="clearfix">
                                    <li className="on"></li>
                                    <li></li>
                                </ul>
                                <h4 className="font_18 mb10">받은 인증번호 입력</h4>
                                <p className="font_13">입력하신 계좌로 1원을 보내드렸습니다.</p>
                            </div>
                            <div className="top_txt centerT">입금 내역이 없다면, 등록하신 계좌정보를 다시 확인해주세요.</div>
                            <div>
                                <form action="">
                                    <div className="account_wrap">
                                        <div className="account_box">
                                            <h4 className="mb12">KB 증권</h4>
                                            <p className="font_14 mb8">123-9999-9999-9999</p>
                                            <p className="font_14">홍길동</p>
                                        </div>
                                        <div className="rightT">
                                            <button type="button" className="change_btn">변경하기</button>
                                        </div>
                                    </div>
                                    <div className="certify_wrap">
                                        <div className="">
                                            <p className="font_15 fw600 mb8">인증번호</p>
                                            <p className="font_13 gray2_color mb8">입금자명에 표시된 4자리 번호를 입력해주세요.</p>
                                            <p className="font_13 red_color mb8">일치하지 않습니다. 다시 확인해주세요.</p>
                                        </div>
                                        <div className="">
                                            <p className="font_13 red_color mb8">숫자만 입력가능합니다.</p>
                                            <div className="clearfix2">
                                                <div className="num_input_box">
                                                    <input type="text"/>
                                                    <span className="time">09:59</span>
                                                </div>
                                                <button type="button" className="unable_btn">재요청</button>
                                                {/* 활성화버튼▼ */}
                                                {/* <button type="button" className="navy_btn">재요청</button> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn_wrap clearfix2">
                                        <button type="button" className="back_btn">이전</button>
                                        <button type="button" className="unable_btn">인증하기</button>
                                        {/* 활성화 버튼↓*/}
                                        {/* <button type="button" className="unable_btn orange_btn">인증하기</button> */}
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                </section>
                
                <Footer/>
            </>
        )
    }
}