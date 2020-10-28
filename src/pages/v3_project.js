import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer'
import ProjectContent from '../components/ProjectContent'



export default class V3_Project extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
                <Header />
                <section className="v3 project">                        
                    <div className="top_box container">
                        <div className="clearfix2">
                            <h1>개설한 프로젝트</h1>
                            <ul className="clearfix floatR gray_ul">
                                <li>
                                    <h4 className="playF">2</h4>
                                    <p className="gray2_color font_13">준비중</p>
                                </li>
                                <li>
                                    <h4 className="playF">1</h4>
                                    <p className="gray2_color font_13">오픈예정</p>
                                </li>
                                <li>
                                    <h4 className="playF">1</h4>
                                    <p className="gray2_color font_13">진행중</p>
                                </li>
                                <li>
                                    <h4 className="playF">2</h4>
                                    <p className="gray2_color font_13">종료됨</p>
                                </li>
                                <li>
                                    <h4 className="playF">6</h4>
                                    <p className="gray2_color font_13">전체</p>
                                </li>
                            </ul>
                        </div>
                        <ul className="tab_ul clearfix2">
                            <li className="on">
                                <Link to="">전체</Link>
                            </li>
                            <li>
                                <Link to="">종료된 프로젝트</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="gray_bg">
                        <div className="container">
                            {/* 노데이터시 보이는영역 ▼ */}
                            {/* <div className="no_data centerT">
                                <img src={require("../images/icons/nodata_icon.png")} alt="노데이터 느낌표아이콘"/>
                                <p>종료된 프로젝트가 없습니다.</p>
                            </div> */}

                            <ul className="pro_list clearfix">
                                <li className="add_li">
                                    <Link to="">
                                        <div className="centerT">
                                            <img src={require("../images/icons/add_icon_gray_big.png")} alt="추가 아이콘"/>
                                            <p className="bold">프로젝트 생성</p>
                                        </div>
                                    </Link>
                                </li>
                                <li className="default_li">
                                    <ProjectContent 
                                        state="준비중" 
                                        date="yymmdd-hhnn" 
                                        title="제목 미지정"
                                        label1="증권구분"
                                        label2="에너지 유형"
                                        alarmShow={true}
                                        bottomShow={true}
                                    />
                                </li>
                                <li className="prepare_li alarm_on">
                                    <ProjectContent 
                                        state="준비중" 
                                        date="210124-1401" 
                                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                        label1="채권형(일반회사채)"
                                        label2="연료전지"
                                        alarmShow={true}
                                        alarm="1" 
                                        bottomShow={true}
                                    />
                                </li>
                                <li className="expect_li btn_on">
                                    <ProjectContent 
                                        state="오픈예정"
                                        date="210124-1401"
                                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                        label1="채권형(일반회사채)"
                                        label2="연료전지"
                                        alarmShow={true}
                                        alarm="1"
                                        bottomShow={true}
                                    />
                                </li>
                                <li className="funding_li btn_on">
                                    <ProjectContent 
                                        state="펀딩중" 
                                        date="210124-1401" 
                                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                        label1="채권형(일반회사채)"
                                        label2="연료전지"
                                        alarmShow={true}
                                        alarm="1"
                                        bottomShow={true}
                                    />
                                </li>
                                <li className="success_li btn_on bell_none">
                                    <ProjectContent 
                                        state="성공" 
                                        date="210124-1401" 
                                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                        label1="채권형(일반회사채)"
                                        label2="연료전지"
                                        alarmShow={true}
                                        alarm="1"
                                        bottomShow={true}
                                    />
                                </li>
                                <li className="fail_li btn_on bell_none">
                                    <ProjectContent 
                                        state="성공" 
                                        date="210124-1401" 
                                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                        label1="채권형(일반회사채)"
                                        label2="연료전지"
                                        alarmShow={true}
                                        alarm="1"
                                        bottomShow={true}
                                    />
                                </li>
                            </ul>
                            <button type="button" className="fixed_btn"><img src={require('../images/icons/plus_icon.png')} alt="플러스 아이콘"/></button>
                        </div>
                    </div>                    
                </section>
                <Footer />
                {/* 팝업 ------------------------------------ */}
                {/*프로젝트 삭제확인 팝업 */}
                <div className="pop_wrap project_pop audit_pop delete_pop delete_pop1 v3">
                    <div className="dim"></div>      
                    <div className="pop_cont">
                        <div className="rightT"> 
                            <button type="button" className="close_pop"><img src={ require('../images/icons/close_btn.png')} alt="팝업닫기아이콘"/></button>                    
                        </div>                        
                        <div className="cont_box">
                            <h3>정말로 본 프로젝트를<br></br>삭제하시겠습니까?</h3>
                            <p>삭제하신 후에는 복구 하실 수 없습니다.</p>
                            <div>
                                <ProjectContent 
                                    state="준비중" 
                                    date="210124-1401" 
                                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                    alarmShow={false}
                                    bottomShow={false}
                                />
                            </div>
                            <div>
                                <button type="button" className="btn pop_submit line_btn">취소</button>
                                <button type="button" className="btn pop_submit line_btn">삭제를 원합니다.</button>
                            </div>  
                        </div>
                    </div>                      
                </div>          
                {/*프로젝트 삭제확인 팝업2 */}
                <div className="pop_wrap project_pop audit_pop delete_pop delete_pop2 v3">
                    <div className="dim"></div>      
                    <div className="pop_cont">
                        <div className="rightT"> 
                            <button type="button" className="close_pop"><img src={ require('../images/icons/close_btn.png')} alt="팝업닫기아이콘"/></button>                    
                        </div>                        
                        <div className="cont_box">
                            <h3>지금은 프로젝트를<br></br>삭제할 수 없습니다.</h3>
                            <p>계약 체결 후에는 삭제 할 수 없습니다.</p>
                            <div>
                                <ProjectContent 
                                    state="준비중" 
                                    date="210124-1401" 
                                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                    alarmShow={false}
                                    bottomShow={false}
                                />
                            </div>
                            <div>
                                <button type="button" className="btn pop_submit">확인</button>
                            </div>  
                        </div>
                    </div>                      
                </div>


            </>
        )
    }
}