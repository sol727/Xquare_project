import React from 'react'
import { Link } from 'react-router-dom';
import Studio_gnb from '../components/Studio_gnb'

export default class V3_funding3 extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
                <section className="v3">
                    <div className="clearfix">
                        <Studio_gnb/>
                        <div className="cont">
                            
                        </div>
                    </div>
                </section>
                {/* 팝업 ------------------------------------ */}
                {/*준비전팝업 */}
                <div className="pop_wrap project_pop audit_pop audit_pop1">
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
                 <div className="pop_wrap project_pop audit_pop audit_pop2">
                    <div className="dim"></div>      
                    <div className="pop_cont">
                        <div className="rightT"> 
                            <button type="button" className="close_pop"><img src={ require('../images/icons/close_btn.png')} alt="팝업닫기아이콘"/></button>                    
                        </div>                        
                        <div className="cont">
                            <h3>정말로 삭제하시겠습니까?</h3>
                            <p>해당 문단은 삭제 후 복구가 불가능합니다.</p>                           
                            <div>
                                <button type="button" className="btn pop_submit line_btn">취소</button>
                                <button type="button" className="btn pop_submit line_btn">삭제</button>
                            </div>
                              
                        </div>
                    </div>                      
                </div>
                {/* 미리보기 팝업 */}
                <div className="pop_wrap project_pop audit_pop audit_pop2">
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
            </>
        )
    }
}