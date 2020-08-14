import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer';
import $ from 'jquery'

export default class Mo_invest_account extends React.Component {
    
    constructor(props) {
    super(props);
    }

    componentDidMount(){
        
    
    }

    render() {
        return (
            <>
                <Header />

                <section className="invest_account_pop mo_invest">
                   
                    <div className="">
                        <h2 className="font_18 mb12 ml16">증권계좌추가</h2>
                        <div className="content">
                            <div className="top_txt">
                                <h5 className="font_13 centerT"><img src={ require('../images/icons/check_input_alert.png') } alt="빨간느낌표 아이콘"/>반드시 본인 명의의 증권계좌만 가능합니다.</h5>
                                명의가 일치하여도 일반은행 계행, 주식・채권의 입고가 불가한 계좌, 주식거래가 불가한 CMA계좌, 가상계좌, 대출 약정이 걸린 계좌, KSM등록 계좌, 보안카드 미수령좌 , 사고계좌, 휴면계좌, 비활성계좌, 가상계좌, 해지계좌 등의 계좌는 정상적인 배정이 불가할 수 있습니다.
                            </div>
                            <div>
                                <form action="">
                                    <ul className="mt24">
                                        <li className="mb24">
                                            <h3 className="input_title mb8">거래하시는 증권사</h3>
                                            <select name="" id="">
                                                <option value="" hidden selected>선택</option>
                                            </select>
                                        </li>
                                        <li className="mb24">
                                            <h3 className="input_title mb8">계좌번호</h3>
                                            <input type="text" placeholder="‘-’없이 숫자만 입력하세요"/>
                                        </li>
                                        <li className="mb24">
                                            <h3 className="input_title mb8">계좌주</h3>
                                            <input type="text" value="홍길동" disabled readOnly className="centerT"/>
                                        </li>
                                    </ul>
                                    <p className="info_p">잘못된 계좌정보를 입력하는 경우 주식/채권이 미배정 될 수 있습니다.</p>
                                    <div className="btn_wrap clearfix2">
                                        <button type="button" className="back_btn" onClick={() => window.history.back()}>이전</button>
                                        <button type="button" className="unable_btn">추가하기</button>
                                        {/* 활성화 버튼↓*/}
                                        {/* <button type="button" className="unable_btn orange_btn">추가하기</button> */}
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