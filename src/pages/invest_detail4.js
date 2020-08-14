import React from 'react'
import { Link } from 'react-router-dom';
import * as js from '../js/style'
import Header from '../components/header'
import Footer from '../components/footer'
import $ from 'jquery'
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination]);

export default class Invest_detail4 extends React.Component {

     constructor(props) {
          super(props);

    
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
      
        }//최종괄호


    render() {
        return (
            <>
               <Header />

               <section className="invest_detail">
                    {/* 상세 탑 부분 */}
                    <div className="top">
                         <div className="title_area clearfix2 container">
                              <div className="img_slider_wrap">
                                   <ul className="img_box slider">
                                   <Swiper spaceBetween={24} slidesPerView={1}  navigation={{ nextEl:'.img_slider_wrap .next1' , prevEl:'.img_slider_wrap .prev1'}} pagination={{ clickable: true }} onSwiper={(swiper) => console.log(swiper)}  onSlideChange={() => console.log('slide change')} >
                                        <SwiperSlide>
                                             <li>
                                                  <img src={ require('../images/detail_sample.png') } alt="투자상세이미지"/>
                                             </li>
                                             </SwiperSlide>
                                             <SwiperSlide>
                                             <li>
                                                  <img src={ require('../images/detail_sample.png') } alt="투자상세이미지"/>
                                             </li>
                                             </SwiperSlide>
                                             <SwiperSlide>
                                             <li>
                                                  <img src={ require('../images/detail_sample.png') } alt="투자상세이미지"/>
                                             </li>
                                             </SwiperSlide>
                                       </Swiper>
                                   </ul>
                                   <div className="swiper-button-prev prev1 mo_none"></div>
                                    <div className="swiper-button-next next1 mo_none"></div>
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
                                   <li ><Link to="/Invest_detail2"><span>새소식</span></Link></li>
                                   <li ><Link to="/Invest_detail3"><span>커뮤니티</span></Link></li>
                                   <li className="active"><Link to="/Invest_detail4"><span>부가정보</span></Link></li>
                                   <li><Link to="/Invest_detail5"><span>투자 현황</span></Link></li>
                              </ul>
                         </div>                        
                    </div>
                    {/* 탭컨텐츠영역 - 부가정보*/}
                    <div className="detail_cont">
                         <div className="detail_container tab4"> 
                               <div className="clearfix2 detail_table_title">
                                   <h2 className="table_title">투자설명서</h2>                                   
                              </div>               
                              <ul className="down_list">
                                   <li className="clearfix2">
                                        <p>솔로몬(270kW) 투자설명서</p>
                                        <button type="button" className="download_btn">다운로드<img src={ require('../images/icons/down_icon.png') } alt="다운로드아이콘"/></button>
                                   </li>
                              </ul>      

                              <div className="clearfix2 detail_table_title">
                                   <h2 className="table_title">참고자료</h2>                                   
                              </div>               
                              <ul class="down_list">
                                   <li className="clearfix2">
                                        <p>사업자등록증</p>
                                        <button type="button" className="download_btn">다운로드<img src={ require('../images/icons/down_icon.png') } alt="다운로드아이콘"/></button>
                                   </li>
                                   <li className="clearfix2">
                                        <p>법인등기부등본</p>
                                        <button type="button" className="download_btn">다운로드<img src={ require('../images/icons/down_icon.png') } alt="다운로드아이콘"/></button>
                                   </li>
                                   <li className="clearfix2">
                                        <p>주정관</p>
                                        <button type="button" className="download_btn">다운로드<img src={ require('../images/icons/down_icon.png') } alt="다운로드아이콘"/></button>
                                   </li>
                                   <li className="clearfix2">
                                        <p>재무재표</p>
                                        <button type="button" className="download_btn">다운로드<img src={ require('../images/icons/down_icon.png') } alt="다운로드아이콘"/></button>
                                   </li>
                                   <li className="clearfix2">
                                        <p>청약서</p>
                                        <button type="button" className="download_btn">다운로드<img src={ require('../images/icons/down_icon.png') } alt="다운로드아이콘"/></button>
                                   </li>
                                   <li className="clearfix2">
                                        <p>재무상태 확인서</p>
                                        <button type="button" className="download_btn">다운로드<img src={ require('../images/icons/down_icon.png') } alt="다운로드아이콘"/></button>
                                   </li>
                              </ul>                   
                         </div>
                    </div>
               </section>
               <Footer />



            </>
        )
    }
}