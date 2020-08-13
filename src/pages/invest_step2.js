import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer';
import $ from 'jquery'
import PerfectScrollbar from '@opuscapita/react-perfect-scrollbar';

export default class Invest_step2 extends React.Component {

    constructor(props) {
    super(props);
    }
    // $(document).ready({ ... })sta
    componentDidMount(){
         //이용약관     

       $('.terms_wrap ul li .check_wrap').on('click',function(){
            $(this).siblings('.terms_box').slideToggle(300);
        });
        $('.agree_btn').on('click',function(){
            $(this).parents('.terms_box').siblings('.check_wrap').addClass('on');
            $(this).parents('.terms_box').siblings('.check_wrap').children('input:checkbox').attr("checked", true);
            $(this).parents('.terms_box').slideUp();
            $(this).parents('.terms_box').parents('li').next().children('.terms_box').slideDown(300);
        });
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

                    <div className="container step2">
                        <div className="step_progress">
                            <ul className="">
                                <li className="past"><div></div><p>투자정보입력</p></li>
                                <li className="now"><div></div><p className="centerT">약관 및 투자위험</p></li>
                                <li className="clearfix3"><div className="">03</div><p className="rightT">투자금 결제</p></li>
                            </ul>
                            <div className="step_bar step_bar1"></div>
                            <div className="step_bar step_bar2"></div>
                        </div>
                        <div className="title_box centerT">
                            <p className="font_13 gray4_color">STEP 02</p>
                            <h1 className="title">약관 및 투자위험</h1>
                        </div>
                        <div className="cont_wrap">
                            <div className="cont clearfix2">
                                <div className="w50 terms">
                                    <div className="terms_wrap">
                                        <ul>
                                            <li>
                                                <div className="check_wrap clearfix">
                                                    <input type="checkbox" id="agree1"/><label htmlFor="agree1"></label>
                                                    <p>투자 서비스 이용 약관</p>
                                                </div>
                                                <div className="terms_box">
                                                    <PerfectScrollbar>
                                                    <div className="terms">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue leo lectus nisl, at. Sed pretium amet, sagittis consectetur est. Sed risus pellentesque morbi aliquam sit etiam lorem. Dui vitae sed convallis elit ut ut orci at. Tortor risus pharetra, integer scelerisque libero consectetur turpis at varius. Urna orci ut lectus eu urna. Arcu mauris dignissim eget in pharetra vestibulum massa sed hac. Nunc condimentum aenean id nunc curabitur. Amet, nunc consectetur pulvinar ullamcorper leo rutrum sed diam. Adipiscing cras habitant sed non malesuada.
                                                    </div>
                                                    </PerfectScrollbar>
                                                    <button type="button" className="navy_btn agree_btn w100">동의하기</button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="check_wrap clearfix">
                                                    <input type="checkbox" id="agree2"/><label htmlFor="agree2"></label>
                                                    <p>제 3자 개인정보 제공에 대한 약관</p>
                                                </div>
                                                <div className="terms_box">
                                                    <div className="terms">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue leo lectus nisl, at. Sed pretium amet, sagittis consectetur est. Sed risus pellentesque morbi aliquam sit etiam lorem. Dui vitae sed convallis elit ut ut orci at. Tortor risus pharetra, integer scelerisque libero consectetur turpis at varius. Urna orci ut lectus eu urna. Arcu mauris dignissim eget in pharetra vestibulum massa sed hac. Nunc condimentum aenean id nunc curabitur. Amet, nunc consectetur pulvinar ullamcorper leo rutrum sed diam. Adipiscing cras habitant sed non malesuada.
                                                    </div>
                                                    <button type="button" className="navy_btn agree_btn w100">동의하기</button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="check_wrap clearfix">
                                                    <input type="checkbox" id="agree3"/><label htmlFor="agree3"></label>
                                                    <p>일괄예탁 및 의무보유예탁 동의</p>
                                                </div>
                                                <div className="terms_box">
                                                    <div className="terms">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue leo lectus nisl, at. Sed pretium amet, sagittis consectetur est. Sed risus pellentesque morbi aliquam sit etiam lorem. Dui vitae sed convallis elit ut ut orci at. Tortor risus pharetra, integer scelerisque libero consectetur turpis at varius. Urna orci ut lectus eu urna. Arcu mauris dignissim eget in pharetra vestibulum massa sed hac. Nunc condimentum aenean id nunc curabitur. Amet, nunc consectetur pulvinar ullamcorper leo rutrum sed diam. Adipiscing cras habitant sed non malesuada.
                                                    </div>
                                                    <button type="button" className="navy_btn agree_btn w100">동의하기</button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="check_wrap clearfix">
                                                    <input type="checkbox" id="agree4"/><label htmlFor="agree4"></label>
                                                    <p>청약증거금 신탁 동의</p>
                                                </div>
                                                <div className="terms_box">
                                                    <div className="terms">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue leo lectus nisl, at. Sed pretium amet, sagittis consectetur est. Sed risus pellentesque morbi aliquam sit etiam lorem. Dui vitae sed convallis elit ut ut orci at. Tortor risus pharetra, integer scelerisque libero consectetur turpis at varius. Urna orci ut lectus eu urna. Arcu mauris dignissim eget in pharetra vestibulum massa sed hac. Nunc condimentum aenean id nunc curabitur. Amet, nunc consectetur pulvinar ullamcorper leo rutrum sed diam. Adipiscing cras habitant sed non malesuada.
                                                    </div>
                                                    <button type="button" className="navy_btn agree_btn w100">동의하기</button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="check_wrap clearfix">
                                                    <input type="checkbox" id="agree5"/><label htmlFor="agree5"></label>
                                                    <p>투자내용 및 위험 확인 동의</p>
                                                </div>
                                                <div className="terms_box">
                                                    <div className="terms">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue leo lectus nisl, at. Sed pretium amet, sagittis consectetur est. Sed risus pellentesque morbi aliquam sit etiam lorem. Dui vitae sed convallis elit ut ut orci at. Tortor risus pharetra, integer scelerisque libero consectetur turpis at varius. Urna orci ut lectus eu urna. Arcu mauris dignissim eget in pharetra vestibulum massa sed hac. Nunc condimentum aenean id nunc curabitur. Amet, nunc consectetur pulvinar ullamcorper leo rutrum sed diam. Adipiscing cras habitant sed non malesuada.
                                                    </div>
                                                    <button type="button" className="navy_btn agree_btn w100">동의하기</button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div> 
                                </div>
                                <div className="w50">
                                    <div className="title_area">
                                        {/* 법인유저일시엔 담당자 본인인증으로 워딩변경 */}
                                        <h2>휴대폰 본인인증</h2>
                                        <div className="btn_wrap">
                                            {/* 본인인증 완료시  class navy_btn 으로 변경 */}
                                            <button type="button" className="unable_btn">휴대폰 본인인증</button>
                                        </div>
                                    </div>
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