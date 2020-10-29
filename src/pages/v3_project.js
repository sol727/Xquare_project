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
                                        label_li = {
                                            <>
                                            <li>증권구분</li>
                                            <li>에너지 유형</li>
                                            </>
                                        }
                                        alarmShow={true}
                                        bottomShow={true}
                                        txt1="진행 기간"
                                        start="시작일"
                                        start_day="미지정"
                                        end="마감일"
                                        end_day="미지정"
                                        txt2="달성률"
                                        goal="목표 모금액"
                                        goal_txt="미지정"
                                        attain="달성 모금액"
                                        attain_txt="0원"
                                        circle={[
                                            {
                                                text : '-' ,
                                                percentage : 0 ,
                                                type : 0
                                            } ,
                                            {
                                                text : '-' ,
                                                percentage : 0 ,
                                                type : 1
                                            }
                                        ]}
                                    />
                                </li>
                                <li className="prepare_li alarm_on">
                                    <ProjectContent 
                                        state="준비중" 
                                        date="210124-1401" 
                                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                        label_li = {
                                            <>
                                            <li>채권형(일반회사채)</li>
                                            <li>연료전지</li>
                                            </>
                                        }
                                        alarmShow={true}
                                        alarm="1" 
                                        bottomShow={true}
                                        txt1="진행 기간"
                                        start="시작일"
                                        start_day="yyyy.mm.dd"
                                        end="마감일"
                                        end_day="yyyy.mm.dd"
                                        txt2="달성률"
                                        goal="목표 모금액"
                                        goal_txt="10,000,000원"
                                        attain="달성 모금액"
                                        attain_txt="0원"
                                        circle={[
                                            {
                                                text : '준비중' ,
                                                percentage : 0 ,
                                                type : 0
                                            } ,
                                            {
                                                text : '0%' ,
                                                percentage : 0 ,
                                                type : 1
                                            }
                                        ]}
                                    />
                                </li>
                                <li className="expect_li btn_on">
                                    <ProjectContent 
                                        state="오픈예정"
                                        date="210124-1401"
                                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                        label_li = {
                                            <>
                                            <li>채권형(일반회사채)</li>
                                            <li>연료전지</li>
                                            </>
                                        }
                                        alarmShow={true}
                                        alarm="1"
                                        bottomShow={true}
                                        txt1="진행 기간"
                                        start="시작일"
                                        start_day="yyyy.mm.dd"
                                        end="마감일"
                                        end_day="yyyy.mm.dd"
                                        txt2="응원합니다"
                                        goal="관심투자자"
                                        goal_txt="10,000명"
                                        attain="목표 모금액"
                                        attain_txt="10,000,000원"
                                        circle={[
                                            {
                                                text : '예정' ,
                                                percentage : 100 ,
                                                type : 0
                                            } ,
                                            {
                                                text : '-' ,
                                                percentage : 0 ,
                                                type : 1
                                            }
                                        ]}
                                    />
                                </li>
                                <li className="funding_li btn_on">
                                    <ProjectContent 
                                        state="펀딩중" 
                                        date="210124-1401" 
                                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                        label_li = {
                                            <>
                                            <li>채권형(일반회사채)</li>
                                            <li>연료전지</li>
                                            </>
                                        }
                                        alarmShow={true}
                                        alarm="1"
                                        bottomShow={true}
                                        txt1="진행 기간"
                                        start="시작일"
                                        start_day="yyyy.mm.dd"
                                        end="마감일"
                                        end_day="yyyy.mm.dd"
                                        txt2="달성률"
                                        goal="목표 모금액"
                                        goal_txt="10,000,000원"
                                        attain="달성 모금액"
                                        attain_txt="6,000,000원"
                                        circle={[
                                            {
                                                text : '-15일' ,
                                                percentage : 70 ,
                                                type : 0
                                            } ,
                                            {
                                                text : '60%' ,
                                                percentage : 60 ,
                                                type : 1
                                            }
                                        ]}
                                    />
                                </li>
                                <li className="success_li btn_on bell_none">
                                    <ProjectContent 
                                        state="성공" 
                                        date="210124-1401" 
                                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                        label_li = {
                                            <>
                                            <li>채권형(일반회사채)</li>
                                            <li>연료전지</li>
                                            </>
                                        }
                                        alarmShow={true}
                                        alarm="1"
                                        bottomShow={true}
                                        txt1="진행 기간"
                                        start="시작일"
                                        start_day="yyyy.mm.dd"
                                        end="마감일"
                                        end_day="yyyy.mm.dd"
                                        txt2="달성률"
                                        goal="목표 모금액"
                                        goal_txt="10,000,000원"
                                        attain="달성 모금액"
                                        attain_txt="12,000,000원"
                                        circle={[
                                            {
                                                text : '종료' ,
                                                percentage : 0 ,
                                                type : 0
                                            } ,
                                            {
                                                text : '120%' ,
                                                percentage : 120 ,
                                                type : 1
                                            }
                                        ]}
                                    />
                                </li>
                                <li className="fail_li btn_on bell_none">
                                    <ProjectContent 
                                        state="실패"
                                        date="210124-1401" 
                                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                        label_li = {
                                            <>
                                            <li>채권형(일반회사채)</li>
                                            <li>연료전지</li>
                                            </>
                                        }
                                        alarmShow={true}
                                        alarm="1"
                                        bottomShow={true}
                                        txt1="진행 기간"
                                        start="시작일"
                                        start_day="yyyy.mm.dd"
                                        end="마감일"
                                        end_day="yyyy.mm.dd"
                                        txt2="달성률"
                                        goal="목표 모금액"
                                        goal_txt="10,000,000원"
                                        attain="달성 모금액"
                                        attain_txt="6,000,000원"
                                        circle={[
                                            {
                                                text : '종료' ,
                                                percentage : 0 ,
                                                type : 0
                                            } ,
                                            {
                                                text : '60%' ,
                                                percentage : 60 ,
                                                type : 1
                                            }
                                        ]}
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
                                    label_li = {
                                        <>
                                        <li>주식형(보통주)</li>
                                        <li>태양광/소형</li>
                                        </>
                                    }
                                    alarmShow={false}
                                    bottomShow={false}
                                    circle={[
                                        {
                                            text : '준비중' ,
                                            percentage : 0 ,
                                            type : 0
                                        } ,
                                        {
                                            text : '150%' ,
                                            percentage : 150 ,
                                            type : 1
                                        }
                                    ]}
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
                                    label_li = {
                                        <>
                                        <li>주식형(보통주)</li>
                                        <li>태양광/소형</li>
                                        </>
                                    }
                                    alarmShow={false}
                                    bottomShow={false}
                                    circle={[
                                            {
                                                text : '준비중' ,
                                                percentage : 0 ,
                                                type : 0
                                            } ,
                                            {
                                                text : '150%' ,
                                                percentage : 150 ,
                                                type : 1
                                            }
                                        ]}
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