import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer';
import $ from 'jquery'
import PerfectScrollbar from '@opuscapita/react-perfect-scrollbar';

export default class Corporation_signup extends React.Component {
    
    constructor(props) {
    super(props);
    }

    componentDidMount(){

        //높이맞추기
        const height = $('.signup.signup2 .right').height();
        $('.signup.signup2 .bg_gradient').height(height);

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
    
    }

    render() {
        return (
            <>
                <Header />

                <section className="form_page signup signup2 clearfix2">
                    <div className="bg_gradient mo_none">
                        <img src={ require('../images/form_left_bg.png') } alt="물방울bg"/>
                        <h1 className="title">법인<br/>회원가입</h1>   
                        <p className="sub_title">엑스퀘어는 [자본시장과 금융투자업에 관한 법률]에 따라 실명회원을 대상으로 서비스를 제공합니다. 본인인증을 진행해주세요.</p>   
                    </div>
                    <div className="right">
                        <div className="mo_title pc_none">
                            <h1>법인 회원가입</h1>
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

                                    <input type="text" placeholder="성함"/>
                                    <input type="text" placeholder="휴대전화 연락처"/>
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
                                        <p className="input_sub_title">영문, 숫자, 특수문자(&#33;&#64;&#35;&#36;&#37;&#94;&amp;&#42;)를 조합한 8~20자 이내, 연속된 3자리 이상의 문자는 사용할 수 없습니다.</p>

                                        {/* 비밀번호 유효성검사통과시에 노출되는 문구↓ */}
                                        {/* <p className="input_sub_title green_color">사용 가능한 비밀번호 입니다.</p> */}

                                        <input type="password" placeholder="비밀번호 입력" className="mb16 mt16"/>

                                        {/* 비밀번호 유효성검사미통과시에 div class에 alert 추가↓ */}
                                        <div className="check_input"><input type="password" placeholder="비밀번호 확인"/></div>
                                    </li>
                                </ul>
                            </div>
                            
                            {/* 법인정보 */}
                            <div>
                                <h2 className="title">법인정보</h2>
                                <ul>
                                    <li>
                                        <h3 className="input_title">법인명</h3>
                                        {/* 법인명 유효성검사미통과시에 노출되는 문구↓ */}
                                        {/* <p className="error_msg">법인명은 한글만 입력 가능합니다.</p> */}
                                        <input type="text" placeholder="법인명 입력" className="mt16"/>
                                    </li>
                                    <li>
                                        <h3 className="input_title">대표자 성함</h3>
                                        {/* 대표자성함 유효성검사미통과시에 노출되는 문구↓ */}
                                        {/* <p className="error_msg">대표자 성함은 한글만 입력 가능합니다.</p> */}
                                        <input type="text" placeholder="대표자 성함 입력" className="mt16"/>
                                    </li>
                                    <li>
                                        <h3 className="input_title">사업자 등록 번호</h3>
                                        {/* 사업자번호 유효성검사미통과시에 노출되는 문구↓ */}
                                        {/* <p className="error_msg">이미 가입된 법인입니다.</p> */}
                                        <input type="text" placeholder="10자리 숫자 입력" className="mt16"/>
                                    </li>
                                    <li>
                                        {/* 중복확인 비활성화 버튼↓ */}
                                        <button type="button" className="unable_btn">중복확인</button>

                                        {/* 중복확인 활성화 버튼↓ */}
                                        {/* <button type="button" className="navy_btn">중복확인</button> */}

                                        {/* 중복확인 통과시 버튼↓ */}
                                        {/* <button type="button" className="form_btn green_btn">사용 가능</button> */}
                                    </li>
                                    <li>
                                        <h3 className="input_title">법인 등록 번호</h3>
                                        {/* 법인등록번호 유효성검사미통과시에 노출되는 문구↓ */}
                                        {/* <p className="error_msg">숫자만 입력 가능합니다.</p> */}
                                        <input type="text" placeholder="13자리 숫자 입력" className="mt16"/>
                                    </li>
                                    <li>
                                        <h3 className="input_title">법인 설립일</h3>
                                        {/* 법인설립일 유효성검사미통과시에 노출되는 문구↓ */}
                                        {/* <p className="error_msg">숫자만 입력 가능합니다.</p> */}
                                        <input type="text" placeholder="예시 : 20200310" className="mt16"/>
                                    </li>
                                    <li>
                                        <h3 className="input_title">회사 전화번호</h3>
                                        {/* 회사전화번호 유효성검사미통과시에 노출되는 문구↓ */}
                                        {/* <p className="error_msg">숫자만 입력 가능합니다.</p> */}
                                        <input type="text" placeholder="연락가능한 대표 전화번호" className="mt16"/>
                                    </li>
                                    <li>
                                        <h3 className="input_title">파일 업로드</h3>
                                        <p className="input_sub_title">사실여부 확인을 위해 사업자등록증을 스캔한 이미지를 등록해주세요 (최대20MB,jpg/jpeg/png/pdf)</p>
                                        <div className="file_wrap clearfix mt16">
                                            <input type="file" id="file_up" accept=".jpg,.jpeg,.png,.pdf"/>
                                            <input type="text" className="file_name" placeholder="이미지파일" disabled readOnly/>
                                            {/* 업로드활성화시 class에 on 추가↓ */}
                                            <label htmlFor="file_up" className="file_up_btn">업로드</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* 추가연락처등록 */}
                            <div className="add_wrap">
                                <h2 className="title">추가 연락처 등록 (선택)</h2>
                                <p className="input_sub_title">담당자와의 연락이 어려운 경우를 대비해 연락 가능한 휴대전화 번호를 등록해 주시기 바랍니다.</p>
                                <ul>
                                    <li className="clearfix2">
                                        <input type="text" placeholder="휴대전화번호"/>
                                        {/* 삭제버튼활성화시 class에 on 추가↓ */}
                                        <button type="button" className="delt_btn">삭제</button>
                                    </li>
                                </ul>
                                <button type="button" className="form_btn navy_btn">
                                    {/* <img src={ require('../images/form_left_bg.png') } alt="plus 아이콘"/> */}
                                    추가
                                </button>
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
                                <button type="button" className="back_btn" onClick={() => window.history.back()}>이전</button>

                                {/* 가입완료활성화될때 class에 orange_btn 추가↓ */}
                                <button type="button" className="unable_btn">가입완료</button>
                            </div>
                        </form>
                    </div>
                </section>
                
                <Footer/>
            </>
        )
    }
}