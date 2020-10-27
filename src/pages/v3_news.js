import React from 'react'
import { Link } from 'react-router-dom';
import Studio_gnb from '../components/Studio_gnb'
import InvestorCont from '../components/investorCont'

export default class V3_news extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
                <section className="v3 news">
                    <div className="clearfix">
                        <Studio_gnb/>
                        <div className="cont">
                            <div className="top_box container">
                                <h1>새소식 관리</h1>
                            </div>
                            <div className="gray_bg clearfix2">
                                <div className="news_wrap">
                                    <div className="title_box clearfix2">
                                        <h3 className="font_18">전체글<span className="font_18">6</span></h3>
                                        <button type="button" className="btn">새소식 작성</button>
                                    </div>
                                    <div className="list_box">
                                        <ul className="top_ul">
                                            <li className="font_14 centerT">제목</li>
                                            <li className="font_14 centerT">등록일</li>
                                        </ul>
                                        <ul className="bottom_ul">
                                            <li className="clearfix">
                                                <div>
                                                    <div className="label_box clearfix">
                                                        <p>일반</p>
                                                        <span>심사중</span>
                                                    </div>
                                                    <p>article title</p>
                                                </div>
                                                <p>2020-09-26</p>
                                            </li>
                                        </ul>
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