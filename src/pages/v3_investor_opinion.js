import React from 'react'
import Studio_gnb from '../components/Studio_gnb'
import Opinion from '../components/opinion'
import CommentBox from '../components/commentBox'
import Back_header from '../components/back_header';

export default class V3_investor_opinion extends React.Component {

    constructor(props) {
    super(props);
    }

    componentDidMount() {
        document.querySelector('.v3.studio_gnb .gnb_wrap .on_menu li').classList.remove('on')
        document.querySelector('.v3.studio_gnb.off .gnb_wrap .off_menu li').classList.remove('active')
        var on = document.querySelector('.v3.studio_gnb .gnb_wrap .on_menu li:nth-child(13)')
        var active = document.querySelector('.v3.studio_gnb.off .gnb_wrap .off_menu li:nth-child(11)')
        var prev = on.previousSibling;
        var next = on.nextSibling;
        on.className += " on"
        active.className += " active"
        prev.className += " prev_li"
        next.className += " next_li"
    }

    render() {
        return (
            <>
                <section className="v3 investor_opinion studio">
                    <Back_header/>
                    <div className="clearfix">
                        <Studio_gnb/>
                        <div className="cont">
                            <div className="top_box container">
                                <h1>투자자 의견</h1>
                            </div>
                            <div className="gray_bg clearfix2">
                                <div className="opinion_list">

                                    {/* 노데이터시 노출됩니다 ▼*/}
                                    {/* <div className="no_data">받은 피드백이 없습니다.</div> */}

                                    <ul>
                                        {/* li 클래스에 on 추가하면 활성화됩니다*/}
                                        <li className="on">
                                            <Opinion 
                                                label_li={
                                                    <>
                                                    <li>커뮤니티</li>
                                                    <li>게시글</li>
                                                    </>
                                                }
                                                NameBoxShow={true}
                                                feel_class="a"
                                                name ="username"
                                                TimeShow={true}
                                                time="yyyy. mm. dd hh:mm"
                                                labelShow={false}
                                                
                                                TitleShow={false}
                                                DateShow={false}

                                                txt="How to build a loyal community online and offline How to build a loyal community online and offlineHow to build a loyal community online and offline How to build a loyal community online and offline"

                                                ButtonShow={false}
                                            />
                                        </li>
                                        
                                        {/* li 클래스에 new 추가하면 new라벨이 보입니다▼*/}
                                        <li className="new">
                                            <Opinion 
                                                label_li={
                                                    <>
                                                    <li>커뮤니티</li>
                                                    <li>게시글</li>
                                                    </>
                                                }
                                                NameBoxShow={true}
                                                feel_class="b"
                                                name ="username"
                                                TimeShow={true}
                                                time="yyyy. mm. dd hh:mm"
                                                labelShow={false}

                                                TitleShow={false}
                                                DateShow={false}

                                                txt="How to build a loyal community online and offline"

                                                ButtonShow={false}
                                            />
                                        </li>
                                        <li>
                                            <Opinion 
                                                label_li={
                                                    <>
                                                    <li>새소식</li>
                                                    <li>댓글</li>
                                                    </>
                                                }
                                                NameBoxShow={true}
                                                feel_class="c"
                                                name ="username"
                                                TimeShow={true}
                                                time="yyyy. mm. dd hh:mm"
                                                labelShow={false}

                                                TitleShow={false}
                                                DateShow={false}

                                                txt="comment here"

                                                ButtonShow={false}
                                            />
                                        </li>
                                        <li>
                                            <Opinion 
                                                label_li={
                                                    <>
                                                    <li>새소식</li>
                                                    <li>댓글</li>
                                                    </>
                                                }
                                                NameBoxShow={true}
                                                feel_class="a"
                                                name ="username"
                                                TimeShow={true}
                                                time="yyyy. mm. dd hh:mm"
                                                labelShow={false}

                                                TitleShow={false}
                                                DateShow={false}

                                                txt="I know this may be awkward to answer, but is there anything about the way I do my job,I know this may be awkward to answer, but is there anything about the way I do my job,I know this may be awkward to answer, but is there anything about the way I do my job,"

                                                ButtonShow={false}
                                            />
                                        </li>
                                    </ul>
                                    <div className="centerT mt24">
                                        <button type="button" className="list_more_btn">더보기(5/6)<img src={require("../images/icons/more_icon.png")} alt="화살표 아이콘"/></button>
                                    </div>
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

                                            txt="How to build a loyal community online and offline How to build a loyal community online and offlineHow to build a loyal community online and offline How to build a loyal community online and offline How to build a loyal community online and offline How to build a loyal community online and offlineHow to build a loyal community online and offline How to build a loyal community online and offline"

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
                                                            <input type="radio" name="radio2"className="" id="radio2_3"/>
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
                                                            <input type="radio" name="radio3"className="" id="radio3_1"/>
                                                            <label htmlFor="radio3_1"></label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" name="radio3"className="" id="radio3_2"/>
                                                            <label htmlFor="radio3_2"></label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" name="radio3"className="" id="radio3_3"/>
                                                            <label htmlFor="radio3_3"></label>
                                                        </li>
                                                        </>
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}