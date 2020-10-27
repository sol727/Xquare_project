import React from 'react'
import { Link } from 'react-router-dom';
export default class Index2 extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
                <ul style={{padding:'50px 20px'}}>
                    <li style={{fontSize:'20px',marginBottom:'10px'}}>메인</li>
                    <li><Link to="/"><span>메인</span></Link></li>
                    <li><Link to="/intro"><span>소개페이지</span></Link></li>
                    <li style={{fontSize:'20px',marginBottom:'10px',marginTop:'10px'}}>로그인,회원가입</li>
                    <li><Link to="/login"><span>로그인</span></Link></li>
                    <li><Link to="/signup"><span>회원가입메인</span></Link></li>
                    <li><Link to="/signup2"><span>개인회원가입</span></Link></li>
                    <li><Link to="/corporation_signup"><span>법인회원가입</span></Link></li>
                    <li><Link to="/find_id"><span>개인아이디 비밀번호 찾기</span></Link></li>
                    <li><Link to="/corporation_find_id"><span>법인아이디 비밀번호 찾기</span></Link></li>
                    <li><Link to="/set_password"><span>비밀번호 재설정</span></Link></li>
                    <li style={{fontSize:'20px',marginBottom:'10px',marginTop:'10px'}}>투자하기</li>
                    <li><Link to="/invest_index"><span>투자하기 목록</span></Link></li>
                    <li><Link to="/invest_search"><span>투자하기 전체프로젝트</span></Link></li>
                    <li><Link to="/invest_prepare"><span>투자하기 - 투자준비하기</span></Link></li>
                    <li><Link to="/mo_invest_prepare"><span>투자하기 - 투자준비하기(MO 실명인증)</span></Link></li>
                    <li><Link to="/mo_invest_account"><span>투자하기 - 투자준비하기(MO 실명인증)</span></Link></li>
                    <li><Link to="/mo_invest_test"><span>투자하기 - 투자준비하기(MO 실명인증)</span></Link></li>
                    <li><Link to="/invest_check"><span>투자하기 - 투자한도조회하기</span></Link></li>
                    <li><Link to="/invest_step1"><span>투자하기 - 투자정보입력1</span></Link></li>
                    <li><Link to="/invest_step2"><span>투자하기 - 투자정보입력2</span></Link></li>
                    <li><Link to="/invest_step3"><span>투자하기 - 투자정보입력3</span></Link></li>
                    <li><Link to="/invest_complete"><span>투자하기 - 투자신청완료</span></Link></li>
                    <li><Link to="/invest_detail"><span>투자하기 상세 - 핵심정보탭</span></Link></li>
                    <li><Link to="/invest_detail2"><span>투자하기 상세 - 새소식탭</span></Link></li>
                    <li><Link to="/invest_detail2_detail"><span>투자하기 상세 - 새소식탭 상세</span></Link></li>
                    <li><Link to="/invest_detail3"><span>투자하기 상세 - 커뮤니티탭</span></Link></li>
                    <li><Link to="/invest_detail3_detail"><span>투자하기 상세 - 커뮤니티탭 상세</span></Link></li>
                    <li><Link to="/invest_detail3_add"><span>투자하기 상세 - 커뮤니티탭 글작성</span></Link></li>
                    <li><Link to="/invest_detail4"><span>투자하기 상세 - 부가정보탭</span></Link></li>
                    <li><Link to="/invest_detail5"><span>투자하기 상세 - 투자현황탭</span></Link></li>
                    <li style={{fontSize:'20px',marginBottom:'10px',marginTop:'10px'}}>1:1문의하기</li>
                    <li><Link to="/inquiry"><span>1:1문의하기</span></Link></li>
                    <li><Link to="/inquiry_check"><span>비회원 1:1문의하기</span></Link></li>
                    <li><Link to="/inquiry_check_member"><span>회원 1:1문의하기</span></Link></li>
                    <li><Link to="/inquiry_write"><span>1:1문의하기 - 작성</span></Link></li>
                    <li><Link to="/inquiry_detail"><span>1:1문의하기 - 상세</span></Link></li>
                    <li style={{fontSize:'20px',marginBottom:'10px',marginTop:'10px'}}>소식</li>
                    <li><Link to="/notice"><span>공지사항</span></Link></li>
                    <li><Link to="/notice_detail"><span>공지사항 - 상세</span></Link></li>
                    <li><Link to="/news"><span>언론보도</span></Link></li>
                    <li><Link to="/news_detail"><span>언론보도 - 상세</span></Link></li>
                    <li><Link to="/event"><span>이벤트</span></Link></li>
                    <li><Link to="/event_detail"><span>이벤트 - 상세</span></Link></li>
                    <li style={{fontSize:'20px',marginBottom:'10px',marginTop:'10px'}}>약관</li>
                    <li><Link to="/terms1"><span>이용약관 - 가입약관</span></Link></li>
                    <li><Link to="/terms2"><span>이용약관 - 개인정보처리방침</span></Link></li>
                    <li><Link to="/terms3"><span>이용약관 - 서비스이용약관</span></Link></li>
                    <li style={{fontSize:'20px',marginBottom:'10px',marginTop:'10px'}}>기타</li>
                    <li><Link to="/error_page"><span>에러페이지</span></Link></li>
                    
                    {/* 3차추가페이지 */}
                    <li><Link to="/v3_project"><span>개설한프로젝트 - 전체</span></Link></li>
                    <li><Link to="/v3_project2"><span>개설한프로젝트 - 종료된프로젝트</span></Link></li>
                    <li><Link to="/v3_account"><span>계약준비 - 자격확인</span></Link></li>
                    <li><Link to="/v3_account2"><span>계약준비 - 기본자료</span></Link></li>
                    <li><Link to="/v3_account3"><span>계약준비 - 발행정보</span></Link></li>
                    <li><Link to="/v3_account4"><span>계약준비 - 기타정보</span></Link></li>
                    <li><Link to="/v3_funding1"><span>펀딩준비 - 발행정보확정</span></Link></li>
                    <li><Link to="/v3_funding2"><span>펀딩준비 - 펀딩소개작성</span></Link></li>
                    <li><Link to="/v3_funding3"><span>펀딩준비 - 추가자료</span></Link></li>
                    <li><Link to="/v3_feedback"><span>엑스퀘어피드백</span></Link></li>
                    <li><Link to="/v3_investor_state"><span>투자자현황</span></Link></li>
                    <li><Link to="/v3_investor_opinion"><span>투자자의견</span></Link></li>
                    <li><Link to="/v3_mo_opinion_detail"><span>투자자의견 상세(모바일)</span></Link></li>
                    <li><Link to="/v3_news"><span>새소식</span></Link></li>
                </ul>

                

            </>
        )
    }
}