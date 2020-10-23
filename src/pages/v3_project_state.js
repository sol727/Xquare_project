import React from 'react'
import Studio_gnb from '../components/Studio_gnb'

export default class V3_Project_state extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
               <section className="v3 studio state">
                    <Studio_gnb />
               </section>
            </>
        )
    }
}