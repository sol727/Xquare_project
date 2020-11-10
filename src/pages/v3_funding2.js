import React from 'react'
import { Link } from 'react-router-dom';
import Studio_gnb from '../components/Studio_gnb'
import Back_header from '../components/back_header';
import Count_input from '../components/count_input';
import Title from '../components/title';
import Paragraph from '../components/Paragraph';
export default class V3_funding2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active : 'img1'
        }

        this.onChangeRadio = this.onChangeRadio.bind(this)
    }

    onChangeRadio (e) {
        this.setState({
            active : e.target.id
        })
    }

    render() {
        return (
            <>
                <section className="v3 studio funding funding2">
                    <Back_header/>
                    <div className="clearfix">
                        <Studio_gnb on_index="9" off_index="7" />
                        <div className="cont">
                            <div className="top_box container">
                                <h1>펀딩 준비</h1>
                                <ul className="clearfix tab_ul">
                                    <li >
                                        <Link to="/V3_funding1">발행정보 확정</Link>
                                    </li>
                                    <li className="on">
                                        <Link to="/V3_funding2">펀딩 소개 자료</Link>
                                    </li>
                                    <li >
                                        <Link to="/V3_funding3">추가자료</Link>
                                    </li>
                                </ul>
                            </div>  
                            <div className="gray_bg">
                                <div className="container">
                                    {/* 제출했을 때 노출 ▼*/}
                                    <div className="notice_box ">
                                        <div className="clearfix2 mb24">
                                            <div className="border_text left">
                                                <h3 className="font_18 mb8">펀딩 준비 자료 제출 결과</h3>
                                                <p className="font_13">· 제출하신 yymmdd-hhnn 펀딩 준비 자료를 확인중입니다.</p>
                                            </div>        
                                            <div className="right">
                                                <button type="button" className="btn big">심사중</button>
                                            </div>
                                        </div>
                                        <p className="mt16 mb16 font_14 centerT">자료 심사는 최대 5영업일 소요됩니다</p>
                                    </div>                                    
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
                                        <div className="img_ul_wrap">                                        
                                            <ul className="img_ul  clearfix">
                                                {/* active를 추가하면 이미지박스에 border가 활성화됩니다.*/}
                                                <li className={`${this.state.active == 'img1' ? 'active' : ''}`}>
                                                    <div className="clearfix radio_ul radio_ul2">
                                                        <input type="radio" id="img1" name="img_box" checked={this.state.active === 'img1'}  onChange={this.onChangeRadio}/><label htmlFor="img1"></label><label htmlFor="img1">대표이미지로 사용</label>
                                                    </div>                                               
                                                    <div className="img_box">
                                                        <img src={ require('../images/detail_sample.png') } alt="샘플이미지"/>
                                                        <button type="button" className="delete_btn"><img src={ require('../images/icons/input_delt_icon2.png') } alt="삭제아이콘"/></button>
                                                        
                                                        <button className="add_btn">
                                                            <img src={ require('../images/icons/add_img.png') } alt="추가아이콘"/>
                                                            <p>클릭하여 이미지 추가</p>                                                        
                                                        </button>
                                                    </div>                                                
                                                </li>
                                                <li className={`${this.state.active == 'img2' ? 'active' : ''}`}>
                                                    <div className="clearfix radio_ul radio_ul2">
                                                        <input type="radio" id="img2" name="img_box" checked={this.state.active === 'img2'}  onChange={this.onChangeRadio}/><label htmlFor="img2"></label><label htmlFor="img2">대표이미지로 사용</label>
                                                    </div>
                                                    
                                                    <div className="img_box">
                                                        <img src={ require('../images/main_banner_bg.png') } alt="샘플이미지"/>
                                                        <button type="button" className="delete_btn"><img src={ require('../images/icons/input_delt_icon2.png') } alt="삭제아이콘"/></button>
                                                        
                                                        <button className="add_btn">
                                                            <img src={ require('../images/icons/add_img.png') } alt="추가아이콘"/>
                                                            <p>클릭하여 이미지 추가</p>                                                        
                                                        </button>
                                                    </div>                                                
                                                </li>
                                                {/* none_img 를 추가하면 이미지 추가 버튼이 활성화 됩니다. */}
                                                <li className={`none_img ${this.state.active == 'img3' ? 'active' : ''}`}>
                                                    <div className="clearfix radio_ul radio_ul2">
                                                        <input type="radio" id="img3"name="img_box" checked={this.state.active === 'img3'}  onChange={this.onChangeRadio}/><label htmlFor="img3"></label><label htmlFor="img3">대표이미지로 사용</label>
                                                    </div>
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
                                    </div>
                                    <div className="bd_box last">                                        
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
                                        {/* 문단리스트에 done을 넣으면 버튼들이 비활성화됩니다. */}
                                       <ul className="paragraph_list done">
                                            <li>
                                                <Paragraph/>
                                            </li>
                                           <li>
                                                <Paragraph/>
                                           </li>
                                           <li className="add_li centerT">                                            
                                               <button type="button"><img src={ require('../images/icons/ic_add_paragraph.png') } alt="추가아이콘"/>문단 추가하기</button>
                                           </li>
                                        </ul>                            
                                    </div>
                                    <div className="fix_btn">
                                        <button type="button"><img src={ require('../images/icons/img_fab_backup.png') } alt="임시저장버튼"/></button>
                                    </div>
                                    <div className="bottom_btn rightT">
                                        <button type="button" className="btn">임시저장</button>             
                                        <button type="button" className="btn">다음 단계</button>             
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