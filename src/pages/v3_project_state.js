import React from 'react'
import { Link } from 'react-router-dom';
import Studio_gnb from '../components/Studio_gnb'
import Title from '../components/test';
import Radio from '../components/radio';
export default class V3_Project_state extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
               <section className="v3 studio state">
                   <div className="clearfix">
                    <Studio_gnb />
                        <div className="cont">
                            <div className="top_box container">
                                <h1>계약준비</h1>
                                <ul className="clearfix tab_ul">
                                    <li className="on">
                                        <Link to="/V3_Project_state">자격확인</Link>
                                    </li>
                                    <li>
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
                                        <h3 className="border_text">기업의 사실 관계와 발행을 위한 법적 자격 요건을 확인합니다. 발행을 진행하려는 기업의 실제 정보를 정확하게 입력하세요.</h3>
                                        
                                    </div>
                                    <div className="bd_box clearfix">
                                        <div className="left"> 
                                            <Title 
                                                num="01."
                                                title =" 해당되는 항목을 모두 체크하세요."
                                                text = {
                                                    <>
                                                    <p>·중복 선택 가능</p>
                                                    <p className="error">·error here</p>
                                                    </>
                                                }
                                                buttonShow={false}
                                                buttonDisabled={false}
                                            />
                                        </div>
                                        <div className="right">
                                                <div>
                                                    <ul className="ul_50 clearfix check_list">
                                                        <li>                                                                <Radio id="id1" class="c" text="해당하지 않습니다."/>
                                                            <p className="centerT">(개업일 yyyy.mm.dd 기준)</p>
                                                        </li>
                                                        <li>
                                                            <Radio id="id2" class="d" text="해당합니다."/>
                                                        </li>
                                                        <li>                                                                <Radio id="id1" class="c" text="해당하지 않습니다."/>
                                                        </li>
                                                        <li>
                                                            <Radio id="id2" class="d" text="해당합니다."/>
                                                        </li>
                                                    </ul>
                                                </div>
                                        </div>
                                     </div>
                                     <div className="bd_box clearfix">
                                        <div className="left"> 
                                            <Title 
                                                num="02."
                                                title =" 아래 나열된 산업군에 해당 되시나요?*."
                                                text = {
                                                    <>
                                                    <p className="error">·error here</p>
                                                    </>
                                                }
                                                buttonShow={false}
                                                buttonDisabled={false}
                                            />
                                        </div>
                                        <div className="right">
                                                <div>
                                                    <ul className="ul_50 clearfix">
                                                        <li>
                                                            <Radio id="id1" class="c" text="해당하지 않습니다."/>
                                                        </li>
                                                        <li>
                                                            <Radio id="id2" class="d" text="해당합니다."/>
                                                        </li>
                                                    </ul>
                                                </div>
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