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
                    <div class="title_wrap centerT mb24">
                            <h1 class="mb16">법인회원의 투자준비</h1>
                            <h3>법인투자자가 되기 위해서는 다음의 서류를 아래의 이메일로 보내주시기 바랍니다.</h3>
                        </div>
                        <ul className="prepare_ul">
                            <li>
                                <div className="li_top_wrap">
                                    <div className="clearfix2">
                                        <div className="txt">
                                            <h3>투자 전용 신한은행 가상계좌 개설</h3>
                                            <p>- 엑스퀘어는 크라우드펀딩 중개업자로서 투자자의 투자금을 안전하게 보호할 의무가 있습니다. 따라서 엑스퀘어의 계좌가 아닌, 투자자 개개인의 신한은행 가상계좌를 개설합니다.</p>
                                            <p>- 가상계좌 개설을 위해 아래의 두가지를 요청드립니다.</p>
                                            <p className="point_color">* 개인정보는 실명정보 확인 후 즉시 파기됩니다.</p>
                                        </div>

                                        <button type="button" className="navy_btn invest_prepare_pop_show">인증하기</button>

                                        {/* 심사중 버튼↓*/}
                                        {/* <button type="button" className="navy_btn orange_btn">심사중</button> */}

                                        {/* 인증완료 버튼↓*/}
                                        {/* <button type="button" className="navy_btn green_btn">인증완료</button> */}

                                        {/* 다시인증 버튼↓*/}
                                        {/* <button type="button" className="navy_btn red_bg">다시 인증하기</button> */}
                                    </div>
                                    <div className="certify_box">
                                        <p className="font_16 fw600"><span>1.</span>신분증 인증</p>
                                        <p className="font_16 fw600"><span>2.</span>계좌 인증</p>
                                    </div>

                                    {/* 필수조건모두 달성했을때 보임▼ */}
                                    {/* <div className="certify_box">
                                        <p className="font_16 fw600"><img src={require ("../images/icons/green_check.png")} alt="체크 아이콘"/>신분증 인증</p>
                                        <p className="font_16 fw600"><img src={require ("../images/icons/green_check.png")} alt="체크 아이콘"/>계좌 인증</p>
                                    </div> */}

                                    {/* 본인확인 심사중일때 보임▼ */}
                                    {/* <div className="certify_box">
                                        <p className="font_16 fw600"><img src={require ("../images/icons/stopwatch_icon.png")} alt="시계 아이콘"/>신분증 인증</p>
                                        <p className="font_16 fw600"><img src={require ("../images/icons/green_check.png")} alt="체크 아이콘"/>계좌 인증</p>
                                    </div> */}

                                    {/* 본인확인 심사미통과시 보임▼ */}
                                    {/* <div className="certify_box">
                                        <p className="font_16 fw600"><img src={require ("../images/icons/check_input_alert.png")} alt="시계 아이콘"/>신분증 인증</p>
                                        <p className="font_16 fw600"><img src={require ("../images/icons/green_check.png")} alt="체크 아이콘"/>계좌 인증</p>
                                    </div> */}
                                </div>

                                {/* 필수조건모두 달성했을때 보이는문구▼ */}
                                <p className="font_14 centerT mt40 mb16">심사는 최대 2영업일 소요됩니다</p>
                                {/* 본인확인 심사중일때 보이는문구▼ */}
                                {/* <p className="font_14 centerT mt40 mb16">실명인증심사는 최대 2영업일 소요됩니다</p> */}
                                {/* 본인확인 심사미통과시 보이는문구▼ */}
                                {/* <p className="font_14 centerT mt40 mb16">실명인증심사를 통과하지 못했습니다.</p> */}
                            </li>
                            <li>
                                <div className="clearfix2">
                                    <div className="txt">
                                        <h3>증권계좌등록</h3>
                                        <p>원활한 이용을 위해 증권을 거래할 수 있는 계좌를 등록해주세요.</p>
                                    </div>
                                    <button type="button" className="navy_btn invest_account_pop_show">등록하기</button>

                                    {/* 증권계좌변경 버튼↓*/}
                                    {/* <button type="button" className="navy_btn invest_account_pop_show">증권계좌 변경</button> */}
                                </div>
                                <div className="account_box">
                                    <h4 className="mb12">KB 증권</h4>
                                    <p className="font_14">123-9999-9999-9999</p>
                                </div>
                            </li>
                            <li className="address_li">
                                <div className="clearfix2 mb40">
                                    <div className="txt">
                                        <h3>주소입력</h3>
                                        <p>발행기업으로부터 투자자관련 서류를 수령하실 주소를 입력해주세요.</p>
                                    </div>
                                    <button type="button" className="navy_btn">주소검색</button>

                                    {/* 주소변경 버튼↓*/}
                                    {/* <button type="button" className="navy_btn">주소변경</button> */}
                                </div>
                                <p className="font_14 centerT mb16">서울시 강남구 강남대로 102길 38딩,<br/> 2층(역삼동, 강림빌딩)</p>
                            </li>
                            <li>
                                <div className="clearfix2 mb40">
                                    <div className="txt">
                                        <h3>투자 적합성 테스트</h3>
                                        <p>자본시장법에 따라, 12개월마다 투자에 따른 위험성에 대해 이해하고 있는지 확인합니다.</p>
                                    </div>
                                    <button type="button" className="navy_btn invest_test_pop_show">테스트 진행하기</button>

                                    {/* 테스트 통과 버튼↓*/}
                                    {/* <button type="button" className="navy_btn green_btn">테스트 통과</button> */}
                                </div>
                                <p className="font_14 centerT mb16">유효기간 D-365</p>
                            </li>
                        </ul>
                        <div className="btn_wrap clearfix2">
                            <button type="button" className="back_btn" onClick={() => window.history.back()}>이전</button>
                            <button type="button" className="unable_btn" onClick={() => window.location.pathname="/invest_step1"}>투자하러 가기</button>
                            {/* 활성화 버튼↓*/}
                            {/* <button type="button" className="unable_btn orange_btn" onClick={() => window.location.pathname="/invest_step1"}>투자하러 가기</button> */}
                        </div>
                    </div>
                </section>
                <Footer/>
            </>
        )
    }
}