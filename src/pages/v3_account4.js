import React from 'react'
import { Link } from 'react-router-dom';
import Studio_gnb from '../components/Studio_gnb'
import Back_header from '../components/back_header';
import Title from '../components/title';
import File_upload from '../components/file_upload';

export default class V3_Account4 extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
                <section className="v3 studio account account4">
                    <Back_header/>
                    <div className="clearfix">
                        <Studio_gnb />    
                        <div className="cont">
                            <div className="top_box container">
                                <h1>계약준비</h1>
                                <ul className="clearfix tab_ul">
                                    <li>
                                        <Link to="/V3_Account">자격확인</Link>
                                    </li>
                                    <li>
                                        <Link to="/V3_Account2">기본자료</Link>
                                    </li>
                                    <li >
                                        <Link to="/V3_Account3">발행정보</Link>
                                    </li>
                                    <li className="on">
                                        <Link to="/V3_Account4">기타정보</Link>
                                    </li>
                                </ul>
                            </div>  
                            <div className="gray_bg">
                                <div className="container">
                                    {/* 제출했을 때 노출 ▼*/}
                                    <div className="notice_box ">
                                        <div className="clearfix2 mb24">
                                            <div className="border_text left">
                                                <h3 className="font_18 mb8">계약 준비 자료 제출 결과</h3>
                                                <p className="font_13">· 제출하신 yymmdd-hhnn 계약 준비 자료를 확인중입니다.</p>
                                            </div>        
                                            <div className="right">
                                                <button type="button" className="btn big">심사중</button>
                                            </div>
                                        </div>
                                        <p className="mt16 mb16 font_14 centerT">자료 심사는 최대 3영업일 소요됩니다</p>
                                    </div>     
                                    <div className="bd_box clearfix2">
                                        <div className="left"> 
                                            <Title 
                                                num="01."
                                                title ="계좌번호 입력"
                                                star="*"
                                                text = {
                                                    <>
                                                    <p>·펀딩 성공시 입금받으실 계좌정보를 입력해주세요.</p>
                                                    <p className="error">·error here</p>
                                                    </>
                                                }
                                                buttonShow={false}
                                                buttonDisabled={false}
                                            />
                                        </div>
                                        <div className="right form_ul">
                                            <ul className="date_ul ">
                                                <li>
                                                    <label htmlFor="">은행선택</label>
                                                    <p className="error">·error here</p>
                                                    <select name="" id="" className="">
                                                        <option value="">선택</option>
                                                        <option value="">국민은행</option>
                                                        <option value="">기업은행</option>
                                                        <option value="">농협은행</option>
                                                        <option value="">신한은행</option>
                                                        <option value="">산업은행</option>
                                                        <option value="">우리은행</option>
                                                        <option value="">한국씨티은행</option>
                                                        <option value="">하나은행</option>
                                                        <option value="">sc제일은행</option>
                                                        <option value="">경남은행</option>
                                                        <option value="">광주은행</option>
                                                        <option value="">대구은행</option>
                                                        <option value="">도이치은행</option>
                                                        <option value="">뱅크오브아메리카</option>
                                                        <option value="">부산은행</option>
                                                        <option value="">산림조합중앙회</option>
                                                        <option value="">저축은행</option>
                                                        <option value="">새마을금고</option>
                                                        <option value="">수협은행</option>
                                                        <option value="">우체국</option>
                                                        <option value="">전북은행</option>
                                                        <option value="">신협중앙회</option>
                                                        <option value="">제주은행</option>
                                                        <option value="">카카오뱅크</option>
                                                    </select>                                                   
                                                </li>
                                                <li>
                                                    <label htmlFor="">계좌번호</label>
                                                    <p className="error">·숫자만 입력 가능합니다.</p>
                                                    <input type="text" placeholder="'-'없이 계좌번호 입력"/>                                      
                                                </li>
                                                <li>
                                                    <label htmlFor="">예금주</label>
                                                    <p className="error">·error here</p>
                                                    <input type="text" placeholder="법인명이 포함된 예금주명 입력"/>                                                   
                                                </li>
                                                <li>
                                                    <label htmlFor="">통장사본 업로드</label>
                                                    <p className="gray2_color font_13">jpg, jpeg, png, pdf만 업로드 가능합니다.</p>
                                                    <p className="error">·error here</p>
                                                    <File_upload
                                                        flie_id = "file1"
                                                       downShow={false}                                               
                                                  />                                                   
                                                </li>
                                            </ul>                                            
                                        </div>
                                    </div>
                                    <div className="bd_box clearfix2">
                                        <div className="left"> 
                                            <Title 
                                                num="02."
                                                title ="대표자 정보"
                                                star="*"
                                                text = {
                                                    <>                                                    
                                                    <p className="error">·error here</p>
                                                    </>
                                                }
                                                buttonShow={false}
                                                buttonDisabled={false}
                                            />
                                        </div>
                                        <div className="right form_ul">                                            
                                            <ul className="representative_list">
                                                <li className="top">
                                                    <div className="clearfix">
                                                        <p>대표자가</p><input type="text" placeholder=""/><p>명입니다.</p>
                                                    </div>
                                                </li>
                                                <li>                                                    
                                                    <input type="text" placeholder="대표자 성함"/>         
                                                    <input type="text" placeholder="연락처"/>
                                                </li>
                                                <li>                                                    
                                                    <input type="text" placeholder="대표자 성함"/>         
                                                    <input type="text" placeholder="연락처"/>
                                                </li>
                                            </ul>                                            
                                        </div>
                                    </div>
                                    <div className="bd_box last clearfix2">
                                        <div className="left"> 
                                            <Title 
                                                num="03."
                                                title ="수령 정보 입력"
                                                star="*"
                                                text = {
                                                    <>      
                                                    <p>·사전심사를 통과하시면 계약서를 등기우편으로 보내드립니다. 계약서를 수령하실 주소와 담당자의 정보를 입력해주세요.</p> 
                                                    <p className="error">·error here</p>
                                                    </>
                                                }
                                                buttonShow={false}
                                                buttonDisabled={false}
                                            />
                                        </div>
                                        <div className="right form_ul">
                                            <ul className="date_ul ">
                                                <li>
                                                    <label htmlFor="">수령인 성함</label>
                                                    <p className="error">·error here</p>
                                                    <input type="text" placeholder="우편 수령자 이름 입력"/>                                        
                                                </li>
                                                <li>
                                                    <label htmlFor="">수령인 휴대전화 번호</label>
                                                    <p className="error">·숫자만 입력 가능합니다.</p>
                                                    <input type="text" placeholder="수령인 휴대전화 번호 입력"/>                                      
                                                </li>
                                                <li>
                                                    <label htmlFor="">수령받을 주소</label>
                                                    <p className="error">·error here</p>
                                                    <div className="address">
                                                        <div className="btn_input clearfix">
                                                            <input type="text"/>
                                                            <button type="button" className="btn">주소검색</button>
                                                        </div>
                                                        {/* 주소 입력후에 노출 ▼*/}
                                                        <p className="detail_address">서울특별시 강남구 강남대로 102길 38</p>
                                                        <input type="text" placeholder="상세주소 입력"/>
                                                    </div>                                            
                                                </li>                                                
                                            </ul>                                            
                                        </div>
                                    </div>
                                    <div className="bottom_btn rightT">
                                        <button type="button" className="btn">임시저장</button>             
                                        <button type="button" className="btn">심사 요청</button>             
                                    </div>
                                </div>
                               
                            {/* container 끝 */}      
                            </div>                        
                        {/* gray_bg 끝 */}                       
                        </div>  
                        {/* cont 끝 */}                    
                    </div>
                    {/* clearfix 끝 */}
                </section>
                {/* 팝업 ------------------------------------ */}
                {/* 사전심사 준비전팝업 */}
                <div className="pop_wrap project_pop audit_pop audit_pop1">
                    <div className="dim"></div>      
                    <div className="pop_cont">
                        <div className="rightT"> 
                            <button type="button" className="close_pop"><img src={ require('../images/icons/close_btn.png')} alt="팝업닫기아이콘"/></button>                    
                        </div>                        
                        <div className="cont_box">
                            <h3>필수 입력 항목을 확인 해주세요</h3>
                            <ul>
                                <li>
                                    <p>자격확인</p>
                                    <p>·01, 02, 03, 04</p>
                                </li>
                                <li>
                                    <p>기본자료</p>
                                    <p>·02, 04</p>
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
                 {/* 사전심사 준비완료팝업 */}
                 <div className="pop_wrap project_pop audit_pop audit_pop2">
                    <div className="dim"></div>      
                    <div className="pop_cont">
                        <div className="rightT"> 
                            <button type="button" className="close_pop"><img src={ require('../images/icons/close_btn.png')} alt="팝업닫기아이콘"/></button>                    
                        </div>                        
                        <div className="cont_box">
                            <h3>해당 내용을 제출하시겠습니까?</h3>
                            <p>제출하시면 최종심사 절차를 진행하게 됩니다.<br></br>제출하지않고 저장을 원하신다면 취소 버튼을 선택하세요.</p>                           
                            <div>
                                <button type="button" className="btn pop_submit line_btn">취소</button>
                                <button type="button" className="btn pop_submit">제출하기</button>
                            </div>
                              
                        </div>
                    </div>                      
                </div>
                {/* 최종심사 확인팝업 */}
                <div className="pop_wrap project_pop audit_pop audit_pop3">
                    <div className="dim"></div>      
                    <div className="pop_cont">
                        <div className="rightT"> 
                            <button type="button" className="close_pop"><img src={ require('../images/icons/close_btn.png')} alt="팝업닫기아이콘"/></button>                    
                        </div>                        
                        <div className="cont_box">
                            <h3>계약준비 내용을 제출하시겠습니까?</h3>
                            <p>제출하시면 심사 절차를 진행됩니다.</p>                           
                            <div>
                                <button type="button" className="btn pop_submit line_btn">취소</button>
                                <button type="button" className="btn pop_submit">제출하기</button>
                            </div>                              
                        </div>
                    </div>                      
                </div>
                
                {/* 계약준비 제출 시 보이는 토스트팝업 */}
                <div className="toast_pop audit_toast">
                    <p className="font_13 white_color">계약 준비 자료를 제출했습니다.</p>
                </div>
                 {/* 6명이상 입력시  보이는 토스트팝업 */}
                 <div className="toast_pop audit_toast max_toast">
                    <p className="font_13 white_color">최대 5명까지 입력 가능합니다.</p>
                </div>
            </>
        )
    }
}