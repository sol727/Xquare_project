import React from 'react'
import { Link } from 'react-router-dom';
import Studio_gnb from '../components/Studio_gnb'
import Opinion from '../components/opinion'
import Back_header from '../components/back_header';

export default class V3_news extends React.Component {

    constructor(props) {
        super(props);
    }

    onClickLink (link) {
        window.location.pathname = link
    }

    

    render() {
        return (
            <>
                <section className="v3 news studio">
                    <Back_header/>
                    <div className="clearfix">
                        <Studio_gnb on_index="14" off_index="12"/>
                        <div className="cont">
                            <div className="top_box container">
                                <h1>새소식 관리</h1>
                            </div>
                            <div className="gray_bg clearfix2">
                                <div className="news_wrap">
                                    <div className="title_box clearfix2">
                                        <h3 className="font_18">전체글<span className="font_18">6</span></h3>
                                        <button type="button" className="btn" onClick={() => this.onClickLink("/v3_news_write")}>새소식 작성</button>
                                    </div>
                                    <div className="list_box">
                                        <ul className="top_ul clearfix">
                                            <li className="font_14 centerT">제목</li>
                                            <li className="font_14 centerT">등록일</li>
                                        </ul>
                                        <ul className="bottom_ul">
                                            <li className="clearfix">
                                                <div>
                                                    <div className="label_box clearfix mb10">
                                                        <p>일반</p>
                                                        {/* 심사중 라벨 */}
                                                        {/* <span>심사중</span> */}

                                                        {/* 반려됨 라벨 */}
                                                        {/* <span className="red_bg">반려됨</span> */}
                                                    </div>
                                                    <p className="font_14">article title</p>
                                                </div>
                                                <div>
                                                    <p className="gray2_color font_14">2020-09-26</p>
                                                </div>
                                            </li>
                                            <li className="clearfix">
                                                <div>
                                                    <div className="label_box clearfix mb10">
                                                        <p>일반</p>
                                                        {/* 심사중 라벨 */}
                                                        <span>심사중</span>
                                                        
                                                        {/* 반려됨 라벨 */}
                                                        {/* <span className="red_bg">반려됨</span> */}
                                                    </div>
                                                    <p className="font_14">Donec semper nibh nec rutrum mollis.</p>
                                                </div>
                                                <div>
                                                    <p className="gray2_color font_14">2020-09-26</p>
                                                </div>
                                            </li>
                                            {/* li 클래스에 on추가시 색깔변경됨 */}
                                            <li className="clearfix on">
                                                <div>
                                                    <div className="label_box clearfix mb10">
                                                        <p>공시</p>
                                                        {/* 심사중 라벨 */}
                                                        {/* <span>심사중</span> */}

                                                        {/* 반려됨 라벨 */}
                                                        <span className="red_bg">반려됨</span>
                                                    </div>
                                                    <p className="font_14">article title</p>
                                                </div>
                                                <div>
                                                    <p className="gray2_color font_14">2020-09-26</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="centerT mt24">
                                        <button type="button" className="list_more_btn">더보기(5/6)<img src={require("../images/icons/more_icon.png")} alt="화살표 아이콘"/></button>
                                    </div>
                                </div>
                                <div className="detail_wrap">
                                    <div className="clearfix2 title_box">
                                        <h3 className="font_18 white_color">새소식</h3>
                                    </div>
                                    <div className="text_box">
                                        <Opinion
                                            label_li={
                                                <>
                                                <li>일반</li>
                                                {/* 심사중 라벨 */}
                                                <li className="news_label">심사중</li>
                                                
                                                {/* 반려됨 라벨 */}
                                                {/* <li className="news_label red_bg">반려됨</li> */}
                                                </>
                                            }
                                            NameBoxShow={false}
                                            TimeShow={false}
                                            
                                            TitleShow={true}
                                            title="Donec semper nibh nec rutrum mollis."

                                            DateShow={true}
                                            txt_date="2020.05.01 06:05:46"

                                            txt="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi."

                                            ButtonShow={false}
                                        />
                                        <div className="btn_box">
                                            {/* 반려됐을때만 보이는 내용수정버튼▼ */}
                                            <button type="button">내용 수정</button>
                                            <button type="button">게시 취소</button>
                                        </div>
                                    </div>
                                    {/* 반려됐을때 보이는 반려사유▼*/}
                                    <div className="bottom_box">
                                        <h5 className="font_18 mb16">반려사유</h5>
                                        <div className="font_14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit hac libero arcu adipiscing diam. Vitae sed sit quam molestie. Eleifend eget nulla velit, amet, commodo justo, velit. Et ipsum id ullamcorper amet.
Sed fermentum, mauris volutpat volutpat. Volutpat blandit adipiscing justo aliquet id viverra nec orci accumsan. Mus molestie diam dictumst sed faucibus scelerisque massa semper dignissim. Nunc commodo porta aliquet eget volutpat pulvinar proin amet, lacus. Ultricies nibh tellus et enim est eu semper nibh consectetur. Erat nam proin enim dolor sapien a, mattis molestie facilisis. Nulla vulputate erat rutrum sed elementum in. Donec faucibus suscipit feugiat eget amet gravida. Quis est velit est vitae fermentum tortor. Commodo pharetra dui fermentum mauris, ut vel adipiscing.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* 삭제 팝업 */}
                <div className="pop_wrap project_pop audit_pop news_pop">
                    <div className="dim"></div>
                    <div className="pop_cont">
                        <div className="rightT">
                            <button type="button" className="close_pop"><img src={ require('../images/icons/close_btn.png')} alt="팝업닫기아이콘"/></button>
                        </div>
                        <div className="cont_box">
                            <h3 className="mb4">정말로 삭제하시겠습니까?</h3>
                            <p>심사중에만 삭제하실 수 있으며<br></br>예탁결제원의 크라우드펀딩업 규정에 따라 게재 후 삭제는 불가능합니다.</p>
                            <div>
                                <button type="button" className="btn pop_submit line_btn">취소</button>
                                <button type="button" className="btn pop_submit">삭제하기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}