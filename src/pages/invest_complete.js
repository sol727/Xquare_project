import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer';
import SwiperCore, {Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import $ from 'jquery'


SwiperCore.use([Pagination]);

export default class Invest_complete extends React.Component {
    
     constructor(props) {
          super(props);          
         
        }
      
     // $(document).ready({ ... })sta
     componentDidMount(){
      
     }
     onClickLink (link) {
          window.location.pathname = link
        }

    render() {
        return (
            <>
                <Header />
                <section className="invest_page complete">
                    <div className="top_banner">
                        <h1>투자하기</h1>
                    </div>
                    <div className="invest_top_box">
                        <ul className="clearfix">
                            <li className="mo_none">
                                <Link to="/invest_index">
                                    <img src={ require('../images/icons/home_icon.png') } alt="홈아이콘"/>
                                </Link>
                            </li>
                            <li>투자하기</li>
                            <li className="on">투자신청 완료</li>
                        </ul>
                    </div>
                    <div className="container">
                         <div className="title_wrap centerT mb24">
                              <h1 className="mb16">투자신청 완료</h1>
                         </div>
                         <div className="complete_box centerT">
                              <h2 className="mb24 black_color">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                              <h4 className="black_color">nn번째 투자자로 투자 신청이 완료되었습니다.</h4>
                              <p className="alert_text black_color mb24">펀딩마감일은<br/><span>yyyy.mm.dd일</span>입니다.</p>
                              <p className="black_color font_13 fw600">펀딩이 성공할 경우에만 배정이 진행되며 배정예정일은 yyyy.mm.dd일입니다.<br/>
                              기간 연장 및 증액으로 인해 변동이 있을 수 있습니다.<br/>
                              펀딩 실패시 투자금액은 나의 증권계좌로 전액 환불됩니다.</p>
                         </div>
                    </div>
                    <div className="gray_bg">
                         <div className="container">
                               <div className="title_wrap centerT mb24">
                                   <h1 className="mb16">진행중 펀딩</h1>
                                   <h3>엑스퀘어에서 진행중인 프로젝트를 소개합니다.</h3>
                              </div>
                              <ul className="list_wrap slide_wrap clearfix mb24">
                                    <Swiper breakpoints={{480:{slidesPerView:2},1400:{slidesPerView:3}}} spaceBetween={24}      slidesPerView={1}  pagination={{ clickable: true }} onSwiper={(swiper) => console.log(swiper)}  onSlideChange={() => console.log('slide change')} >
                                        <SwiperSlide>
                                        <li onClick={() => window.location.pathname = "/Invest_detail"}>
                                             <div className="img_box">
                                                  <img src={ require('../images/img_img_thumnail_default.png') } alt="리스트이미지"/>
                                                  <p className="label  funding">펀딩중 &middot; D-17</p>
                                             </div>
                                             <div className="text"> 
                                                  <ul className="label_wrap clearfix">
                                                  <li>태양광/소형</li>
                                                  <li>주식형(보통주)</li>
                                                  </ul>
                                                  <h2 className="ellipsis2">상품 제목이 나타납니다. 상품 제목이 나타납니다.상품 제목이 나타납니다.</h2>
                                                  <div className="bar"></div>
                                                  <div className="clearfix2 total">
                                                  <p className="point_color">90%</p>
                                                  <p>100,218,392,500원</p>
                                                  </div>
                                             </div>
                                        </li>
                                       </SwiperSlide>
                                       <SwiperSlide>
                                        <li onClick={() => window.location.pathname = "/Invest_detail"}>
                                             <div className="img_box">
                                                  <img src={ require('../images/img_img_thumnail_default.png') } alt="리스트이미지"/>
                                                  <p className="label  open">오픈예정 &middot; D-17</p>
                                             </div>
                                             <div className="text"> 
                                                  <ul className="label_wrap clearfix">
                                                  <li>태양광/소형</li>
                                                  <li>주식형(보통주)</li>
                                                  </ul>
                                                  <h2 className="ellipsis2">상품 제목이 나타납니다. 상품 제목이 나타납니다.상품 제목이 나타납니다.</h2>
                                                  <div className="bar"></div>
                                                  <div className="clearfix2 total">
                                                  <p className="point_color">90%</p>
                                                  <p>100,218,392,500원</p>
                                                  </div>
                                             </div>
                                        </li>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <li onClick={() => window.location.pathname = "/Invest_detail"}>
                                             <div className="img_box">
                                                  <img src={ require('../images/img_img_thumnail_default.png') } alt="리스트이미지"/>
                                                  <p className="label end">펀딩종료</p>
                                             </div>
                                             <div className="text"> 
                                                  <ul className="label_wrap clearfix">
                                                  <li>태양광/소형</li>
                                                  <li>주식형(보통주)</li>
                                                  </ul>
                                                  <h2 className="ellipsis2">상품 제목이 나타납니다. 상품 제목이 나타납니다.상품 제목이 나타납니다.</h2>
                                                  <div className="bar"></div>
                                                  <div className="clearfix2 total">
                                                  <p className="point_color">90%</p>
                                                  <p>100,218,392,500원</p>
                                                  </div>
                                             </div>
                                        </li>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <li onClick={() => window.location.pathname = "/Invest_detail"}>
                                             <div className="img_box">
                                                  <img src={ require('../images/img_img_thumnail_default.png') } alt="리스트이미지"/>
                                                  <p className="label  funding">펀딩중 &middot; D-17</p>
                                             </div>
                                             <div className="text"> 
                                                  <ul className="label_wrap clearfix">
                                                  <li>태양광/소형</li>
                                                  <li>주식형(보통주)</li>
                                                  </ul>
                                                  <h2 className="ellipsis2">상품 제목이 나타납니다. 상품 제목이 나타납니다.상품 제목이 나타납니다.</h2>
                                                  <div className="bar"></div>
                                                  <div className="clearfix2 total">
                                                  <p className="point_color">90%</p>
                                                  <p>100,218,392,500원</p>
                                                  </div>
                                             </div>
                                        </li>
                                       </SwiperSlide>
                                       <SwiperSlide>
                                        <li onClick={() => window.location.pathname = "/Invest_detail"}>
                                             <div className="img_box">
                                                  <img src={ require('../images/img_img_thumnail_default.png') } alt="리스트이미지"/>
                                                  <p className="label  open">오픈예정 &middot; D-17</p>
                                             </div>
                                             <div className="text"> 
                                                  <ul className="label_wrap clearfix">
                                                  <li>태양광/소형</li>
                                                  <li>주식형(보통주)</li>
                                                  </ul>
                                                  <h2 className="ellipsis2">상품 제목이 나타납니다. 상품 제목이 나타납니다.상품 제목이 나타납니다.</h2>
                                                  <div className="bar"></div>
                                                  <div className="clearfix2 total">
                                                  <p className="point_color">90%</p>
                                                  <p>100,218,392,500원</p>
                                                  </div>
                                             </div>
                                        </li>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <li onClick={() => window.location.pathname = "/Invest_detail"}>
                                             <div className="img_box">
                                                  <img src={ require('../images/img_img_thumnail_default.png') } alt="리스트이미지"/>
                                                  <p className="label end">펀딩종료</p>
                                             </div>
                                             <div className="text"> 
                                                  <ul className="label_wrap clearfix">
                                                  <li>태양광/소형</li>
                                                  <li>주식형(보통주)</li>
                                                  </ul>
                                                  <h2 className="ellipsis2">상품 제목이 나타납니다. 상품 제목이 나타납니다.상품 제목이 나타납니다.</h2>
                                                  <div className="bar"></div>
                                                  <div className="clearfix2 total">
                                                  <p className="point_color">90%</p>
                                                  <p>100,218,392,500원</p>
                                                  </div>
                                             </div>
                                        </li>
                                        </SwiperSlide>
                                   </Swiper>
                              </ul>
                               <div className="btn_wrap centerT">
                                   <button type="button" className="more_btn">전체 펀딩보기<img src={ require('../images/icons/more_arrow.png') } alt="더보기아이콘" onClick={() => window.location.pathname = "/Invest_search"}/></button>
                              </div>
                         </div>
                    </div>
                    <div className="btn_wrap centerT">
                         <button type="button" className="btn_line mr24 font_15" onClick={() => window.location.pathname = "/Invest_index"}>나의 투자내역 확인</button>
                         <button type="button" className="orange btn font_15" onClick={() => window.location.pathname = "/"}>메인 화면으로 이동</button>
                    </div>
                </section>
                <Footer/>
            </>
        )
    }
}