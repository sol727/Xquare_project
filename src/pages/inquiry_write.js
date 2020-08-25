import React from 'react'
import * as js from '../js/style'
import Header from '../components/header'
import Footer from '../components/footer'
import $ from 'jquery'
import Mount from '../components/mount';

export default class Inquiry_write extends React.Component {

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
            <section className="inquiry detail write">	
                <div className="detail_cont">
                    <div className="container"> 
                        <div className="clearfix2 detail_table_title">
                            <h2 className="table_title">1:1 문의 남기기</h2>
                            <button type="button"  className="title_btn" >목록으로</button>
                        </div>
                        <div className="detail_table2">
                            <div className="top">
                                <div className="input_wrap">
                                    <input type="text" placeholder="제목 (최대 30자)"/>
                                    <span>(0/30)</span>
                                </div>
                                <textarea name="" id="" cols="30" rows="10" class="mb8 inquiry_text_box" placeholder="내용을 입력해주세요"></textarea>
                                <div className="clearfix floatR">
                                    <button className="btn2">취소</button>
                                    <button className="btn_gray">등록</button>
                                    {/* 활성화시  ▼ */}
                                	{/* <button className="btn">저장</button>  */}
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