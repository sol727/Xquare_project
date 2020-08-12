import React from 'react'
import { Link } from 'react-router-dom';
import * as js from '../js/style'
import Header from '../components/header'
import Footer from '../components/footer'
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import $ from 'jquery'

export default class Invest_detail2_detail extends React.Component {

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

               <section className="invest_index detail">
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
                                   <li ><Link to="/Invest_detail"><span>핵심정보</span></Link></li>
                                   <li className="active"><Link to="/Invest_detail2"><span>새소식</span></Link></li>
                                   <li><Link to="/Invest_detail3"><span>커뮤니티</span></Link></li>
                                   <li><Link to="/Invest_detail4"><span>부가정보</span></Link></li>
                                   <li><Link to="/Invest_detail5"><span>투자 현황</span></Link></li>
                              </ul>
                         </div>                        
                    </div>
                    {/* 탭컨텐츠영역 - 새소식*/}
                    <div className="detail_cont">                              
                        <div className="detail_container tab2"> 
                              <div className="clearfix2 detail_table_title">
                                   <h2 className="table_title">새소식</h2>
                                   <button type="button"  className="title_btn">목록으로</button>
                              </div>                             
                              <div className="list_table_wrap">
                                   <div className="detail_table2">
                                        <div className="top">
                                             <div className="user_type mb12 clearfix">
                                                  <p className="user feel_a black_color ">username</p>
                                                  <p className="user_label">법인회원(발행인)</p>
                                             </div>
                                             <h3 className="title black_color mb12">The Calm meditation app is getting its own celebrity-filled HBO Max show</h3>
                                             <p className="date mb12">2020.05.01 06:05:46</p>
                                             <p className="text_area font_14 black_color">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p>
                                        </div>
                                        
                                        <div className="comment_box ">
                                             {/*개설자뷰에서는 comment_input hidden*/}
                                             <div className="comment_input clearfix">
                                                  <h2 className="table_title">댓글 <span className="point_color">3</span></h2>
                                                  <input type="text" placeholder="댓글을 입력해주세요" className="mb16"/>
                                                  <div className="mb8 clearfix floatR"> 
                                                       <ul className="feeling_box clearfix">
                                                            <li className="font_13">감정</li>
                                                            <li className="on"><button type="button" className="feel_a"></button></li>
                                                            <li className="on"><button type="button" className="feel_b"></button></li>
                                                            <li className="on"><button type="button" className="feel_c"></button></li>
                                                       </ul>
                                                       {/* 버튼 활성화시 btn_gray > btn 으로 class 변경 */}
                                                       <button type="button" className="btn_gray ml16">등록</button>
                                                  </div>                      
                                             </div>
                                                                    
                                             <ul className="comment_list">
                                                  <li>
                                                       <div className="user_type mb12 clearfix">
                                                            <p className="user feel_a black_color ">username</p>
                                                            <p className="user_label">개인회원(일반투자자)</p>
                                                       </div>
                                                       <p className="date mb12">2020.05.01 06:05:46</p>
                                                       <p className="text_area font_13 black_color mb12">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p>
                                                       <button type="button" className="btn_border">답글 1</button>
                                                  </li>
                                                  <li>
                                                       <div className="user_type mb12 clearfix">
                                                            <p className="user feel_a black_color ">username</p>
                                                            <p className="user_label">개인회원(일반투자자)</p>
                                                       </div>
                                                       <p className="date mb12">2020.05.01 06:05:46</p>
                                                       <p className="text_area font_13 black_color mb12">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p>
                                                       <button type="button" className="btn_border mb12">답글 1</button>
                                                       <ul className="in_comment">
                                                            <li className="">
                                                                 <div className="user_type mb12 clearfix">
                                                                      <p className="user feel_a black_color ">username</p>
                                                                      <p className="user_label">개인회원(일반투자자)</p>
                                                                 </div>
                                                                 <p className="date mb12">2020.05.01 06:05:46</p>
                                                                 <p className="text_area font_13 black_color mb12 ">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore
                                                                  </p>
                                                                 <input type="text" />
                                                                 {/*개설자뷰에서는 comment_input hidden*/}
                                                                 <div className=" comment_input clearfix mt16">
                                                                      <div className="clearfix floatR"> 
                                                                           <ul className="feeling_box clearfix">
                                                                                <li className="font_13">감정</li>
                                                                                <li><button type="button" className="feel_a"></button></li>
                                                                                <li><button type="button" className="feel_b"></button></li>
                                                                                <li className="on"><button type="button" className="feel_c"></button></li>
                                                                           </ul>
                                                                           <button type="button" className="btn ml16">등록</button>
                                                                      </div>
                                                                 </div>
                                                            </li>
                                                       </ul>
                                                  </li>
                                             </ul>
                                        </div>                                        
                                   </div>
                              </div>                              
                        </div>
                    </div>
               </section>
               <Footer />



            </>
        )
    }
}