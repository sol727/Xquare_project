import React from 'react'
import { Link } from 'react-router-dom';
import Studio_gnb from '../components/Studio_gnb'
import Back_header from '../components/back_header';
import Title from '../components/title';
import File_upload from '../components/file_upload';


export default class V3_Account2 extends React.Component {

    constructor(props) {
    super(props);
    }
    onClickLink (link) {
     window.location.pathname = link
     }

    render() {
        return (
            <>
               <section className="v3 studio account account2">
                    <Back_header/>
                    <div className="clearfix">
                         <Studio_gnb />
                         <div className="cont">
                              <div className="top_box container">
                                   <h1>계약준비</h1>
                                   <ul className="clearfix tab_ul">
                                        <li >
                                             <Link to="/V3_Account">자격확인</Link>
                                        </li>
                                        <li className="on">
                                             <Link to="/V3_Account2">기본자료</Link>
                                        </li>
                                        <li>
                                             <Link to="/V3_Account3">발행정보</Link>
                                        </li>
                                        <li>
                                             <Link to="/V3_Account4">기타정보</Link>
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
                                        <div className="bd_box clearfix2">
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
                                             <div className="right file_box file_box2">                                                        
                                                  <File_upload
                                                        flie_id = "file1"
                                                       downShow={false}
                                                       
                                                  />                                                                                                                                        
                                             </div>
                                        </div>
                                        <div className="bd_box clearfix2">
                                             <div className="left"> 
                                                  <Title 
                                                       num="02."
                                                       title ="발행인 재무상태 확인서"
                                                       star ="*"
                                                       
                                                       text = {
                                                            <>
                                                            <p>·설립 3년 미만의 신설법인은 양식 다운로드를 눌러 확인 후 작성하여 pdf로 업로드 해주세요. 작성 및 날인 1개월 이내의 것으로 제출하셔야 합니다.</p>
                                                            <p className="error">·error here</p>
                                                            </>
                                                       }
                                                       label_title="투자자 노출"
                                                       labelShow={true}
                                                       labelDisabled={false}
                                                  />
                                             </div>
                                             {/* 파일업로드에 active 클래스를 넣을 시 버튼색 주황 , file_box 에 delt_btn_none 넣을 시 버튼 사라짐 */}
                                             <div className="right file_box delt_btn_none">                                                        
                                                  <File_upload
                                                        flie_id = "file2"
                                                       downShow={true}      
                                                       btn_class="active"          

                                                  />
                                             </div>
                                        </div>                                       
                                        <div className="bd_box clearfix2">
                                             <div className="left"> 
                                                  <Title 
                                                       num="03."
                                                       title ="최근 3개년 재무제표"
                                                       star ="*"
                                                       
                                                       text = {
                                                            <>
                                                            <p>·설립 3년 미만의 신설법인은 양식 다운로드를 눌러 확인 후 작성하여 pdf로 업로드 해주세요. 작성 및 날인 1개월 이내의 것으로 제출하셔야 합니다.</p>
                                                            <p className="error">·error here</p>
                                                            </>
                                                       }
                                                       label_title="투자자 노출"
                                                       labelShow={true}
                                                       labelDisabled={false}
                                                  />
                                             </div>
                                             <div className="right file_box delt_btn_none">                                                        
                                                  <File_upload
                                                        flie_id = "file3"
                                                       downShow={true}     
                                                       btn_class="active"
                                                  />
                                             </div>
                                        </div>
                                        <div className="bd_box clearfix2">
                                             <div className="left"> 
                                                  <Title 
                                                       num="04."
                                                       title ="주주명부"
                                                       star ="*"
                                                       
                                                       text = {
                                                            <>
                                                            <p>·설립 3년 미만의 신설법인은 양식 다운로드를 눌러 확인 후 작성하여 pdf로 업로드 해주세요. 작성 및 날인 1개월 이내의 것으로 제출하셔야 합니다.</p>
                                                            <p className="error">·error here</p>
                                                            </>
                                                       }
                                                       label_title="투자자 노출"
                                                       labelShow={true}
                                                       labelDisabled={false}
                                                  />
                                             </div>
                                             <div className="right file_box delt_btn_none">                                                        
                                                  <File_upload
                                                        flie_id = "file4"
                                                       downShow={true}   
                                                       btn_class="active"                                                        
                                                  />
                                             </div>
                                        </div>
                                        <div className="bd_box clearfix2">
                                             <div className="left"> 
                                                  <Title 
                                                       num="05."
                                                       title ="주식(자본금)변동내역확인서"
                                                       star ="*"
                                                       
                                                       text = {
                                                            <>
                                                            <p>·범죄경력회보서 발급시스템에서 법인 등기임원의 범죄소송 내역을 조회하세요. 양식 다운로드를 눌러 확인 후 작성하여 pdf로 업로드 해주세요. 작성 및 날인 1개월 이내의 것을 제출하셔야 합니다.</p>
                                                            <p className="error">·error here</p>
                                                            </>
                                                       }
                                                       label_title="투자자 노출"
                                                       labelShow={true}
                                                       labelDisabled={false}
                                                  />
                                             </div>
                                             <div className="right file_box delt_btn_none">                                                        
                                                  <File_upload
                                                        flie_id = "file5"
                                                       downShow={true}   
                                                       btn_class="active"                                                        
                                                  />
                                             </div>
                                        </div>
                                        <div className="bd_box clearfix2">
                                             <div className="left"> 
                                                  <Title 
                                                       num="06."
                                                       title ="범죄소송확인서"
                                                       star ="*"
                                                       
                                                       text = {
                                                            <>
                                                            <p>·범죄경력회보서 발급시스템에서 법인 등기임원의 범죄소송 내역을 조회하세요. 양식 다운로드를 눌러 확인 후 작성하여 pdf로 업로드 해주세요. 작성 및 날인 1개월 이내의 것을 제출하셔야 합니다.</p>
                                                            <p className="error">·error here</p>
                                                            </>
                                                       }
                                                       label_title="투자자 노출"
                                                       labelShow={true}
                                                       labelDisabled={false}
                                                  />
                                             </div>
                                             <div className="right file_box delt_btn_none">                                                        
                                                  <File_upload
                                                        flie_id = "file6"
                                                       downShow={true}
                                                       btn_class="active"                                                           
                                                  />
                                             </div>
                                        </div>
                                        <div className="bd_box clearfix2">
                                             <div className="left"> 
                                                  <Title 
                                                       num="07."
                                                       title ="회사소개서"
                                                       star ="*"
                                                       
                                                       text = {
                                                            <>
                                                            <p>·자율 양식으로 작성 후 pdf로 업로드 해주세요.</p>
                                                            <p className="error">·error here</p>
                                                            </>
                                                       }
                                                       label_title="투자자 비노출"
                                                       labelShow={true}
                                                       labelDisabled={true}
                                                  />
                                             </div>
                                             <div className="right file_box delt_btn_none">                                                        
                                                  <File_upload
                                                        flie_id = "file7"
                                                       downShow={true}                                                  
                                                  />
                                             </div>
                                        </div>
                                        <div className="bd_box clearfix2">
                                             <div className="left"> 
                                                  <Title 
                                                       num="08."
                                                       title ="개인정보수집이용동의서"
                                                       star ="*"
                                                       
                                                       text = {
                                                            <>
                                                            <p>·양식 다운로드를 눌러 확인 후 작성하여 pdf로 업로드 해주세요. 작성 및 날인 1개월 이내의 것을 제출하셔야 합니다.</p>
                                                            <p className="error">·error here</p>
                                                            </>
                                                       }
                                                       label_title="투자자 비노출"
                                                       labelShow={true}
                                                       labelDisabled={true}
                                                  />
                                             </div>
                                             <div className="right file_box delt_btn_none">                                                        
                                                  <File_upload
                                                        flie_id = "file8"
                                                       downShow={true}                                                  
                                                  />
                                             </div>
                                        </div>

                                        <div className="bd_box clearfix2">
                                             <div className="left"> 
                                                  <Title 
                                                       num="09."
                                                       title ="발행기업 자격요건 증빙서류"
                                                       star ="*"
                                                       
                                                       text = {
                                                            <>
                                                            <p>·pdf로 업로드 해주세요.</p>
                                                            <p className="error">·error here</p>
                                                            </>
                                                       }
                                                       label_title="투자자 노출"
                                                       labelShow={true}
                                                       labelDisabled={false}
                                                  />
                                             </div>
                                             <div className="right file_box ">                     
                                                  <ul className="flie_ul">
                                                       <li>
                                                            <label htmlFor="file9">이노비스 인증서</label>
                                                            <File_upload
                                                                 flie_id = "file9"
                                                                 downShow={false}
                                                            />
                                                       </li>
                                                       <li>
                                                            <label htmlFor="file10">메인비즈 인증서</label>
                                                            <File_upload
                                                                 flie_id = "file10"
                                                                 downShow={false}
                                                            />
                                                       </li>
                                                       <li>
                                                            <label htmlFor="file11">벤처기업 확인서</label>
                                                            <File_upload
                                                                 flie_id = "file11"
                                                                 downShow={false}
                                                            />
                                                       </li>
                                                       <li>
                                                            <label htmlFor="file12">프로젝트성 사업확인</label>
                                                            <File_upload
                                                                 flie_id = "file12"
                                                                 downShow={false}
                                                            />
                                                       </li>
                                                       <li>
                                                            <label htmlFor="file13">사회적 기업인증서</label>
                                                            <File_upload
                                                                 flie_id = "file13"
                                                                 downShow={false}
                                                            />
                                                       </li>
                                                  </ul>                                                 
                                             </div>
                                        </div>
                                        <div className="bd_box clearfix2 last">
                                             <div className="left"> 
                                                  <Title 
                                                       num="10."
                                                       title ="기타 추가 자료 (선택)"
                                                       star =""
                                                       
                                                       text = {
                                                            <>
                                                            <p>·추가로 증빙할 자료가 있다면 pdf, jpg, jpeg, png로 업로드 해주세요.</p>
                                                            <p>·업로드된 파일명 그대로 투자자에게 노출되므로, 업로드 전에 파일명을 수정해주세요.</p>
                                                            <p className="error">·error here</p>
                                                            </>
                                                       }
                                                       label_title="투자자 노출"
                                                       labelShow={true}
                                                       labelDisabled={false}
                                                  />
                                             </div>
                                             <div className="right file_box ">                     
                                                  <ul className="flie_ul">
                                                       <li className="delt_btn_none">                                                            
                                                            <File_upload
                                                                 flie_id = "file14"
                                                                 downShow={false}
                                                                 btn_class="active"
                                                            />
                                                       </li>
                                                       <li className="upload_btn_none">                                                           
                                                            <File_upload
                                                                 flie_id = "file15"
                                                                 downShow={false}
                                                            />
                                                       </li>
                                                       <li className="upload_btn_none">                                                           
                                                            <File_upload
                                                                 flie_id = "file16"
                                                                 downShow={false}
                                                            />
                                                       </li>                                                     
                                                  </ul>                                                 
                                             </div>
                                        </div>                    
                                        <div className="bottom_btn rightT">
                                             <button type="button" className="btn">임시저장</button>             
                                             <button type="button" className="btn" onClick={() => window.location.pathname = "/v3_account3"} >다음 단계</button>             
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