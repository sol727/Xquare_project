import React from 'react'
import { Link } from 'react-router-dom';
import Studio_gnb from '../components/Studio_gnb'
import Back_header from '../components/back_header';
import Title from '../components/title';
import Radio from '../components/radio';


export default class V3_Account2 extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
               <section className="v3 studio account">
                    <Back_header/>
                    <div className="clearfix">
                         <Studio_gnb />
                         <div className="cont">
                              <div className="top_box container">
                                   <h1>계약준비</h1>
                                   <ul className="clearfix tab_ul">
                                        <li >
                                             <Link to="/V3_Project_state">자격확인</Link>
                                        </li>
                                        <li className="on">
                                             <Link to="/V3_Project_state">기본자료</Link>
                                        </li>
                                        <li>
                                             <Link to="/V3_Project_state">발행정보</Link>
                                        </li>
                                        <li>
                                             <Link to="/V3_Project_state">기타정보</Link>
                                        </li>
                                   </ul>
                              </div>
                              <div className="gray_bg">
                                   <div className="container">
                                        <div className="notice_box">
                                             <h3 className="border_text">제출해 주신 자료는 내부 검토 및 프로젝트 페이지 업로드용으로 사용되고 있으며, 프로젝트 페이지에서 다운로드가 가능합니다. (10MB이내, pdf, jpg, jpeg, png 파일을 업로드 해주시기 바랍니다.)</h3>
                                        </div>
                                        <div>
                                             <button type="button" className="btn big">모든 양식 다운로드</button>
                                        </div>
                                        <div className="bd_box clearfix">
                                             <div className="left"> 
                                                  <Title 
                                                       num="01."
                                                       title ="법인등기부등본"
                                                       star ="*"
                                                       
                                                       text = {
                                                            <>
                                                            <p>·말소사항이 포함된, 발급 1개월 이내의 법인등기부등본을 pdf, jpg, jpeg, png  파일로 업로드 해주세요.</p>
                                                            <p className="error">·error here</p>
                                                            </>
                                                       }
                                                       label_title="투자자 노출"
                                                       labelShow={true}
                                                       labelDisabled={false}
                                                  />
                                             </div>
                                             <div className="right">
                                                  
                                             </div>
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