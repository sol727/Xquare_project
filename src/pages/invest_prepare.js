import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer';
import $ from 'jquery'

export default class Invest_prepare extends React.Component {
    
    constructor(props) {
    super(props);
    }

    componentDidMount(){
        
    
    }

    render() {
        return (
            <>
                <Header />

                <section className="invest_page">
                    <div className="top_banner">
                        <h1>투자하기</h1>
                    </div>
                    <div className="invest_top_box mo_none">
                        <ul className="clearfix">
                            <li>
                                <Link>
                                    <img src={ require('../images/icons/home_icon.png') } alt="홈아이콘"/>
                                </Link>
                            </li>
                            <li>투자하기</li>
                            <li className="on">지금 투자하기</li>
                        </ul>
                    </div>
                    <div className="container">
                        <h1 className="big_title">투자 준비하기</h1>
                        <ul className="prepare_ul">
                            <li>
                                <div className="clearfix2 mb40">
                                    <div className="txt">
                                        <h3>실명인증</h3>
                                        <p>본인확인을 위해 주민등록증 또는 운전면허증을 준비해주세요. 개인정보는 실명정보 확인 후 즉시 파기됩니다.</p>
                                    </div>
                                    <button type="button" className="navy_btn">인증하기</button>

                                    {/* 심사중 버튼↓*/}
                                    {/* <button type="button" className="navy_btn orange_btn">심사중</button> */}

                                    {/* 인증완료 버튼↓*/}
                                    {/* <button type="button" className="navy_btn green_btn">인증완료</button> */}
                                </div>
                                <p className="font_14 centerT bold mb16">실명인증심사는 최대 2영업일 소요됩니다</p>
                            </li>
                            <li>
                                <div className="clearfix2">
                                    <div className="txt">
                                        <h3>증권계좌등록</h3>
                                        <p>원활한 이용을 위해 증권을 거래할 수 있는 계좌를 등록해주세요.</p>
                                    </div>
                                    <button type="button" className="navy_btn">등록하기</button>

                                    {/* 증권계좌변경 버튼↓*/}
                                    {/* <button type="button" className="navy_btn">증권계좌 변경</button> */}
                                </div>
                                <div className="account_box">
                                    <h4 className="mb12">KB 증권</h4>
                                    <p className="font_14">123-9999-9999-9999</p>
                                </div>
                            </li>
                            <li>
                                <div className="clearfix2 mb40">
                                    <div className="txt">
                                        <h3>주소입력</h3>
                                        <p>발행기업으로부터 투자자관련 서류를 수령하실 주소를 입력해주세요.</p>
                                    </div>
                                    <button type="button" className="navy_btn">주소검색</button>

                                    {/* 주소변경 버튼↓*/}
                                    {/* <button type="button" className="navy_btn">주소변경</button> */}
                                </div>
                                <p className="font_14 centerT bold mb16">서울시 강남구 강남대로 102길 38딩, 2층(역삼동, 강림빌딩)</p>
                            </li>
                            <li >
                                <div className="clearfix2 mb40">
                                    <div className="txt">
                                        <h3>투자 적합성 테스트</h3>
                                        <p>자본시장법에 따라, 12개월마다 투자에 따른 위험성에 대해 이해하고 있는지 확인합니다.</p>
                                    </div>
                                    <button type="button" className="navy_btn">테스트 진행하기</button>

                                    {/* 테스트 통과 버튼↓*/}
                                    {/* <button type="button" className="navy_btn green_btn">테스트 통과</button> */}
                                </div>
                                <p className="font_14 centerT bold mb16">유효기간 D-365</p>
                            </li>
                        </ul>
                        <div className="btn_wrap clearfix2">
                            <button type="button" className="back_btn">이전</button>
                            <button type="button" className="unable_btn">투자하러 가기</button>
                            {/* 활성화 버튼↓*/}
                            {/* <button type="button" className="unable_btn orange_btn">투자하러 가기</button> */}
                        </div>
                    </div>
                </section>
                <Footer/>
                <div className="pop_wrap invest_prepare_pop">
                    <div className="dim"></div>
                    <div className="pop_cont clearfix">
                        <div className="left">
                            <button className="pop_close"><img src={ require('../images/icons/close_icon_w.png') } alt="닫기버튼 아이콘"/></button>
                            <img src={ require('../images/pop_left_bg.png') } alt="팝업 bg"/>
                        </div>
                        <div className="right">
                            <h2 className="font_18 mb12 ml16">실명인증</h2>
                            <div className="content">
                                <p className="top_txt">금융실명법에 따라 실명확인이 필요합니다. 등록하신 정보는 실명확인에만 사용되며, 확인후 즉시 파기됩니다. 실제정보와 다른 경우 거래가 제한 될 수 있습니다.</p>
                                <div>
                                    <form action="">
                                        <ul className="mt24">
                                            <li className="mb24">
                                                <h3 className="input_title mb8">이름</h3>
                                                <input type="text" placeholder="이름"/>
                                            </li>
                                            <li className="mb24">
                                                <h3 className="input_title mb8">주민등록번호</h3>
                                                <div className="input_li clearfix2">
                                                    <input type="text" placeholder="앞 6자리"/>-<input type="text" placeholder="뒤 7자리"/>
                                                </div>
                                            </li>
                                            <li className="mb24">
                                                <h3 className="input_title mb8">신분증 종류</h3>
                                                <ul className="radio_wrap">
                                                    <li>
                                                        <input type="radio" /><label htmlFor="">주민등록증</label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" /><label htmlFor="">국내운전면허증</label>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="mb24">
                                                <h3 className="input_title mb8">발급일자</h3>
                                                <p className="input_sub_title">주민등록증 아래에 적힌 발급일자를 입력하세요.</p>
                                                <p className="input_sub_title">Ex) 20201216</p>
                                                <div>
                                                    <input type="text" placeholder="발급일자"/><span>(0/8)</span>
                                                </div>
                                            </li>
                                            <li className="mb24">
                                                <h3 className="input_title mb8">파일 업로드</h3>
                                                <p className="input_sub_title">본인확인을 위해 주민등록증 또는 운전면허증의 앞면을 촬영한 이미지를 등록해주세요 (최대20MB, jpg/jpeg/png/pdf)</p>
                                                <div className="file_wrap clearfix mt16">
                                                    <input type="file" id="file_up" accept=".jpg,.jpeg,.png,.pdf"/>
                                                    <input type="text" className="file_name" placeholder="이미지파일" disabled readOnly/>
                                                    {/* 업로드활성화시 class에 on 추가↓ */}
                                                    <label htmlFor="file_up" className="file_up_btn">파일 업로드</label>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="btn_wrap clearfix2">
                                            <button type="button" className="back_btn">이전</button>
                                            <button type="button" className="unable_btn">인증요청</button>
                                            {/* 활성화 버튼↓*/}
                                            {/* <button type="button" className="unable_btn orange_btn">인증요청</button> */}
                                        </div>
                                    </form>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}