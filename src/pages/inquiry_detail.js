import React from 'react'
import * as js from '../js/style'
import Header from '../components/header'
import Footer from '../components/footer'
import $ from 'jquery'
import Mount from '../components/mount';

export default class Inquiry_detail extends React.Component {

    constructor(props) {
     super(props);
    }

    onClickLink (link) {
        window.location.pathname = link
      }

    render() {
        return (
            <>
            <Mount />
            <Header />
            <section className="inquiry detail">	
                <div className="detail_cont">
                    <div className="container"> 
                        <div className="clearfix2 detail_table_title">
                            <h2 className="table_title">1:1 문의하기</h2>
                            <button type="button"  className="title_btn" >목록으로</button>
                        </div>
                        <div className="list_table_wrap">
                            <div className="detail_table2">
                                <div className="top">
                                    <h3 className="title black_color mb12">The Calm meditation app is getting its own celebrity-filled HBO Max show</h3>
                                    <p className="date mb12">2020.05.01 06:05:46</p>
                                    <p className="text_area font_14 black_color mb12">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur 
                                        duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p>
                                    <div className="clearfix">
                                        <button type="button" className="btn2 floatR">문의 취소</button>
                                        <button type="button" className="btn2 floatR">내용 수정</button>
                                    </div>
                                    <p className="alert_msg">문의하신 내용의 수정과 취소는 고객관리팀의 답변을 받기 전까지 가능합니다.</p>
                                </div>
                                <div className="comment_box ">
                                    <div className="comment_input">
                                        <h2 className="table_title table_title2">추가답변</h2>
                                        <input type="text" placeholder="추가 답변을 입력해주세요" className="mb16"/>
                                    </div>
                                    <div className="clearfix mb8"> 
                                        <button type="button" className="btn_gray  floatR">남기기</button>
                                    </div>

                                    <ul className="comment_list">
                                        <li>
                                            <p className="black_color name">고객운영팀</p>
                                            <p className="date mb12">2020.05.01 06:05:46</p>
                                            <p className="text_area font_13 black_color mb12">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p>
                                        </li>
                                        <li>
                                            <p className="black_color name">고객운영팀</p>
                                            <p className="date mb12">2020.05.01 06:05:46</p>
                                            <p className="text_area font_13 black_color mb12">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            </>
        )
    }
}