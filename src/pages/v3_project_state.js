import React from 'react'
import { Link } from 'react-router-dom';
import Studio_gnb from '../components/Studio_gnb'
import File_down from '../components/File_down';


export default class V3_Project_state extends React.Component {

    constructor(props) {
    super(props);
    }
    componentDidMount() {
        document.querySelector('.v3.studio_gnb .gnb_wrap .on_menu li').classList.remove('on')
        document.querySelector('.v3.studio_gnb.off .gnb_wrap .off_menu li').classList.remove('active')
        var on = document.querySelector('.v3.studio_gnb .gnb_wrap .on_menu li:nth-child(1)')
        var active = document.querySelector('.v3.studio_gnb.off .gnb_wrap .off_menu li:nth-child(1)')
        var on2 = on.parentNode;
        var prev = on2.previousSibling;
        var next = on.nextSibling;
        on.className += " on"
        active.className += " active"
        prev.className += " prev_li"
        next.className += " next_li"
    }

    render() {
        return (
            <>
               <section className="v3 studio">
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