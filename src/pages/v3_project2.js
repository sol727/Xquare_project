import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer'

export default class V3_Project2 extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
                <Header />
                <section className="v3 project">
                    <div className="top_box container">
                        <div className="clearfix2">
                            <h1>개설한 프로젝트</h1>
                            <ul className="clearfix floatR gray_ul">
                                <li>
                                    <h4 className="playF">2</h4>
                                    <p className="gray2_color font_13">준비중</p>
                                </li>
                                <li>
                                    <h4 className="playF">1</h4>
                                    <p className="gray2_color font_13">오픈예정</p>
                                </li>
                                <li>
                                    <h4 className="playF">1</h4>
                                    <p className="gray2_color font_13">진행중</p>
                                </li>
                                <li>
                                    <h4 className="playF">2</h4>
                                    <p className="gray2_color font_13">종료됨</p>
                                </li>
                                <li>
                                    <h4 className="playF">6</h4>
                                    <p className="gray2_color font_13">전체</p>
                                </li>
                            </ul>
                        </div>
                        <ul className="tab_ul clearfix2">
                            <li>
                                <Link to="/v3_project">전체</Link>
                            </li>
                            <li  className="on">
                                <Link to="/v3_project2">종료된 프로젝트</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="gray_bg">
                        <div className="container">
                            <div className="no_data centerT">
                                <img src={require("../images/icons/nodata_icon.png")} alt="노데이터 느낌표아이콘"/>
                                <p>종료된 프로젝트가 없습니다.</p>
                            </div>
                            <button type="button" className="fixed_btn"><img src={require('../images/icons/plus_icon.png')} alt="플러스 아이콘"/></button>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        )
    }
}