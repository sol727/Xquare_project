import React from 'react'
import { Link } from 'react-router-dom';
import Circle from '../components/Circle'
export default class ProjectContent extends React.Component {

    constructor(props) {
          super(props);
    }

    render() {
        return (
            <div className="pro_content">
                <Link to="">
                    <div className="top_box">
                        <div className="clearfix2 top">
                            <p className="gray2_color font_13">{this.props.state}</p>
                            <p className="gray2_color font_13">{this.props.date}</p>
                        </div>
                        <div className="bottom">
                            <h5 className="title">{this.props.title}</h5>
                            <ul className="clearfix">
                                <li className="font_13">증권구분</li>
                                <li className="font_13">에너지 유형</li>
                            </ul>
                            <div className="alarm_box">
                                <p>계약준비 작성중</p>
                                <div className="btn_box">
                                    <button type="button">프로젝트 바로가기</button>
                                </div>
                                <div className="bell">{this.props.alarm}</div>
                            </div>
                        </div>
                    </div>
                    <ul className="bottom_box">
                        <li className="clearfix2">
                            <div className="left">
                                <p className="bold">진행 기간</p>
                                <p>시작일<span className="gray3_color">미지정</span></p>
                                <p>마감일<span className="gray3_color">미지정</span></p>
                            </div>
                            <div className="right">
                                <Circle percent="-"/>
                            </div>
                        </li>
                        <li className="clearfix2">
                            <div className="left">
                                <p className="bold">달성률</p>
                                <p>목표 모금액<span className="gray3_color">미지정</span></p>
                                <p>달성 모금액<span className="gray3_color">미지정</span></p>
                            </div>
                            <div className="right">
                                <Circle percent="-"/>
                            </div>
                        </li>
                    </ul>
                </Link>
            </div>

        )
    }
}