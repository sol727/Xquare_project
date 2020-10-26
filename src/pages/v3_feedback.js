import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer'
import Studio_gnb from '../components/Studio_gnb'


export default class V3_Feedback extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
                <Header />
                <section className="v3 feedback">
                    <div className="clearfix">
                        <Studio_gnb/>
                        <div className="cont">
                            <h1 className="title">엑스퀘어 피드백</h1>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        )
    }
}