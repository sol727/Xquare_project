import { queries } from '@testing-library/react';
import React from 'react'
import { Link } from 'react-router-dom';
import Studio_gnb from '../components/Studio_gnb'
import File_upload from '../components/file_upload'

export default class V3_data extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
                <section className="v3 news news_write">
                    <div className="clearfix">
                        <Studio_gnb/>
                        <div className="cont">
                            <div className="top_box container">
                                <h1>새소식 관리</h1>
                            </div>
                            <div className="gray_bg clearfix2">
                                <div className="left_wrap">
                                    <div className="title_box">
                                        <p className="fw600 font_15">구분 선택</p>
                                        <p className="error mt4">반드시 선택해야 합니다.</p>
                                    </div>
                                    <div className="bottom mt8">
                                        <ul className="radio_ul">
                                            <li className="clearfix mb24">
                                                <input type="radio" name="radio" id="radio1"/><label htmlFor="radio1"></label><label htmlFor="radio1" className="font_14 fw600">공시할 내용입니다</label>
                                            </li>
                                            <li className="clearfix">
                                                <input type="radio" name="radio" id="radio2"/><label htmlFor="radio2"></label><label htmlFor="radio2" className="font_14 fw600">공시하지 않을 내용입니다</label>
                                            </li>
                                        </ul>
                                        <p className="black_alert_p mt16"><img src={ require('../images/icons/ic_ic_alert_alert_circle.svg') } alt="느낌표아이콘"/>목표금액 증액, 펀딩기간 연장등 중요사안 등록시 공시로 간주됩니다.</p>
                                    </div>
                                </div>
                                <div className="right_wrap">
                                    <div className="title_box">
                                        <p className="fw600 font_15">상세 내용</p>
                                        <p className="error mt4">내용을 입력하셔야 합니다.</p>
                                    </div>
                                    <div className="mt8">
                                        <div className="title_input">
                                            <input type="text" placeholder="제목 (최대 60자)" maxLength="60"/>
                                            <p>(23/60)</p>
                                        </div>
                                        <textarea name="" id="" cols="30" rows="10" placeholder="내용을 입력해주세요" className="mt8"></textarea>
                                        <div className="pl8 mb16">
                                            <p className="black_alert_p mt16"><img src={ require('../images/icons/ic_ic_alert_alert_circle.svg') } alt="느낌표아이콘"/>예탁결제원의 크라우드펀딩업 규정에 따라 게시 후 수정 및 삭제가 불가능합니다. 신중히 작성해주세요.</p>
                                            <p className="black_alert_p mt24"><img src={ require('../images/icons/ic_ic_alert_alert_circle.svg') } alt="느낌표아이콘"/>모든 게시물은 운영자의 심사를 거친 후 게시됩니다.</p>
                                        </div>
                                        <div className="upload_box">
                                            <File_upload/>
                                        </div>

                                        {/* 파일업로드시 보이는 파일이름 */}
                                        <ul className="mt16 file_ul">
                                            <li className="mb16">
                                                <File_upload/>
                                            </li>
                                            <li className="mb16">
                                                <File_upload/>
                                            </li>
                                        </ul>

                                        <div className="btn_wrap mt8 rightT">
                                            <button type="button" className="mr24">이전</button>

                                            {/* 활성화시 class에 orange_btn 추가 ▼*/}
                                            <button type="button" className="unable_btn">제출</button>
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