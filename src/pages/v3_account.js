import React from 'react'
import { Link } from 'react-router-dom';
import Studio_gnb from '../components/Studio_gnb'
import Back_header from '../components/back_header';
import Title from '../components/title';
import Radio from '../components/radio';
export default class V3_Account extends React.Component {

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
                                    <li className="on">
                                        <Link to="/V3_Account">자격확인</Link>
                                    </li>
                                    <li>
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
                                                        <li>                                                                <Radio id="id1" class="c" text="해당하지 않습니다."/>
                                                        </li>
                                                        <li>
                                                            <Radio id="id2" class="d" text="해당합니다."/>
                                                        </li>
                                                        <li className="width_100">
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
                                                title =" 아래 나열된 산업군에 해당 되시나요?"
                                                star = "*"
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
                                                <ul className="ul_50 clearfix radio_list">
                                                    <li>
                                                        <Radio id="radio1"  name="radio-1" text="해당하지 않습니다."/>
                                                    </li>
                                                    <li>
                                                        <Radio id="radio2"  name="radio-1" text="해당합니다."/>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="gray_box">
                                            <ul className="tag_list">
                                                <li>금융 및 보험업</li>
                                                <li>부동산업</li>
                                                <li>사행성업</li>
                                                <li>일반 유흥주점</li>
                                                <li>무도업</li>
                                            </ul>
                                        </div>
                                     </div>
                                    <div className="bd_box clearfix">
                                        <div className="left"> 
                                            <Title 
                                                num="03."
                                                title ="과거 투자 유치 경험이 있으신가요?"
                                                star = "*"
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
                                                <ul className="ul_50 clearfix radio_list">
                                                    <li>
                                                        <Radio id="radio3"  name="radio-2"  text="없습니다."/>
                                                    </li>
                                                    <li>
                                                        <Radio id="radio4" name="radio-2" text="있습니다."/>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bd_box">
                                        <Title 
                                            num="04."
                                            title ="엑스퀘어에서 투자 유치를 신청하게 된 경로를 알려주세요."
                                            star = "*"
                                            text = {
                                                <>
                                                <p className=""> 5자 이상 입력</p>
                                                <p className="error">·error here</p>
                                                </>
                                            }
                                            buttonShow={false}
                                            buttonDisabled={false}
                                        />
                                        <div>
                                            <textarea name="" id="" className="width_100" rows="10"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom_btn rightT">
                                    <button type="button" className="btn">임시저장</button>             
                                    <button type="button" className="btn">다음 단계</button>             
                                </div>
                            </div>
                        </div>
                   </div>
               </section>
            </>
        )
    }
}