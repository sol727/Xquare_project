import React from 'react'

export default class Index2 extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
                <Link to="/index.js"><span>메인</span></Link>
                <Link to="/login.js"><span>로그인</span></Link>
                <Link to="/signup.js"><span>회원가입</span></Link>
                <Link to="/signup2.js"><span>개인회원가입</span></Link>
                <Link to="/corporation_signup.js"><span>법인 회원가입</span></Link>
                <Link to="/find_id.js"><span>아이디 비밀번호 찾기</span></Link>
                <Link to="/corporation_find_id.js"><span>법인 아이디 비밀번호 찾기</span></Link>
                <Link to="/set_password.js"><span>비밀번호 재설정</span></Link>
                <Link to="/corporation_signup.js"><span>법인회원가입</span></Link>           
                <Link to="/invest_index.js"><span>투자하기 메인</span></Link>
                <Link to="/invest_detail.js"><span>투자하기 상세</span></Link>
                <Link to="/invest_news.js"><span>투자하기 새소식</span></Link>
                <Link to="/invest_feedback.js"><span>투자하기 피드백</span></Link>
                <Link to="/invest_community.js"><span>투자하기 커뮤니티 글쓰기</span></Link>
                <Link to="/invest_community_detail.js"><span>투자하기 커뮤니티 상세</span></Link>
                <Link to="/certification.js"><span>투자하기 - 실명인증</span></Link>
                <Link to="/account_apply.js"><span>투자하기 - 증권계좌추가</span></Link>
                <Link to="/invest_address.js"><span>투자하기 - 주소입력</span></Link>
                <Link to="/invest_test.js"><span>투자하기 - 투자 적합성 테스트</span></Link>
                <Link to="/invest_limit.js"><span>투자하기 - 투자한도조회</span></Link>
                <Link to="/invest_info.js"><span>투자하기 - 투자정보입력</span></Link>
                <Link to="/invest_terms.js"><span>투자하기 - 약관 및 투자위험</span></Link>
                <Link to="/invest_payment.js"><span>투자하기 - 투자금결제</span></Link>
                <Link to="/invest_complete.js"><span>투자하기 - 투자신청완료</span></Link>
                <Link to="/invest_project.js"><span>투자하기 - 전체 프로젝트</span></Link>
                <Link to="/project_terms.js"><span>투자하기 - 전체 프로젝트 약관</span></Link>
                <Link to="/progress_project.js"><span>투자하기 - 진행중 프로젝트</span></Link>
            </>
        )
    }
}