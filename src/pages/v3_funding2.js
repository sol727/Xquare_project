import React from 'react'
import { Link } from 'react-router-dom';
import Studio_gnb from '../components/Studio_gnb'

export default class V3_funding2 extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
                <section className="v3">
                    <div className="clearfix">
                        <Studio_gnb/>
                        <div className="cont">
                            
                        </div>
                    </div>
                </section>
            </>
        )
    }
}