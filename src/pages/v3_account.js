import React from 'react'
import { Link } from 'react-router-dom';
import Studio_gnb from '../components/Studio_gnb'
import Back_header from '../components/back_header';
import Title from '../components/title';
import Radio from '../components/radio';
export default class V3_Account extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            step1 : '',
            step2 : '',
            step3 : '',
            step4 : '',
            step5 : '',
            step6 : '',
            step7 : '',
            step8 : ''
        }
        this.onChangeStep = this.onChangeStep.bind(this)
        this.onChangeStep2 = this.onChangeStep2.bind(this)
        this.onChangeStep3 = this.onChangeStep3.bind(this)
        this.onChangeStep4 = this.onChangeStep4.bind(this)
        this.onChangeStep5 = this.onChangeStep5.bind(this)
        this.onChangeStep6 = this.onChangeStep6.bind(this)
        this.onChangeStep7 = this.onChangeStep7.bind(this)
        this.onChangeStep8 = this.onChangeStep8.bind(this)
    }
    onChangeStep(id) {
        this.setState({
            step1 : id
        })
    }
    onChangeStep2(id) {
        this.setState({
            step2 : id
        })
    }
    onChangeStep3(id) {
        this.setState({
            step3 : id
        })
    }
    onChangeStep4(id) {
        this.setState({
            step4 : id
        })
    }
    onChangeStep5(id) {
        this.setState({
            step5 : id
        })
    }
    onChangeStep6(id) {
        this.setState({
            step6 : id
        })
    }
    onChangeStep7(id) {
        this.setState({
            step7 : id
        })
    }
    onChangeStep8(id) {
        this.setState({
            step8 : id
        })
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
                                                        <li>                                                              
                                                            <div className="check_box check_box2" >
                                                                <input type="checkbox" id="chk1" /><label htmlFor="chk1"></label><label htmlFor="chk1">창업 7년 이내 비상장 기업 </label>
                                                            </div>
                                                            <p className="centerT">(개업일 yyyy.mm.dd 기준)</p>
                                                        </li>
                                                        <li>
                                                             <div className="check_box check_box2" >
                                                                <input type="checkbox" id="chk2"  /><label htmlFor="chk2"></label><label htmlFor="chk2">벤처기업 인증</label>
                                                            </div>
                                                        </li>
                                                        <li>    
                                                             <div className="check_box check_box2" >
                                                                <input type="checkbox" id="chk3"  /><label htmlFor="chk3"></label><label htmlFor="chk3">메인비즈인증</label>
                                                            </div>                                                            
                                                        </li>
                                                        <li>
                                                            <div className="check_box check_box2" >
                                                                <input type="checkbox" id="chk4"  /><label htmlFor="chk4"></label><label htmlFor="chk4">이노비스 인증</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="check_box check_box2" >
                                                                <input type="checkbox" id="chk5"  /><label htmlFor="chk5"></label><label htmlFor="chk5">프로젝트성 기업</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="check_box check_box2" >
                                                                <input type="checkbox" id="chk6"  /><label htmlFor="chk6"></label><label htmlFor="chk6">사회적기업 </label>
                                                            </div>
                                                        </li>
                                                        <li className="width_100">
                                                            <Radio focus={this.state.step1} onChangeStep={this.onChangeStep} id="id2" radio_box="radio_box3"  text="해당합니다."/>
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