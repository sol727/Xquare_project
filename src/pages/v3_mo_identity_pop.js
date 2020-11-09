import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer';

export default class V3_mo_identity_pop extends React.Component {
    
    constructor(props) {
    super(props);
    }

    componentDidMount(){
        
    
    }

    render() {
        return (
            <>
                <Header />

                <section className="invest_prepare_pop identity_pop mo_invest">
                    <div className="">
                        <h2 className="font_18 mb12 ml16">신분증 인증</h2>
                        <div className="content">
                            <div className="top_txt">
                            금융실명법에 따라 실명확인이 필요합니다. 등록하신 정보는 실명확인에만 사용되며, 확인후 즉시 파기됩니다. 실제정보와 다른 경우 거래가 제한 될 수 있습니다.
                            </div>
                            <div className="red_box">
                                <h4 className="font_16 red_color mb10">인증 불가 사유</h4>
                                <p className="font_13 red_color line_h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et faucibus suscipit massa pulvinar. Et sed sit pellentesque morbi. Molestie est lacus, cursus nec tellus.</p>
                            </div>
                            <div>
                                <form action="">
                                    <ul className="mt24">
                                        <li className="mb24">
                                            <h3 className="input_title mb8">이름</h3>
                                            <input type="text" placeholder="이름"/>
                                        </li>
                                        <li className="mb24">
                                            <h3 className="input_title mb8">주민등록번호</h3>
                                            <div className="input_li clearfix2">
                                                <input type="text" placeholder="앞 6자리"/>-<input type="text" placeholder="뒤 7자리"/>
                                            </div>
                                        </li>
                                        <li className="mb24">
                                            <h3 className="input_title mb8">신분증 종류</h3>
                                            <ul className="radio_wrap clearfix">
                                                <li>
                                                    <input type="radio" id="radio1" name="radio"/><label htmlFor="radio1">주민등록증</label>
                                                </li>
                                                <li>
                                                    <input type="radio" id="radio2" name="radio"/><label htmlFor="radio2">국내운전면허증</label>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="mb24">
                                            <h3 className="input_title mb8">발급일자</h3>
                                            <p className="input_sub_title">발급일자를 입력하세요.</p>
                                            <p className="input_sub_title mb8">Ex) 20201216</p>
                                            <div className="date_input">
                                                <input type="text" placeholder="발급일자"/>
                                                <span>(0/8)</span>
                                            </div>
                                        </li>
                                        <li className="mb24">
                                            <h3 className="input_title mb8">파일 업로드</h3>
                                            <p className="input_sub_title">본인확인을 위해 주민등록증 또는 운전면허증의 앞면을 촬영한 이미지를 등록해주세요 (최대20MB, jpg/jpeg/png/pdf)</p>
                                            <div className="file_wrap clearfix mt16">
                                                <input type="file" id="file_up" accept=".jpg,.jpeg,.png,.pdf"/>
                                                <input type="text" className="file_name" placeholder="이미지파일" disabled readOnly/>
                                                {/* 업로드활성화시 class에 on 추가↓ */}
                                                <label htmlFor="file_up" className="file_up_btn">파일 업로드</label>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="btn_wrap clearfix2">
                                        <button type="button" className="back_btn">이전</button>
                                        <button type="button" className="unable_btn">다음</button>
                                        {/* 활성화 버튼↓*/}
                                        {/* <button type="button" className="unable_btn orange_btn">다음</button> */}
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </section>
                
                <Footer/>
            </>
        )
    }
}