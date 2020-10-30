import React from 'react'
import { Link } from 'react-router-dom';
import Studio_gnb from '../components/Studio_gnb'
import File_down from '../components/File_down';


export default class V3_Feedback extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
                <section className="v3 feedback studio">
                    <div className="clearfix">
                        <Studio_gnb/>
                        <div className="cont">
                            <div className="top_box container">
                                <h1>엑스퀘어 피드백</h1>
                            </div>
                            <div className="detail_wrap">
                                {/* div 클래스에 new 추가하면 new라벨노출됨▼ */}
                                <div className="feedback_li top_title clearfix new">
                                    <span>new</span>
                                    <p>yyyy년 mm월 dd일 n차 피드백</p>
                                </div>
                                <div className="detail">
                                    <div className="centerT">
                                        <img src={ require('../images/img_img_thumnail_default.png') } alt="리스트이미지"/>
                                        <p className="leftT">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare lacus, feugiat cras eget ultricies. Neque, bibendum sed id diam quis ipsum eget. Et maecenas mi, habitant velit, feugiat. Ipsum purus amet, nulla habitasse bibendum. Risus scelerisque pellentesque aliquam vestibulum, et amet, mi turpis egestas. Blandit quis quam sed tellus. Justo, eu blandit mollis vitae lorem sapien blandit integer vulputate. Diam vitae pellentesque pulvinar in tempus enim commodo tellus. Praesent montes, vel malesuada mauris eget tellus. Congue vitae nulla sed morbi congue mauris malesuada est. Nisl curabitur malesuada nec faucibus egestas. Diam lectus dui quis bibendum viverra a elementum ornare. Ut commodo, arcu sapien facilisis auctor ut tortor diam orci.</p>
                                    </div>
                                    <div className="file_wrap clearfix2 mb16">
                                        <p className="font_13 dark_gray_color">파일</p>
                                        <ul>
                                            <li>
                                                <File_down name="filename.file" name2="nnKB"/>
                                            </li>
                                            <li>
                                                <File_down name="filename.file" name2="nnKB"/>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                    <div className="file_wrap clearfix2">
                                        <p className="font_13 dark_gray_color">링크</p>
                                        <ul>
                                            <li className="link_li">
                                                <File_down name="link title from meta data" name2="www.address.co.domain"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <ul className="bottom_list">
                                <li className="feedback_li top_title clearfix new">
                                    <span>new</span>
                                    <p>yyyy년 mm월 dd일 n차 피드백</p>
                                </li>
                                <li className="feedback_li clearfix">
                                    <span>new</span>
                                    <p>yyyy년 mm월 dd일 n차 피드백</p>
                                </li>
                                <li className="feedback_li clearfix">
                                    <span>new</span>
                                    <p>yyyy년 mm월 dd일 n차 피드백</p>
                                </li>
                                <li className="feedback_li clearfix">
                                    <span>new</span>
                                    <p>yyyy년 mm월 dd일 n차 피드백</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}