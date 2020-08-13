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
                                <Link to="/invest_index">
                                    <img src={ require('../images/icons/home_icon.png') } alt="홈아이콘"/>
                                </Link>
                            </li>
                            <li>투자하기</li>
                            <li className="on">지금 투자하기</li>
                        </ul>
                    </div>
                     {/*---------------------상단부분끝 */}
                </section>
                <Footer />
            </>
        )
    }
}