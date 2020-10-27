
import React from 'react'

export default class CommentBox extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="comment_wrap">
                {
                    this.props.comment_num ?
                    <p className="comment_title">댓글<span class="font_18 point_color">{this.props.num}</span></p> : <></>
                }
                <div className="input_box">
                    <input type="text"/>
                    <div className="feel_box clearfix">
                        <div className="clearfix">
                            <p className="font_13 gray2_color">감정</p>
                            <ul className="clearfix">
                                {this.props.radio_li}
                            </ul>
                        </div>
                    </div>
                    <button type="button">등록</button>
                </div>
            </div>

        )
    }
}