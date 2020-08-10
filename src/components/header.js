import React from 'react'
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <header>
                <div className="container">           
                   
                    <Link to="/"><img src={ require('../images/img_logo_xquare.png') } alt="로고"/></Link>               

                    <div className="center">
                        <Link to="/"><span className="menu">투자하기</span></Link>
                        <Link to="/"><span className="menu">소식</span></Link>
                        <Link to="/"><span className="menu">소개</span></Link>
                    </div>

                    <div className="right">

                    </div>
            </div>
            </header>
        )
    }
}