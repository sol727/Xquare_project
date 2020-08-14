import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer';
import $ from 'jquery'
import PerfectScrollbar from '@opuscapita/react-perfect-scrollbar';

export default class Signup2 extends React.Component {
    
    constructor(props) {
    super(props);
    }

    componentDidMount(){

        //높이맞추기
        const height = $('.signup.signup2 .right').height();
        $('.signup.signup2 .bg_gradient').height(height)

        //이용약관
        $('.agree_box .all_agree_wrap .down_btn').on('click',function(){
            $(this).toggleClass('on');
            $(this).parents('.all_agree_wrap').nextAll().slideToggle(300);
        });

        $('.agree_box .check_wrap2 .down_btn').on('click',function(){
            $(this).toggleClass('on');
            $(this).parents('.check_wrap2').next().slideToggle(300);
        });
        
        //이용약관 체크박스
        $("input#all_check").click(function(){
            if( $(this).is(':checked') ){
                $(this).parents('.agree_box').find("input[name='agree']").prop("checked", true);
            }else{
                $(this).parents('.agree_box').find("input[name='agree']").prop("checked", false);
            }
        });
        $("input[name='agree']").click(function(){
            var none_check = $(this).parents('.agree_box').find("input[name='agree']").length;
            var check = $(this).parents('.agree_box').find("input[name='agree']:checked").length;
            console.log(none_check,check)
            if(none_check == check){
                $(this).parents('.agree_box').find('input#all_check').prop("checked", true);
                $(this).parents('.agree_box').find('input#all_check').removeClass('on');
            }else if(check == 1 ||  check == none_check -1){
                $(this).parents('.agree_box').find('input#all_check').addClass('on');
            }else{
                $(this).parents('.agree_box').find('input#all_check').prop("checked", false);
                $(this).parents('.agree_box').find('input#all_check').removeClass('on');
            }
        });

        // 팝업
        $('.pop_close').on('click',function(){
            $(this).parents('.pop_wrap').hide();
        });

        $('.back_pop_show').click(function(){
            $('.back_pop').show();
        });

        $('.back_pop .orange_btn').click(function(){
            $('.back_pop').hide();
        });

        $('.toast_pop button').click(function(){
            $('.toast_pop').hide();
            $('.toast_pop').css('top','-100%');
        });
    
    }

