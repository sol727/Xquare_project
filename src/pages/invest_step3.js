import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer';
import $ from 'jquery'

export default class Invest_step3 extends React.Component {

    constructor(props) {
    super(props);
    }
    // $(document).ready({ ... })sta
    componentDidMount(){

        
    }

    render() {
        return (
            <>
                <Header />
                <section className="invest_page step">
                     {/*상단부분---------------- */}
                    <div className="top_banner">
                        <h1>투자하기</h1>
                    </div>
                    <div className="invest_top_box">
                        <ul className="clearfix">
                            <li className="mo_none">
                                <Link to="/">
                                    <img src={ require('../images/icons/home_icon.png') } alt="홈아이콘"/>
                                </Link>
                            </li>
                            <li>투자하기</li>
                            <li className="on">지금 투자하기</li>
                        </ul>
                    </div>
                     {/*---------------------상단부분끝 */}
                     <div className="container step3">
                        <div className="step_progress">
                            <ul className="">
                                <li className="past"><div></div><p>투자정보입력</p></li>
                                <li className="past"><div></div><p className="centerT">약관 및 투자위험</p></li>
                                <li className="clearfix3 now"><div className=""></div><p className="rightT">투자금 결제</p></li>
                            </ul>
                            <div className="step_bar step_bar1"></div>
                            <div className="step_bar step_bar2"></div>
                        </div>
                        <div className="title_box centerT">
                            <p className="font_13 gray4_color">STEP 03</p>
                            <h1 className="title">투자금 결제</h1>
                        </div>
                        <div className="gray_bg">
                            
                        </div>
                        <div className="page_btn centerT">
                            <button className="point_color font_15 mr24 d_ib" onClick={() => window.history.back()}>이전</button>
                            <button className="unable_btn d_ib" onClick={() => window.location.pathname = "/invest_complete"} >다음</button>
                        </div>
                     </div>

                </section>
                <Footer />
            </>
        )
    }
}