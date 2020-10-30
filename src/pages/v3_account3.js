import React from 'react'
import { Link } from 'react-router-dom';
import Studio_gnb from '../components/Studio_gnb'
import Back_header from '../components/back_header';
import Title from '../components/title';
import Radio from '../components/radio';
import Text_input from '../components/text_input';
export default class V3_Account3 extends React.Component {

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
                <section className="v3 studio account account3">
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
                                    <li className="on">
                                        <Link to="/V3_Account3">발행정보</Link>
                                    </li>
                                    <li>
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
                                   
                                    <div className="bd_box clearfix">
                                        <div className="left"> 
                                            <Title 
                                                num="01."
                                                title ="펀딩일정"
                                                
                                                text = {
                                                    <>
                                                    <p>·원하시는 펀딩 일정을 등록해주세요. <span>다만 최종 일정은 엑스퀘어와의 협의 후 결정된다는 점</span>을 참고해 주시기 바랍니다.</p>
                                                    <p className="error">·error here</p>
                                                    </>
                                                }
                                                buttonShow={false}
                                                buttonDisabled={false}
                                            />
                                        </div>
                                        <div className="right">
                                            <ul className="date_ul">
                                                <li>
                                                    <label htmlFor="">펀딩 시작 희망일</label>
                                                    <p>심사와 협의기간을 고려하여 오늘부터 20일 이후로 선택하시는 것을 권장합니다.</p>
                                                    <div className="date_selete">
                                                        <input type="text" className="" placeholder="날짜 선택"/>
                                                        <button type="button"><img src={ require('../images/icons/calender_icon2.png') } alt="캘린더 아이콘"/></button>
                                                    </div>                                                    
                                                </li>
                                                <li>
                                                    <label htmlFor="">펀딩 마감 희망일</label>
                                                    <p>펀딩 기간은 최소 10일 ~ 최대 30일까지 가능합니다.</p>
                                                    <div className="date_selete">
                                                        <input type="text" className="" placeholder="날짜 선택"/>
                                                        <button type="button"><img src={ require('../images/icons/calender_icon2.png') } alt="캘린더 아이콘"/></button>
                                                    </div>                                                    
                                                </li>
                                            </ul>
                                            <div className="rightT">
                                                <p className="funding_date">nn일간 펀딩을 진행합니다.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bd_box clearfix">
                                        <div className="left"> 
                                            <Title 
                                                num="02."
                                                title ="에너지 유형 설정"
                                                
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
                                            <div className="check_list check_list2 clearfix2">
                                                <div>
                                                        {/* radio_box에 on을 넣으면 활성화 disabled를 넣으면 비활성화 처리됩니다 */}
                                                     <Radio focus={this.state.step1} onChangeStep={this.onChangeStep} id="type1"  name="type"  text="태양광 (소형)"/>
                                                     <Radio focus={this.state.step1} onChangeStep={this.onChangeStep} id="type3"  name="type"  text="태양광 (중소형)"/>
                                                     <Radio focus={this.state.step1} onChangeStep={this.onChangeStep} id="type5"  name="type"  text="태양광 (중형)"/>
                                                </div>
                                                <div>
                                                    <Radio focus={this.state.step1} onChangeStep={this.onChangeStep} id="type2"  name="type"  text="태양광 (대형)"/>
                                                    <Radio focus={this.state.step1} onChangeStep={this.onChangeStep} id="type4"  name="type"  text="연료전지"/>
                                                    <Radio focus={this.state.step1} onChangeStep={this.onChangeStep} id="type6"  name="type"  text="바이오디젤"/>
                                                </div>
                                            </div>                                           
                                        </div>                 
                                    </div>
                                    <div className="bd_box clearfix">
                                        <div className="left"> 
                                            <Title 
                                                num="03."
                                                title ="발행 증권구분 설정"
                                                
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
                                            <div className="check_list check_list2 clearfix2">
                                                <div>
                                                    <Radio focus={this.state.step2} onChangeStep={this.onChangeStep2} id="type2-1"  name="type2"  text="주식형"/>                                                    
                                                </div>
                                                <div>
                                                    <Radio focus={this.state.step2} onChangeStep={this.onChangeStep2} id="type2-2"  name="type2"  text="채권형"/>                                                    
                                                </div>
                                            </div>                                           
                                        </div>                 
                                    </div>
                                    <div className="bd_line">
                                        <p>선택한 발행 증권구분</p>
                                    </div>
                                    {/* bd_box에 off 클래스를 넣으면 레이아웃이 바뀝니다. */}
                                    <div className="bd_box">
                                        <div className="big_title">
                                            <h2>주식형</h2>
                                            <p className="error">·error here</p>
                                        </div>                 
                                        <ul className="division_list">
                                            <li className="clearfix2">
                                                <div className="left"> 
                                                    <Title 
                                                        num=""
                                                        title ="증권 유형"                                                
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
                                                    <ul className="check_list check_list3 clearfix">
                                                        <li>
                                                            <Radio focus={this.state.step3} onChangeStep={this.onChangeStep3} id="division1"  name="division"  text="보통주" />                                                    
                                                        </li>
                                                        <li>
                                                            <Radio focus={this.state.step3} onChangeStep={this.onChangeStep3} id="division2"  name="division"  text="전환우선주" />     
                                                        </li>
                                                        <li>
                                                            <Radio focus={this.state.step3} onChangeStep={this.onChangeStep3} id="division3"  name="division"  text="상환전환우선주" />     
                                                        </li>
                                                    </ul>
                                                </div>       
                                            </li>
                                            <li className="clearfix2 ml16">
                                                <div className="left"> 
                                                    <Title 
                                                        num=""
                                                        title ="모집가액"                                                
                                                        text = {
                                                            <>                                                    
                                                            <p className="error">·숫자만 입력 가능합니다.</p>
                                                            </>
                                                        }
                                                        buttonShow={false}
                                                        buttonDisabled={false}
                                                    />
                                                </div>
                                                <div className="right">                                                    
                                                    <Text_input
                                                        input_text="원"
                                                    />
                                                </div>       
                                            </li>
                                            <li className="clearfix2 ml16">
                                                <div className="left"> 
                                                    <Title 
                                                        num=""
                                                        title ="모집수량"                                                
                                                        text = {
                                                            <>                                                    
                                                            <p className="error">·숫자만 입력 가능합니다.</p>
                                                            </>
                                                        }
                                                        buttonShow={false}
                                                        buttonDisabled={false}
                                                    />
                                                </div>
                                                <div className="right">                                                    
                                                    <Text_input
                                                        input_text="주"
                                                    />
                                                </div>       
                                            </li>
                                            <li className="clearfix2 ml16">
                                                <div className="left"> 
                                                    <Title 
                                                        num=""
                                                        title ="발행가액"                                                
                                                        text = {
                                                            <>                                                    
                                                            <p className="error">·숫자만 입력 가능합니다.</p>
                                                            </>
                                                        }
                                                        buttonShow={false}
                                                        buttonDisabled={false}
                                                    />
                                                </div>
                                                <div className="right">                                                    
                                                    <Text_input
                                                        input_text="원"
                                                    />
                                                </div>       
                                            </li>
                                        </ul>  
                                        <ul className="division_list">
                                            <li className="clearfix2 ml16">
                                                <div className="left"> 
                                                    <Title 
                                                        num=""
                                                        title ="모집방법"                                                
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
                                                    <div className="check_list check_list2 clearfix2">
                                                        <div>
                                                            <Radio id="method"  name="method"  text="공모" focus={this.state.step4} onChangeStep={this.onChangeStep4}/>
                                                        </div>
                                                        <div>
                                                            <Radio id="method2"  name="method"  text="사모" focus={this.state.step4} onChangeStep={this.onChangeStep4}/>     
                                                        </div>
                                                    </div>
                                                </div>       
                                            </li>
                                            <li className="clearfix2 ml16">
                                                <div className="left"> 
                                                    <Title 
                                                        num=""
                                                        title ="배정방법"                                                
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
                                                    <div className="check_list check_list2 clearfix2">
                                                        <div>
                                                            <Radio focus={this.state.step5} onChangeStep={this.onChangeStep5} id="method2-1"  name="method2"  text="정율"/>
                                                        </div>
                                                        <div>
                                                            <Radio focus={this.state.step5} onChangeStep={this.onChangeStep5} id="method2-2"  name="method2"  text="정액"/>     
                                                        </div>
                                                    </div>
                                                </div>       
                                            </li>
                                        </ul>
                                    </div>
                                    {/* bd_box에 off 클래스를 넣으면 레이아웃이 바뀝니다. */}
                                    <div className="bd_box ">
                                        <div className="big_title">
                                            <h2>채권형</h2>
                                            <p className="error">·error here</p>
                                        </div>                 
                                        <ul className="division_list">
                                            <li className="clearfix2">
                                                <div className="left"> 
                                                    <Title 
                                                        num=""
                                                        title ="증권 유형"                                                
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
                                                    <ul className="check_list check_list3 clearfix">
                                                        <li>
                                                            <Radio focus={this.state.step6} onChangeStep={this.onChangeStep6} id="division2-1"  name="division2"  text="전환사채"/>                                                    
                                                        </li>
                                                        <li>
                                                            <Radio  focus={this.state.step6} onChangeStep={this.onChangeStep6} id="division2-2"  name="division2"  text="일반 회사채"/>     
                                                        </li>                                                        
                                                    </ul>
                                                </div>       
                                            </li>
                                            <li className="clearfix2 ml16">
                                                <div className="left"> 
                                                    <Title 
                                                        num=""
                                                        title ="모집가액"                                                
                                                        text = {
                                                            <>                                                    
                                                            <p className="error">·숫자만 입력 가능합니다.</p>
                                                            </>
                                                        }
                                                        buttonShow={false}
                                                        buttonDisabled={false}
                                                    />
                                                </div>
                                                <div className="right">                                                    
                                                    <Text_input
                                                        input_text="원"
                                                    />
                                                </div>       
                                            </li>
                                            <li className="clearfix2 ml16">
                                                <div className="left"> 
                                                    <Title 
                                                        num=""
                                                        title ="이자율"                                                
                                                        text = {
                                                            <>                                                    
                                                            <p className="error">·숫자와 마침표 외에는 입력 불가합니다.</p>
                                                            </>
                                                        }
                                                        buttonShow={false}
                                                        buttonDisabled={false}
                                                    />
                                                </div>
                                                <div className="right">                                                    
                                                    <select name="" id="" className="w50 mb24">
                                                        <option value="">이자 지급 유형</option>
                                                    </select>
                                                    <Text_input
                                                        input_text="%"
                                                    />
                                                </div>       
                                            </li>
                                            <li className="clearfix2 ml16">
                                                <div className="left"> 
                                                    <Title 
                                                        num=""
                                                        title ="만기일"                                                
                                                        text = {
                                                            <>                                                    
                                                            <p className="error">·숫자만 입력 가능합니다.</p>
                                                            </>
                                                        }
                                                        buttonShow={false}
                                                        buttonDisabled={false}
                                                    />
                                                </div>
                                                <div className="right">                                                    
                                                    <Text_input
                                                        input_text="개월"
                                                    />
                                                </div>       
                                            </li>
                                        </ul>                
                                        <ul className="division_list">
                                            <li className="clearfix2 ml16">
                                                <div className="left"> 
                                                    <Title 
                                                        num=""
                                                        title ="모집방법"                                                
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
                                                    <div className="check_list check_list2 clearfix2">
                                                        <div>
                                                            <Radio focus={this.state.step7} onChangeStep={this.onChangeStep7} id="method3-1"  name="method3"  text="공모"/>
                                                        </div>
                                                        <div>
                                                            <Radio focus={this.state.step7} onChangeStep={this.onChangeStep7} id="method3-2"  name="method3"  text="사모"/>     
                                                        </div>
                                                    </div>
                                                </div>       
                                            </li>
                                            <li className="clearfix2 ml16">
                                                <div className="left"> 
                                                    <Title 
                                                        num=""
                                                        title ="배정방법"                                                
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
                                                    <div className="check_list check_list2 clearfix2">
                                                        <div>
                                                            <Radio focus={this.state.step8} onChangeStep={this.onChangeStep8} id="method4-1"  name="method4"  text="정율"/>
                                                        </div>
                                                        <div>
                                                            <Radio focus={this.state.step8} onChangeStep={this.onChangeStep8} id="method4-2"  name="method4"  text="정액"/>     
                                                        </div>
                                                    </div>
                                                </div>       
                                            </li>
                                        </ul>
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