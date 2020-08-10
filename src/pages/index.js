import React from 'react'
import { Link } from 'react-router-dom';
import * as js from '../js/style'
import Header from '../components/header'

export default class index extends React.Component {

  constructor(props) {
    super(props);
  }

  // $(document).ready({ ... })
  componentDidMount(){
    
  }

  
  render() {
    return (
      <>
        <Header />

        <section className="index">                 
          <div className="main_banner" >
            <img src={ require('../images/main_banner_bg.png') } alt="메인배너이미지"/>
          </div>
          <div className="section1">
            <div className="container">
              <h1 className="title centerT">Xquare List</h1>
              <p className="sub_title centerT">엑스퀘어의 친환경 투자상품을 소개합니다.</p>
              <ul className="list_wrap clearfix">
                <li>
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
                <li>
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
                <li>
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
              </ul>
              <div className="btn_wrap centerT">
                <button type="button" className="more_btn">더보기</button>
              </div>            
            </div>          
          </div>
        </section>


      </>
    )
  }
}