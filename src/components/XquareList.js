import React from 'react'
import { Link } from 'react-router-dom';
import $ from 'jquery'
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";

export default class XquareList extends React.Component {

     constructor(props) {
          super(props)
          this.state = {
               width : $(window).width(),
          }

    this.sliderEvent = this.sliderEvent.bind(this)
    this.onClickLink = this.onClickLink.bind(this)
     }

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
               <div className="section1">
            <div className="container">
              <h1 className="title centerT playF">{this.props.title}</h1>
              <p className="sub_title centerT">엑스퀘어의 친환경 투자상품을 소개합니다.</p>
              <ul className="list_wrap clearfix">
                {
                  this.state.width > 767 ?
                  <>

                    <li className="slick-item" onClick={() => this.onClickLink("/Invest_detail")}>
                      <Link to="" >
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
                  <li className="slick-item" onClick={() => this.onClickLink("/Invest_detail")}>
                    <Link to="">
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
                  <li className="slick-item" onClick={() => this.onClickLink("/Invest_detail")}>
                    <Link to="">
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
                  </>
                  :
                  <Slider slidesToShow={1} slidesToScroll={1} speed={500} dots={false} infinite={false} beforeChange={this.sliderEvent}  >
                  <li className="slick-item" onClick={() => this.onClickLink("/Invest_detail")}>
                      <Link to="">
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
                  <li className="slick-item" onClick={() => this.onClickLink("/Invest_detail")}>
                    <Link to="">
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
                  <li className="slick-item" onClick={() => this.onClickLink("/Invest_detail")}>
                    <Link to="">
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
              <ul className="dot_wrap clearfix mo_only">
                <li className={ this.state.focus === 0 ? "active" : ""  } ></li>
                <li className={ this.state.focus === 1 ? "active" : ""  } ></li>
                <li className={ this.state.focus === 2 ? "active" : ""  } ></li>
              </ul>
              <div className="btn_wrap centerT">
                <button type="button" className="more_btn" onClick={() => this.onClickLink("/Invest_search")}>더보기<img src={ require('../images/icons/more_arrow.png') } alt="더보기아이콘"/></button>
              </div>            
            </div>          
          </div>
          )
     }

}