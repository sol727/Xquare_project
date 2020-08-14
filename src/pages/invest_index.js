import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import $ from 'jquery'


SwiperCore.use([Navigation, Pagination]);

export default class invest_index extends React.Component {
    
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
                <section className="invest_page index">
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
                            <li className="on">투자하기</li>
                        </ul>
                    </div>
                    <div className="container">
                         <div className="rightT btn_wrap">
                              <button type="button" className="point_btn big" onClick={() => window.location.pathname = "/Invest_search"} >전체펀딩 모두보기</button>
                         </div>
                         <div className="section section1">
                              <div className="title_wrap centerT mb24">
                                   <h1 className="mb16">진행중 프로젝트</h1>
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
                                        <li className="slick-item" onClick={() => window.location.pathname = "/Invest_detail"}>
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
                                        <li className="slick-item" onClick={() => window.location.pathname = "/Invest_detail"}>
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
                                        <li className="slick-item" onClick={() => window.location.pathname = "/Invest_detail"}>
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
                                        <li className="slick-item" onClick={() => window.location.pathname = "/Invest_detail"}>
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
                                   <button type="button" className="more_btn small">더보기<img src={ require('../images/icons/more_arrow.png') } alt="더보기아이콘"/></button>
                              </div>
                         </div>
                    </div>
                    <div className="section section2 gray_bg">
                         <div className="container">
                              <div className="title_wrap centerT mb24">
                                   <h1 className="mb16">오픈예정</h1>
                                   <h3>엑스퀘어 투자자분들께 소개드리는 오픈 예정 프로젝트</h3>
                              </div>
                              <ul className="list_wrap slide_wrap slide_wrap2 clearfix mb24">
                                   <Swiper   breakpoints={{480:{slidesPerView:2},1400:{slidesPerView:4}}}    spaceBetween={24}      slidesPerView={1} pagination={{ clickable: true }} onSwiper={(swiper) => console.log(swiper)}  onSlideChange={() => console.log('slide change')} >
                                   <SwiperSlide>
                                   <li onClick={() => window.location.pathname = "/Invest_detail"}>
                                        <div className="img_box">
                                             <img src={ require('../images/img_img_thumnail_default.png') } alt="리스트이미지"/>
                                        </div>
                                        <div className="text">                                        
                                             <h2 className="ellipsis2">상품 제목이 나타납니다. 상품 제목이 나타납니다.상품 제목이 나타납니다.</h2>
                                             <p className="gray_color">100,218,392,500원</p>
                                        </div>
                                   </li>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                   <li onClick={() => window.location.pathname = "/Invest_detail"}>
                                        <div className="img_box">
                                             <img src={ require('../images/img_img_thumnail_default.png') } alt="리스트이미지"/>
                                        </div>
                                        <div className="text">                                        
                                             <h2 className="ellipsis2">상품 제목이 나타납니다. 상품 제목이 나타납니다.상품 제목이 나타납니다.</h2>
                                             <p className="gray_color">100,218,392,500원</p>
                                        </div>
                                   </li>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                   <li onClick={() => window.location.pathname = "/Invest_detail"}>
                                        <div className="img_box">
                                             <img src={ require('../images/img_img_thumnail_default.png') } alt="리스트이미지"/>
                                        </div>
                                        <div className="text">                                        
                                             <h2 className="ellipsis2">상품 제목이 나타납니다. 상품 제목이 나타납니다.상품 제목이 나타납니다.</h2>
                                             <p className="gray_color">100,218,392,500원</p>
                                        </div>
                                   </li>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                   <li onClick={() => window.location.pathname = "/Invest_detail"}>
                                        <div className="img_box">
                                             <img src={ require('../images/img_img_thumnail_default.png') } alt="리스트이미지"/>
                                        </div>
                                        <div className="text">                                        
                                             <h2 className="ellipsis2">상품 제목이 나타납니다. 상품 제목이 나타납니다.상품 제목이 나타납니다.</h2>
                                             <p className="gray_color">100,218,392,500원</p>
                                        </div>
                                   </li>
                                   </SwiperSlide>
                                   </Swiper>
                              </ul>
                         </div>
                         <div className="btn_wrap centerT">
                              <button type="button" className="more_btn small white_bg">더보기<img src={ require('../images/icons/more_arrow.png') } alt="더보기아이콘"/></button>
                         </div>
                    </div>
                    <div className="container">
                         <div className="section section3">
                              <div className="title_wrap centerT mb24">
                                   <h1 className="mb16">종료된 프로젝트</h1>
                              </div>
                             <div className="slide3_container">
                             <ul className="list_wrap slide_wrap slide_wrap2 clearfix mb24">
                                   <Swiper     breakpoints={{480:{slidesPerView:3},1400:{slidesPerView:5}}} spaceBetween={24}  slidesPerView={2} navigation={{ nextEl:'.slide3_container .next1' , prevEl:'.slide3_container .prev1'}} pagination={{ clickable: true }} onSwiper={(swiper) => console.log(swiper)}  onSlideChange={() => console.log('slide change')} >
                                   <SwiperSlide>
                                   <li onClick={() => window.location.pathname = "/Invest_detail"}>
                                        <div className="img_box">
                                             <img src={ require('../images/img_img_thumnail_default.png') } alt="리스트이미지"/>
                                        </div>
                                        <div className="text">                                        
                                             <h2 className="ellipsis2">상품 제목이 나타납니다. 상품 제목이 나타납니다.상품 제목이 나타납니다.</h2>
                                             <p className="gray_color">100,218,392,500원</p>
                                        </div>
                                   </li>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                   <li onClick={() => window.location.pathname = "/Invest_detail"}>
                                        <div className="img_box">
                                             <img src={ require('../images/img_img_thumnail_default.png') } alt="리스트이미지"/>
                                        </div>
                                        <div className="text">                                        
                                             <h2 className="ellipsis2">상품 제목이 나타납니다. 상품 제목이 나타납니다.상품 제목이 나타납니다.</h2>
                                             <p className="gray_color">100,218,392,500원</p>
                                        </div>
                                   </li>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                   <li onClick={() => window.location.pathname = "/Invest_detail"}>
                                        <div className="img_box">
                                             <img src={ require('../images/img_img_thumnail_default.png') } alt="리스트이미지"/>
                                        </div>
                                        <div className="text">                                        
                                             <h2 className="ellipsis2">상품 제목이 나타납니다. 상품 제목이 나타납니다.상품 제목이 나타납니다.</h2>
                                             <p className="gray_color">100,218,392,500원</p>
                                        </div>
                                   </li>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                   <li onClick={() => window.location.pathname = "/Invest_detail"}>
                                        <div className="img_box">
                                             <img src={ require('../images/img_img_thumnail_default.png') } alt="리스트이미지"/>
                                        </div>
                                        <div className="text">                                        
                                             <h2 className="ellipsis2">상품 제목이 나타납니다. 상품 제목이 나타납니다.상품 제목이 나타납니다.</h2>
                                             <p className="gray_color">100,218,392,500원</p>
                                        </div>
                                   </li>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                   <li onClick={() => window.location.pathname = "/Invest_detail"}>
                                        <div className="img_box">
                                             <img src={ require('../images/img_img_thumnail_default.png') } alt="리스트이미지"/>
                                        </div>
                                        <div className="text">                                        
                                             <h2 className="ellipsis2">상품 제목이 나타납니다. 상품 제목이 나타납니다.상품 제목이 나타납니다.</h2>
                                             <p className="gray_color">100,218,392,500원</p>
                                        </div>
                                   </li>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                   <li onClick={() => window.location.pathname = "/Invest_detail"}>
                                        <div className="img_box">
                                             <img src={ require('../images/img_img_thumnail_default.png') } alt="리스트이미지"/>
                                        </div>
                                        <div className="text">                                        
                                             <h2 className="ellipsis2">상품 제목이 나타납니다. 상품 제목이 나타납니다.상품 제목이 나타납니다.</h2>
                                             <p className="gray_color">100,218,392,500원</p>
                                        </div>
                                   </li>
                                   </SwiperSlide>
                                   </Swiper>
                              </ul>
                              <div className="swiper-button-prev prev1 mo_none"></div>
                              <div className="swiper-button-next next1 mo_none"></div>
                             </div>
                             <div className="btn_wrap centerT">
                                   <button type="button" className="more_btn small">더보기<img src={ require('../images/icons/more_arrow.png') } alt="더보기아이콘"/></button>
                              </div>
                         </div>
                    </div>
                </section>
                <Footer/>
            </>
        )
    }
}