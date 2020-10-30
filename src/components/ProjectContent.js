import React from 'react'
import { Link } from 'react-router-dom';
import Circle from '../components/Circle'
export default class ProjectContent extends React.Component {

    constructor(props) {
          super(props);
    }


    render() {
        // console.log(this.props.circle[0])

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
                                {this.props.label_li}
                            </ul>
                            {
                                this.props.alarmShow ?
                                <div className="alarm_box">
                                    <p>계약준비 작성중</p>
                                    <div className="btn_box">
                                        <button type="button">프로젝트 바로가기</button>
                                    </div>
                                    <div className="bell">{this.props.alarm}</div>
                                </div> : <></>
                            }
                        </div>
                    </div>
                    {
                        this.props.bottomShow ?
                        <ul className="bottom_box">
                            <li className="clearfix2">
                                <div className="left">
                                    <p className="bold">{this.props.txt1}</p>
                                    <p>{this.props.start}<span className="gray3_color">{this.props.start_day}</span></p>
                                    <p>{this.props.end}<span className="gray3_color">{this.props.end_day}</span></p>
                                </div>
                                <div className="right">
                                    <Circle text={this.props.circle[0].text} type={this.props.circle[0].type} percentage={this.props.circle[0].percentage} />
                                </div>
                            </li>
                            <li className="clearfix2">
                                <div className="left">
                                    <p className="bold">{this.props.txt2}</p>
                                    <p>{this.props.goal}<span className="gray3_color">{this.props.goal_txt}</span></p>
                                    <p>{this.props.attain}<span className="gray3_color">{this.props.attain_txt}</span></p>
                                </div>
                                <div className="right">
                                    <Circle text={this.props.circle[1].text} type={this.props.circle[1].type} percentage={this.props.circle[1].percentage} />
                                </div>
                            </li>
                        </ul> : <></>
                    }
                </Link>
            </div>

        )
    }
}