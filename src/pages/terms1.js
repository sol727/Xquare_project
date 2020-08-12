import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer';
import $ from 'jquery'

export default class Terms1 extends React.Component {
    
    constructor(props) {
    super(props);
    }

    componentDidMount(){
        
    
    }

    render() {
        return (
            <>
                <Header />

                <section className="terms_page">
                    <div className="container">
                        <div className="title_wrap">
                            <h1>이용약관</h1>
                            <p>항상 고객님을 생각하고 효율적인 방법을 제시해 드리며<br/>고객님과 두터운 신뢰 관계를 맺기 위해 끊임없이 노력하겠습니다</p>
                        </div>
                        <ul className="tab_ul clearfix">
                            <li className="on"><Link>가입약관</Link></li>
                            <li><Link>개인정보처리방침</Link></li>
                            <li><Link>서비스 이용약관</Link></li>
                        </ul>
                        <div>
                            <div className="top_box">
                                <div className="rightT">
                                    <button type="button">이전 가입약관 보기</button>
                                </div>
                                <h1 className="top_title">회원가입 이용약관</h1>
                                <p className="date">·시행일자: 2020년 02월 04일</p>
                            </div>
                            <ul className="terms_ul">
                                <li className="line_title"><span className="point_color">1장</span>총칙</li>
                                <li className="li_title">제1조 [목적]</li>
                                <li className="li_txt">
                                    본 약관은 에너지엑스스퀘어 주식회사(이하 “회사”)가 운영하는 인터넷 사이트(https://www.xquare.kr)에서 제공하는 제반 서비스를 이용함에 있어 회사와 회원간의 홈페이지 이용에 관한 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                                </li>
                                <li className="li_title">제2조 [정의]</li>
                                <li className="li_txt ">
                                <p> 본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
                                <p className="">1. “플랫폼”이란 본 약관에 따라 이용자가 컴퓨터, 휴대형단말기 등 유∙무선 정보통신 설비를 통하여 투자의 방식으로 크라우드펀딩에 참여할 수 있도록 중개하는 회사의 홈페이지(https://www.xquare.kr)를 말합니다</p>
                                

2. “서비스”란 회원이 본 약관에 따라 플랫폼을 통하여 이용할 수 있도록 회사로부터 제공되는 크라우드펀딩 서비스 등의 제반 서비스를 의미합니다.

3. “이용자”란 본 약관에 따라 회사가 제공하는 플랫폼을 이용하는 회원 및 비회원을 말합니다.

4. “회원”이란 본 약관에 따라 회사와 서비스 이용계약을 체결하고 플랫폼을 통하여 서비스를 이용할 수 있도록 회원등록을 함으로써 자격을 부여받은 자를 말합니다.

5. “아이디(ID)”란 회원의 식별과 서비스 이용을 위하여 회원이 정하고 회사가 승인하는 문자와 숫자 등의 조합을 의미합니다.
6. “비밀번호”란 회원이 부여받은 아이디와 일치되는 회원임을 확인하고 비밀보호를 위해 회원 자신이 정한 문자 또는 숫자의 조합을 의미합니다.
7. “게시물”이란 회원이 서비스를 이용함에 있어 플랫폼의 게시판에 게재한 부호ㆍ문자ㆍ음성ㆍ음향ㆍ화상ㆍ동영상 등의 정보 형태의 글, 사진, 동영상 및 각종 파일과 링크 등을 의미합니다.
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </section>
                
                <Footer/>
            </>
        )
    }
}