    render() {
        return (
            <>
                <Header />

                <section className="form_page signup signup2 clearfix2">
                    <div className="bg_gradient mo_none">
                        <img src={ require('../images/form_left_bg.png') } alt="물방울bg"/>
                        <h1 className="title">엑스퀘어<br/>회원가입</h1>   
                        <p className="sub_title">엑스퀘어는 [자본시장과 금융투자업에 관한 법률]에 따라 실명회원을 대상으로 서비스를 제공합니다. 본인인증을 진행해주세요.</p>   
                    </div>
                    <div className="right">
                        <div className="mo_title pc_none">
                            <h1>엑스퀘어 회원가입</h1>
                        </div>
                        <form action="">
                            
                            {/* 본인인증 */}
                            <div className="confirm_wrap">
                                <h2 className="title">본인인증</h2>
                                <p className="sub_title">엑스퀘어는 [자본시장과 금융투자업에 관한 법률]에 따라 실명회원을 대상으로 서비스를 제공합니다. 본인인증을 진행해주세요.</p>
                                <div>
                                    <button type="button" className="navy_btn">본인인증 하러가기</button>
                                    
                                    {/* 본인인증 완료후 노출되는 버튼↓ */}
                                    {/* <button type="button" className="form_btn green_btn">인증완료</button> */}

                                    <input type="text" placeholder="성함" readOnly disabled/>
                                    <input type="text" placeholder="휴대전화 연락처" readOnly disabled/>
                                </div>
                            </div>

                            {/* 계정정보 */}
                            <div className="info_wrap">
                                <h2 className="title">계정정보</h2>
                                <ul>
                                    <li>
                                        <h3 className="input_title">아이디</h3>
                                        <p className="input_sub_title">이메일 주소를 입력해주세요</p>

                                        {/* 아이디 유효성검사미통과시에 노출되는 문구↓ */}
                                        {/* <p className="error_msg">이미 존재하는 이메일 주소입니다. 다른 이메일 주소를 입력해주세요.</p> */}
                                        <select name="" id="" className="mt16">
                                            <option value="" >이메일 선택</option>
                                            <option value="" >직접입력</option>
                                            <option value="" >naver.com</option>
                                            <option value="" >gmail.com</option>
                                            <option value="" >daum.net</option>
                                            <option value="" >nate.com</option>
                                            <option value="" >hotmail.com</option>
                                            <option value="" >kakao.com</option>
                                        </select>

                                        {/* select 선택하면 나오는 input box */}
                                        <div className="email_select">

                                        {/* select에서 naver,daum, ..등등 선택시 노출↓ */}
                                            <ul className="clearfix2">
                                                <li><input type="text" placeholder="username"/></li>
                                                <li className="clearfix2"><span>@</span><input type="text" value="naver.com" readOnly disabled/></li>
                                            </ul>
                                            {/* 중복확인 비활성화 버튼↓ */}
                                            <button type="button" className="unable_btn">중복확인</button>

                                            {/* 중복확인 활성화 버튼↓ */}
                                            {/* <button type="button" className="navy_btn">중복확인</button> */}

                                            {/* 중복확인 통과시 버튼↓ */}
                                            {/* <button type="button" className="form_btn green_btn">사용 가능</button> */}

                                        {/* select에서 직접입력 선택시 노출↓ */}
                                            {/* <input type="text" value="username@mail.com" className="mb16"/> */}

                                            {/* 중복확인 비활성화 버튼↓ */}
                                            {/* <button type="button" className="unable_btn">중복확인</button> */}

                                            {/* 중복확인 활성화 버튼↓ */}
                                            {/* <button type="button" className="navy_btn">중복확인</button> */}

                                            {/* 중복확인 통과시 버튼↓ */}
                                            {/* <button type="button" className="form_btn green_btn">사용 가능</button> */}
                                        </div>

                                    </li>
                                    <li>
                                        <h3 className="input_title">비밀번호</h3>
                                        {/* 비밀번호 유효성검사미통과시에 class에 red_color 추가↓ */}
                                        {/* <p className="input_sub_title">영문, 숫자, 특수문자(&#33;&#64;&#35;&#36;&#37;&#94;&amp;&#42;)를 조합한 8~20자 이내, 연속된 3자리 이상의 문자는 사용할 수 없습니다.</p> */}

                                        {/* 비밀번호 유효성검사통과시에 노출되는 문구↓ */}
                                        {/* <p className="input_sub_title green_color">사용 가능한 비밀번호 입니다.</p> */}

                                        <input type="password" placeholder="비밀번호 입력" className="mb16 mt16"/>

                                        {/* 비밀번호 유효성검사미통과시에 div class에 alert 추가↓ */}
                                        <div className="check_input"><input type="password" placeholder="비밀번호 확인"/></div>
                                    </li>
                                </ul>
                            </div>
                            
                            {/* 이용약관 */}
                            <div className="terms_wrap">
                                <h2 className="title">이용약관</h2>
                                <ul className="agree_box">
                                    <li className="all_agree_wrap">
                                        <div className="check_wrap clearfix2">
                                            <div className="clearfix">
                                                <input type="checkbox" id="all_check" className="all_agree"/><label htmlFor="all_check"></label><label htmlFor="all_check" className="label_txt">전체동의</label>
                                            </div>
                                            <button type="button" className="down_btn"><img src={ require('../images/down_arrow.png') } alt="화살표 아이콘"/></button>
                                        </div>
                                        <div className="txt_box">
                                            회원가입 약관과 엑스퀘어 이용약관, 개인정보 취급방침, 엑스퀘어 소식과 다양한 안내(선택)
                                        </div>
                                    </li>
                                    <li className="agree_wrap">
                                        <div className="check_wrap check_wrap2 clearfix2">
                                            <div className="clearfix">
                                                <input type="checkbox" id="check1" className="solo_check" name="agree"/><label htmlFor="check1"></label><label htmlFor="check1" className="label_txt">회원가입&amp;엑스퀘어 이용약관</label>
                                            </div>
                                            <button type="button" className="down_btn"><img src={ require('../images/down_arrow.png') } alt="화살표 아이콘"/></button>
                                        </div>
                                        <PerfectScrollbar>
                                        <div className="txt_box2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue leo lectus nisl, at. Sed pretium amet, sagittis consectetur est. Sed risus pellentesque morbi aliquam sit etiam lorem. Dui vitae sed convallis elit ut ut orci at. Tortor risus pharetra, integer scelerisque libero consectetur turpis at varius. Urna orci ut lectus eu urna. Arcu mauris dignissim eget in pharetra vestibulum massa sed hac. Nunc condimentum aenean id nunc curabitur. Amet, nunc consectetur pulvinar ullamcorper leo rutrum sed diam. Adipiscing cras habitant sed non malesuada.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue leo lectus nisl, at. Sed pretium amet, sagittis consectetur est. Sed risus pellentesque morbi aliquam sit etiam lorem. Dui vitae sed convallis elit ut ut orci at. Tortor risus pharetra, integer scelerisque libero consectetur turpis at varius. Urna orci ut lectus eu urna. Arcu mauris dignissim eget in pharetra vestibulum massa sed hac. Nunc condimentum aenean id nunc curabitur. Amet, nunc consectetur pulvinar ullamcorper leo rutrum sed diam. Adipiscing cras habitant sed non malesuada.
                                        </div>
                                        </PerfectScrollbar>
                                    </li>
                                    <li className="agree_wrap">
                                        <div className="check_wrap check_wrap2 clearfix2">
                                            <div className="clearfix">
                                                <input type="checkbox" id="check2" className="solo_check" name="agree"/><label htmlFor="check2"></label><label htmlFor="check2" className="label_txt">개인정보 취급방침</label>
                                            </div>
                                            <button type="button" className="down_btn"><img src={ require('../images/down_arrow.png') } alt="화살표 아이콘"/></button>
                                        </div>
                                        <PerfectScrollbar>
                                        <div className="txt_box2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue leo lectus nisl, at. Sed pretium amet, sagittis consectetur est. Sed risus pellentesque morbi aliquam sit etiam lorem. Dui vitae sed convallis elit ut ut orci at. Tortor risus pharetra, integer scelerisque libero consectetur turpis at varius. Urna orci ut lectus eu urna. Arcu mauris dignissim eget in pharetra vestibulum massa sed hac. Nunc condimentum aenean id nunc curabitur. Amet, nunc consectetur pulvinar ullamcorper leo rutrum sed diam. Adipiscing cras habitant sed non malesuada.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue leo lectus nisl, at. Sed pretium amet, sagittis consectetur est. Sed risus pellentesque morbi aliquam sit etiam lorem. Dui vitae sed convallis elit ut ut orci at. Tortor risus pharetra, integer scelerisque libero consectetur turpis at varius. Urna orci ut lectus eu urna. Arcu mauris dignissim eget in pharetra vestibulum massa sed hac. Nunc condimentum aenean id nunc curabitur. Amet, nunc consectetur pulvinar ullamcorper leo rutrum sed diam. Adipiscing cras habitant sed non malesuada.
                                        </div>
                                        </PerfectScrollbar>
                                    </li>
                                    <li className="agree_wrap">
                                        <div className="check_wrap check_wrap2 clearfix2">
                                            <div className="clearfix">
                                                <input type="checkbox" id="check3" className="solo_check" name="agree"/><label htmlFor="check3"></label><label htmlFor="check3" className="label_txt">엑스퀘어 소식과 다양한 안내(선택)</label>
                                            </div>
                                            <button type="button" className="down_btn"><img src={ require('../images/down_arrow.png') } alt="화살표 아이콘"/></button>
                                        </div>
                                        <PerfectScrollbar>
                                        <div className="txt_box2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue leo lectus nisl, at. Sed pretium amet, sagittis consectetur est. Sed risus pellentesque morbi aliquam sit etiam lorem. Dui vitae sed convallis elit ut ut orci at. Tortor risus pharetra, integer scelerisque libero consectetur turpis at varius. Urna orci ut lectus eu urna. Arcu mauris dignissim eget in pharetra vestibulum massa sed hac. Nunc condimentum aenean id nunc curabitur. Amet, nunc consectetur pulvinar ullamcorper leo rutrum sed diam. Adipiscing cras habitant sed non malesuada.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue leo lectus nisl, at. Sed pretium amet, sagittis consectetur est. Sed risus pellentesque morbi aliquam sit etiam lorem. Dui vitae sed convallis elit ut ut orci at. Tortor risus pharetra, integer scelerisque libero consectetur turpis at varius. Urna orci ut lectus eu urna. Arcu mauris dignissim eget in pharetra vestibulum massa sed hac. Nunc condimentum aenean id nunc curabitur. Amet, nunc consectetur pulvinar ullamcorper leo rutrum sed diam. Adipiscing cras habitant sed non malesuada.
                                        </div>
                                        </PerfectScrollbar>
                                    </li>
                                </ul>
                            </div> 

                            <div className="btn_wrap clearfix2">
                                <button type="button" className="back_btn back_pop_show">이전</button>

                                {/* 가입완료활성화될때 class에 orange_btn 추가↓ */}
                                <button type="button" className="unable_btn">가입완료</button>
                            </div>
                        </form>
                    </div>
                </section>
                
                <Footer/>

                {/* 이미가입되어있는 유저일때 보이는팝업 */}
                <div className="pop_wrap signup_pop">
                    <div className="dim"></div>
                    <div className="pop_cont">
                        <button type="button" className="pop_close">
                            <img src={ require('../images/icons/close_btn.png') } alt="닫기버튼 아이콘"/>
                        </button>
                        <div className="clearfix2">
                            <div className="pop_img">
                                <img src={ require('../images/alert_img.png') } alt="느낌표 이미지"/>
                            </div>
                            <div className="txt_box">
                                <p>홍길동 님은 가입한 이력이 있습니다. <br/>아래의 아이디로 로그인을 진행해주세요.</p>
                                <p className="blue_color">aaa***@mail.com</p>
                                <p>만약 로그인 정보가 기억나지 않으신다면<br/>아이디∙비밀번호 찾기를 진행해주세요.</p>
                                <div className="btn_wrap">
                                    <button type="button" className="navy_btn mb16" onClick={() => window.location.pathname = "/login"}>로그인</button>
                                    <button type="button" className="navy_btn" onClick={() => window.location.pathname = "/find_id"}>아이디∙비밀번호 찾기</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 진행중 이전으로돌아갈때 보이는팝업 */}
                <div className="pop_wrap signup_pop back_pop">
                    <div className="dim"></div>
                    <div className="pop_cont">
                        <button type="button" className="pop_close">
                            <img src={ require('../images/icons/close_btn.png') } alt="닫기버튼 아이콘"/>
                        </button>
                        <div className="clearfix2">
                            <div className="pop_img">
                                <img src={ require('../images/alert_img.png') } alt="느낌표 이미지"/>
                            </div>
                            <div className="txt_box">
                                <p>이전으로 돌아가시면 현재 입력하신 정보는<br/>삭제됩니다. 이전으로 돌아가시겠습니까?</p>
                                <div className="btn_wrap">
                                    <button type="button" className="back_line_btn mb16" onClick={() => window.history.back()}>돌아가겠습니다</button>
                                    <button type="button" className="form_btn orange_btn">아니오 돌아가지 않겠습니다</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                {/* sns가입이력이있는회원일때 보이는팝업 */}
                <div className="toast_pop clearfix2">
                    <p className="font_13 white_color">가입이력이 있습니다. 로그인합니다.</p>
                    <button type="button">확인</button>
                </div>
            </>
        )
    }
}