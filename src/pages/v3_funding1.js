import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Studio_gnb from '../components/Studio_gnb'
import Back_header from '../components/back_header';
import Title from '../components/title';
import Radio from '../components/radio';
import Text_input from '../components/text_input';

export default function V3_funding1 () {

    const [ step , setStep ] = useState({
        step1: '',
        step2: '',
        step3: '',
        step4: '',
        step5: '',
        step6: '',
        step7: '',
        step8: '',
        step9: '',
        step10: '',
        step11: '',
        step12: '',
        step13: '',
        step14: '',
        step15: '',
        step16: '',
    })

    const onChangeStep = ( id, target ) => {
        setStep({
            ...step , 
            [target] : id
        })
    }

    return (
        <>
            <section className="v3 studio funding funding1">
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
                                            <p className="funding_date">30일간 펀딩을 진행합니다.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bd_box clearfix2">
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
                                        <ul className="check_list gnb_off">
                                            <li><Radio focus={step.step1} onChangeStep={onChangeStep} step="step1" id="type1"  name="type"  text="태양광 (소형)"/></li>
                                            <li> <Radio focus={step.step1} onChangeStep={onChangeStep} step="step1" id="type3"  name="type"  text="태양광 (중소형)"/></li>
                                            <li><Radio focus={step.step1} onChangeStep={onChangeStep} step="step1" id="type5"  name="type"  text="태양광 (중형)"/></li>
                                        </ul>
                                        <ul className="check_list gnb_off">
                                            <li><Radio focus={step.step1} onChangeStep={onChangeStep} step="step1" id="type2"  name="type"  text="태양광 (대형)"/></li>
                                            <li> <Radio focus={step.step1} onChangeStep={onChangeStep} step="step1" id="type4"  name="type"  text="연료전지"/></li>
                                            <li><Radio focus={step.step1} onChangeStep={onChangeStep} step="step1" id="type6"  name="type"  text="바이오디젤"/></li>
                                        </ul>                                                                                
                                    </div>                 
                                </div>
                                <div className="bd_box clearfix2">
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
                                            {/*li가 2개뿐일경우 check_list에 gnb_off , gnb_off2클래스를 넣으면 레이아웃이 바뀝니다. */}
                                        <ul className="check_list gnb_off gnb_off2">
                                            <li><Radio focus={step.step2} onChangeStep={onChangeStep} step="step2" id="type2-1"  name="type2"  text="주식형"/></li>
                                            <li><Radio focus={step.step2} onChangeStep={onChangeStep} step="step2"  id="type2-2"  name="type2"  text="채권형"/></li>
                                        </ul>
                                    </div>                 
                                </div>
                                {/* 증권유형 선택전 */}
                                <div className="bd_box clearfix2">
                                    <div className="left"> 
                                        <Title 
                                            num="04."
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
                                        <p className="font_15 black_color bold">먼저 발행하시는 증권의 구분을 결정해주세요</p>                                    
                                    </div>                 
                                </div>
                                    {/* 증권유형 주식형 선택시 */}
                                <div className="bd_box clearfix2">
                                    <div className="left"> 
                                        <Title 
                                            num="04."
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
                                        <ul className="check_list">
                                            <li>
                                                <Radio focus={step.step3} onChangeStep={onChangeStep}  step="step3" id="division1"  name="division"  text="보통주"/>                                                    
                                            </li>
                                            <li>
                                                <Radio focus={step.step3} onChangeStep={onChangeStep} step="step3"  id="division2"  name="division"  text="전환우선주(추후 서비스 예정)"/>     
                                            </li>
                                            <li>
                                                <Radio focus={step.step3} onChangeStep={onChangeStep} step="step3"  id="division3"  name="division"  text="상환전환우선주 (추후 서비스 예정)"/>     
                                            </li>
                                        </ul>                        
                                    </div>                 
                                </div>
                                {/* 증권유형 채권형 선택시 */}
                                <div className="bd_box clearfix2">
                                    <div className="left"> 
                                        <Title 
                                            num="04."
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
                                        <ul className="check_list gnb_off gnb_off2">
                                            <li><Radio focus={step.step4} onChangeStep={onChangeStep}  step="step4" id="type3-1"  name="type3"  text="전환사채"/></li>
                                            <li> <Radio focus={step.step4} onChangeStep={onChangeStep}  step="step4" id="type3-2" name="type3"  text="일반회사채"/></li>                                                
                                        </ul>                                            
                                    </div>                 
                                </div>  
                                <div className="bd_line">
                                    <p>선택한 결과</p>
                                </div>
                                {/* 보통주 선택시 */}
                                <div className="bd_box off full_box">
                                    <div className="big_title">
                                        <h2>보통주</h2>
                                        <p className="error">·error here</p>
                                    </div>                 
                                    <ul className="division_list">
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="발행가액(1주당 가격)"                                                
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
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="모집 수량"                                                
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
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="모집가액(목표금액)"                                                
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
                                                    input_class="disabled"
                                                    placeholder="자동계산"
                                                    input_text="원"
                                                />
                                            </div>         
                                        </li>
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="1인당 투자 가능 최소 수량 "                                                
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
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="발행 지분율 "                                                
                                                    text = {
                                                        <>                                                    
                                                        <p className="error">·숫자와 소수점만  입력 가능합니다.</p>
                                                        </>
                                                    }
                                                    buttonShow={false}
                                                    buttonDisabled={false}
                                                />
                                            </div>
                                            <div className="right">   
                                                <Text_input
                                                    input_text="%"
                                                />
                                            </div>         
                                        </li>
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="기업가치 "                                                
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
                                        <li className="clearfix2">
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
                                                <div className="check_list">
                                                    <div>
                                                        <Radio id="method"  focus={step.step5} onChangeStep={onChangeStep}  step="step5" name="method"  text="공모"/>
                                                    </div>
                                                    <div>
                                                        <Radio id="method2"  focus={step.step5} onChangeStep={onChangeStep}   step="step5" name="method"  text="사모"/>     
                                                    </div>
                                                </div>
                                            </div>       
                                        </li>
                                        <li className="clearfix2">
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
                                                <div className="check_list">
                                                    <div>
                                                        <Radio id="method2-1"  focus={step.step6} onChangeStep={onChangeStep}  step="step6" name="method2"  text="정율"/>
                                                    </div>
                                                    <div>
                                                        <Radio id="method2-2"  focus={step.step6} onChangeStep={onChangeStep}  step="step6" name="method2"  text="정액"/>     
                                                    </div>
                                                </div>
                                            </div>       
                                        </li>     
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="증권 입고일"                                                
                                                    text = {
                                                        <>                  
                                                        <p>한국예탁결제원의 증권발행 최종 심사 후, 엑스퀘어 관리자가 등록할 예정입니다.</p>                                  
                                                        <p className="error">·error here</p>
                                                        </>
                                                    }
                                                    buttonShow={false}
                                                    buttonDisabled={false}
                                                />
                                            </div>
                                            <div className="right">                    
                                                <div className="date_selete">
                                                    <input type="text" className="" placeholder="날짜 선택"/>
                                                    <button type="button"><img src={ require('../images/icons/calender_icon2.png') } alt="캘린더 아이콘"/></button>
                                                </div>    
                                            </div>       
                                        </li>
                                    </ul>
                                </div>

                                {/* 전환우선주 선택시 */}
                                <div className="bd_box off">
                                    <div className="big_title">
                                        <h2>전환우선주</h2>
                                        <p className="error">·error here</p>
                                    </div>                 
                                    <ul className="division_list">
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="발행가액(1주당 가격)"                                                
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
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="모집 수량"                                                
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
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="모집가액(목표금액)"                                                
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
                                                    input_class="disabled"
                                                    placeholder="자동계산"
                                                    input_text="원"
                                                />
                                            </div>         
                                        </li>
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="1인당 투자 가능 최소 수량 "                                                
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
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="발행 지분율 "                                                
                                                    text = {
                                                        <>                                                    
                                                        <p className="error">·숫자와 소수점만  입력 가능합니다.</p>
                                                        </>
                                                    }
                                                    buttonShow={false}
                                                    buttonDisabled={false}
                                                />
                                            </div>
                                            <div className="right">   
                                                <Text_input
                                                    input_text="%"
                                                />
                                            </div>         
                                        </li>
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="기업가치 "                                                
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
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="최저배당이율"                                                
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
                                                <div className="check_list">
                                                    <div>
                                                        <Radio id="method3-1" focus={step.step7} onChangeStep={onChangeStep}  step="step7"  name="method3"  text="발행금액"/>
                                                    </div>
                                                    <div>
                                                        <Radio id="method3-2" focus={step.step7} onChangeStep={onChangeStep}  step="step7" name="method3"  text="액면금액"/>
                                                    </div>
                                                </div>                                                   
                                                <Text_input
                                                    input_class="text_input2"
                                                    input_text2="연"
                                                    input_text="%"
                                                />
                                            </div>       
                                        </li>                                            
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="전환청구기간"                                                
                                                    text = {
                                                        <>                                                    
                                                        <p className="error">·종료날짜가 시작날짜보다 앞설 수 없습니다.</p>
                                                        <p className="error">·시작날짜가 펀딩 마감일보다 앞설 수 없습니다.</p>
                                                        </>
                                                    }
                                                    buttonShow={false}
                                                    buttonDisabled={false}
                                                />
                                            </div>
                                            <div className="right">                    
                                                <ul className="date_ul clearfix ul_50">
                                                    <li>
                                                        <p className="font_14 gray2_color mb8">시작일</p>
                                                        <div className="date_selete">
                                                            <input type="text" className="" placeholder="날짜 선택"/>
                                                            <button type="button"><img src={ require('../images/icons/calender_icon2.png') } alt="캘린더 아이콘"/></button>
                                                        </div>                                                    
                                                    </li>
                                                    <li>
                                                        <p className="font_14 gray2_color mb8">종료일</p>
                                                        <div className="date_selete">
                                                            <input type="text" className="" placeholder="날짜 선택"/>
                                                            <button type="button"><img src={ require('../images/icons/calender_icon2.png') } alt="캘린더 아이콘"/></button>
                                                        </div>                                                    
                                                    </li>
                                                </ul>
                                            </div>       
                                        </li>
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="전환조건"                                                
                                                    text = {
                                                        <>          
                                                        <p>예) 보통주 1:1 전환</p>                                          
                                                        <p className="error">·영어사용은 불가합니다.</p>
                                                        </>
                                                    }
                                                    buttonShow={false}
                                                    buttonDisabled={false}
                                                />
                                            </div>
                                            <div className="right">                    
                                                <input type="text"/>
                                            </div>       
                                        </li>
                                        <li className="clearfix2">
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
                                                <div className="check_list">
                                                    <div>
                                                        <Radio id="method4-1" focus={step.step8} onChangeStep={onChangeStep}  step="step8"  name="method4"  text="공모"/>
                                                    </div>
                                                    <div>
                                                        <Radio id="method4-2" focus={step.step8} onChangeStep={onChangeStep}  step="step8" name="method4"  text="사모"/>     
                                                    </div>
                                                </div>
                                            </div>       
                                        </li>
                                        <li className="clearfix2">
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
                                                <div className="check_list">
                                                    <div>
                                                        <Radio id="method5-1"  focus={step.step9} onChangeStep={onChangeStep}  step="step9"name="method5"  text="정율"/>
                                                    </div>
                                                    <div>
                                                        <Radio id="method5-2"   focus={step.step9} onChangeStep={onChangeStep}  step="step9"name="method5"  text="정액"/>     
                                                    </div>
                                                </div>
                                            </div>       
                                        </li>     
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="증권 입고일"                                                
                                                    text = {
                                                        <>                  
                                                        <p>한국예탁결제원의 증권발행 최종 심사 후, 엑스퀘어 관리자가 등록할 예정입니다.</p>                                  
                                                        <p className="error">·error here</p>
                                                        </>
                                                    }
                                                    buttonShow={false}
                                                    buttonDisabled={false}
                                                />
                                            </div>
                                            <div className="right">                    
                                                <div className="date_selete">
                                                    <input type="text" className="" placeholder="날짜 선택"/>
                                                    <button type="button"><img src={ require('../images/icons/calender_icon2.png') } alt="캘린더 아이콘"/></button>
                                                </div>    
                                            </div>       
                                        </li>
                                    </ul>
                                </div>                    
                                

                                {/* 상환전환우선주 선택시 */}
                                <div className="bd_box off">
                                    <div className="big_title">
                                        <h2>상환전환우선주</h2>
                                        <p className="error">·error here</p>
                                    </div>                 
                                    <ul className="division_list">
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="발행가액(1주당 가격)"                                                
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
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="모집 수량"                                                
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
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="모집가액(목표금액)"                                                
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
                                                    input_class="disabled"
                                                    placeholder="자동계산"
                                                    input_text="원"
                                                />
                                            </div>         
                                        </li>
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="1인당 투자 가능 최소 수량 "                                                
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
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="발행 지분율 "                                                
                                                    text = {
                                                        <>                                                    
                                                        <p className="error">·숫자와 소수점만  입력 가능합니다.</p>
                                                        </>
                                                    }
                                                    buttonShow={false}
                                                    buttonDisabled={false}
                                                />
                                            </div>
                                            <div className="right">   
                                                <Text_input
                                                    input_text="%"
                                                />
                                            </div>         
                                        </li>
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="기업가치 "                                                
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
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="최저배당이율"                                                
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
                                                <div className="check_list">
                                                    <div>
                                                        <Radio id="method6-1"  focus={step.step10} onChangeStep={onChangeStep}  step="step10"  name="method6"  text="발행금액"/>
                                                    </div>
                                                    <div>
                                                        <Radio id="method6-2"focus={step.step10} onChangeStep={onChangeStep}  step="step10" name="method6"  text="액면금액"/>
                                                    </div>
                                                </div>
                                                <Text_input
                                                    input_class="text_input2"
                                                    input_text2="연"
                                                    input_text="%"
                                                />
                                            </div>       
                                        </li>                                            
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="상환청구기간"                                                
                                                    text = {
                                                        <>                                                    
                                                        <p className="error">·종료날짜가 시작날짜보다 앞설 수 없습니다.</p>
                                                        <p className="error">·시작날짜가 펀딩 마감일보다 앞설 수 없습니다.</p>
                                                        </>
                                                    }
                                                    buttonShow={false}
                                                    buttonDisabled={false}
                                                />
                                            </div>
                                            <div className="right">                    
                                                <ul className="date_ul clearfix ul_50">
                                                    <li>
                                                        <p className="font_14 gray2_color mb8">시작일</p>
                                                        <div className="date_selete">
                                                            <input type="text" className="" placeholder="날짜 선택"/>
                                                            <button type="button"><img src={ require('../images/icons/calender_icon2.png') } alt="캘린더 아이콘"/></button>
                                                        </div>                                                    
                                                    </li>
                                                    <li>
                                                        <p className="font_14 gray2_color mb8">종료일</p>
                                                        <div className="date_selete">
                                                            <input type="text" className="" placeholder="날짜 선택"/>
                                                            <button type="button"><img src={ require('../images/icons/calender_icon2.png') } alt="캘린더 아이콘"/></button>
                                                        </div>                                                    
                                                    </li>
                                                </ul>
                                            </div>       
                                        </li>
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="상환이자율"                                                
                                                    text = {
                                                        <>                                                    
                                                        <p className="error">·숫자와 소수점만 입력 가능합니다.</p>
                                                        </>
                                                    }
                                                    buttonShow={false}
                                                    buttonDisabled={false}
                                                />
                                            </div>
                                            <div className="right">              
                                                <div className="mb24">
                                                    <p className="font_14 gray2_color mb8">적용 여부</p>
                                                    <div>
                                                        <Radio id="method7-1"  name="method7"  text="네 사용합니다."/>
                                                    </div>          
                                                </div>
                                                <ul className="clearfix ul_50">                                                      
                                                    <li>
                                                        <p className="font_14 gray2_color mb8">적용조건</p>
                                                        <select name="" id="" className="mb24">
                                                            <option value="">선택</option>
                                                        </select>                                            
                                                    </li>
                                                    <li>
                                                        <p className="font_14 gray2_color mb8">이율</p>
                                                        <Text_input
                                                            input_text="%"
                                                        />                                               
                                                    </li>
                                                </ul>
                                            </div>       
                                        </li>
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="전환청구기간"                                                
                                                    text = {
                                                        <>                                                    
                                                        <p className="error">·종료날짜가 시작날짜보다 앞설 수 없습니다.</p>
                                                        <p className="error">·시작날짜가 펀딩 마감일보다 앞설 수 없습니다.</p>
                                                        </>
                                                    }
                                                    buttonShow={false}
                                                    buttonDisabled={false}
                                                />
                                            </div>
                                            <div className="right">                    
                                                <ul className="date_ul clearfix ul_50">
                                                    <li>
                                                        <p className="font_14 gray2_color mb8">시작일</p>
                                                        <div className="date_selete">
                                                            <input type="text" className="" placeholder="날짜 선택"/>
                                                            <button type="button"><img src={ require('../images/icons/calender_icon2.png') } alt="캘린더 아이콘"/></button>
                                                        </div>                                                    
                                                    </li>
                                                    <li>
                                                        <p className="font_14 gray2_color mb8">종료일</p>
                                                        <div className="date_selete">
                                                            <input type="text" className="" placeholder="날짜 선택"/>
                                                            <button type="button"><img src={ require('../images/icons/calender_icon2.png') } alt="캘린더 아이콘"/></button>
                                                        </div>                                                    
                                                    </li>
                                                </ul>
                                            </div>       
                                        </li>
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="전환조건"                                                
                                                    text = {
                                                        <>          
                                                        <p>예) 보통주 1:1 전환</p>                                          
                                                        <p className="error">·영어사용은 불가합니다.</p>
                                                        </>
                                                    }
                                                    buttonShow={false}
                                                    buttonDisabled={false}
                                                />
                                            </div>
                                            <div className="right">                    
                                                <input type="text"/>
                                            </div>       
                                        </li>
                                        <li className="clearfix2">
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
                                                <div className="check_list">
                                                    <div>
                                                        <Radio id="method8-1" focus={step.step11} onChangeStep={onChangeStep}  step="step11" name="method8"  text="공모"/>
                                                    </div>
                                                    <div>
                                                        <Radio id="method8-2"  focus={step.step11} onChangeStep={onChangeStep}  step="step11" name="method8"  text="사모"/>     
                                                    </div>
                                                </div>
                                            </div>       
                                        </li>
                                        <li className="clearfix2">
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
                                                <div className="check_list">
                                                    <div>
                                                        <Radio id="metho9-1" focus={step.step12} onChangeStep={onChangeStep}  step="step12"name="method9"  text="정율"/>
                                                    </div>
                                                    <div>
                                                        <Radio id="method9-2"   focus={step.step12} onChangeStep={onChangeStep}  step="step12" name="method9"  text="정액"/>     
                                                    </div>
                                                </div>
                                            </div>       
                                        </li>     
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="증권 입고일"                                                
                                                    text = {
                                                        <>                  
                                                        <p>한국예탁결제원의 증권발행 최종 심사 후, 엑스퀘어 관리자가 등록할 예정입니다.</p>                                  
                                                        <p className="error">·error here</p>
                                                        </>
                                                    }
                                                    buttonShow={false}
                                                    buttonDisabled={false}
                                                />
                                            </div>
                                            <div className="right">                    
                                                <div className="date_selete">
                                                    <input type="text" className="" placeholder="날짜 선택"/>
                                                    <button type="button"><img src={ require('../images/icons/calender_icon2.png') } alt="캘린더 아이콘"/></button>
                                                </div>    
                                            </div>       
                                        </li>
                                    </ul>
                                </div>             


                                {/* 일반회사채 선택시 */}
                                <div className="bd_box off">
                                    <div className="big_title">
                                        <h2>일반회사채</h2>
                                        <p className="error">·error here</p>
                                    </div>                 
                                    <ul className="division_list">
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="발행가액(1주당 가격)"                                                
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
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="모집 수량"                                                
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
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="모집가액(목표금액)"                                                
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
                                                    input_class="disabled"
                                                    placeholder="자동계산"
                                                    input_text="원"
                                                />
                                            </div>         
                                        </li>
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="1인당 투자 가능 최소 수량 "                                                
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
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="이자율"                                                
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
                                                <Text_input
                                                    input_class="text_input2"
                                                    input_text2="연"
                                                    input_text="%"
                                                />
                                            </div>       
                                        </li>  
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="만기일 "                                                
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
                                                <p className="mt24 font_14 gray2_color">입고일 기준 2012년 08월 31일</p>
                                            </div>
                                        </li>                                           
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="상환방법"                                                
                                                    text = {
                                                        <>          
                                                        <p>예) 보통주 1:1 전환</p>                                          
                                                        <p className="error">·영어사용은 불가합니다.</p>
                                                        </>
                                                    }
                                                    buttonShow={false}
                                                    buttonDisabled={false}
                                                />
                                            </div>
                                            <div className="right">                    
                                                <input type="text"/>
                                            </div>       
                                        </li>
                                        <li className="clearfix2">
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
                                                <div className="check_list">
                                                    <div>
                                                        <Radio id="method10-1"  focus={step.step13} onChangeStep={onChangeStep}  step="step13" name="method10"  text="공모"/>
                                                    </div>
                                                    <div>
                                                        <Radio id="method10-2"    focus={step.step13} onChangeStep={onChangeStep}  step="step13" name="method10"  text="사모"/>     
                                                    </div>
                                                </div>
                                            </div>       
                                        </li>
                                        <li className="clearfix2">
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
                                                <div className="check_list">
                                                    <div>
                                                        <Radio id="method11-1"  focus={step.step14} onChangeStep={onChangeStep}  step="step14" name="method11"  text="정율"/>
                                                    </div>
                                                    <div>
                                                        <Radio id="method11-2" focus={step.step14} onChangeStep={onChangeStep}  step="step14" name="method11"  text="정액"/>     
                                                    </div>
                                                </div>
                                            </div>       
                                        </li>     
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="증권 입고일"                                                
                                                    text = {
                                                        <>                  
                                                        <p>한국예탁결제원의 증권발행 최종 심사 후, 엑스퀘어 관리자가 등록할 예정입니다.</p>                                  
                                                        <p className="error">·error here</p>
                                                        </>
                                                    }
                                                    buttonShow={false}
                                                    buttonDisabled={false}
                                                />
                                            </div>
                                            <div className="right">                    
                                                <div className="date_selete">
                                                    <input type="text" className="" placeholder="날짜 선택"/>
                                                    <button type="button"><img src={ require('../images/icons/calender_icon2.png') } alt="캘린더 아이콘"/></button>
                                                </div>    
                                            </div>       
                                        </li>
                                    </ul>
                                </div>

                                
                                {/* 전환사채 선택시 */}
                                <div className="bd_box off last">
                                    <div className="big_title">
                                        <h2>전환사채</h2>
                                        <p className="error">·error here</p>
                                    </div>                 
                                    <ul className="division_list">
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="발행가액(1주당 가격)"                                                
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
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="모집 수량"                                                
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
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="모집가액(목표금액)"                                                
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
                                                    input_class="disabled"
                                                    placeholder="자동계산"
                                                    input_text="원"
                                                />
                                            </div>         
                                        </li>
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="1인당 투자 가능 최소 수량 "                                                
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
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="이자율"                                                
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
                                                <Text_input
                                                    input_class="text_input2"
                                                    input_text2="연"
                                                    input_text="%"
                                                />
                                            </div>       
                                        </li>  
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="만기일 "                                                
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
                                                <p className="mt24 font_14 gray2_color mb24">입고일 기준 2012년 08월 31일</p>
                                            </div>
                                        </li>                                           
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="상환방법"                                                
                                                    text = {
                                                        <>          
                                                        <p>예) 만기 일시 상환</p>                                          
                                                        <p className="error">·영어사용은 불가합니다.</p>
                                                        </>
                                                    }
                                                    buttonShow={false}
                                                    buttonDisabled={false}
                                                />
                                            </div>
                                            <div className="right">                    
                                                <input type="text"/>
                                            </div>       
                                        </li>
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="전환청구기간"                                                
                                                    text = {
                                                        <>                                                    
                                                        <p className="error">·종료날짜가 시작날짜보다 앞설 수 없습니다.</p>
                                                        <p className="error">·시작날짜가 펀딩 마감일보다 앞설 수 없습니다.</p>
                                                        </>
                                                    }
                                                    buttonShow={false}
                                                    buttonDisabled={false}
                                                />
                                            </div>
                                            <div className="right">                    
                                                <ul className="date_ul clearfix ul_50">
                                                    <li>
                                                        <p className="font_14 gray2_color mb8">시작일</p>
                                                        <div className="date_selete">
                                                            <input type="text" className="" placeholder="날짜 선택"/>
                                                            <button type="button"><img src={ require('../images/icons/calender_icon2.png') } alt="캘린더 아이콘"/></button>
                                                        </div>                                                    
                                                    </li>
                                                    <li>
                                                        <p className="font_14 gray2_color mb8">종료일</p>
                                                        <div className="date_selete">
                                                            <input type="text" className="" placeholder="날짜 선택"/>
                                                            <button type="button"><img src={ require('../images/icons/calender_icon2.png') } alt="캘린더 아이콘"/></button>
                                                        </div>                                                    
                                                    </li>
                                                </ul>
                                            </div>       
                                        </li>
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="전환가격 "                                                
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
                                        <li className="clearfix2">
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
                                                <div className="check_list">
                                                    <div>
                                                        <Radio id="method12-1"  focus={step.step15} onChangeStep={onChangeStep}  step="step15" name="method12"  text="공모"/>
                                                    </div>
                                                    <div>
                                                        <Radio id="method12-2" focus={step.step15} onChangeStep={onChangeStep}  step="step15" name="method12"  text="사모"/>     
                                                    </div>
                                                </div>
                                            </div>       
                                        </li>
                                        <li className="clearfix2">
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
                                                <div className="check_list">
                                                    <div>
                                                        <Radio id="method13-1"  focus={step.step16} onChangeStep={onChangeStep}  step="step16" name="method13"  text="정율"/>
                                                    </div>
                                                    <div>
                                                        <Radio id="method13-2"  focus={step.step16} onChangeStep={onChangeStep}  step="step16" name="method13"  text="정액"/>     
                                                    </div>
                                                </div>
                                            </div>       
                                        </li>     
                                        <li className="clearfix2">
                                            <div className="left"> 
                                                <Title 
                                                    num=""
                                                    title ="증권 입고일"                                                
                                                    text = {
                                                        <>                  
                                                        <p>한국예탁결제원의 증권발행 최종 심사 후, 엑스퀘어 관리자가 등록할 예정입니다.</p>                                  
                                                        <p className="error">·error here</p>
                                                        </>
                                                    }
                                                    buttonShow={false}
                                                    buttonDisabled={false}
                                                />
                                            </div>
                                            <div className="right">                    
                                                <div className="date_selete">
                                                    <input type="text" className="" placeholder="날짜 선택"/>
                                                    <button type="button"><img src={ require('../images/icons/calender_icon2.png') } alt="캘린더 아이콘"/></button>
                                                </div>    
                                            </div>       
                                        </li>
                                    </ul>
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
        </>
    )
}