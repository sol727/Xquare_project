
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
                <div className="input_wrap clearfix2">
                    <input type="text"/>
                    <div className="feel_box clearfix2 mt16">
                        <div className="clearfix">
                            <p className="font_13 gray2_color">감정</p>
                            <ul className="clearfix ml16">
                                {this.props.radio_li}
                            </ul>
                        </div>
                        {/* 비활성화버튼▼ */}
                        <button type="button" className="unable_btn ml16">등록</button>
                        {/* 활성화버튼▼ */}
                        {/* <button type="button" className="navy_btn ml16">등록</button> */}
                    </div>
                </div>
            </div>

        )
    }
}