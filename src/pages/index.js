import React from 'react'
import { Link } from 'react-router-dom';
import * as js from '../js/style'
import Header from '../components/header'
import Footer from '../components/footer'
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import $ from 'jquery'
import Mount from '../components/mount';

import MainBannerSlide from '../components/mainBannerSlide'
import XquareList from '../components/XquareList'

export default class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      width : $(window).width(),
    }

    this.sliderEvent = this.sliderEvent.bind(this)
    this.onClickLink = this.onClickLink.bind(this)
  }

  // $(document).ready({ ... })sta
  componentDidMount(){
    
    const target = this;

    $(window).on('resize' ,  function () {
      target.setState(  {
        width : $(window).width()
      } )
    });

  }

  sliderEvent ( currentSlide, nextSlide ) {
    this.setState( { 
      focus : nextSlide
    } )
  }

  onClickLink (link) {
    window.location.pathname = link
  }

  
  render() {
    return (
      <>
        <Mount />
        <Header />
        <section className="index main">
          {/* 메인배너슬라이드 ------------------- */}
          <MainBannerSlide />
          {/* -------------------메인배너슬라이드  */}
          {/*Xquare List ---------------------------*/}
          <XquareList title="Xquare List" />
          {/*--------------------------- Xquar
          e List */}
          {/* Xquare Contribution --------------------------- */}
          <div className="section2">
            <div className="gray_bg">
                <div className="container">
                   <h1 className="title centerT playF">Xquare Contribution</h1>
                   <p className="sub_title centerT">엑스퀘어에서는 누구나 쉽게 에너지 사업을 시작할 수 있습니다.</p>
                   <ul className="clearfix">
                     <li className="clearfix">
                       <div className="icon_box">
                         <img src={ require('../images/icons/contribution_icon1.png') } alt="Contribution이미지"/>
                         <p className="point_color playF">수익률</p>
                       </div>
                       <p className="playF">80.00<span> %</span></p>
                     </li>
                     <li className="clearfix">
                       <div className="icon_box">
                         <img src={ require('../images/icons/contribution_icon2.png') } alt="Contribution이미지"/>
                         <p className="point_color playF">환경기여도</p>
                       </div>
                       <p className="playF">100,000<span> 그루</span></p>
                     </li>
                   </ul>
                </div>
            </div>
          </div>
           {/* ---------------------------Xquare Contribution  */}
           {/*About Xquare -------------------------------  */}
          <div className="section3">
            <div className="container">
             <h1 className="title centerT playF">About Xquare</h1>
             <p className="sub_title centerT">엑스퀘어에서는 누구나 쉽게 에너지 사업을 시작할 수 있습니다.
             <br/>엑스퀘어만의 안정성있는 주식채권형 에너지 발전소에 투자하세요.</p>
             <ul className="hashtag clearfix">
               <li>#안정적</li>
               <li>#고수익</li>
               <li>#친환경</li>
               <li>#Social</li>
             </ul>
             <ul className="box_list clearfix">
             {
                  this.state.width > 767 ?
                  <>                
                    <li>
                        <h3>환경</h3>
                        <p>석탄 화력 발전소에서 나오는<br/>매연,미세먼지 억제<br/>친환경 에너지를 환경 개선하고<br/> 기후변화문제해결</p>
                    </li>
                    <li>
                        <h3>안정성</h3>
                        <p>담보,보험으로 안정성 확보<br/>안정적인 신재생에너지<br/>발전사업 엄선</p>
                    </li>
                    <li>
                        <h3>수익성</h3>
                        <p>기술발전으로 인한<br/>모듈가격의 하락 →<br/>수익성의 증대<br/>중간마진없이 직접투자</p>
                    </li>                 
                   </>
                  :              
               <Slider slidesToShow={1} slidesToScroll={1} speed={500} dots={false} infinite={false} beforeChange={this.sliderEvent}>
                <li>
                    <h3>환경</h3>
                    <p>석탄 화력 발전소에서 나오는<br/>매연,미세먼지 억제<br/>친환경 에너지를 환경 개선하고<br/> 기후변화문제해결</p>
                </li>
                <li>
                    
                    <h3>안정성</h3>
                    <p>담보,보험으로 안정성 확보<br/>안정적인 신재생에너지<br/>발전사업 엄선</p>
                </li>
                <li>
                    <h3>수익성</h3>
                    <p>기술발전으로 인한<br/>모듈가격의 하락 →<br/>수익성의 증대<br/>중간마진없이 직접투자</p>
                </li>
               </Slider> 
                }
             </ul>
             <ul className="dot_wrap clearfix mo_only">
                <li className={ this.state.focus === 0 ? "active" : ""  } ></li>
                <li className={ this.state.focus === 1 ? "active" : ""  } ></li>
                <li className={ this.state.focus === 2 ? "active" : ""  } ></li>
              </ul>
            </div>
          </div>
          {/* -------------------------------About Xquare   */}
          {/*Xquare News -------------------------------  */}
          <div className="section4">
            <div className="container">
              <h1 className="title centerT playF">Xquare News</h1>
              <p className="sub_title centerT">엑스퀘어의 언론보도 내용을 알려드립니다.</p>
              <ul className="list clearfix">
                <li onClick={() => this.onClickLink("/Invest_detail")}>
                  <Link to=""  className="img_box">
                    <img src={ require('../images/img_img_thumnail_default.png') } alt="리스트이미지"/>
                    <div className="hidden_box" >
                      <p>상세보기 <img src={ require('../images/icons/w_arrow.png') } alt="화살표아이콘"/></p>
                    </div>
                  </Link>
                  <div className="bottom_box">
                      <h3 className="ellipsis2">13월의 월급 받자... 연말 크라우드펀딩·벤처 투자 주목</h3>
                      <div className="clearfix2">
                        <p className="dark_gray_color">이데일리</p>
                        <p className="gray_color">2020.02.31</p>
                      </div>                      
                  </div>
                </li>
                <li onClick={() => this.onClickLink("/Invest_detail")}>
                  <Link to="" className="img_box">
                    <img src={ require('../images/img_img_thumnail_default.png') } alt="리스트이미지"/>
                    <div className="hidden_box">
                      <p>상세보기 <img src={ require('../images/icons/w_arrow.png') } alt="화살표아이콘"/></p>
                    </div>
                  </Link>
                  <div className="bottom_box">
                      <h3 className="ellipsis2">13월의 월급 받자... 연말 크라우드펀딩·벤처 투자 주목</h3>
                      <div className="clearfix2">
                        <p className="dark_gray_color">이데일리</p>
                        <p className="gray_color">2020.02.31</p>
                      </div>                      
                  </div>
                </li>
                <li onClick={() => this.onClickLink("/Invest_detail")}>
                 <Link to="" className="img_box" >
                    <img src={ require('../images/img_img_thumnail_default.png') } alt="리스트이미지"/>
                    <div className="hidden_box">
                      <p>상세보기 <img src={ require('../images/icons/w_arrow.png') } alt="화살표아이콘"/></p>
                    </div>
                  </Link>
                  <div className="bottom_box">
                      <h3 className="ellipsis2">13월의 월급 받자... 연말 크라우드펀딩·벤처 투자 주목</h3>
                      <div className="clearfix2">
                        <p className="dark_gray_color">이데일리</p>
                        <p className="gray_color">2020.02.31</p>
                      </div>                      
                  </div>
                </li>
                <li onClick={() => this.onClickLink("/Invest_detail")}>
                  <Link to="" className="img_box">
                    <img src={ require('../images/img_img_thumnail_default.png') } alt="리스트이미지"/>
                    <div className="hidden_box">
                      <p>상세보기 <img src={ require('../images/icons/w_arrow.png') } alt="화살표아이콘"/></p>
                    </div>
                  </Link>
                  <div className="bottom_box">
                      <h3 className="ellipsis2">13월의 월급 받자... 연말 크라우드펀딩·벤처 투자 주목</h3>
                      <div className="clearfix2">
                        <p className="dark_gray_color">이데일리</p>
                        <p className="gray_color">2020.02.31</p>
                      </div>                      
                  </div>
                </li>
              </ul>
              <div className="btn_wrap centerT">
                <button type="button" className="more_btn">더보기<img src={ require('../images/icons/more_arrow.png') } alt="더보기아이콘"/></button>
              </div>            
            </div>
          </div>
           {/*------------------------------- Xquare News   */}
           {/* 가이드 --------------------------------------- */}
          <div className="section5 "> 
            <div className="centerT">
              <h2>플랫폼 이용 가이드</h2>
              <p>엑스퀘어에서는 누구나 쉽게<br/>에너지 사업을 시작할 수 있습니다.</p>
             </div>            
          </div>
          {/* --------------------------------------- 가이드  */}
        </section>
        <Footer />


      </>
    )
  }
}