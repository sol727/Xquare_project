import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'


export default class V3_Project extends React.Component {

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
                            <ul className="clearfix floatR">
                                <li>
                                    <h4 className="playF">2</h4>
                                    <p className="gray2_color">준비중</p>
                                </li>
                                <li>
                                    <h4 className="playF">1</h4>
                                    <p className="gray2_color">오픈예정</p>
                                </li>
                                <li>
                                    <h4 className="playF">1</h4>
                                    <p className="gray2_color">진행중</p>
                                </li>
                                <li>
                                    <h4 className="playF">2</h4>
                                    <p className="gray2_color">종료됨</p>
                                </li>
                                <li>
                                    <h4 className="playF">6</h4>
                                    <p className="gray2_color">전체</p>
                                </li>
                            </ul>
                        </div>
                        <ul className="tab_ul clearfix2">
                            <li>
                                <a href="javascript:;">전체</a>
                            </li>
                            <li>
                                <a href="javascript:;">종료된 프로젝트</a>
                            </li>
                        </ul>
                    </div>
                </section>
                <Footer />
            </>
        )
    }
}