import React from 'react'
import { Link } from 'react-router-dom';
import $ from 'jquery'

export default class Footer extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <footer>
                <div className="container">

                    <div className="top clearfix2">
                        <div>
                            <div className="clearfix">
                                <Link to="/"><img src={ require('../images/img_logo_xquare.png') } alt="로고"/></Link>
                                <ul className="clearfix terms_ul">
                                    <li><Link to="/terms1"><span>가입약관</span></Link></li>
                                    <li><Link to="/terms2"><span>개인정보처리방침</span></Link></li>
                                    <li><Link to="/terms3"><span>서비스 이용약관</span></Link></li>
                                </ul>
                            </div>
                            <div className="address">
                                <p>대표이사 : 박성현 ㅣ 사업자등록번호 : 736-86-01306</p>
                                <p>Address : 서울특별시 강남구 언주로 98길 8, 7층 / 전라북도 전주시 덕진구 반룡로 109, 1층</p>
                                <p>Copyright ⓒ 2020 by Xquare Inc.</p>
                            </div>
                        </div>
                        <div className="service_box">
                            <h3>고객센터<b className="point_color">02-554-9114</b></h3>
                            <p>E-mail : info@energyx.co.kr ㅣ Fax : 02-566-9114</p>
                        </div>
                    </div>

                    <div className="bottom clearfix2">
                        <div className="alert_txt">
                            <p>투자위험고지</p>
                            <ul>
                                <li>비상장법인 투자는 원금 손실의 가능성이 있습니다. 투자 전에 투자 위험 안내를 꼭 확인해주세요.</li>
                                <li>에너지엑스스퀘어(주)는 크라우드 펀딩 플랫폼을 제공하는 중개자로, 자금을 모집하는 당사자가 아닙니다.{ $(window).width() > 480 ? <br/> : " " }투자손실의 위험을 보전하거나 보상품 제공을 보장해 드리지 못하며 이에 대한 법적 책임을 지지 않습니다.</li>
                            </ul>
                        </div>
                        <div className="link_wrap">
                            <Link to="/"><img src={ require('../images/icons/footer_face_icon.png') } alt="페이스북 아이콘"/></Link>
                            <Link to="/"><img src={ require('../images/icons/footer_insta_icon.png') } alt="인스타 아이콘"/></Link>
                        </div>
                    </div>
                   
                </div>
            </footer>
        )
    }
}