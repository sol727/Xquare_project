import React from 'react'
import Opinion from '../components/opinion'
import CommentBox from '../components/commentBox'
import Back_header from '../components/back_header';
export default class V3_mo_opinion_detail extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="v3 investor_opinion mo_opinion">
                <Back_header/>
                <div className="cont">
                    <div className="top_box container">
                        <h1>투자자 의견</h1>
                    </div>
                    <div className="detail_wrap">
                        <div className="clearfix2 title_box">
                            <h3 className="font_18 white_color">커뮤니티</h3>
                            <button type="button" className="font_15 white_color">안읽음 표시</button>
                        </div>
                        <div className="text_box">
                            <Opinion
                                label_li={
                                    <>
                                    <li>질문or일반</li>
                                    </>
                                }
                                NameBoxShow={true}
                                feel_class="a"
                                name ="username"
                                TimeShow={false}
                                labelShow={true}
                                label="개인회원(일반투자자)"
                                
                                TitleShow={true}
                                title="The Calm meditation app is getting its own celebrity-filled HBO Max show"

                                DateShow={true}
                                txt_date="2020.05.01 06:05:46"

                                txt="How to build a loyal community online and offline How to build a loyal community online and offlineHow to build a loyal community online and offline How to build a loyal community online and offline"

                                ButtonShow={false}
                            />
                        </div>
                        <div className="comment_box">
                            <CommentBox
                                comment_num={true}
                                num ="3"
                                radio_li={
                                    <>
                                    <li>
                                        <input type="radio" name="radio1"className="" id="radio1_1"/>
                                        <label htmlFor="radio1_1"></label>
                                    </li>
                                    <li>
                                        <input type="radio" name="radio1"className="" id="radio1_2"/>
                                        <label htmlFor="radio1_2"></label>
                                    </li>
                                    <li>
                                        <input type="radio" name="radio1"className="" id="radio1_3"/>
                                        <label htmlFor="radio1_3"></label>
                                    </li>
                                    </>
                                }
                            />
                            <div className="bottom_comment mt9">
                                <Opinion
                                    
                                    NameBoxShow={true}
                                    feel_class="a"
                                    name ="username"
                                    TimeShow={false}
                                    labelShow={true}
                                    label="개인회원(일반투자자)"
                                    
                                    TitleShow={false}

                                    DateShow={true}
                                    txt_date="2020.05.01 06:05:46"

                                    txt="How to build a loyal community online and offline How to build a loyal community online and offlineHow to build a loyal community online and offline How to build a loyal community online and offline"

                                    ButtonShow={true}
                                    button="답글 1"
                                />
                            </div>
                            <div className="bottom_comment">
                                <Opinion
                                    
                                    NameBoxShow={true}
                                    feel_class="a"
                                    name ="username"
                                    TimeShow={false}
                                    labelShow={true}
                                    label="개인회원(일반투자자)"
                                    
                                    TitleShow={false}

                                    DateShow={true}
                                    txt_date="2020.05.01 06:05:46"

                                    txt="How to build a loyal community online and offline How to build a loyal community online and offlineHow to build a loyal community online and offline How to build a loyal community online and offline"

                                    ButtonShow={true}
                                    button="답글 1"
                                />
                                {/* 새로운의견일때 클래스에 new추가하면 주황색border생깁니다▼ */}
                                <div className="inner_box new">
                                    <Opinion
                                        
                                        NameBoxShow={true}
                                        feel_class="a"
                                        name ="username"
                                        TimeShow={false}
                                        labelShow={true}
                                        label="개인회원(일반투자자)"
                                        
                                        TitleShow={false}

                                        DateShow={true}
                                        txt_date="2020.05.01 06:05:46"

                                        txt="How to build a loyal community online and offline How to build a loyal community online and offlineHow to build a loyal community online and offline How to build a loyal community online and offline"

                                        ButtonShow={false}
                                    />
                                    <CommentBox
                                        comment_num={false}
                                        radio_li={
                                            <>
                                            <li>
                                                <input type="radio" name="radio2"className="" id="radio2_1"/>
                                                <label htmlFor="radio2_1"></label>
                                            </li>
                                            <li>
                                                <input type="radio" name="radio2"className="" id="radio2_2"/>
                                                <label htmlFor="radio2_2"></label>
                                            </li>
                                            <li>
                                                <input type="radio" name="radio3"className="" id="radio2_3"/>
                                                <label htmlFor="radio2_3"></label>
                                            </li>
                                            </>
                                        }
                                    />
                                </div>
                            </div>
                            <div className="bottom_comment">
                                <Opinion
                                    
                                    NameBoxShow={true}
                                    feel_class="a"
                                    name ="username"
                                    TimeShow={false}
                                    labelShow={true}
                                    label="개인회원(일반투자자)"
                                    
                                    TitleShow={false}

                                    DateShow={true}
                                    txt_date="2020.05.01 06:05:46"

                                    txt="How to build a loyal community online and offline How to build a loyal community online and offlineHow to build a loyal community online and offline How to build a loyal community online and offline"

                                    ButtonShow={true}
                                    button="답글 1"
                                />
                                <div className="inner_box">
                                    <Opinion
                                        
                                        NameBoxShow={true}
                                        feel_class="a"
                                        name ="username"
                                        TimeShow={false}
                                        labelShow={true}
                                        label="개인회원(일반투자자)"
                                        
                                        TitleShow={false}

                                        DateShow={true}
                                        txt_date="2020.05.01 06:05:46"

                                        txt="How to build a loyal community online and offline How to build a loyal community online and offlineHow to build a loyal community online and offline How to build a loyal community online and offline"

                                        ButtonShow={false}
                                    />
                                    <CommentBox
                                        comment_num={false}
                                        radio_li={
                                            <>
                                            <li>
                                                <input type="radio" name="radio2"className="" id="radio2_1"/>
                                                <label htmlFor="radio2_1"></label>
                                            </li>
                                            <li>
                                                <input type="radio" name="radio2"className="" id="radio2_2"/>
                                                <label htmlFor="radio2_2"></label>
                                            </li>
                                            <li>
                                                <input type="radio" name="radio3"className="" id="radio2_3"/>
                                                <label htmlFor="radio2_3"></label>
                                            </li>
                                            </>
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}