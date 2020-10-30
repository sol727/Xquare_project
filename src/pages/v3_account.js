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
            check1 : false ,
            check2 : false ,
            check3 : false ,
            check4 : false ,
            check5 : false ,
            check6 : false ,
            step1 : '',
            step2 : '',
            step3 : '',
        }

        this.onChangeCheck = this.onChangeCheck.bind(this)
        this.onChangeStep = this.onChangeStep.bind(this)
        this.onChangeStep2 = this.onChangeStep2.bind(this)
        this.onChangeStep3 = this.onChangeStep3.bind(this)

    }

    onChangeCheck(e) {
        if ( e.target.id === "check1" ) {
            
            this.setState({
                check1 : e.target.checked
            })

        } else if( e.target.id === "check2"){

            this.setState({
                check2 : e.target.checked
            })

        } else if( e.target.id === "check3"){

            this.setState({
                check3 : e.target.checked
            })

        }else if( e.target.id === "check4"){

            this.setState({
                check4 : e.target.checked
            })

        }else if( e.target.id === "check5"){

            this.setState({
                check5 : e.target.checked
            })

        }else if( e.target.id === "check6"){

            this.setState({
                check6 : e.target.checked
            })

        }
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




    render() {

        const check1 = this.state.check1
        const check2 = this.state.check2
        const check3 = this.state.check3
        const check4 = this.state.check4
        const check5 = this.state.check5
        const check6 = this.state.check6

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
                                                            <div className={`check_box check_box2 ${check1 ? 'on' : ''}`}>
                                                                <input type="checkbox" value={this.state.check1} onChange={this.onChangeCheck} id="check1" /><label htmlFor="check1"></label><label htmlFor="check1">창업 7년 이내 비상장 기업 </label>
                                                            </div>
                                                            <p className="centerT">(개업일 yyyy.mm.dd 기준)</p>
                                                        </li>
                                                        <li>
                                                             <div className={`check_box check_box2 ${check2 ? 'on' : ''}`}>
                                                                <input type="checkbox"  value={this.state.check2} onChange={this.onChangeCheck} id="check2"  /><label htmlFor="check2"></label><label htmlFor="check2">벤처기업 인증</label>
                                                            </div>
                                                        </li>
                                                        <li>    
                                                             <div className={`check_box check_box2 ${check3 ? 'on' : ''}`}>
                                                                <input type="checkbox"  value={this.state.check3} onChange={this.onChangeCheck} id="check3"  /><label htmlFor="check3"></label><label htmlFor="check3">메인비즈인증</label>
                                                            </div>                                                            
                                                        </li>
                                                        <li>
                                                            <div className={`check_box check_box2 ${check4 ? 'on' : ''}`}>
                                                                <input type="checkbox"  value={this.state.check4} onChange={this.onChangeCheck} id="check4"  /><label htmlFor="check4"></label><label htmlFor="check4">이노비스 인증</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className={`check_box check_box2 ${check5 ? 'on' : ''}`}>
                                                                <input type="checkbox" value={this.state.check5} onChange={this.onChangeCheck}  id="check5"  /><label htmlFor="check5"></label><label htmlFor="check5">프로젝트성 기업</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className={`check_box check_box2 ${check6 ? 'on' : ''}`}>
                                                                <input type="checkbox" value={this.state.check6} onChange={this.onChangeCheck}  id="check6"  /><label htmlFor="check6"></label><label htmlFor="check6">사회적기업 </label>
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
                                                        <Radio focus={this.state.step2} onChangeStep={this.onChangeStep2} id="radio1"  name="radio-1" text="해당하지 않습니다."/>
                                                    </li>
                                                    <li>
                                                        <Radio focus={this.state.step2} onChangeStep={this.onChangeStep2} id="radio2"  name="radio-1" text="해당합니다."/>
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
                                                        <Radio focus={this.state.step3} onChangeStep={this.onChangeStep3} id="radio3"  name="radio-2"  text="없습니다."/>
                                                    </li>
                                                    <li>
                                                        <Radio focus={this.state.step3} onChangeStep={this.onChangeStep3} id="radio4" name="radio-2" text="있습니다."/>
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