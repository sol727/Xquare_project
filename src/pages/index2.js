import React from 'react'

export default class Index2 extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
                <Link to="/index"><span>메인</span></Link>

                <Link to="/login"><span>로그인</span></Link>
                <Link to="/signup"><span>회원가입메인</span></Link>
                <Link to="/signup2"><span>개인회원가입</span></Link>
                <Link to="/corporation_signup"><span>법인회원가입</span></Link>
                <Link to="/find_id"><span>개인아이디 비밀번호 찾기</span></Link>
                <Link to="/corporation_find_id"><span>법인아이디 비밀번호 찾기</span></Link>
                <Link to="/set_password"><span>비밀번호 재설정</span></Link>

                <Link to="/invest_prepare"><span>투자하기 - 투자준비하기</span></Link>
                <Link to="/invest_check"><span>투자하기 - 투자한도조회하기</span></Link>

                <Link to="/invest_detail"><span>투자하기 상세 - 핵심정보탭</span></Link>
                <Link to="/invest_detail2"><span>투자하기 상세 - 새소식탭</span></Link>
                <Link to="/invest_detail2_detail"><span>투자하기 상세 - 새소식탭 상세</span></Link>
                <Link to="/invest_detail3"><span>투자하기 상세 - 커뮤니티탭</span></Link>
                <Link to="/invest_detail3_detail"><span>투자하기 상세 - 커뮤니티탭 상세</span></Link>
                <Link to="/invest_detail3_add"><span>투자하기 상세 - 커뮤니티탭 글작성</span></Link>
                <Link to="/invest_detail4"><span>투자하기 상세 - 부가정보탭</span></Link>
                <Link to="/invest_detail5"><span>투자하기 상세 - 투자현황탭</span></Link>

                <Link to="/terms1"><span>이용약관 - 가입약관</span></Link>
                <Link to="/terms2"><span>이용약관 - 개인정보처리방침</span></Link>
                <Link to="/terms3"><span>이용약관 - 서비스이용약관</span></Link>

                <Link to="/error_page"><span>에러페이지</span></Link>




                {/* <Link to="/certification.js"><span>투자하기 - 실명인증</span></Link>
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
                <Link to="/progress_project.js"><span>투자하기 - 진행중 프로젝트</span></Link> */}
            </>
        )
    }
}