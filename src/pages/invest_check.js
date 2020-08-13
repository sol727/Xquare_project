import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer';
import $ from 'jquery'

export default class Invest_check extends React.Component {
    
    constructor(props) {
    super(props);
    }

    componentDidMount(){
        
    
    }

    render() {
        return (
            <>
                <Header />

                <section className="invest_page invest_check">
                    <div className="top_banner">
                        <h1>투자하기</h1>
                    </div>
                    <div className="invest_top_box mo_none">
                        <ul className="clearfix">
                            <li>
                                <Link>
                                    <img src={ require('../images/icons/home_icon.png') } alt="홈아이콘"/>
                                </Link>
                            </li>
                            <li>투자하기</li>
                            <li className="on">지금 투자하기</li>
                        </ul>
                    </div>
                    <div className="container">
                        <h1 className="big_title">투자 한도 조회</h1>
                        <div className="cont">
                            <ul>
                                <li className="top">
                                    <p><span className="point_color">홍길동</span>님의 안전한 투자를 위해 한국예탁결제원에서 투자등급과 투자한도를 조회합니다.</p>
                                </li>
                                <li className="logo_box">
                                    <img src={ require('../images/img_logo_xquare.png') } alt="xquare로고"/>
                                    <img src={ require('../images/logo_ksd.png') } alt="ksd로고"/>
                                </li>
                                <li className="loading_box">
                                    <button type="button">COMMENT</button>
                                    <p className="mt16 font_13 gray2_color">자본시장법은 투자자들의 무리한 투자를 방지하기 위하여 연간 투자한도를 정하고 있습니다.</p>
                                    <p className="mt16 font_13 gray3_color">잠시만 기다려 주세요</p>
                                    <div className="loading_bar"></div>
                                </li>
                            </ul>
                            <div className="api_box mt24"></div>
                        </div>
                    </div>


                </section>
                
                <Footer/>
            </>
        )
    }
}