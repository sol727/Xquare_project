import React from 'react'
import { Link } from 'react-router-dom';
import * as js from '../js/style'
import Header from '../components/header'
import Footer from '../components/footer'
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import $ from 'jquery'

export default class Invest_index extends React.Component {

     constructor(props) {
          super(props);
     }

    render() {
        return (
            <>
               <Header />

               <section className="invest_index">
                    <div className="top">
                         <div className="title_area clearfix2 container">                              
                              <ul className="img_box ">
                                   <li>
                                        <img src={ require('../images/detail_sample.png') } alt="투자상세이미지"/>
                                   </li>
                                   <li>
                                        <img src={ require('../images/detail_sample.png') } alt="투자상세이미지"/>
                                   </li>
                                   <li>
                                        <img src={ require('../images/detail_sample.png') } alt="투자상세이미지"/>
                                   </li>
                              </ul>
                              <div className="text_box">                                   
                                   <ul className="label_wrap clearfix">
                                        <li>태양광/소형</li>
                                        <li>채권형(일반회사채)</li>
                                   </ul>
                                   <div className="title_box">
                                        <h1 className="ellipsis2 title">타이틀입니다타이틀입니다타이틀입니다</h1>
                                   </div>
                                   <div className="open_expected">
                                        <img src={ require('../images/icons/calendar_icon.png') } alt="달력아이콘"/>
                                        <p>3월 말 오픈예정</p>
                                   </div>
                                   <ul className="goal_box">
                                        <li>
                                             <p>목표금액</p>
                                             <h3>10,000,000<span>원</span></h3>
                                        </li>
                                        <li>
                                             <p>남은기간</p>
                                             <h3>D-6</h3>
                                             <p>yyyy.mm.dd hh:mm 마감</p>
                                        </li>
                                   </ul>
                                   <div className="bar_box">
                                        <div className="clearfix2">
                                             <p>4,000,000원<span>/10,000,000원</span></p>
                                             <p className="point_color">nn%</p>
                                        </div>
                                         <div className="bar"></div>
                                   </div>
                                   <div className="btn_wrap">
                                        <button type="button">지금 투자하기</button>
                                        <ul>
                                             <li><button type="button" className="like_btn">nnn</button></li>
                                             <li><button type="button" className="share_btn">nnn</button></li>
                                        </ul>
                                   </div>
                              </div>
                         </div>
                         <ul className="tab_wrap">
                              <li className="active"><Link to="/"><span>핵심정보</span></Link></li>
                              <li><Link to="/"><span>새소식</span></Link></li>
                              <li><Link to="/"><span>커뮤니티</span></Link></li>
                              <li><Link to="/"><span>부가정보</span></Link></li>
                              <li><Link to="/"><span>투자 현황</span></Link></li>
                         </ul>
                    </div>
               </section>
               <Footer />



            </>
        )
    }
}