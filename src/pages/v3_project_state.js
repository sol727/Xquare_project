import React from 'react'
import { Link } from 'react-router-dom';
import Studio_gnb from '../components/Studio_gnb'
import File_down from '../components/File_down';


export default class V3_Project_state extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
               <section className="v3 studio">
                    <div className="clearfix">
                        <Studio_gnb on_index="1" off_index="1"/>
                        <div className="cont">
                            
                        </div>
                    </div>
               </section>
            </>
        )
    }
}