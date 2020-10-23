import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import ProjectContent from '../components/ProjectContent'


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
                            <li className="on">
                                <a href="javascript:;">전체</a>
                            </li>
                            <li>
                                <a href="javascript:;">종료된 프로젝트</a>
                            </li>
                        </ul>
                    </div>
                    <div className="gray_bg">
                        <div className="container">
                            <ul className="pro_list clearfix">
                                <li className="add_li">
                                    <a href="javascript:;">
                                        <img src="" alt="추가 아이콘"/>
                                        <p className="bold">프로젝트 생성</p>
                                    </a>
                                </li>
                                <li className="default_li">
                                    <ProjectContent/>
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