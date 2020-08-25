import React from 'react'
import * as js from '../js/style'
import Header from '../components/header'
import Footer from '../components/footer'
import $ from 'jquery'
import Mount from '../components/mount';

export default class Notice extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
             <Mount />
            <Header />

            <section className="notice"> 
                <div className="container">
                    <div className="title_wrap centerT">
                        <h1>공지사항</h1>
                        <h2>엑스퀘어에서 제공하는 공지사항입니다.</h2>
                    </div>
                    <div className="notice_list_wrap">
                        <div className="top clearfix2">
                            <p className="total">전체 <span className="point_color">128</span>건</p>
                            <div className="clearfix2 top_box">
                                <select className="" id="">
                                    <option value="">전체</option>
                                </select>
                                <div className="search_input">
                                    <input type="text" placeholder="검색어를 입력해주세요."/>
                                    <button type="button"><img src={ require('../images/icons/search_icon2.png') } alt="화살표아이콘"/></button>
                                </div>
                            </div>
                        </div>
                        <ul className="notice_list">
                            <li className="head">
                                <ul className="clearfix">
                                    <li>번호</li>
                                    <li>제목</li>
                                    <li>등록일</li>
                                </ul>
                            </li>
                            <li>
                                <ul className="clearfix">
                                    <li className="notice_label"><p>공지</p></li>
                                    <li className="ellipsis">Energy 투자서비스 개편 안내</li>
                                    <li>2019.12.20</li>
                                </ul>
                            </li>
                            <li>
                                <ul className="clearfix">
                                    <li className="notice_label"><p>공지</p></li>
                                    <li className="ellipsis new"><p className="ellipsis">서비스 점검으로 인한 사이트 이용 중단 안내 서비스 점검서비스 점검으로 인한 사이트 이용 중단 안내 서비스 점검서비스 점검으로 인한 사이트 이용 중단 안내 서비스 점검서비스 점검으로 인한 사이트 이용 중단 안내 서비스 점검서비스 점검으로 인한 사이트 이용 중단 안내 서비스 점검</p></li>
                                    <li>2019.12.20</li>
                                </ul>
                            </li>
                        </ul>	
                    </div>
                </div>
            </section>

            <Footer />
            </>
        )
    }
}