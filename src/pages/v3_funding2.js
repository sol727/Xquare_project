import React from 'react'
import { Link } from 'react-router-dom';
import Studio_gnb from '../components/Studio_gnb'
import Back_header from '../components/back_header';
import Count_input from '../components/count_input';
import Title from '../components/title';
export default class V3_funding2 extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
                <section className="v3">
                    <Back_header/>
                    <div className="clearfix">
                        <Studio_gnb/>
                        <div className="cont">
                            <div className="top_box container">
                                <h1>펀딩 준비</h1>
                                <ul className="clearfix tab_ul">
                                    <li className="on">
                                        <Link to="/V3_funding1">발행정보 확정</Link>
                                    </li>
                                    <li>
                                        <Link to="/V3_funding2">펀딩 소개 자료</Link>
                                    </li>
                                    <li >
                                        <Link to="/V3_funding3">추가자료</Link>
                                    </li>
                                </ul>
                            </div>  
                            <div className="gray_bg">
                                <div className="container">
                                    <div className="bd_box">                                        
                                        <Title 
                                            num="01."
                                            title ="프로젝트명 입력"
                                            star="*"
                                            text = {
                                                <>                                                   
                                                <p className="error">·error here</p>
                                                </>
                                            }
                                            buttonShow={false}
                                            buttonDisabled={false}
                                        />
                                        <Count_input
                                            count_class="title mt16"
                                            count_placeholder="프로젝트 제목 (최대 24자)"
                                            count="24"
                                        />                                        
                                    </div>
                                    <div className="bd_box">                                        
                                        <Title 
                                            num="02."
                                            title ="프로젝트 이미지"
                                            star="*"
                                            text = {
                                                <>         
                                                <p>·최대 3개까지 등록 가능합니다.</p>                                          
                                                <p>·텍스트와 로고가 들어간 이미지는 지양해주세요.</p>
                                                <p>·3MB 이하, 1200 x 675px 이상의  jpg, jpeg, png 파일만 가능합니다.</p>
                                                </>
                                            }
                                            buttonShow={false}
                                            buttonDisabled={false}
                                        />
                                        <ul className="img_ul radio_ul clearfix">
                                            <li className="active">
                                                <input type="radio" id="img1"/><label htmlFor="img1">대표이미지로 사용</label>
                                                <div className="img_box">
                                                    <img src={ require('../images/detail_sample.png') } alt="샘플이미지"/>
                                                    <button type="button" className="delete_btn"><img src={ require('../images/icons/input_delt_icon2.png') } alt="삭제아이콘"/></button>
                                                    
                                                    <button className="add_btn">
                                                        <img src={ require('../images/icons/add_img.png') } alt="추가아이콘"/>
                                                        <p>클릭하여 이미지 추가</p>                                                        
                                                    </button>
                                                </div>                                                
                                            </li>
                                            <li className="">
                                                <input type="radio" id="img1"/><label htmlFor="img1">대표이미지로 사용</label>
                                                <div className="img_box">
                                                    <img src={ require('../images/detail_sample.png') } alt="샘플이미지"/>
                                                    <button type="button" className="delete_btn"><img src={ require('../images/icons/input_delt_icon2.png') } alt="삭제아이콘"/></button>
                                                    
                                                    <button className="add_btn">
                                                        <img src={ require('../images/icons/add_img.png') } alt="추가아이콘"/>
                                                        <p>클릭하여 이미지 추가</p>                                                        
                                                    </button>
                                                </div>                                                
                                            </li>
                                            <li className="">
                                                <input type="radio" id="img1"/><label htmlFor="img1">대표이미지로 사용</label>
                                                <div className="img_box">
                                                    <img src={ require('../images/detail_sample.png') } alt="샘플이미지"/>
                                                    <button type="button" className="delete_btn"><img src={ require('../images/icons/input_delt_icon2.png') } alt="삭제아이콘"/></button>
                                                    
                                                    <button className="add_btn">
                                                        <img src={ require('../images/icons/add_img.png') } alt="추가아이콘"/>
                                                        <p>클릭하여 이미지 추가</p>                                                        
                                                    </button>
                                                </div>                                                
                                            </li>
                                        </ul>                    
                                    </div>
                                    <div className="bd_box">                                        
                                        <Title 
                                            num="03."
                                            title ="펀딩 세부정보"
                                            star="*"
                                            text = {
                                                <>                         
                                                <p>·각 문단은 위아래로 순서를 변경할 수 있습니다.</p>                          
                                                <p className="error">·하나 남은 문단을 삭제 할 수 없습니다.</p>
                                                </>
                                            }
                                            buttonShow={false}
                                            buttonDisabled={false}
                                        />
                                        <Count_input
                                            count_class="title mt16"
                                            count_placeholder="프로젝트 제목 (최대 24자)"
                                            count="24"
                                        />                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}