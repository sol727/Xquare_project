import React from 'react'
import { Link } from 'react-router-dom';
import ProjectContent from '../components/ProjectContent'

export default class Studio_gnb extends React.Component {

    constructor(props) {
          super(props);
    }

    render() {
        return (
            <div className="v3 studio_gnb">
               <button className="gnb_btn"><img src={ require('../images/icons/ic_menu_left.png') } alt="gnb접기아이콘"/></button>
                <div className="gnb_wrap">
                    <div className="centerT menu_btn">
                        <button type="button" className="gnb_btn2"></button>
                    </div>
                    <div className="top centerT">
                        <img src={ require('../images/img_logo_xquare.png') } alt="logo"/>
                        <h1>프로젝트 스튜디오</h1>
                    </div>
                    <div className="state_box_wrap"> 
                        <div className="state_box">
                            <ProjectContent 
                                state="준비중" 
                                date="210124-1401" 
                                title="제목없음"
                                label1="미설정"                               
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
                    </div>
                    <ul className="pc">
                         <li className="on">
                            <Link to="/V3_Project_state">프로젝트상세</Link>
                         </li>
                         <li className="next">
                            <Link to="/V3_Project_state">계약준비</Link>
                         </li>
                         <li className="sub_menu">
                            <Link to="/V3_Project_state" className="arrow">자격확인</Link>
                        </li>
                        <li className="sub_menu">
                            <Link to="/V3_Project_state" className="arrow">기본자료</Link>
                        </li>
                        <li className="sub_menu">
                            <Link to="/V3_Project_state" className="arrow">발행정보</Link>
                        </li>
                        <li className="sub_menu">
                            <Link to="/V3_Project_state" className="arrow">기타정보</Link>
                        </li>
                        <li className="">
                            <Link to="/V3_Project_state">펀딩준비</Link>
                         </li>
                         <li className="sub_menu">
                            <Link to="/V3_Project_state" className="arrow">발행정보 확정</Link>
                        </li>
                        <li className="sub_menu">
                            <Link to="/V3_Project_state" className="arrow">펀딩 소개 작성</Link>
                        </li>
                        <li className="sub_menu">
                            <Link to="/V3_Project_state" className="arrow">추가 자료</Link>
                        </li>
                        <li className="">
                            <Link to="/V3_Project_state" className="arrow">엑스퀘어 피드백 <span className="count">9999</span></Link>
                         </li>
                         <li className="">
                            <Link to="/V3_Project_state" className="arrow">투자자 현황 </Link>
                         </li>
                         <li className="">
                            <Link to="/V3_Project_state" className="arrow">투자자 의견 <span className="count">1</span></Link>
                         </li>
                         <li className="alert">
                            <Link to="/V3_Project_state" className="arrow">새소식 관리  <img src={ require('../images/icons/ic_ic_alert_alert_circle.svg') } alt="느낌표아이콘"/></Link>
                         </li>
                         <li className="alert">
                            <Link to="/V3_Project_state" className="arrow">결산자료 제출 및 확인  <img src={ require('../images/icons/ic_ic_alert_alert_circle.svg') } alt="느낌표아이콘"/></Link>
                         </li>
                         <li className="">
                            <Link to="/V3_Project_state" className="arrow">투자광고 </Link>
                         </li>
                         <li className="">
                            <Link to="/V3_Project_state" className="arrow">설정 </Link>
                         </li>
                         <li className="">
                            <Link to="/V3_Project_state" className="arrow">프로젝트 문의</Link>
                         </li>
                    </ul>
                    <ul className="mo">
                        <li>
                            <a href=""></a>
                            <p>프로젝트상세</p>
                        </li>
                    </ul>
                    <div className="bottom rightT"> 
                        <button type="button" className="studio_btn">프로젝트 삭제</button>
                    </div>
               </div>               
            </div>
        )
    }
}