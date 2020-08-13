import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer';
import $ from 'jquery'

export default class Invest_search extends React.Component {
    
    constructor(props) {
    super(props);
    }

    componentDidMount(){
        
    
    }

    render() {
        return (
            <>
                <Header />

                <section className="invest_page">
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
                         <div className="title_wrap centerT mb16">
                              <h1 className="mb16">전체 프로젝트</h1>
                              <h3>엑스퀘어의 친환경 투자 상품을 소개합니다.</h3>
                         </div>
                         <div className="clearfix2 input_wrap mb16">
                              <ul className="clearfix">
                                   <li>
                                        <select name="" id="" className="">
                                            <option value="" >진행상태</option>
                                        </select> 
                                   </li>
                                   <li>
                                        <select name="" id="" className="">
                                            <option value="" >증권유형</option>
                                        </select> 
                                   </li>
                                   <li>
                                        <select name="" id="" className="">
                                            <option value="" >에너지유형</option>
                                        </select> 
                                   </li>
                              </ul>
                              <div className="search_box">
                                   <input type="text" placeholder="검색어를 입력해주세요"/>
                                   <button type="button" className="search_btn"></button>
                                   <button type="button" className="delete_btn"></button>
                              </div>
                         </div>
                    </div>
                    {/* 노데이터일경우 노출 ▼ */}
                    {/* <div className="no_data centerT">
                         <img src={ require('../images/icons/ic_searching_eye.png') } alt="노데이터이미지"/>
                         <p>'검색어'에 대한 검색결과가 없습니다.</p>
                    </div>  */}
                    <div className="cont">
                         <div className="container">
                              <ul className="list_wrap clearfix">
                                   <li className="">
                                        <Link to="/invest_detail">
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
                                   <li className="">
                                        <Link to="/invest_detail">
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
                                   <li className="">
                                        <Link to="/invest_detail">
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
                                   <li className="">
                                        <Link to="/invest_detail">
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
                                   <li className="">
                                        <Link to="/invest_detail">
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
                                   <li className="">
                                        <Link to="/invest_detail">
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
                                   <li className="">
                                        <Link to="/invest_detail">
                                             <div className="img_box">
                                                  <img src={ require('../images/img_img_thumnail_default.png') } alt="리스트이미지"/>
                                                  <p className="label  end">펀딩종료</p>
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
                                   <li className="">
                                        <Link to="/invest_detail">
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
                                   <li className="">
                                        <Link to="/invest_detail">
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
                              </ul>
                         </div>
                    </div>
                </section>
                
                <Footer/>
            </>
        )
    }
}