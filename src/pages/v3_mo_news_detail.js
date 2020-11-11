import React from 'react'
import { Link } from 'react-router-dom';
import Studio_gnb from '../components/Studio_gnb'
import Opinion from '../components/opinion'
import Back_header from '../components/back_header';
export default class V3_mo_news_detail extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
                <section className="v3 news mo_news studio">
                    <Back_header/>
                    <div className="clearfix">
                        <Studio_gnb on_index="14" off_index="12"/>
                        <div className="cont">
                            <div className="top_box container">
                                <h1>새소식 관리</h1>
                            </div>
                            <div className="detail_wrap">
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
                </section>
            </>
        )
    }
}