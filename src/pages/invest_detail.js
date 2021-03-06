import React from 'react'
import { Link } from 'react-router-dom';
import * as js from '../js/style'
import Header from '../components/header'
import Footer from '../components/footer'
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import $ from 'jquery'

export default class Invest_detail extends React.Component {

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
          
          // 팝업
          $('.pop_close').on('click',function(){
               $(this).parents('.pop_wrap').hide();
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

               <section className="invest_index">
                    {/* 상세 탑 부분 */}
                    <div className="top">
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
                                             <button type="button" className="submit" onClick={() => window.location.pathname = "/invest_prepare"}>지금 투자하기</button>
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
                                   <li className="active"><Link to="/Invest_detail"><span>핵심정보</span></Link></li>
                                   <li><Link to="/Invest_detail2"><span>새소식</span></Link></li>
                                   <li><Link to="/Invest_detail3"><span>커뮤니티</span></Link></li>
                                   <li><Link to="/Invest_detail4"><span>부가정보</span></Link></li>
                                   <li><Link to="/Invest_detail5"><span>투자 현황</span></Link></li>
                              </ul>
                         </div>                        
                    </div>
                    {/* 탭컨텐츠영역 - 핵심정보*/}
                    <div className="detail_cont">
                         <div className="detail_container tab1">
                              <ul className="total_box clearfix">                                   
                                   <li>
                                        <p>펀딩시작일</p>
                                        <h3 className="playF">yyyy.mm.dd</h3>
                                   </li>
                                   <li>
                                        <p>펀딩종료일</p>
                                        <h3 className="playF">yyyy.mm.dd</h3>
                                   </li>
                                   <li>
                                        <p>증권입고일</p>
                                        <h3 className="playF">yyyy.mm.dd</h3>
                                   </li>
                              </ul>    
                              {/* 펀딩정보 */}                           
                              <h2 className="sub_title">펀딩 정보</h2>
                              <ul className="detail_table">
                                   <li >
                                        <p className="th">주식종류</p>
                                        <p className="td">일반회사채</p>
                                   </li>
                                   <li >
                                        <p className="th">1주당 가격</p>
                                        <p className="td">10,000원</p>
                                   </li>
                                   <li >
                                        <p className="th">최소 투자가능금액</p>
                                        <p className="td">100,000원(주)</p>
                                   </li>
                                   <li >
                                        <p className="th">성공시 지분율</p>
                                        <p className="td">3%</p>
                                   </li>
                                   <li >
                                        <p className="th">발행예정 주식수</p>
                                        <p className="td">100주</p>
                                   </li>
                                   <li >
                                        <p className="th">기업가치</p>
                                        <p className="td">300,000,000원</p>
                                   </li>
                                   <li >
                                        <p className="th">최저배당이율</p>
                                        <p className="td">액면금액 연 1%</p>
                                   </li>
                                   <li >
                                        <p className="th">상환청구기간</p>
                                        <p className="td">2020.03.12~2020.04.01</p>
                                   </li>
                                   <li >
                                        <p className="th">상환 이자율</p>
                                        <p className="td">연 복리 5%</p>
                                   </li>
                                   <li >
                                        <p className="th">전환 청구 기간</p>
                                        <p className="td">2020.03017~2020.04.01</p>
                                   </li>
                                   <li >
                                        <p className="th">전환조건</p>
                                        <p className="td">보통주 1:1 전환</p>
                                   </li>
                              </ul>

                              {/* 펀딩상세 세부정보 */}
                              <div className="info">
                                   <h2 className="info_title centerT mb12">펀딩 상세 세부정보 소제목이 나타납니다.</h2>
                                   <p className="point_color sutbitle mb12">sutbitle here Amet faucibus netus purus tristique dolor.</p>
                                   <img src={ require('../images/info_sample.jpg') } alt="펀딩상세이미지" className="mb12"/>
                                   <p className="body mb12">body here
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper molestie pellentesque integer bibendum. Ut fusce ut adipiscing venenatis consectetur nulla consequat semper. Est massa mattis ac purus aliquam vitae. Integer facilisi consequat senectus facilisis. Est non et egestas nisl a amet. Bibendum egestas nibh pretium vel diam mauris vitae eget aenean.</p>
                                   <p className="caption"></p>
                               </div>   

                               {/* 투자위험 */}
                               <h2 className="sub_title">투자위험</h2>
                              <ul className="detail_table detail_table2">
                                   <li >
                                        <p className="th">사업위험</p>
                                        <p className="td">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam rutrum elementum, congue vulputate magna dictum nisi, feugiat purus.</p>
                                   </li>
                                   <li >
                                        <p className="th">회사위험</p>
                                        <p className="td">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam rutrum elementum, congue vulputate magna dictum nisi, feugiat purus.</p>
                                   </li>
                                   <li >
                                        <p className="th">기타위험</p>
                                        <p className="td">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor, lobortis turpis imperdiet lobortis. Varius sagittis risus lorem neque tempor arcu fames proin. Quam placerat enim dui, nisi faucibus pulvinar. Egestas metus in varius auctor. Pretium urna mi tincidunt elit, laoreet.</p>
                                   </li>                                   
                              </ul>                              
                         </div>                                           
                    </div>
               </section>
               <Footer />

               {/* 재투자팝업 */}
               <div className="pop_wrap reinvest_pop">
                    <div className="dim"></div>
                    <div className="pop_cont">
                         <button type="button" className="pop_close">
                              <img src={ require('../images/icons/close_btn.png') } alt="닫기버튼 아이콘"/>
                         </button>
                         <div>
                              <h2 className="font_18 centerT">재투자를 원하시나요?<br/>기존 투자를 취소하고 다시 진행합니다</h2>
                              <p className="font_13 gray2_color">증액을 위한 재투자 시, 기존 투자 취소후 진행해야 하기 때문에, 청약율이 100%가 넘은 경우 배정 순위에서 불이익을 받을 수 있다는 점 참고 바랍니다.<br/>
                              <span className="font_13 red_color">한 번 취소한 투자는 복구되지 않으니 신중히 결정해주시기 바랍니다.</span>
                              </p>
                              <div className="btn_wrap">
                                   <button type="button" className="form_btn">재투자 진행</button>
                                   <button type="button" className="form_btn orange_btn">기존투자 유지</button>
                              </div>
                         </div>
                    </div>
               </div>

               {/* 비로그인유저가 핵심정보탭 외에 탭클릭했을때 보이는팝업 */}
               <div className="pop_wrap member_pop">
                    <div className="dim"></div>
                    <div className="pop_cont">
                         <button type="button" className="pop_close">
                              <img src={ require('../images/icons/close_btn.png') } alt="닫기버튼 아이콘"/>
                         </button>
                         <p className="centerT font_18">엑스퀘어 회원에게만<br/>제공되는 서비스입니다<br/>로그인 또는 회원가입을 진행해주세요</p>
                         <div className="btn_wrap clearfix2">
                              <button type="button" className="navy_btn">회원가입</button>
                              <button type="button" className="navy_btn">로그인</button>
                         </div>
                    </div>
               </div>

               {/* 공유하기 팝업 */}
               <div className="pop_wrap share_pop">
                    <div className="dim"></div>
                    <div className="pop_cont">
                         <button type="button" className="pop_close">
                              <img src={ require('../images/icons/close_btn.png') } alt="닫기버튼 아이콘"/>
                         </button>
                         <p className="centerT font_18 bold mb16">공유하기</p>
                         <p className="centerT font_14 gray3_color mb16">공유할 방법을 선택하세요</p>
                         <div className="input_box clearfix2">
                              <input type="text"/>
                              <button type="button" className="navy_btn">복사</button>
                         </div>
                         <ul className="clearfix">
                              <li>
                                   <button type="button" className="centerT font_13 gray2_color">
                                        <img src={ require('../images/icons/share_kakao.png') } alt="카카오톡 아이콘"/>
                                        카카오톡
                                   </button>
                              </li>
                              <li>
                                   <button type="button" className="centerT font_13 gray2_color">
                                        <img src={ require('../images/icons/share_face.png') } alt="페이스북 아이콘"/>
                                        페이스북
                                   </button>
                              </li>
                              <li>
                                   <button type="button" className="centerT font_13 gray2_color">
                                        <img src={ require('../images/icons/share_twitter.png') } alt="트위터 아이콘"/>
                                        트위터
                                   </button>
                              </li>
                         </ul>
                    </div>
               </div>

               {/* 오픈예정일때 알림클릭시 보이는팝업 */}
               <div className="pop_wrap alarm_pop">
                    <div className="dim"></div>
                    <div className="pop_cont">
                         <button type="button" className="pop_close">
                              <img src={ require('../images/icons/close_btn.png') } alt="닫기버튼 아이콘"/>
                         </button>
                         <p className="centerT font_18">엑스퀘어 회원에게만<br/>제공되는 서비스입니다<br/>로그인 또는 회원가입을 진행해주세요</p>
                         <div className="btn_wrap clearfix2">
                              <button type="button" className="navy_btn">회원가입</button>
                              <button type="button" className="navy_btn">로그인</button>
                         </div>
                    </div>
               </div>
               



            </>
        )
    }
}