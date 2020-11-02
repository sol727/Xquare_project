import { queries } from '@testing-library/react';
import React from 'react'
import { Link } from 'react-router-dom';
import Studio_gnb from '../components/Studio_gnb'
import ProjectContent from '../components/ProjectContent'
import Radio from '../components/radio'
import Title from '../components/title';
import File_upload from '../components/file_upload';
import File_down from '../components/File_down';
import Back_header from '../components/back_header';

export default class V3_data extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            step1 : '',
        }

        this.onChangeStep = this.onChangeStep.bind(this)
    }
    onChangeStep(id) {
        this.setState({
            step1 : id
        })
    }


    render() {

        return (
            <>
                <section className="v3 v3_data studio">
                    <Back_header/>
                    <div className="clearfix">
                        <Studio_gnb/>
                        <div className="cont">
                            <div className="top_box container">
                                <h1>결산자료 제출 및 확인</h1>
                            </div>
                            <div className="gray_bg">
                                {/* 결산자료제출후 심사기간일때 */}
                                <div className="notice_box reject_box">
                                    <div className="clearfix2">
                                        <div className="border_text left">
                                            <h3 className="font_18 mb12 fw600">결산자료 제출 결과</h3>
                                            <p className="font_13">· 제출하신 nnnn년 결산자료를 확인중입니다.</p>
                                        </div>
                                        <div className="right">
                                            <button type="button" className="btn big mt8 mb0">심사중</button>
                                        </div>
                                    </div>
                                    <p className="mt16 mb16 font_14 centerT">결산자료 심사는 최대 3영업일 소요됩니다</p>
                                </div>

                                {/* 결산자료제출후 심사후 반려되었을때 */}
                                <div className="notice_box reject_box">
                                    <div className="clearfix2">
                                        <div className="border_text left">
                                            <h3 className="font_18 mb12 fw600">결산자료 제출 결과</h3>
                                            <p className="error">· 제출하신 nnnn년 결산자료는 반려되었습니다.</p>
                                        </div>
                                        <div className="right">
                                            <button type="button" className="btn big mt8 mb0">자세히 보기</button>
                                        </div>
                                    </div>
                                </div>

                                {/* 아직시즌아닐때 */}
                                <div className="bd_box mt10 not_season clearfix2">
                                    <div>
                                        <h3 className="font_16">결산자료 제출 안내</h3>
                                        <p className="font_13 gray2_color mt4 line_h5">· 펀딩에 성공한 프로젝트의 발행인이 매년 상반기, 투자자에게 사업상황을 공시할 의무가 있음에 따라 제출해야 합니다. 결산자료 공시 시기에 이메일로 알림을 드립니다.</p>
                                    </div>
                                    <div className="right_box">
                                        <h4 className="font_15 mt16 mb24">알림 받을 연락처 정보</h4>
                                        <div className="centerT">
                                            <p className="font_15 mb16">username@mail.com</p>
                                            <p className="font_15">010-1111-1111</p>
                                        </div>
                                    </div>
                                </div>

                                {/* 시즌일때 */}
                                <div className="season_box">
                                    <div className="notice_box">
                                        <h3 className="border_text font_16">해당 프로젝트의 주식을 소각했거나 채권 상환을 완료했거나 사업보고서 제출의 대상이신가요?</h3>
                                    </div>
                                    <div className="success_li info_box">
                                        <ProjectContent 
                                            state="성공" 
                                            date="200701-1301" 
                                            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                            label_li={
                                                <>
                                                <li>채권형(일반회사채)</li>
                                                <li>연료전지</li>
                                                </>
                                            }
                                            txt1="진행 기간"
                                            start="시작일"
                                            start_day="yyyy.mm.dd"
                                            end="마감일"
                                            end_day="yyyy.mm.dd"
                                            txt2="달성률"
                                            goal="목표 모금액"
                                            goal_txt="nn,nnn,nnn"
                                            attain="달성 모금액"
                                            attain_txt="nn,nnn,nnn"
                                            circle={[
                                                {
                                                    text : '종료' ,
                                                    percentage : 0 ,
                                                    type : 0
                                                } ,
                                                {
                                                    text : '120%' ,
                                                    percentage : 120 ,
                                                    type : 1
                                                }
                                            ]}
                                            
                                            alarmShow={false}
                                            bottomShow={true}
                                            
                                        />
                                    </div>
                                    <div className="bottom_box">
                                        <ul>
                                            <li className="mb16">
                                                <Radio  focus={this.state.step1} onChangeStep={this.onChangeStep} id="radio1" radio_box="radio_box2" name="radio-1" text="해당합니다"/>
                                            </li>
                                            <li>
                                                <Radio  focus={this.state.step1} onChangeStep={this.onChangeStep} id="radio2" radio_box="radio_box2" name="radio-1" text="해당하지 않습니다"/>
                                            </li>
                                        </ul>
                                        {/* 버튼 활성화시 클래스에 orange_btn 추가 */}
                                        <button type="button" className="unable_btn">결과 보기</button>
                                    </div>

                                    {/* 결산자료제출 해당하지않을때 시작*/}
                                        {/* 반려된제출 디테일뷰 시작*/}
                                    <div className="red_box mb10 clearfix2">
                                        <div className="txt_box mb10">
                                            <h5 className="font_16 fw600 red_color mb10">아래의 사항을 수정해주세요</h5>
                                            <p className="font_13 fw600 red_color line_h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et faucibus suscipit massa pulvinar. Et sed sit pellentesque morbi. Molestie est lacus, cursus nec tellus.</p>
                                        </div>
                                        <ul>
                                            <li className="mb10">
                                                <File_down name="filename.file" name2="nnKB"/>
                                            </li>
                                            <li className="link_li">
                                                <File_down name="link title from meta data" name2="www.address.co.domain"/>
                                            </li>
                                        </ul>
                                    </div>
                                        {/* 반려된제출 디테일뷰 끝*/}

                                    <div className="bottom_cont mt10">
                                        <div className="top_wrap">
                                            <p className="font_14 fw600">이 프로젝트는</p>
                                            <div className="notice_box mt8 mb24">
                                                <h3 className="border_text font_24">결산자료 게재 면재 대상입니다</h3>
                                            </div>
                                            <p className="font_13 gray2_color line_h5">자본시장법시행령 제118조16 제3항 제2호에 따라 발행인은 매 사업연도 경과 후 90일 이내에 재무제표 등 결산 관련 서류를 중개업자 홈페이지에 게재해야 하지만, 앞선 답변에 따르면 게재의무가 면재됩니다. 따라서 공시 의무 종료 증빙서류를 제출하시기 바랍니다.</p>
                                            <div className="gray_box">
                                                <p className="font_13 gray2_color mb10">·pdf파일로 업로드 해주시기 바랍니다.</p>
                                                <p className="font_13 gray2_color">·주주총회 결의 후 법인인감이 날인되어 있어야 합니다.</p>
                                            </div>
                                        </div>
                                        <div className="bd_box bd_none clearfix2 mb10">
                                            <div className="left">
                                                <Title 
                                                    num=""
                                                    title ="법인등기부등본"
                                                    star ="*"
                                                    
                                                    text = {
                                                        <>
                                                        <p>·아래의 사항중 해당되는 서류를 제출하세요.</p>
                                                        <p>- 주식소삭 : 주식소각 완료를 입증하는 발행인 공문</p>
                                                        <p>- 채권상환 : 채권상환 완료를 입증하는 발행인 공문 또는 발행등록사실확인서(전자등록 채권인 경우)</p>
                                                        <p>- 사업보고서 제출대상 : 사업보고서 제출 대상임을 입증하는 발행인 공문 또는 상장증명서(거래소 발급)</p>
                                                        <p className="error">·등록 할 수 없는 파일형식입니다.</p>
                                                        </>
                                                    }
                                                    label_title="공시 의무 종료 증빙서류"
                                                    labelShow={true}
                                                    labelDisabled={false}
                                                />
                                            </div>
                                            <div className="right file_box">
                                                <div className="delt_btn_none mb16">
                                                    <File_upload
                                                        flie_id = "file1"
                                                        downShow={false}
                                                    />
                                                </div>
                                                <ul>
                                                    <li className="upload_btn_none mb16">
                                                        <File_upload
                                                            flie_id = "file1"
                                                            downShow={false}
                                                        />
                                                    </li>
                                                    <li className="upload_btn_none mb16">
                                                        <File_upload
                                                            flie_id = "file1"
                                                            downShow={false}
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="bd_box bd_none clearfix2">
                                            <div className="left mt16">
                                                <Title 
                                                    num=""
                                                    title ="새소식 알림"
                                                    star ="*"
                                                    
                                                    text = {
                                                        <>
                                                        <p>·이 내용은 ‘새소식'에 업로드 되며, 공시 의무 종료에 따라 투자자에게 전달할 메시지를 작성해 주시면 됩니다.</p>
                                                        <p className="error">·error here</p>
                                                        </>
                                                    }
                                                    label_title="투자자 노출"
                                                    labelShow={true}
                                                    labelDisabled={false}
                                                />
                                            </div>
                                            <div className="right file_box2 mt16">
                                                <div className="write_box mt24">
                                                    <div className="title_input mb16">
                                                        <input type="text" placeholder="제목 (최대 60자)" maxLength="60"/>
                                                        <p>(0/60)</p>
                                                    </div>
                                                    <textarea name="" id="" cols="30" rows="10" placeholder="내용을 입력해주세요"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 결산자료제출 해당하지않을때 끝*/}

                                    {/* 결산자료제출 해당할때 시작*/}
                                    <div className="bottom_cont mt10">
                                        <div className="top_wrap">
                                            <p className="font_14 fw600">이 프로젝트는</p>
                                            <div className="notice_box mt8 mb24">
                                                <h3 className="border_text font_24">결산자료 게재 의무 대상입니다</h3>
                                            </div>
                                            <p className="font_13 gray2_color line_h5">자본시장법시행령 제118조16 제3항 제2호에 따라 발행인은 매 사업연도 경과 후 90일 이내에 재무제표 등 결산 관련 서류를 중개업자 홈페이지에 게재해야 합니다.</p>
                                            <div className="gray_box">
                                                <p className="font_13 gray2_color mb10">·pdf파일로 업로드 해주시기 바랍니다.</p>
                                                <p className="font_13 gray2_color">·주주총회 결의 후 법인인감이 날인되어 있어야 합니다.</p>
                                            </div>
                                        </div>
                                        <div className="bd_box bd_none clearfix2 mb0">
                                            <div className="left">
                                                <Title 
                                                    num=""
                                                    title ="법인등기부등본"
                                                    star ="*"
                                                    
                                                    text = {
                                                        <>
                                                        <p className="error">·등록 할 수 없는 파일형식입니다.</p>
                                                        </>
                                                    }
                                                    label_title="투자자 노출"
                                                    labelShow={true}
                                                    labelDisabled={false}
                                                />
                                            </div>
                                            <div className="right file_box">
                                                <div className="delt_btn_none mb16">
                                                    <File_upload
                                                        flie_id = "file1"
                                                        downShow={false}
                                                    />
                                                </div>
                                                <ul>
                                                    <li className="upload_btn_none mb16">
                                                        <File_upload
                                                            flie_id = "file1"
                                                            downShow={false}
                                                        />
                                                    </li>
                                                    <li className="upload_btn_none mb16">
                                                        <File_upload
                                                            flie_id = "file1"
                                                            downShow={false}
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="bd_box bd_none clearfix2 mb0">
                                            <div className="left">
                                                <Title 
                                                    num=""
                                                    title ="대차대조표 및 그 부속명세서"
                                                    star ="*"
                                                    
                                                    text = {
                                                        <>
                                                        <p className="error">·등록 할 수 없는 파일형식입니다.</p>
                                                        </>
                                                    }
                                                    label_title="투자자 노출"
                                                    labelShow={true}
                                                    labelDisabled={false}
                                                />
                                            </div>
                                            <div className="right file_box ">
                                                <div className="delt_btn_none mb16">
                                                    <File_upload
                                                        flie_id = "file1"
                                                        downShow={false}
                                                    />
                                                </div>
                                                <ul>
                                                    <li className="upload_btn_none mb16">
                                                        <File_upload
                                                            flie_id = "file1"
                                                            downShow={false}
                                                        />
                                                    </li>
                                                    <li className="upload_btn_none mb16">
                                                        <File_upload
                                                            flie_id = "file1"
                                                            downShow={false}
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="bd_box bd_none clearfix2 mb0">
                                            <div className="left">
                                                <Title 
                                                    num=""
                                                    title ="이익잉여금처분 (또는 결손금처리)계산서"
                                                    star ="*"
                                                    
                                                    text = {
                                                        <>
                                                        <p className="error">·등록 할 수 없는 파일형식입니다.</p>
                                                        </>
                                                    }
                                                    label_title="투자자 노출"
                                                    labelShow={true}
                                                    labelDisabled={false}
                                                />
                                            </div>
                                            <div className="right file_box ">
                                                <div className="delt_btn_none mb16">
                                                    <File_upload
                                                        flie_id = "file1"
                                                        downShow={false}
                                                    />
                                                </div>
                                                <ul>
                                                    <li className="upload_btn_none mb16">
                                                        <File_upload
                                                            flie_id = "file1"
                                                            downShow={false}
                                                        />
                                                    </li>
                                                    <li className="upload_btn_none mb16">
                                                        <File_upload
                                                            flie_id = "file1"
                                                            downShow={false}
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="bd_box bd_none clearfix2 mb0">
                                            <div className="left">
                                                <Title 
                                                    num=""
                                                    title ="감사보고서 (선택)"
                                                    star ="*"
                                                    
                                                    text = {
                                                        <>
                                                        <p>·회계 감사를 받았다면, 제출하셔야 합니다.</p>
                                                        <p>·펀딩 모집가액과 과거 1년동안 이루어진 증권의 모집가액 각각의 합계액이 10억원 이상인 경우</p>
                                                        <p className="error">·등록 할 수 없는 파일형식입니다.</p>
                                                        </>
                                                    }
                                                    label_title="투자자 노출"
                                                    labelShow={true}
                                                    labelDisabled={false}
                                                />
                                            </div>
                                            <div className="right file_box ">
                                                <div className="delt_btn_none mb16">
                                                    <File_upload
                                                        flie_id = "file1"
                                                        downShow={false}
                                                    />
                                                </div>
                                                <ul>
                                                    <li className="upload_btn_none mb16">
                                                        <File_upload
                                                            flie_id = "file1"
                                                            downShow={false}
                                                        />
                                                    </li>
                                                    <li className="upload_btn_none mb16">
                                                        <File_upload
                                                            flie_id = "file1"
                                                            downShow={false}
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="bd_box bd_none clearfix2 mb0">
                                            <div className="left">
                                                <Title 
                                                    num=""
                                                    title ="기업개황"
                                                    star ="*"
                                                    
                                                    text = {
                                                        <>
                                                        <p className="error">·등록 할 수 없는 파일형식입니다.</p>
                                                        </>
                                                    }
                                                    label_title="투자자 노출"
                                                    labelShow={true}
                                                    labelDisabled={false}
                                                />
                                            </div>
                                            <div className="right file_box ">
                                                <div className="delt_btn_none mb16">
                                                    <File_upload
                                                        flie_id = "file1"
                                                        downShow={true}
                                                    />
                                                </div>
                                                <ul>
                                                    <li className="upload_btn_none mb16">
                                                        <File_upload
                                                            flie_id = "file1"
                                                            downShow={false}
                                                        />
                                                    </li>
                                                    <li className="upload_btn_none mb16">
                                                        <File_upload
                                                            flie_id = "file1"
                                                            downShow={false}
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="bd_box bd_none clearfix2 mb10">
                                            <div className="left">
                                                <Title 
                                                    num=""
                                                    title ="요약재무정보"
                                                    star ="*"
                                                    
                                                    text = {
                                                        <>
                                                        <p className="error">·등록 할 수 없는 파일형식입니다.</p>
                                                        </>
                                                    }
                                                    label_title="투자자 노출"
                                                    labelShow={true}
                                                    labelDisabled={false}
                                                />
                                            </div>
                                            <div className="right file_box ">
                                                <div className="delt_btn_none mb16">
                                                    <File_upload
                                                        flie_id = "file1"
                                                        downShow={true}
                                                    />
                                                </div>
                                                <ul>
                                                    <li className="upload_btn_none mb16">
                                                        <File_upload
                                                            flie_id = "file1"
                                                            downShow={false}
                                                        />
                                                    </li>
                                                    <li className="upload_btn_none mb16">
                                                        <File_upload
                                                            flie_id = "file1"
                                                            downShow={false}
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="bd_box bd_none clearfix2 mb0">
                                            <div className="left mt16">
                                                <Title 
                                                    num=""
                                                    title ="새소식 작성"
                                                    star ="*"
                                                    
                                                    text = {
                                                        <>
                                                        <p>·이 내용은 ‘새소식'에 업로드 되며, 공시 의무 종료에 따라 투자자에게 전달할 메시지를 작성해 주시면 됩니다.</p>
                                                        <p className="error">·error message</p>
                                                        </>
                                                    }
                                                    label_title="투자자 노출"
                                                    labelShow={true}
                                                    labelDisabled={false}
                                                />
                                            </div>
                                            <div className="right file_box2 mt16">
                                                <div className="write_box mt24">
                                                    <div className="title_input mb16">
                                                        <input type="text" placeholder="제목 (최대 60자)" maxLength="60"/>
                                                        <p>(0/60)</p>
                                                    </div>
                                                    <textarea name="" id="" cols="30" rows="10" placeholder="내용을 입력해주세요"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 결산자료제출 해당할때 끝*/}

                                    <div className="btn_wrap rightT mt10">
                                        <button type="button" className="orange_btn mr24">임시저장</button>
                                        {/* 제출버튼 활성화시 클래스에 orange_btn 추가 */}
                                        <button type="button" className="unable_btn ">제출</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* 제출 팝업 */}
                <div className="pop_wrap project_pop audit_pop data_pop">
                    <div className="dim"></div>      
                    <div className="pop_cont">
                        <div className="rightT"> 
                            <button type="button" className="close_pop"><img src={ require('../images/icons/close_btn.png')} alt="팝업닫기아이콘"/></button>                    
                        </div>                        
                        <div className="cont_box">
                            <h3 className="mb4">해당 내용을 제출하시겠습니까?</h3>
                            <p>제출하시면 최종심사 절차를 진행하게 됩니다.<br></br>제출하지않고 저장을 원하신다면 취소 버튼을 선택하세요.</p>                           
                            <div>
                                <button type="button" className="btn pop_submit line_btn">취소</button>
                                <button type="button" className="btn pop_submit">제출하기</button>
                            </div>                              
                        </div>
                    </div>                      
                </div>
                {/*  제출 시 보이는 토스트팝업 */}
                <div className="toast_pop audit_toast data_toast">
                    <p className="font_13 white_color">결산자료를 제출했습니다.</p>
                </div>

            </>
        )
    }
}