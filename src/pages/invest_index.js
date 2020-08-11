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

          this.state = {
               width : $(window).width(),
               focus : 0
             }        

          this.sliderEvent = this.sliderEvent.bind(this)
     }

     componentDidMount(){        

          
    
          $('.like_btn').click(function(){
               $(this).toggleClass('on');              
          });

          $('.goal_box').each(function(){
               if ( $( 'li', this ).length <= 1 ) {
                    $(this).children('li').css("width","100%");
                  }                  
          });

          $('.open_expected_btn .alarm_btn').click(function(){
               $(this).toggleClass('on');              
          });          
      
        }//최종괄호

        sliderEvent ( currentSlide, nextSlide ) {
               this.setState( { 
               focus : nextSlide
               } )
          }

    render() {
        return (
            <>
               <Header />

               <section className="invest_index">
                    <div className="top">
                         <div className="title_area clearfix2 container">                              
                              <ul className="img_box ">
                                   <Slider slidesToShow={1} slidesToScroll={1} speed={500} dots={false}  beforeChange={this.sliderEvent} >
                                        <li>
                                             <img src={ require('../images/detail_sample.png') } alt="투자상세이미지"/>
                                        </li>
                                        <li>
                                             <img src={ require('../images/detail_sample.png') } alt="투자상세이미지"/>
                                        </li>
                                        <li>
                                             <img src={ require('../images/detail_sample.png') } alt="투자상세이미지"/>
                                        </li>
                                   </Slider>
                              </ul>
                              <div className="text_box">                                   
                                   <ul className="label_wrap clearfix">
                                        <li>태양광/소형</li>
                                        <li>채권형(일반회사채)</li>
                                   </ul>
                                   <div className="title_box">
                                        <h1 className="ellipsis2 title">타이틀입니다타이틀입니다타이틀입니다타이틀입니다타이틀입니다타이틀입니다타이틀입니다타이틀입니다타이틀입니다</h1>
                                   </div>
                                     {/*오픈예정일 때 활성화 되는 영역 ↓*/}
                                   <div className="open_expected">
                                        <img src={ require('../images/icons/calendar_icon.png') } alt="달력아이콘"/>
                                        <p>3월 말 오픈예정</p>
                                   </div>
                                     {/*오픈예정일 때 활성화 되는 영역 ↑*/}
                                   <ul className="goal_box clearfix">
                                        {/*오픈예정일 때는 목표금액만 활성화 됩니다.*/}
                                        <li>
                                             <p>목표금액</p>
                                             <h3 className="playF">10,000,000<span>원</span></h3>
                                        </li>
                                         <li>
                                             <p>남은기간</p>
                                             <h3 className="playF">D-6</h3>
                                             <p>yyyy.mm.dd hh:mm 마감</p>
                                        </li>
                                   </ul>
                                   {/*오픈예정일 때 활성화 되는 영역 ↓*/}
                                   <div className="open_expected_btn">
                                        <div className="btn_wrap clearfix2">
                                             <button type="button" className="alarm_btn"> 998</button>
                                             <button type="button" className="share_btn">nnn</button>
                                        </div>
                                   </div>
                                    {/* 진행중일 때 활성화 되는 영역↓
                                   <div className="bar_box">
                                        <div className="clearfix2">
                                             <p className="bold">4,000,000원<span>/10,000,000원</span></p>
                                             <p className="point_color bold">nn%</p>
                                        </div>
                                         <div className="bar"></div>
                                   </div>
                                  
                                   <div className="btn_wrap">
                                        <button type="button" className="submit">지금 투자하기</button>
                                        <ul className="clearfix2">
                                             <li><button type="button" className="like_btn">nnn</button></li>
                                             <li><button type="button" className="share_btn"> nnn</button></li>
                                        </ul>
                                   </div>*/}
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