import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer';
import $ from 'jquery'

export default class Terms2 extends React.Component {
    
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
                        <div className="tab_ul_wrap">
                            <ul className="clearfix">
                                <li><Link to="/terms1">가입약관</Link></li>
                                <li className="on"><Link to="/terms2">개인정보처리방침</Link></li>
                                <li><Link to="/terms3">서비스 이용약관</Link></li>
                            </ul>
                        </div>
                        <div>
                            <div className="top_box">
                                <div className="rightT">
                                    <button type="button">이전 가입약관 보기</button>
                                </div>
                                <h1 className="top_title">개인정보처리방침</h1>
                                <p className="date">·시행일자: 2020년 02월 04일</p>
                            </div>
                            <ul className="terms_ul">
                                <li className="li_txt">에너지엑스스퀘어 주식회사는 개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원할하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립ㆍ공개합니다.</li>
                                <li className="li_title">제1조 [개인정보의 수집 항목]</li>
                                <li className="li_txt">
                                에너지엑스스퀘어 주식회사(이하 “회사”)는 회원가입 시 서비스 이용을 위해 필요한 최소한의 개인정보만을 수집합니다. 관련법령 또는 규정이 허용하는 범위 내에서, 이용자가 본 홈페이지에 접속하거나 본 홈페이지를 통해 회사의 서비스를 이용하는 때에 회사는 다음과 같이 이용자의 개인정보를 수집할 수 있습니다. 또한 회사는 전자금융거래법 제21조(안전성의 확보 의무) 및 제22조(전자금융거래기록의 생성 및 보존)에 의거 청약의 거래 시 고객PC정보를 수집합니다.
                                1.	공통필수정보: 이름, 이메일주소, 비밀번호, 주민등록번호, 외국인등록번호, 연락처, 주소, 이메일 서비스 수신여부, 직업
                                2.	금융거래정보: 상품종류, 거래조건, 거래일시, 금액 등 거래 설정 및 내역 정보
                                3.	전자금융거래의 오류확인 및 정정 등을 위한 자료
                                가.	고객아이디, 접속일시, IP Address, HDD Serial, MAC Address, Gateway IP, Gateway MAC
                                나.	개인방화벽 설정, 운영체제 종류, 방화벽 설정, 원격접속 설정, 브라우저 버전, 키보드 타입
                                4.	회원가입, 로그인, 청약시에 오류확인 등을 위한 고객PC정보
                                ※ 이용자는 위와 같은 개인정보의 수집·이용에 거부할 권리가 있으나, 필수정보 등의 수집·이용에 거부할 경우 회사가 제공하는 서비스의 이용에 제약이 있을 수 있습니다.
                                </li>
                                <li className="li_title">제2조 [개인정보의 수집 및 이용 목적]]</li>
                                <li className="li_txt pre">
                                회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 아니하며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다. 
                                1.	회원가입 및 ID발급, 서비스 이용에 따른 본인 확인 절차에서의 이용, 서비스이용을 위한 계약의 체결 확인, 회원자격 유지ㆍ관리, 서비스 부정이용 방지 등
                                2.	각종 고지ㆍ통지 사항 전달, 민원인의 신원 확인, 민원사항 확인 등 민원·불만처리, 사실조사를 위한 연락ㆍ통지, 처리결과 등의 통보 등을 위한 원활한 의사소통
                                3.	계약서ㆍ청구서 발송, 콘텐츠 제공, 요금결제ㆍ정산, 채권 추심 등
                                4.	기타 새로운 서비스 정보, 신상품이나 이벤트 정보 등의 안내, 맞춤서비스 제공, 서비스 관련 고객상담, 고객정보 관리 및 통계, 감사, 모니터링, 금융사고 조사, 기타 법령상 의무이행 등 이벤트 진행 시 배송지의 확보
                                </li>
                                <li className="li_title">제3조 [개인정보 수집에 대한 동의 및 방법]</li>
                                <li className="li_txt pre">
                                회사는 이용자의 개인정보 수집에 대한 동의를 받고 있습니다. 이용자의 개인정보 수집과 관련하여 회사의 개인정보처리방침 또는 회원가입약관, 기타 서비스의 이용약관의 내용에 대해 '동의' 버튼을 클릭할 수 있는 절차를 마련하고 있으며, 이용자가 '동의'버튼을 클릭하면 회사의 개인정보 수집에 대해 동의한 것으로 봅니다.
                                </li>
                                <li className="li_title">제4조 [개인정보의 보유 및 이용 기간]</li>
                                <li className="li_txt pre">
                                ①	회사는 법령에 따른 개인정보 보유ㆍ이용기간 또는 정보주체로부터 개인정보를 수집시에 동의받은 개인정보 보유ㆍ이용기간 내에서 개인정보를 처리ㆍ보유합니다. 
                                ②	각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
                                </li>
                                <li className="table_li">
                                    <table className="terms_table table1">
                                        <thead>
                                            <tr>
                                                <th>해당내용</th>
                                                <th>보존년한</th>
                                                <th>관련 법조항</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>계약 또는 청약철회 등에 관한 기록</td>
                                                <td rowSpan="3">전자상거래 등에서의<br/>소비자 보호에 관한 법률</td>
                                                <td>5년</td>
                                            </tr>
                                            <tr>
                                                <td>소비자의 불만 또는 분쟁처리에 관한 기록</td>
                                                <td>3년</td>
                                            </tr>
                                            <tr>
                                                <td>표시/광고에 관한 기록</td>
                                                <td>6개월</td>
                                            </tr>
                                            <tr>
                                                <td>세법이 규정하는 모든 거래에 관한<br/>장부 및 증빙서류</td>
                                                <td>국세기본법</td>
                                                <td>5년</td>
                                            </tr>
                                            <tr>
                                                <td>홈페이지 방문 기록</td>
                                                <td>통신비밀보호법</td>
                                                <td>3개월</td>
                                            </tr>
                                            <tr>
                                                <td>금융투자업 영위와 관련한 자료</td>
                                                <td>자본시장과 금융투자업에 관한 법률</td>
                                                <td>10년<br/>(자료별 상이)</td>
                                            </tr>
                                            <tr>
                                                <td>거래정보 등의 제공내용 기록 관리</td>
                                                <td>금융실명거래 및 비밀보장에 관한 법률</td>
                                                <td>5년</td>
                                            </tr>
                                            <tr>
                                                <td>홈페이지 회원 가입 및 관리</td>
                                                <td>정보통신망 이용촉진 및 정보보호 등에<br/>관한 법률</td>
                                                <td>탈퇴시까지</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </li>
                                <li className="li_txt pre">
                                ③	원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 
                                ④	다만, 회사는 수집한 개인정보의 수집목적 또는 제공받은 목적이 달성된 경우라고 하더라도 상법, 자본시장 및 금융투자업에 관한 법률, 관련세법 등의 관련법령 또는 규정상의 의무이행 및 기타 감독기관의 요청·명령에 따른 제출할 의무이행에 필요할 것으로 판단되는 정보에 대해서는 개인정보를 파기하지 아니하고 제출 등에 활용할 수 있습니다.
                                ⑤	홈페이지 이용에 따른 채권ㆍ채무관계 잔존시에는 해당 채권ㆍ채무관계 정산시까지 개인정보를 보유할 수 있습니다. 
                                </li>
                                <li className="li_title">제5조 [장기 미이용 회원 개인정보 분리 보관]</li>
                                <li className="li_txt pre">
                                ①	관련 법령에 의거하여 장기 미이용 회원의 계정을 휴면 상태로 전환하고 개인정보를 암호화하여 분리 보관합니다.
                                1.	관련 법령: 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제29조 및 동법 시행령 제16조
                                2.	휴면 회원: 서비스를 1년이상 이용하지 않음에 따라 휴면 상태로 전환된 회원
                                ②	아래의 경우에 해당하는 경우 회원의 권익보호를 위하여 휴면 상태로 전환되지 않습니다.
                                1.	투자 펀딩에 참여하여 서비스를 제공받고 있는 중인 회원
                                ③	휴면 상태 전환 30일 전까지 휴면 예정 회원에게 휴면 전환 예정일, 별도 분리 보관되는 사실 및 개인정보 항목이 이메일을 통해 사전 안내됩니다. 해당 통지 수단에 대한 정보가 부재 또는 오류인 경우에는 홈페이지 공지사항 게시로 대체됩니다.
                                ④	휴면 예정 회원이 사전 안내된 휴면 전환 예정일 이전에 로그인 하시는 경우에는 휴면 상태로 전환되지 않고 기존과 같이 서비스를 이용하실 수 있습니다.
                                ⑤	휴면 상태 전환 사실은 메일을 통해 휴면 회원에게 안내됩니다.
                                ⑥	휴면 회원은 사용했던 계정으로 서비스를 재이용 하기를 원할 경우 본인인증 후 일반회원으로 전환될 수 있습니다.
                                ⑦	휴면 회원의 개인정보는 4년간 별도 분리 보관 후 삭제됩니다.
                                </li>
                                <li className="li_title">제6조 [개인정보의 제3자 제공]</li>
                                <li className="li_txt pre">
                                ①	회사는 이용자의 동의가 있거나 '정보통신망 이용촉진 및 정보보호 등에 관한 법률' 등 관련법령의 규정에 의한 경우, 회사가 이용자에게 제공하는 서비스의 공급을 위하여 필요한 경우를 제외하고는 본 개인정보처리방침에서 고지한 범위를 넘어 이용자의 개인정보를 이용하거나 타인 또는 타기업/기관에 제공하지 않습니다. 이용자의 개인정보를 제3자 제공하는 경우에는 사전에 제공받는 자, 목적, 제공하는 개인정보 항목 등을 개인정보처리방침 및 홈페이지 등을 통해 고지한 후 동의를 구합니다.
                                </li>
                                <li className="table_li">
                                    <table className="terms_table table2">
                                        <colgroup>
                                            <col width="25%"/>
                                            <col width="25%"/>
                                            <col width="25%"/>
                                            <col width="25%"/>
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>해당내용</th>
                                                <th>보존년한</th>
                                                <th>관련 법조항</th>
                                                <th>관련 법조항</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    발행인<br/>
                                                    한국예탁결제원<br/>
                                                    청약증거금예치기관<br/>
                                                    (한국증권금융, 기업은행, 신한은행)<br/>
                                                    엔젤투자협회<br/>
                                                    중소벤처기업부
                                                </td>
                                                <td>
                                                    자본시장과 금융투자업에 관한 법률 등 관계법령에 따라 온라인 소액투자중개업자가 증권발행기업, 한국예탁결제원, 한국증권금융, 기업은행, 신한은행 등 예치 (또는 신탁) 기관에 제공하는 투자자 정보의 제공, 조회 및 및 예치(또는 신탁)금액의 수령(교부)채권 보호를 위한 신탁시스템 이용 제공, 소득공제를 위한 투자확인서 발급 등의 투자자 확인 등
                                                </td>
                                                <td>
                                                    성명, 주민등록번호<br/>
                                                    (사업자번호),<br/>
                                                    이메일,<br/>
                                                    휴대폰번호,<br/>
                                                    증권계좌번호,<br/>
                                                    가상계좌번호,<br/>
                                                    출금은행 계좌번호
                                                </td>
                                                <td>
                                                    거래 정보 등의 제공내용 기록 관리내용은 금융<br/>실명거래 및 비밀보장에 따른 법률에 따라 5년<br/> 보존 후 파기
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </li>
                                <li className="li_txt pre">
                                ②	다만, 다음의 경우에는 관련법령의 규정에 의하여 이용자의 동의 없이 개인정보를 제공할 수도 있사오니 이점 양지해 주시기 바랍니다.
                                1.	관련 통계법 등에 따라 통계작성·학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 알아볼 수 없는 형태로 가공하여 제공하는 경우
                                2.	금융 실명거래 및 비밀보장에 관한 법률, 신용정보의 이용 및 보호에 관한 법률, 전기통신기본법, 전기통신사업법, 지방세법, 소비자보호법, 한국은행법, 형사소송법 등 법률에 특별한 규정이 있는 경우
                                3.	정부기관(준정부기관 포함)이나 법원의 명령에 의하여 개인정보를 제공하는 경우
                                </li>
                                <li className="li_title">제7조 [개인정보처리의 위탁]</li>
                                <li className="li_txt pre">
                                ①	회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다. 
                                </li>
                                <li className="table_li">
                                    <table className="terms_table table3">
                                        <colgroup>
                                            <col width="33.333%"/>
                                            <col width="33.333%"/>
                                            <col width="33.333%"/>
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>해당내용</th>
                                                <th>보존년한</th>
                                                <th>관련 법조항</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>㈜나이스평가정보</td>
                                                <td>본인확인 및 성인인증</td>
                                                <td className="leftT">
                                                    이용자명, 주민등록번호, 운전면허번호, 주민등록증 발급일자, 운전면허증 일련번호
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>한국증권금융</td>
                                                <td>청약증거금 예치</td>
                                                <td className="leftT">
                                                    이용자명, 주민등록번호, 청약금액, 휴대폰번호, 증권계좌번호, 가상계좌번호, 출금은행 계좌번호
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>한국예탁결제원</td>
                                                <td>중앙기록관리<br/>
                                                증권예탁 전자등록 계좌 유효성 확인
                                                </td>
                                                <td className="leftT">
                                                    이용자명, 주민등록번호, 청약금액, 실명확인증표, 증권계좌번호, 투자자유형 확인을 위한 증빙서류
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>㈜슬로워크</td>
                                                <td>광고이메일, sms발송</td>
                                                <td className="leftT">
                                                    이용자명, 닉네임, 이메일, 전화번호
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>더클회계법인</td>
                                                <td>발행기업의 자금상환 감독</td>
                                                <td className="leftT">
                                                    이용자명, 청약금액, 상환계좌
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>㈜메타넷엠씨씨</td>
                                                <td>CS/운영업무 대행</td>
                                                <td className="leftT">
                                                    이용자명, 주민등록번호, 휴대폰번호, 생년월일, 이메일, 계좌번호, 은행, 예금주 성명 등 투자정보
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>코스콤</td>
                                                <td></td>
                                                <td className="leftT"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </li>
                                <li className="li_txt pre">
                                ②	회사는 서비스 향상 및 원활한 계약사항의 이행 등을 위하여 개인정보보호법 제26조에 의거하여 위탁업무 수행목적 외 개인정보 처리금지, 기술적ㆍ관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다. 
                                ③	회사는 이용자의 개인정보를 제휴업체에 제공하거나 공유하는 경우에 사전에 이용자에게 제공받거나 공유받는 자, 목적, 공유되는 개인정보항목 등에 대해 개인정보처리방침에 고지한 후 이에 대한 동의를 구합니다.
                                ④	위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통해 공개하도록 하겠습니다. 
                                </li>
                                <li className="li_title">제8조 [정보주체의 권리·의무 및 그 행사방법]</li>
                                <li className="li_txt pre">
                                이용자는 언제든지 등록되어 있는 이용자의 개인정보를 열람하거나 정정하실 수 있습니다. 이용자의 개인정보에 대한 열람 또는 정정을 하고자 할 경우에는 고객정보관리 메뉴를 통하여 직접 열람 또는 정정이 가능합니다. 회사의 시스템에 장애가 발생한 경우에는 회사의 고객센터로 전화하셔서 처리하실 수 있습니다. 만14세 미만의 아동으로부터 개인정보를 수집하거나 제3자에게 아동의 개인정보를 제공하고자 하는 경우에는 그 법정대리인의 동의를 구합니다. 이 경우 회사는 그 아동에게 법정대리인의 동의를 얻기 위하여 필요한 법정대리인의 성명 등의 정보를 요구할 수 있습니다. 법정대리인은 상기 아동의 개인정보에 대한 동의를 철회할 수 있으며, 당해 아동이 제공한 개인정보에 대한 열람 또는 오류의 정정을 요구할 수 있습니다. 회사는 법정대리인의 동의 없이 아동에 관한 정보를 제3자에게 제공하거나 공유하지 않으며, 아동으로부터 수집한 개인정보에 대하여 법정대리인이 오류의 정정을 요구하는 경우 그 오류를 정정할 때까지 해당 개인정보의 이용 및 제공을 금지합니다.
                                </li>
                                <li className="li_title">제9조 [개인정보 파기절차 및 방법]</li>
                                <li className="li_txt pre">
                                ①	이용자는 회원가입시 개인정보의 수집·이용 및 제공에 대해 동의한 내용은 언제든지 회원탈퇴 등의 방법을 통해 철회하실 수 있습니다. 
                                ②	철회요청이 있는 개인정보에 대해서는 해당 수집 및 이용목적이 달성되거나 동의를 얻은 개인정보의 보유·이용 기간이 종료한 경우 지체 없이 파기하는 것을 원칙으로 합니다. 다만, 자본시장과 금융투자업에 관한 법률 등 다른 법률에 따라 개인정보를 보존해야 하는 경우에는 그러하지 아니하며, 이용자가 회원가입 등을 위해 입력하신 정보는 내부 방침 및 기타 관련법령에 따라 일정기간 저장 후 파기될 수 있습니다. 
                                ③	회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다. 
                                ④	일정기간 저장된 개인정보는 법률에 의한 경우가 아니고서는 동의 받지 아니한 다른 목적으로 이용되지 않습니다. 
                                ⑤	회사는 파기 사유가 발생한 개인정보를 선정하고 회사의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다. 
                                ⑥	회사는 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기하고 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제하며 전자적 저장매체에 저장된 개인정보는 영구삭제 장치를 사용하여 파기합니다.
                                </li>
                                <li className="li_title">제10조 [개인정보 자동 수집장치의 설치·운영 및 그 거부에 관한 사항]</li>
                                <li className="li_txt pre">
                                ①	회사는 고객의 사용편의를 위하여 '쿠키(cookie)'를 사용합니다. 이용자는 쿠키에 대한 선택권이 있습니다. 따라서 이용자는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나 쿠키가 저장될 때마다 확인을 거치거나 아니면 모든 쿠키의 저장을 거부할 수도 있습니다. 
                                ②	쿠키는 웹브라우저 상단의 도구&gt;인터넷옵션&gt;개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부할 수 있습니다. 다만, 고객님께서 쿠키설치를 거부하셨을 경우, 회사의 일부 서비스를 제공받지 못하는 경우가 발생할 수 있음을 알려드립니다.
                                ③	쿠키는 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기검색어, 보안접속 여부 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.
                                </li>
                                <li className="li_title">제11조 [개인정보 안전성 확보조치]</li>
                                <li className="li_txt pre">
                                회사는 이용자의 개인정보가 분실·도난·유출·변조 또는 훼손되지 아니하도록 안전성 확보에 필요한 기술적 조치를 다음과 같이 하고 있습니다.
                                1.	고객의 개인정보는 비밀번호에 의해 보호되며, 파일 및 전송 데이터를 암호화하거나 파일 잠금기능(Lock)을 사용하여 중요한 데이터는 별도의 보안기능을 통해 보호되고 있습니다.
                                2.	회사는 암호알고리즘을 이용하여 네트워크 상의 개인정보를 안전하게 전송할 수 있는 보안장치(SSL)를 채택하고 있습니다.
                                3.	해킹 등에 의해 고객의 개인정보가 유출되는 것을 방지하기 위해, 외부로부터의 침입을 차단하는 장치를 이용하고 있으며, 각 서버마다 침입탐지시스템을 설치하여 24시간 침입을 감시하고 있습니다.
                                4.	내부관리계획을 수립하고 시행하며 정기적으로 직원 교육을 실시하고 있습니다.
                                5.	전산실과 자료보관실 등의 접근을 통제하고 있습니다. 
                                </li>
                                <li className="li_title">제12조 [개인정보 보호책임자 및 개인정보 관리담당 부서]</li>
                                <li className="li_txt pre">
                                회사는 개인정보보호법 제31조에 따라 이용자의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 개인정보 보호책임자를 두고 있습니다. 개인정보와 관련한 문의사항이 있으시면 아래의 개인정보 보호정책 보호책임자에게 연락 주시기 바랍니다. 회사는 이용자가 문의하신 사항에 대해 신속하고 성실하게 답변해드리겠습니다.
                                1.	성명: 
                                2.	소속: 
                                3.	전화번호: 
                                4.	이메일: @energyx.co.kr
                                </li>
                                <li className="li_title">제13조 [권익침해 구제방법]</li>
                                <li className="li_txt pre">
                                개인정보가 침해되어 이에 대한 신고나 상담이 필요하신 경우에는 다음의 기관에 문의하셔서 도움을 받으실 수 있습니다. 
                                1.	개인정보침해 신고센터: (국번없이)118, https://privacy.kisa.or.kr
                                2.	대검찰청 사이버수사과: (국번없이)1301, cid@spo.go.kr
                                3.	경찰청 사이버안전국: (국번없이)182, http://cyberbureau.police.go.kr
                                </li>
                                <li className="li_title">제14조 [처리방침의 변경]</li>
                                <li className="li_txt pre">
                                본 개인정보처리방침은 법령·정책 또는 보안기술의 변경사항을 반영하기 위한 목적 등으로 추가·삭제·수정 등의 방법으로 변경될 수 있습니다. 개인정보처리방침이 변경되는 경우 회사는 변경사항을 게시하며, 변경된 개인정보처리방침은 게시한 날로부터 7일 후부터 효력이 발생합니다. 다만, 수집하는 개인정보의 항목, 이용 목적의 변경 등과 같이 이용자 권리의 중대한 변경이 발생한 때에는 최소 30일 전에 미리 공지하겠습니다. 
                                ·공고일자: 2020년 04월01일
                                ·시행일자: 2020년 04월08일
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