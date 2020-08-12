import React from 'react'
import { Link } from 'react-router-dom';
import * as js from '../js/style'
import Header from '../components/header'
import Footer from '../components/footer'
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import $ from 'jquery'

export default class Invest_detail3_add extends React.Component {

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

          $('.btn_wrap2 .alarm_btn').click(function(){
               $(this).toggleClass('on');              
          });   
          
          $('.feeling_box li').click(function(){
               $(this).toggleClass('on');              
          });
      
        }//최종괄호

        sliderEvent ( currentSlide, nextSlide ) {
               this.setState( { 
               focus : nextSlide
               } )
          }

          onClickPrev = () => {
               this.ref.slickPrev()
          }

          onClickNext = () => {
               this.ref.slickNext()
          }

    render() {
        return (
            <>
               <Header />

               <section className="invest_index add">
                    {/* 상세 탑 부분 */}
                    <div className="top mo_none">
                         <div className="title_area clearfix2 container">                           
                              <div className="img_slider_wrap">
                                   <ul className="img_box slider">
                                        <Slider ref={sliderRef => this.ref = sliderRef}  slidesToShow={1} slidesToScroll={1} speed={500} dots={false}  beforeChange={this.sliderEvent} >
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
                                   <ul className="slider_arrow mo_none">
                                        <li className="prev_arrow" onClick={this.onClickPrev}></li>
                                        <li className="next_arrow" onClick={this.onClickNext}></li>
                                   </ul>
                                   <ul className="dot_wrap clearfix">
                                        <li className={ this.state.focus === 0 ? "active" : ""  } ></li>
                                        <li className={ this.state.focus === 1 ? "active" : ""  } ></li>
                                        <li className={ this.state.focus === 2 ? "active" : ""  } ></li>
                                   </ul>   
                              </div>                              
                              <div className="text_box">                                   
                                   <ul className="label_wrap clearfix">
                                        <li>태양광/소형</li>
                                        <li>채권형(일반회사채)</li>
                                   </ul>
                                   <div className="title_box">
                                        <h1 className="ellipsis2 title">타이틀입니다타이틀입니다타이틀입니다타이틀입니다타이틀입니다타이틀입니다타이틀입니다타이틀입니다타이틀입니다</h1>
                                   </div>

                                    {/*종료된 프로젝트일 때 활성화 되는 영역 ↓
                                    <div className="project_end bottom_box">
                                        <div className="top">
                                             <img src={ require('../images/icons/coin_icon.png') } alt="코인아이콘"/>
                                             <p>9,000,000원 투자완료</p>
                                        </div>
                                        <ul className="goal_box clearfix">                                            
                                             <li>
                                                  <p>목표금액</p>
                                                  <h3 className="playF">10,000,000<span>원</span></h3>
                                             </li>
                                             <li>
                                                  <p>펀딩실패</p>
                                                  <h3 className="playF">90<span>%</span></h3>                                                  
                                             </li>
                                        </ul>                                       
                                        <div className="btn_wrap2 clearfix2">
                                             <button type="button" className="submit end"> 마감되었습니다</button>
                                             <button type="button" className="share_btn">nnn</button>
                                        </div>                                       
                                    </div>                                   
                                   */}


                                     {/*오픈예정일 때 활성화 되는 영역 ↓
                                     <div className="open_expected bottom_box">
                                        <div className="top">
                                             <img src={ require('../images/icons/calendar_icon.png') } alt="달력아이콘"/>
                                             <p>3월 말 오픈예정</p>
                                        </div>                                    
                                        <ul className="goal_box clearfix">                                        
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
                                        <div className="btn_wrap2">
                                             <div className="btn_wrap clearfix2">
                                                  <button type="button" className="alarm_btn"> 998</button>
                                                  <button type="button" className="share_btn">nnn</button>
                                             </div>
                                        </div>
                                     </div>
                                   */}

                                    {/* 진행중일 때 활성화 되는 영역↓*/}
                                    <div className="project_ing bottom_box">
                                        <ul className="goal_box clearfix">                                            
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
                                        </div>
                                   </div>
                              </div>
                         </div>
                         {/* 탭영역 */}
                         <div className="overflow-div">
                              <ul className="tab_wrap">
                                   <li ><Link to="/Invest_index"><span>핵심정보</span></Link></li>
                                   <li><Link to="/Invest_index2"><span>새소식</span></Link></li>
                                   <li  className="active"><Link to="/Invest_index3"><span>커뮤니티</span></Link></li>
                                   <li><Link to="/Invest_index4"><span>부가정보</span></Link></li>
                                   <li><Link to="/Invest_index5"><span>투자 현황</span></Link></li>
                              </ul>
                         </div>                        
                    </div>
                                        {/* 탭컨텐츠영역 - 커뮤니티 글쓰기*/}
                                        <div className="detail_cont add">
                         <div className="detail_container tab3"> 
                              <div className="clearfix2 detail_table_title">
                                   <h2 className="table_title">커뮤니티</h2>
                                   <button type="button"  className="title_btn">목록으로</button>
                              </div> 
                              <div className="add_area">
                                   <form action="">
                                        <div className="clearfix2 add_top mb8">
                                             <p className="font_15 bold">구분 선택</p>
                                             <ul className="radio_wrap clearfix">
                                                  <li className="on"><input type="radio" id="radio1"name="radio" checked/><label htmlFor="radio1">일반</label></li>
                                                  <li><input type="radio" id="radio2" name="radio"/><label htmlFor="radio2">질문</label></li>
                                             </ul>
                                        </div>
                                        <p className="font_15 bold mb8">상세 내용</p>
                                        <div className="count_input mb8">
                                             <input type="text" placeholder="제목 (최대 60자)"/>
                                             <span className="text_count font_13">(0/60)</span>
                                        </div>
                                        <textarea name="" id="" cols="30" rows="10" placeholder="내용을 입력해주세요"></textarea>
                                        <p className="centerT info_text font_13 black_color">예탁결제원의 크라우드펀딩업 규정에 따라 수정 및 삭제가 불가능합니다. 신중히 작성해주세요.</p>
                                        <div className="clearfix">
                                             <div className="mb8 clearfix floatR"> 
                                                  <ul className="feeling_box clearfix">
                                                       <li className="font_13">감정</li>
                                                       <li className="on"><button type="button" className="feel_a"></button></li>
                                                       <li className="on"><button type="button" className="feel_b"></button></li>
                                                       <li className="on"><button type="button" className="feel_c"></button></li>
                                                  </ul>
                                                  {/* 버튼 활성화시 ↓*/}
                                                  {/*  <button type="button" className="btn  orange ml16">등록</button> */}
                                                  <button type="button" className="btn_gray ml16">등록</button>                                             
                                             </div>
                                        </div>                                        
                                   </form>
                              </div>
                         </div>
                    </div>
               </section>
               <Footer />



            </>
        )
    }
}