import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer';
import $ from 'jquery'
import { queries } from '@testing-library/react';

export default class V3_invest_prepare extends React.Component {
    
    constructor(props) {
        super(props);

    }

    componentDidMount(){

        // 모바일일때 팝업안보이고 페이지이동
        var width = $(window).width();
        if(width <= 768){
            $('.invest_prepare_pop_show').click(function(){
                window.location.href = 'mo_invest_prepare';
            });
            $('.invest_account_pop_show').click(function(){
                window.location.href = 'mo_invest_account';
            });
            $('.invest_test_pop_show').click(function(){
                window.location.href = 'mo_invest_test';
            });
        }



        //파일업로드 네임
        var fileTarget = $('.file_wrap input[type="file"]');
        fileTarget.on('change', function(){
            if(window.FileReader){ // modern browser 
                var filename = $(this)[0].files[0].name;
            }else { // old IE 
                var filename = $(this).val().split('/').pop().split('\\').pop();
            } 
            $(this).siblings('.file_name').val(filename).css({'color':'#343332'});
            $(this).siblings('.file_up_btn').addClass('on');
        });

        // 투자적합성테스트팝업 높이맞추기
        const r_height = $('.invest_test_pop .pop_cont .right').innerHeight();
        // console.log(r_height)
        $('.invest_test_pop .pop_cont .left').height(r_height);
        
       

        // 팝업
        $('.pop_close').on('click',function(){
            $(this).parents('.pop_wrap').hide();

            $('.invest_prepare_pop').css({'left':'100%','display':'block'});
            $('.invest_prepare_pop .dim').hide();
            $('.invest_prepare_pop .pop_cont').css('right','-100%');

            $('.invest_account_pop').css({'left':'100%','display':'block'});
            $('.invest_account_pop .dim').hide();
            $('.invest_account_pop .pop_cont').css('right','-100%');

            $('.invest_test_pop').css({'left':'100%','display':'block'});
            $('.invest_test_pop .dim').hide();
            $('.invest_test_pop .pop_cont').css('right','-100%');
        });
        

        $('.invest_prepare_pop_show').on('click',function(){
            $('.invest_prepare_pop').css('left','0');
            $('.invest_prepare_pop .dim').show();
            $('.invest_prepare_pop .pop_cont').css('right','0');
        });


        $('.invest_account_pop_show').on('click',function(){
            $('.invest_account_pop').css('left','0');
            $('.invest_account_pop .dim').show();
            $('.invest_account_pop .pop_cont').css('right','0');
        });

        $('.invest_test_pop_show').on('click',function(){
            $('.invest_test_pop').css('left','0');
            $('.invest_test_pop .dim').show();
            $('.invest_test_pop .pop_cont').css('right','0');
        });
    
    }

