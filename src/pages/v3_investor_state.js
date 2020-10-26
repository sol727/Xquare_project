import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer'
import Studio_gnb from '../components/Studio_gnb'

export default class V3_investor_state extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
                <Header />
                <section className="v3">
                    <div className="clearfix">
                        <Studio_gnb/>
                        <div className="cont">
                            <div className="top_box container">
                                <h1>투자자 현황</h1>
                            </div>
                            <div className="container gray_bg clearfix2">
                                <div></div>
                                <div>
                                    
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