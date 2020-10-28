import React from 'react'
import { Link } from 'react-router-dom';
import Studio_gnb from '../components/Studio_gnb'
import Back_header from '../components/back_header';
import Title from '../components/title';
export default class V3_funding2 extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
                <section className="v3">
                    <Back_header/>
                    <div className="clearfix">
                        <Studio_gnb/>
                        <div className="cont">
                            <div className="top_box container">
                                <h1>펀딩 준비</h1>
                                <ul className="clearfix tab_ul">
                                    <li className="on">
                                        <Link to="/V3_funding1">발행정보 확정</Link>
                                    </li>
                                    <li>
                                        <Link to="/V3_funding2">펀딩 소개 자료</Link>
                                    </li>
                                    <li >
                                        <Link to="/V3_funding3">추가자료</Link>
                                    </li>
                                </ul>
                            </div>  
                            <div className="gray_bg">
                                <div className="container">
                                    <div className="bd_box clearfix2">
                                        <div className="left"> 
                                            <Title 
                                                num="01."
                                                title ="프로젝트명 입력"
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
                                        <div className="right">                                            
                                            {/* <Count_input
                                                count_class="title"
                                                count_placeholder="프로젝트 제목 (최대 24자)"
                                                count_text="24"
                                            /> */}
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