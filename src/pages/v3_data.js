import { queries } from '@testing-library/react';
import React from 'react'
import { Link } from 'react-router-dom';
import Studio_gnb from '../components/Studio_gnb'
import ProjectContent from '../components/ProjectContent'
import Radio from '../components/radio'
import Title from '../components/title';
import File_upload from '../components/file_upload';

export default class V3_data extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
                <section className="v3 v3_data">
                    <div className="clearfix">
                        <Studio_gnb/>
                        <div className="cont">
                            <div className="top_box container">
                                <h1>결산자료 제출 및 확인</h1>
                            </div>
                            <div className="gray_bg">

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
                                    <div class="notice_box">
                                        <h3 class="border_text font_16">해당 프로젝트의 주식을 소각했거나 채권 상환을 완료했거나 사업보고서 제출의 대상이신가요?</h3>
                                    </div>
                                    <div className="success_li info_box">
                                        <ProjectContent 
                                            state="성공" 
                                            date="200701-1301" 
                                            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                            label1="채권형(일반회사채)"
                                            label2="연료전지"
                                            
                                            alarmShow={true}
                                            bottomShow={true}
                                        />
                                    </div>
                                    <div className="bottom_box">
                                        <ul>
                                            <li className="mb16">
                                                <Radio id="radio1"  name="radio-1" text="해당합니다"/>
                                            </li>
                                            <li>
                                                <Radio id="radio2"  name="radio-1" text="해당하지 않습니다"/>
                                            </li>
                                        </ul>
                                        {/* 버튼 활성화시 클래스에 orange_btn 추가 */}
                                        <button type="button" className="unable_btn">결과 보기</button>
                                    </div>

                                    {/* 결산자료제출 해당하지않을때 */}
                                    <div className="bottom_cont mt10">
                                        <div className="top_wrap">
                                            <p className="font_14">이 프로젝트는</p>
                                            <div class="notice_box mt8 mb24">
                                                <h3 class="border_text font_24">결산자료 게재 면재 대상입니다</h3>
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
                                            <div className="right file_box file_box2">
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
                                    
                                    {/* 결산자료제출 해당할때 */}
                                    <div className="bottom_cont mt10">
                                        <div className="top_wrap">
                                            <p className="font_14">이 프로젝트는</p>
                                            <div class="notice_box mt8 mb24">
                                                <h3 class="border_text font_24">결산자료 게재 의무 대상입니다</h3>
                                            </div>
                                            <p className="font_13 gray2_color line_h5">자본시장법시행령 제118조16 제3항 제2호에 따라 발행인은 매 사업연도 경과 후 90일 이내에 재무제표 등 결산 관련 서류를 중개업자 홈페이지에 게재해야 합니다.</p>
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
                                            <div className="right file_box file_box2">
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
            </>
        )
    }
}