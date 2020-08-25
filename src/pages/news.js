import React from 'react'
import {Link} from 'react-router-dom';
import * as js from '../js/style'
import Header from '../components/header'
import Footer from '../components/footer'
import $ from 'jquery'
import Mount from '../components/mount';

export default class News extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
                <Mount />
                <Header />
                <section className="invest_page news_page">
                    <div className="top_banner">
                        <h1>소식</h1>
                    </div>
                    <div className="invest_top_box">
                        <ul className="clearfix">
                            <li className="mo_none">
                                <Link to="/">
                                    <img src={ require('../images/icons/home_icon.png') } alt="홈아이콘"/>
                                </Link>
                            </li>
                            <li>소식</li>
                            <li className="on">언론보도
                                <ul className="news_top_ul">
                                    <li>공지사항</li>
                                    <li>언론보도</li>
                                    <li>이벤트</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="container">
                        <div className="title_wrap centerT">
                            <h1>언론보도</h1>
                            <h2>엑스퀘어에서 제공하는 언론보도자료입니다.</h2>
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
                            <ul className="news_list">
                                <li>
                                    <Link><img src={ require('../images/default_img_s.png') } alt="기본이미지"/></Link>
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