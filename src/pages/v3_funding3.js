import React from 'react'
import { Link } from 'react-router-dom';
import Title from '../components/title';
import File_upload from '../components/file_upload';
import Studio_gnb from '../components/Studio_gnb'
import Back_header from '../components/back_header';

export default class V3_funding3 extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
                <section className="v3 studio funding funding3">
                    <Back_header/>
                    <div className="clearfix">
                        <Studio_gnb/>
                        <div className="cont">
                            <div className="top_box container">
                                <h1>펀딩 준비</h1>
                                <ul className="clearfix tab_ul">
                                    <li>
                                        <Link to="/V3_funding1">발행정보 확정</Link>
                                    </li>
                                    <li>
                                        <Link to="/V3_funding2">펀딩 소개 자료</Link>
                                    </li>
                                    <li  className="on">
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
                                    <div>
                                        <button type="button" className="btn big">모든 양식 다운로드</button>
                                    </div>
                                    <div className="bd_box clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num="01."
                                                    title ="기업이미지 파일 (로고)"
                                                    star ="*"
                                                    
                                                    text = {
                                                        <>
                                                        <p>·120KB 이하의 792x 466px 미만  jpg, jpeg, png 파일 만 가능합니다.</p>
                                                        <p className="error">·error here</p>
                                                        </>
                                                    }
                                                    label_title="투자자 노출"
                                                    labelShow={true}
                                                    labelDisabled={false}
                                                />
                                            </div>
                                            <div className="right file_box ">                                                        
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
                                                    title ="등록신청서"
                                                    star ="*"
                                                    
                                                    text = {
                                                        <>
                                                        <p>·양식 다운로드를 눌러 확인 후 작성하여 pdf로 업로드 해주세요.</p>
                                                        <p className="error">·error here</p>
                                                        </>
                                                    }
                                                    label_title="투자자 비노출"
                                                    labelShow={true}
                                                    labelDisabled={true}
                                                />
                                            </div>
                                            <div className="right file_box ">                                                        
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
                                                    title ="청약서"
                                                    star ="*"
                                                    
                                                    text = {
                                                        <>
                                                        <p>·양식 다운로드를 눌러 확인 후 작성하여 pdf로 업로드 해주세요.</p>
                                                        <p className="error">·등록 할 수 없는 파일형식입니다.</p>
                                                        </>
                                                    }
                                                    label_title="투자자 노출"
                                                    labelShow={true}
                                                    labelDisabled={false}
                                                />
                                            </div>
                                            <div className="right file_box ">                                                        
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
                                                    title ="발행인 기업개황"
                                                    star ="*"
                                                    
                                                    text = {
                                                        <>
                                                        <p>·양식 다운로드를 눌러 확인 후 작성하여 pdf로 업로드 해주세요.</p>
                                                        <p className="error">·등록 할 수 없는 파일형식입니다.</p>
                                                        </>
                                                    }
                                                    label_title="투자자 노출"
                                                    labelShow={true}
                                                    labelDisabled={false}
                                                />
                                            </div>
                                            <div className="right file_box ">                                                        
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
                                                    title ="이사회 결의 혹은 주주총회 의사록"
                                                    star ="*"
                                                    
                                                    text = {
                                                        <>
                                                        <p>·증권의 발행을 결의한 주주총회(설립 중인 법인인 경우에는 발기인 총회를 말한다) 또는 이사회 등의 의사록의 사본, 그 밖에 증권의 발행결의를 증명할 수 있는 서류를 업로드 해주세요.</p>
                                                        <p>·이사회 의사록의 경우, 양식 다운로드를 눌러 확인 후 작성하여 pdf로 업로드 해주세요.</p>
                                                        <p className="error">·등록 할 수 없는 파일형식입니다.</p>
                                                        </>
                                                    }
                                                    label_title="투자자 노출"
                                                    labelShow={true}
                                                    labelDisabled={false}
                                                />
                                            </div>
                                            <div className="right file_box ">                                                        
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
                                                    title ="정관"
                                                    star ="*"
                                                    
                                                    text = {
                                                        <>
                                                        <p>·최종버전의 정관을 pdf로 첨부해주세요.</p>
                                                        <p>·간인과 날인이 필요합니다.</p>
                                                        <p className="error">·등록 할 수 없는 파일형식입니다.</p>
                                                        </>
                                                    }
                                                    label_title="투자자 노출"
                                                    labelShow={true}
                                                    labelDisabled={false}
                                                />
                                            </div>
                                            <div className="right file_box ">                                                        
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
                                                    title ="투자설명서"
                                                    star ="*"
                                                    
                                                    text = {
                                                        <>
                                                        <p>·양식 다운로드를 눌러 확인 후 작성하여 pdf로 업로드 해주세요.</p>
                                                        <p className="error">·등록 할 수 없는 파일형식입니다.</p>
                                                        </>
                                                    }
                                                    label_title="투자자 노출"
                                                    labelShow={true}
                                                    labelDisabled={false}
                                                />
                                            </div>
                                            <div className="right file_box ">                                                        
                                                <File_upload
                                                    flie_id = "file7"
                                                    downShow={true}
                                                    btn_class="active"
                                                />
                                            </div>
                                    </div>
                                    <div className="bd_box clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num="08."
                                                    title ="대표이사 확인서"
                                                    star ="*"
                                                    
                                                    text = {
                                                        <>
                                                        <p>·양식 다운로드를 눌러 확인 후 작성하여 pdf, jpg, jpeg, png로 업로드 해주세요.</p>
                                                        <p className="error">·등록 할 수 없는 파일형식입니다.</p>
                                                        </>
                                                    }
                                                    label_title="투자자 비노출"
                                                    labelShow={true}
                                                    labelDisabled={true}
                                                />
                                            </div>
                                            <div className="right file_box ">                                                        
                                                <File_upload
                                                    flie_id = "file8"
                                                    downShow={true}
                                                    btn_class="active"
                                                />
                                            </div>
                                    </div>
                                    <div className="bd_box clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num="09."
                                                    title ="기타 추가 자료 (선택)"
                                                    star =""                                                    
                                                    text = {
                                                        <>
                                                        <p className="mb4">·추가로 증빙할 자료가 있다면 pdf,jpg,jpeg,png로 업로드 해주세요.</p>
                                                        <p>·업로드 된 파일명 그대로 투자자에게 노출되므로, 업로드 전에 파일명을 수정해주세요.</p>
                                                        <p className="error">·등록 할 수 없는 파일형식입니다.</p>
                                                        </>
                                                    }
                                                    label_title="투자자 노출"
                                                    labelShow={true}
                                                    labelDisabled={false}
                                                />
                                            </div>
                                            <div className="right file_box ">
                                                <ul>
                                                    <li className="delt_btn_none mb16">
                                                        <File_upload
                                                            flie_id = "file9"
                                                            downShow={false}
                                                            btn_class="active"
                                                        />
                                                    </li>
                                                    <li className="upload_btn_none mb16">
                                                        <File_upload
                                                            flie_id = "file10"
                                                            downShow={false}
                                                        />
                                                    </li>
                                                    <li className="upload_btn_none">
                                                        <File_upload
                                                            flie_id = "file11"
                                                            downShow={false}
                                                        />
                                                    </li>
                                                </ul>
                                                
                                            </div>
                                    </div>
                                    <div className="bottom_btn rightT">
                                        <button type="button" className="btn">임시저장</button>             
                                        <button type="button" className="btn">최종제출</button>             
                                    </div>       
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* 팝업 ------------------------------------ */}
                {/*준비전팝업 */}
                <div className="pop_wrap project_pop audit_pop funding_pop1">
                    <div className="dim"></div>      
                    <div className="pop_cont">
                        <div className="rightT"> 
                            <button type="button" className="close_pop"><img src={ require('../images/icons/close_btn.png')} alt="팝업닫기아이콘"/></button>                    
                        </div>                        
                        <div className="cont">
                            <h3>필수 입력 항목을 확인 해주세요</h3>
                            <ul>
                                <li>
                                    <p>펀딩 소개자료</p>
                                    <p>·01, 02, 03, 04</p>
                                </li>                                
                                <li>
                                    <p>title</p>
                                    <p>·part title</p>
                                </li>
                            </ul>
                            <button type="button" className="btn pop_submit">확인</button>  
                        </div>
                    </div>                      
                </div>
                 {/* 삭제 팝업 */}
                 <div className="pop_wrap project_pop audit_pop funding_pop2">
                    <div className="dim"></div>      
                    <div className="pop_cont">
                        <div className="rightT"> 
                            <button type="button" className="close_pop"><img src={ require('../images/icons/close_btn.png')} alt="팝업닫기아이콘"/></button>                    
                        </div>                        
                        <div className="cont">
                            <h3 className="mb4">정말로 삭제하시겠습니까?</h3>
                            <p>해당 문단은 삭제 후 복구가 불가능합니다.</p>                           
                            <div>
                                <button type="button" className="btn pop_submit line_btn">취소</button>
                                <button type="button" className="btn pop_submit line_btn">삭제</button>
                            </div>
                              
                        </div>
                    </div>                      
                </div>
                {/* 미리보기 팝업 */}
                <div className="pop_wrap project_pop audit_pop funding_pop3">
                    <div className="dim"></div>      
                    <div className="pop_cont">
                        <div className="rightT"> 
                            <button type="button" className="close_pop"><img src={ require('../images/icons/close_btn.png')} alt="팝업닫기아이콘"/></button>                    
                        </div>                        
                        <div className="cont">
                            <h3>미리보기</h3>                    
                            <div>
                                <button type="button" className="btn pop_submit line_btn">PC 버전</button>
                                <button type="button" className="btn pop_submit line_btn">모바일 버전</button>
                            </div>                              
                        </div>
                    </div>                      
                </div>
                {/*  제출 시 보이는 토스트팝업 */}
                <div className="toast_pop audit_toast funding_toast">
                    <p className="font_13 white_color">펀딩 준비 자료를 제출했습니다.</p>
                </div>
            </>
        )
    }
}