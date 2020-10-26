import React from 'react'
import { Link } from 'react-router-dom';
export default class File_down extends React.Component {

    constructor(props) {
          super(props);
    }

    render() {
        return (
            <div className="file_box">
                <Link to="" className="clearfix2">
                    <div className="img_box"></div>
                    <div className="txt_box">
                        <h6 className="font_14">{this.props.name}</h6>
                        <p className="font_13 gray2_color">{this.props.name2}</p>
                    </div>
                </Link>
            </div>
        )
    }
}