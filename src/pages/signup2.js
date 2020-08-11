import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer';
import $ from 'jquery'


export default class Signup2 extends React.Component {
    
    constructor(props) {
    super(props);
    }

    componentDidMount(){

        $('.agree_box .all_agree_wrap .down_btn').on('click',function(){
            $(this).toggleClass('on');
            $(this).parents('.all_agree_wrap').nextAll('.agree_wrap').slideToggle(300);
        });


        $('.agree_box .check_wrap2 .down_btn').on('click',function(){
            $(this).toggleClass('on');
            $(this).parents('.check_wrap2').next('.txt_box2').slideToggle(300);
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
                            <h1>회원가입</h1>
                            <p>에너지엑스 스퀘어의 다양한 서비스를 이용하시려면 회원가입을 해주세요.</p>
                        </div>
                        <form action="">
                            <div className="confirm_wrap">
                                <h2 className="title">본인인증</h2>
                                <p className="sub_title">엑스퀘어는 [자본시장과 금융투자업에 관한 법률]에 따라 실명회원을 대상으로 서비스를 제공합니다. 본인인증을 진행해주세요.</p>
                                <div>
                                    <button type="button" className="navy_btn">본인인증 하러가기</button>
                                    
                                    {/* 본인인증 완료후 노출되는 버튼↓ */}
                                    {/* <button type="button" className="form_btn green_btn">인증완료</button> */}

                                    <input type="text" placeholder="성함"/>
                                    <input type="text" placeholder="휴대전화 연락처"/>
                                </div>
                            </div>
                            <div className="info_wrap">
                                <h2 className="title">계정정보</h2>
                                <ul>
                                    <li>
                                        <h3 className="input_title">아이디</h3>
                                        <p className="input_sub_title">이메일 주소를 입력해주세요</p>

                                        {/* 아이디 유효성검사미통과시에 노출되는 문구↓ */}
                                        {/* <p className="error_msg">이미 존재하는 이메일 주소입니다. 다른 이메일 주소를 입력해주세요.</p> */}
                                        <select name="" id="">
                                            <option value="" >이메일 선택</option>
                                            <option value="" >직접입력</option>
                                        </select>

                                        {/* select 선택하면 나오는 input box */}
                                        <div className="email_select">
                                            {/* select에서 naver,daum, ..등등 선택시 노출↓ */}
                                            <ul className="clearfix2">
                                                <li><input type="text" placeholder="username"/></li>
                                                <li className="clearfix2"><span>@</span><input type="text" value="naver.com" readOnly disabled/></li>
                                            </ul>
                                            <button type="button" className="form_btn green_btn">사용 가능</button>

                                            {/* select에서 직접입력 선택시 노출↓ */}
                                            {/* <input type="text" value="username@mail.com"/>
                                            <button type="button" className="form_btn unable_btn">중복확인</button> */}
                                        </div>

                                    </li>
                                    <li>
                                        <h3 className="input_title">비밀번호</h3>
                                        {/* 비밀번호 유효성검사미통과시에 class에 red_color 추가↓ */}
                                        <p className="input_sub_title">영문, 숫자, 특수문자(&#33;&#64;&#35;&#36;&#37;&#94;&amp;&#42;)를 조합한 8~20자 이내, 연속된 3자리 이상의 문자는 사용할 수 없습니다.</p>

                                        {/* 비밀번호 유효성검사통과시에 노출되는 문구↓ */}
                                        {/* <p className="input_sub_title green_color">사용 가능한 비밀번호 입니다.</p> */}

                                        <input type="password" placeholder="비밀번호 입력" className="mb16"/>

                                        {/* 비밀번호 유효성검사미통과시에 div class에 alert 추가↓ */}
                                        <div className="check_input"><input type="password" placeholder="비밀번호 확인"/></div>
                                    </li>
                                </ul>
                            </div>

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
                                                <input type="checkbox" id="check1" className=""/><label htmlFor="check1"></label><label htmlFor="check1" className="label_txt">회원가입&amp;엑스퀘어 이용약관</label>
                                            </div>
                                            <button type="button" className="down_btn"><img src={ require('../images/down_arrow.png') } alt="화살표 아이콘"/></button>
                                        </div>
                                        <div className="txt_box2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue leo lectus nisl, at. Sed pretium amet, sagittis consectetur est. Sed risus pellentesque morbi aliquam sit etiam lorem. Dui vitae sed convallis elit ut ut orci at. Tortor risus pharetra, integer scelerisque libero consectetur turpis at varius. Urna orci ut lectus eu urna. Arcu mauris dignissim eget in pharetra vestibulum massa sed hac. Nunc condimentum aenean id nunc curabitur. Amet, nunc consectetur pulvinar ullamcorper leo rutrum sed diam. Adipiscing cras habitant sed non malesuada.
                                        </div>
                                    </li>
                                    <li className="agree_wrap">
                                        <div className="check_wrap check_wrap2 clearfix2">
                                            <div className="clearfix">
                                                <input type="checkbox" id="check2" className=""/><label htmlFor="check2"></label><label htmlFor="check2" className="label_txt">개인정보 취급방침</label>
                                            </div>
                                            <button type="button" className="down_btn"><img src={ require('../images/down_arrow.png') } alt="화살표 아이콘"/></button>
                                        </div>
                                        <div className="txt_box2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue leo lectus nisl, at. Sed pretium amet, sagittis consectetur est. Sed risus pellentesque morbi aliquam sit etiam lorem. Dui vitae sed convallis elit ut ut orci at. Tortor risus pharetra, integer scelerisque libero consectetur turpis at varius. Urna orci ut lectus eu urna. Arcu mauris dignissim eget in pharetra vestibulum massa sed hac. Nunc condimentum aenean id nunc curabitur. Amet, nunc consectetur pulvinar ullamcorper leo rutrum sed diam. Adipiscing cras habitant sed non malesuada.
                                        </div>
                                    </li>
                                    <li className="agree_wrap">
                                        <div className="check_wrap check_wrap2 clearfix2">
                                            <div className="clearfix">
                                                <input type="checkbox" id="check3" className=""/><label htmlFor="check3"></label><label htmlFor="check3" className="label_txt">엑스퀘어 소식과 다양한 안내(선택)</label>
                                            </div>
                                            <button type="button" className="down_btn"><img src={ require('../images/down_arrow.png') } alt="화살표 아이콘"/></button>
                                        </div>
                                        <div className="txt_box2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue leo lectus nisl, at. Sed pretium amet, sagittis consectetur est. Sed risus pellentesque morbi aliquam sit etiam lorem. Dui vitae sed convallis elit ut ut orci at. Tortor risus pharetra, integer scelerisque libero consectetur turpis at varius. Urna orci ut lectus eu urna. Arcu mauris dignissim eget in pharetra vestibulum massa sed hac. Nunc condimentum aenean id nunc curabitur. Amet, nunc consectetur pulvinar ullamcorper leo rutrum sed diam. Adipiscing cras habitant sed non malesuada.
                                        </div>
                                    </li>
                                </ul>
                            </div> 

                            <div className="btn_wrap clearfix2">
                                <button type="button" className="back_btn">이전</button>
                                <button type="button">가입완료</button>
                            </div>
                        </form>
                    </div>
                </section>
                
                <Footer/>
            </>
        )
    }
}