    render() {
        return (
            <>
                <Header />

                <section className="v3 invest_page ">
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
                            <li className="on">지금 투자하기</li>
                        </ul>
                    </div>
                    <div className="container">
                        <h1 className="big_title">투자 준비하기</h1>
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

                {/* 실명인증팝업 */}
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
                                <div className="top_txt">
                                    금융실명법에 따라 실명확인이 필요합니다. 등록하신 정보는 실명확인에만 사용되며, 확인후 즉시 파기됩니다. 실제정보와 다른 경우 거래가 제한 될 수 있습니다.
                                </div>
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
                                                <ul className="radio_wrap clearfix">
                                                    <li>
                                                        <input type="radio" id="radio1" name="radio"/><label htmlFor="radio1">주민등록증</label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" id="radio2" name="radio"/><label htmlFor="radio2">국내운전면허증</label>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="mb24">
                                                <h3 className="input_title mb8">발급일자</h3>
                                                <p className="input_sub_title">주민등록증 아래에 적힌 발급일자를 입력하세요.</p>
                                                <p className="input_sub_title mb8">Ex) 20201216</p>
                                                <div className="date_input">
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

                {/* 신분증인증팝업 */}
                <div className="pop_wrap invest_prepare_pop identity_pop">
                    <div className="dim"></div>
                    <div className="pop_cont clearfix">
                        <div className="left">
                            <button className="pop_close"><img src={ require('../images/icons/close_icon_w.png') } alt="닫기버튼 아이콘"/></button>
                            <img src={ require('../images/pop_left_bg.png') } alt="팝업 bg"/>
                        </div>
                        <div className="right">
                            <h2 className="font_18 mb12 ml16">1. 신분증 인증</h2>
                            <div className="content">
                                <div className="top_txt">
                                금융실명법에 따라 실명확인이 필요합니다. 등록하신 정보는 실명확인에만 사용되며, 확인후 즉시 파기됩니다. 실제정보와 다른 경우 거래가 제한 될 수 있습니다.
                                </div>
                                <div className="red_box">
                                    <h4 className="font_16 red_color mb10">인증 불가 사유</h4>
                                    <p className="font_13 red_color line_h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et faucibus suscipit massa pulvinar. Et sed sit pellentesque morbi. Molestie est lacus, cursus nec tellus.</p>
                                </div>
                                <div>
                                    <form action="">
                                        <ul className="mt24">
                                            <li className="mb24">
                                                <h3 className="input_title mb8">이름</h3>
                                                <input type="text" value="홍길동" disabled/>
                                            </li>
                                            <li className="mb24">
                                                <h3 className="input_title mb8">주민등록번호</h3>
                                                <div className="input_li clearfix2">
                                                    <input type="text" placeholder="앞 6자리"/>-<input type="text" placeholder="뒤 7자리"/>
                                                </div>
                                            </li>
                                            <li className="mb24">
                                                <h3 className="input_title mb8">신분증 종류</h3>
                                                <ul className="radio_wrap clearfix">
                                                    <li>
                                                        <input type="radio" id="radio1" name="radio"/><label htmlFor="radio1">주민등록증</label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" id="radio2" name="radio"/><label htmlFor="radio2">국내운전면허증</label>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="mb24">
                                                <h3 className="input_title mb8">발급일자</h3>
                                                <p className="input_sub_title">발급일자를 입력하세요.</p>
                                                <p className="input_sub_title mb8">Ex) 20201216</p>
                                                <div className="date_input">
                                                    <input type="text" placeholder="발급일자"/>
                                                    <span>(0/8)</span>
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
                                            <button type="button" className="unable_btn">다음</button>
                                            {/* 활성화 버튼↓*/}
                                            {/* <button type="button" className="unable_btn orange_btn">다음</button> */}
                                        </div>
                                    </form>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                {/* 타행계좌를통한본인확인 팝업*/}
                <div className="pop_wrap invest_account_pop invest_check_pop ">
                    <div className="dim"></div>
                    <div className="pop_cont clearfix">
                        <div className="left">
                            <button className="pop_close"><img src={ require('../images/icons/close_icon_w.png') } alt="닫기버튼 아이콘"/></button>
                            <img src={ require('../images/pop_left_bg.png') } alt="팝업 bg"/>
                        </div>
                        <div className="right">
                            <h2 className="font_18 mb12 ml16">2. 타행계좌를 통한 본인확인</h2>

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
                                            <div class="account_box">
                                                <h4 class="mb12">KB 증권</h4>
                                                <p class="font_14 mb8">123-9999-9999-9999</p>
                                                <p class="font_14">홍길동</p>
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

                    </div>
                </div>

                {/* 증권계좌추가팝업 */}
                <div className="pop_wrap invest_account_pop">
                    <div className="dim"></div>
                    <div className="pop_cont clearfix">
                        <div className="left">
                            <button className="pop_close"><img src={ require('../images/icons/close_icon_w.png') } alt="닫기버튼 아이콘"/></button>
                            <img src={ require('../images/pop_left_bg.png') } alt="팝업 bg"/>
                        </div>
                        <div className="right">
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
                                        <div className="btn_wrap clearfix2">
                                            <button type="button" className="back_btn">이전</button>
                                            <button type="button" className="unable_btn">추가하기</button>
                                            {/* 활성화 버튼↓*/}
                                            {/* <button type="button" className="unable_btn orange_btn">추가하기</button> */}
                                        </div>
                                    </form>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>

                {/* 투자적합성테스트팝업 */}
                <div className="pop_wrap invest_test_pop">
                    <div className="dim"></div>
                    <div className="pop_cont clearfix">
                        <div className="left">
                            <button className="pop_close"><img src={ require('../images/icons/close_icon_w.png') } alt="닫기버튼 아이콘"/></button>
                            <img src={ require('../images/pop_left_bg.png') } alt="팝업 bg"/>
                        </div>
                        <div className="right">
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
                    </div>
                </div>

                {/* 투자적합테스트 성공하면 노출되는팝업 */}
                <div className="pop_wrap test_pass_pop">
                    <div className="dim"></div>
                    <div className="pop_cont clearfix2">
                        <div className="pop_img">
                            <img src={ require('../images/party_img.png') } alt="폭죽 이미지"/>
                        </div>
                        <div className="txt_box">
                            <h2 className="point_color">훌륭합니다!</h2>
                            <p>‘투자’에 대해 잘 이해하고 계시군요.<br/>잠시 후 투자 준비 화면으로 이동합니다</p>
                            <div className="loading_bar"></div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}