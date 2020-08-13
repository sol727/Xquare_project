import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import $ from 'jquery'

export default class invest_index extends React.Component {
    
     constructor(props) {
          super(props);
      
          this.state = {
            width : $(window).width(),
            focus : 0
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
     })
     
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
                            <li>투자하기</li>
                            <li className="on">전체 프로젝트</li>
                        </ul>
                    </div>
                    <div className="container">
                         <div className="rightT btn_wrap">
                              <button type="button" className="point_btn big">전체펀딩 모두보기</button>
                         </div>
                         <div className="section section1">
                              <div className="title_wrap centerT mb24">
                                   <h1 className="mb16">진행중 프로젝트</h1>
                                   <h3>엑스퀘어에서 진행중인 프로젝트를 소개합니다.</h3>
                              </div>
                              <ul className="list_wrap clearfix">
                                   {
                                   this.state.width > 480 ?

                                   <Slider slidesToShow={3} slidesToScroll={1} speed={500} dots={false} infinite={false} beforeChange={this.sliderEvent}  >
                                        <li className="slick-item">
                                             <Link to="/">
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
                                             </Link>
                                        </li>
                                        <li className="slick-item">
                                             <Link to="/">
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
                                             </Link>
                                        </li>
                                        <li className="slick-item">
                                             <Link to="/">
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
                                             </Link>
                                        </li>
                                        <li className="slick-item">
                                             <Link to="/">
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
                                             </Link>
                                        </li>
                                        <li className="slick-item">
                                             <Link to="/">
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
                                             </Link>
                                        </li>
                                        <li className="slick-item">
                                             <Link to="/">
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
                                            </Link> 
                                        </li>
                                   </Slider>
                                  
                                   :
                                   <Slider slidesToShow={1} slidesToScroll={1} speed={500} dots={false} infinite={false} beforeChange={this.sliderEvent}  >
                                   <li className="slick-item">
                                        <Link to="/">
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
                                        </Link>
                                   </li>
                                   <li className="slick-item">
                                        <Link to="/">
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
                                        </Link>
                                   </li>
                                   <li className="slick-item">
                                        <Link to="/">
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
                                        </Link>
                                   </li>
                                   </Slider>
                                   }
                              </ul>
                              <ul className="dot_wrap clearfix">
                                   <li className={ this.state.focus === 0 ? "active" : ""  } ></li>
                                   <li className={ this.state.focus === 1 ? "active" : ""  } ></li>
                                   <li className={ this.state.focus === 2 ? "active" : ""  } ></li>
                              </ul>
                              <div className="btn_wrap centerT">
                                   <button type="button" className="more_btn">더보기<img src={ require('../images/icons/more_arrow.png') } alt="더보기아이콘"/></button>
                              </div> 
                         </div>
                    </div>
                </section>
                
                <Footer/>
            </>
        )
    }
}