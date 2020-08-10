import React from 'react'
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <header>
                
                <div className="left">

                    <img src={ require('../images/apple-icon-114x114.png') } alt=""/>

                </div>

                <div className="center">
                    <Link><span className="menu">투자하기</span></Link>
                    <Link><span className="menu">소식</span></Link>
                    <Link><span className="menu">소개</span></Link>
                </div>

                <div className="right">

                </div>

            </header>
        )
    }
}