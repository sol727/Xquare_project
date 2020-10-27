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
                                                    <select name="" id="" className="mb24">
                                                        <option value="">선택</option>
                                                    </select>                                                   
                                                </li>
                                                <li>
                                                    <label htmlFor="">계좌번호</label>
                                                    <p className="error">·숫자만 입력 가능합니다.</p>
                                                    <input type="text" placeholder="'-'없이 계좌번호 입력"/>                                      
                                                </li>
                                                <li>
                                                    <label htmlFor="">예금주</label>
                                                   
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
                                    <div className="bd_box clearfix2">
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
                                                    <input type="text" placeholder="법인명이 포함된 예금주명 입력"/>                                                   
                                                </li>                                                
                                            </ul>                                            
                                        </div>
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
            </>
        )
    }
}