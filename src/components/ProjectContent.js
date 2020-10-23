import React from 'react'
export default class ProjectContent extends React.Component {

    constructor(props) {
          super(props);
    }

    render() {
        return (
            <div className="pro_content">
                <a href="javascript:;">
                    <div className="top_box">
                        <div className="clearfix2 top">
                            <p className="gray2_color font_13">준비중</p>
                            <p className="gray2_color font_13">yymmdd-hhnn</p>
                        </div>
                        <div className="bottom">
                            <h5>제목 미지정</h5>
                            <ul className="clearfix">
                                <li className="font_13">증권구분</li>
                                <li className="font_13">에너지 유형</li>
                            </ul>
                            <div className="clearfix2 alarm_box">
                                <p>계약준비 작성중</p>
                                <div className="bell">1</div>
                            </div>
                        </div>
                    </div>
                    <ul className="bottom_box">
                        <li className="clearfix2">
                            <div className="left">
                                <p>진행 기간</p>
                                <p>시작일<span>미지정</span></p>
                                <p>마감일<span>미지정</span></p>
                            </div>
                            <div>
                                <p>-</p>
                            </div>
                        </li>
                    </ul>
                </a>
            </div>

        )
    }
}