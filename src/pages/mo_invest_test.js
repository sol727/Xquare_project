import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer';
import $ from 'jquery'

export default class Mo_invest_test extends React.Component {
    
    constructor(props) {
    super(props);
    }

    componentDidMount(){
        
    
    }

    render() {
        return (
            <>
                <Header />

                <section className="invest_test_pop mo_invest">
                    
                        <div className="">
                            <h2 className="font_18 mb12 ml16">투자 적합성 테스트</h2>
                            <div className="content">
                                <div className="top_txt">
                                    자본시장법에 따라 투자자가 투자에 따르는 위험 등에 대해 알고 있는지 확인하여야 합니다. 아래의 질문에 적절하다고 생각되는 답변을 선택해주세요.
                                </div>
                                <div>
                                    <form action="">
                                        <ul className="mt24">
                                            <li className="mb24">
                                                {/* 문제틀렸을시에 h3 class에 red_color 추가↓ */}
                                                <h3 className="input_title mb16 red_color"><span className="font_15 point_color">Q.</span> 크라우드펀딩을 통해 자금을 모집하는 기업은 어떤 기업일까요?</h3>

                                                {/* 문제틀렸을시에 노출되는 문구↓ */}
                                                <p className="alert_p"><img src={ require('../images/icons/alert_white.png') } alt="하얀색느낌표아이콘"/>다시한번 고민해보세요!</p>

                                                <ul className="test_radio_wrap">
                                                    <li className="mb16">
                                                        <input type="radio" id="test1-1" name="test1"/><label htmlFor="test1-1">비상장 창업/벤처 기업</label>
                                                    </li>
                                                    <li className="mb16">
                                                        <input type="radio"id="test1-2" name="test1"/><label htmlFor="test1-2">상장 중견/대기업</label>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="mb24">
                                                {/* 문제틀렸을시에 h3 class에 red_color 추가↓ */}
                                                <h3 className="input_title mb16"><span className="font_15 point_color">Q.</span> 창업 기업의 사업 성공 가능성은 어떨까요?</h3>

                                                {/* 문제틀렸을시에 노출되는 문구↓ */}
                                                {/* <p className="alert_p"><img src={ require('../images/icons/alert_white.png') } alt="하얀색느낌표아이콘"/>다시한번 고민해보세요!</p> */}

                                                <ul className="test_radio_wrap">
                                                    <li className="mb16">
                                                        <input type="radio" id="test2-1" name="test2"/><label htmlFor="test2-1">실패할 가능성이 높습니다.</label>
                                                    </li>
                                                    <li className="mb16">
                                                        <input type="radio"id="test2-2" name="test2"/><label htmlFor="test2-2">성공할 가능성이 높습니다.</label>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="mb24">
                                                {/* 문제틀렸을시에 h3 class에 red_color 추가↓ */}
                                                <h3 className="input_title mb16"><span className="font_15 point_color">Q.</span> 크라우드펀딩으로 투자한 원금이 보장될까요?</h3>

                                                {/* 문제틀렸을시에 노출되는 문구↓ */}
                                                {/* <p className="alert_p"><img src={ require('../images/icons/alert_white.png') } alt="하얀색느낌표아이콘"/>다시한번 고민해보세요!</p> */}

                                                <ul className="test_radio_wrap">
                                                    <li className="mb16">
                                                        <input type="radio" id="test3-1" name="test3"/><label htmlFor="test3-1">아니요, 원금이 보장되지 않으며 투자 손실이 발생할 수 있습니다.</label>
                                                    </li>
                                                    <li className="mb16">
                                                        <input type="radio"id="test3-2" name="test3"/><label htmlFor="test3-2">네, 발행기업 및 중개업자에 의해 원금이 보장될 수 있습니다.</label>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="mb24">
                                                {/* 문제틀렸을시에 h3 class에 red_color 추가↓ */}
                                                <h3 className="input_title mb16"><span className="font_15 point_color">Q.</span> 크라우드펀딩 투자자는 원하는 시기에 투자금을 회수할 수 있을까요?</h3>

                                                {/* 문제틀렸을시에 노출되는 문구↓ */}
                                                {/* <p className="alert_p"><img src={ require('../images/icons/alert_white.png') } alt="하얀색느낌표아이콘"/>다시한번 고민해보세요!</p> */}

                                                <ul className="test_radio_wrap">
                                                    <li className="mb16">
                                                        <input type="radio" id="test4-1" name="test4"/><label htmlFor="test4-1">아니요, 원하는 시기에 증권 매매를 통한 회수가 어려울 수 있습니다.</label>
                                                    </li>
                                                    <li className="mb16">
                                                        <input type="radio"id="test4-2" name="test4"/><label htmlFor="test4-2">네, 발행기업은 투자자가 원하면 언제든지 투자금을 반환할 법적 의무가 있습니다.</label>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="mb24">
                                                {/* 문제틀렸을시에 h3 class에 red_color 추가↓ */}
                                                <h3 className="input_title mb16"><span className="font_15 point_color">Q.</span> 크라우드펀딩으로 투자받은 기업이 배당금을 지급할까요?</h3>

                                                {/* 문제틀렸을시에 노출되는 문구↓ */}
                                                {/* <p className="alert_p"><img src={ require('../images/icons/alert_white.png') } alt="하얀색느낌표아이콘"/>다시한번 고민해보세요!</p> */}

                                                <ul className="test_radio_wrap">
                                                    <li className="mb16">
                                                        <input type="radio" id="test5-1" name="test5"/><label htmlFor="test5-1">아니요, 일반적으로 초기 기업들은 배당금을 지급하는 경우가 적을 것입니다.</label>
                                                    </li>
                                                    <li className="mb16">
                                                        <input type="radio"id="test5-2" name="test5"/><label htmlFor="test5-2">네, 정기적으로 배당금을 지급해 줄 것입니다.</label>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="mb24">
                                                {/* 문제틀렸을시에 h3 class에 red_color 추가↓ */}
                                                <h3 className="input_title mb16"><span className="font_15 point_color">Q.</span> 내가 투자한 기업이 향후 추가적인 투자를 유치한다면 나의 지분율은 어떻게 될까요?</h3>

                                                {/* 문제틀렸을시에 노출되는 문구↓ */}
                                                {/* <p className="alert_p"><img src={ require('../images/icons/alert_white.png') } alt="하얀색느낌표아이콘"/>다시한번 고민해보세요!</p> */}

                                                <ul className="test_radio_wrap">
                                                    <li className="mb16">
                                                        <input type="radio" id="test6-1" name="test6"/><label htmlFor="test6-1">나의 지분율이 감소할 수 있습니다.</label>
                                                    </li>
                                                    <li className="mb16">
                                                        <input type="radio"id="test6-2" name="test6"/><label htmlFor="test6-2">나의 지분율이 변동하지 않습니다.</label>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="mb24">
                                                {/* 문제틀렸을시에 h3 class에 red_color 추가↓ */}
                                                <h3 className="input_title mb16"><span className="font_15 point_color">Q.</span> 창업기업에 투자하는 적절한 방법은 무엇일까요?</h3>

                                                {/* 문제틀렸을시에 노출되는 문구↓ */}
                                                {/* <p className="alert_p"><img src={ require('../images/icons/alert_white.png') } alt="하얀색느낌표아이콘"/>다시한번 고민해보세요!</p> */}

                                                <ul className="test_radio_wrap">
                                                    <li className="mb16">
                                                        <input type="radio" id="test7-1" name="test7"/><label htmlFor="test7-1">여러 기업에 나누어 투자하여 투자 위험을 분산시켜야 합니다.</label>
                                                    </li>
                                                    <li className="mb16">
                                                        <input type="radio"id="test7-2" name="test7"/><label htmlFor="test7-2">큰 이익을 얻기 위해 한 기업에 모든 자금을 투자해야 합니다.</label>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="mb24">
                                                {/* 문제틀렸을시에 h3 class에 red_color 추가↓ */}
                                                <h3 className="input_title mb16"><span className="font_15 point_color">v</span> 크라우드펀딩을 통해 투자하는 적절한 방법은 무엇일까요?</h3>

                                                {/* 문제틀렸을시에 노출되는 문구↓ */}
                                                {/* <p className="alert_p"><img src={ require('../images/icons/alert_white.png') } alt="하얀색느낌표아이콘"/>다시한번 고민해보세요!</p> */}

                                                <ul className="test_radio_wrap">
                                                    <li className="mb16">
                                                        <input type="radio" id="test8-1" name="test8"/><label htmlFor="test8-1">투자설명서와 공시정보 확인, 투자자간 의견교환 등을 통해 신중히 고민한 후 투자를 결정합니다.</label>
                                                    </li>
                                                    <li className="mb16">
                                                        <input type="radio"id="test8-2" name="test8"/><label htmlFor="test8-2">친구, 지인 등 추천인의 말을 믿고 투자를 결정합니다.</label>
                                                    </li>
                                                </ul>
                                            </li>

                                        </ul>

                                        <div className="btn_wrap clearfix2">
                                            <button type="button" className="back_btn">이전</button>
                                            <button type="button" className="unable_btn">결과확인</button>
                                            {/* 활성화 버튼↓*/}
                                            {/* <button type="button" className="unable_btn orange_btn">결과확인</button> */}
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