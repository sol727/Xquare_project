import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer'

export default class Intro extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
                <Header />
                <section className="intro">
                    <div className="container">

                    </div>
                </section>
                <Footer />
            </>
        )
    }
}