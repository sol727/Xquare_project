import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer';
import $ from 'jquery'

export default class Terms3 extends React.Component {
    
    
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
                                <li><Link to="/terms2">개인정보처리방침</Link></li>
                                <li className="on"><Link to="/terms3">서비스 이용약관</Link></li>
                            </ul>
                        </div>
                        <div>
                            <div className="top_box">
                                <div className="rightT">
                                    <button type="button">이전 가입약관 보기</button>
                                </div>
                                <h1 className="top_title">투자서비스 이용약관</h1>
                                <p className="date">·시행일자: 2020년 02월 04일</p>
                            </div>
                            <ul className="terms_ul">
                                <li className="line_title"><span className="point_color">1장</span>[총칙]</li>
                                <li className="li_title">제1조 [개인정보의 수집 항목]</li>
                                <li className="li_txt">
                                    본 약관은 에너지엑스스퀘어 주식회사(이하 “회사”)와 회사가 제공하는 온라인소액투자중개 서비스를 이용하는 회원(이하 “회원”)간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함으로써 거래의 신속하고 효율적인 처리를 도모하고 거래당사자 상호간의 이해관계를 합리적으로 조정하는 것을 그 목적으로 합니다. 
                                </li>
                                <li className="li_title">제2조 [용어의 정의] </li>
                                <li className="li_txt pre">{
                                    `본 약관에서 사용하는 용어의 정의는 다음과 같습니다.

                                    “온라인소액투자중개업자”란 온라인상에서 누구의 명의로 하든지 타인의 계산으로 발행인이 자본시장과 금융투자업에 관한법률 시행령 제14조의4에서 정하는 방법으로 발행하는 증권의 모집 또는 사모에 관한 중개를 영업으로 하는 중개업자를 말하며, 본 약관에서 ‘회사’를 의미합니다. 
    
                                    “홈페이지”란 본 약관에 따라 회사가 제공하는 서비스가 구현되는 온라인상의 웹페이지(https://www.xquare.kr)를 말합니다. 
    
                                    “서비스”란 회원이 본 약관에 따라 회사 홈페이지의 전자적 시스템에 접속하여 투자형 크라우드펀딩 청약 등을 할 수 있게 본 약관에 따라 회사가 제공하는 서비스를 말합니다. 
    
                                    “회원”이란 본 약관에 따라 회사와 서비스 이용계약을 체결하고 홈페이지를 통하여 서비스를 이용할 수 있도록 회원등록을 함으로써 자격을 부여받은 자를 말합니다. 
    
                                    “발행인”이란 회사의 회원가입 약관(이하 “가입약관”)에 따른 회원의 자격을 부여받은 자 중에서 온라인소액투자중개의 방법으로 증권을 발행하려는 자를 말합니다. 
    
                                    “투자자”란 회사의 가입약관에 따른 회원의 자격을 부여받은 자 중에서 온라인소액투자중개의 방법으로 발행인이 발행한 증권의 청약을 하려는 자를 말합니다. 
    
                                    “청약의 신청”이란 회원이 발행인이 발행하는 증권의 배정을 받기 위하여 본 약관에 따른 방법으로 청약의 의사표시를 하는 것을 말합니다. 
    
                                    “청약의 철회”란 회원이 청약의 신청 후 청약기간 내에 청약의 의사표시를 철회하는 것을 말합니다 
    
                                    “청약 모집률”이란 발행인이 목표한 모집예정금액을 기준으로 청약의 접수가 완료된 모집금액이 차지하는 비율을 말합니다. 
    
                                    “청약증거금 관리기관”이란 회원이 입금한 청약증거금을 자본시장과 금융투자업에 관한 법률(이하 “자본시장법”)에 따라 예치하여 보관하는 증권금융 또는 은행 등의 기관을 말합니다. 
    
                                    “중앙기록관리기관”이란 회사로부터 발행인과 투자자에 대한 정보를 제공받아 관리하는 기관인 한국예탁결제원을 말합니다. 
    
                                    “투자형 크라우드펀딩”이란 자본시장법에 따라 온라인소액투자중개업자를 통하여 발행인이 발행하는 채무증권, 지분증권, 투자계약증권에 관한 모집 또는 사모에 관한 중개행위를 말합니다. 
    
                                    “계좌관리기관”이란 회원 계좌를 관리하는 자로서 주식∙사채 등의 전자등록에 관한 법률 제2조 제7호에서 정하는 자를 말합니다. 
    
                                    기타 본 약관에서 별도로 정하지 아니한 용어는 자본시장법 및 관계법령 등에서 정하는 바에 따릅니다.  `
                                }
                                </li>
                                <li className="li_title">제3조 [약관 등의 명시와 설명]</li>
                                <li className="li_txt pre">{
                                    `회사의 홈페이지는 본 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소, 전화번호, 사업자등록번호 등을 회원이 쉽게 알 수 있도록 홈페이지에 게시합니다.  

                                    회사는 본 약관에 정해져 있는 중요한 내용을 전자적 장치를 통하여 회원이 알기 쉽게 표시하고 회원으로부터 해당 내용을 충분히 인지하였다는 의사표시를 전자적 장치 등을 통하여 수령하는 등의 방법으로 회원이 이해할 수 있도록 설명해야 합니다. 다만, 계약의 성질상 설명하는 것이 현저하게 곤란한 경우에는 그러하지 아니합니다. `
                                }
                                </li>
                                <li className="line_title"><span className="point_color">2장</span>[서비스의 이용]</li>
                                <li className="li_title">제4조 [서비스의 제공]</li>
                                <li className="li_txt pre">{
                                    `회사가 본 약관에 따라 제공하는 서비스의 종류는 다음 각 호와 같습니다. 

                                    청약거래서비스: 청약의 주문 정보에 대한 사실확인, 청약의 접수, 청약 가능 여부 통지, 청약결과 및 배정내역 통보 등 
    
                                    1호 서비스 제공을 위해 필요하거나 이에 부수하는 서비스 
    
                                    서비스의 이용은 24시간 가능한 것을 원칙으로 합니다. 다만, 이체서비스 이용시간의 제한 등의 사유로 인하여 서비스 이용시간이 변경되는 경우 사전에 홈페이지를 통하여 그 변경 사항을 공지합니다. `
                                }
                                </li>
                                <li className="li_title">제5조 [서비스의 신청]</li>
                                <li className="li_txt pre">{
                                    `본 약관의 서비스를 이용하려는 자는 회사의 가입약관에 따라 회원의 자격을 취득하여 로그인한 후 서비스 신청을 하여야 합니다. 

                                    회사는 회원이 입력한 아이디, 비밀번호가 회사에 등록된 것과 일치할 경우 본 약관에 따른 서비스 신청을 접수합니다. `
                                }
                                </li>
                                <li className="li_title">제6조 [서비스의 이용료 등]</li>
                                <li className="li_txt pre">{
                                    `회사는 온라인소액증권의 청약과 관련하여 별도의 수수료는 징수하지 아니합니다. 다만, 청약증거금 이체 시 이체수수료가 발생할 수 있습니다.`
                                }
                                </li>
                                <li className="line_title"><span className="point_color">3장</span>[투자정보의 제공·확인 및 의견교환 등]</li>
                                <li className="li_title">제7조 [투자정보의 게재 등]</li>
                                <li className="li_txt pre">{
                                    `회사는 증권의 모집을 시작하기 전에 홈페이지에 발행인이 게재하는 증권의 발행조건, 재무서류, 사업계획서 등 투자판단을 위해 필요한 정보가 게재되도록 합니다. 

                                    회사는 제1항에 따라 게재된 정보에 관한 사실을 확인하여야 합니다. 
    
                                    제2항에도 불구하고 회원이 게재된 내용에 의존하여 투자판단을 한 경우 이로부터 발생하는 결과에 대하여 회사는 회사의 고의 또는 과실이 없는 이상 책임을 지지 않습니다. 
    
                                    제1항에도 불구하고 청약기간 중에도 홈페이지에 추가적으로 투자정보가 게재될 수 있습니다. 
    
                                    청약기간의 말일로부터 7일 이내에 발행인이 홈페이지에 게재한 정보 중 투자자의 투자판단에 영향을 미칠 수 있는 중요한 정보를 정정한 경우 청약기간의 말일은 그 게재일로부터 7일 후로 연장됩니다. 
    
                                    청약의 모집결과가 “성공”인 경우 청약기간이 종료한 후에도 매년 1회 재무제표 등 결산 관련 서류가 홈페이지에 게재됩니다.`
                                }
                                </li>
                                <li className="li_title">제8조 [청약의 주문 전 정보 확인 등]</li>
                                <li className="li_txt pre">{
                                    `회원은 본 약관에 따른 청약의 주문 전에 제6조에 따라 제공되는 정보 뿐만 아니라 청약기간, 증권의 배정조건, 증권매도의 제한 등에 관하여 충분히 숙지한 후 청약의 의사표시를 하여야 합니다. 

                                    회사는 회원이 본 약관에 따른 청약의 주문을 하기 전에 회사로부터 청약대상이 되는 증권에 대한 투자의 위험고지 등에 대하여 회원이 충분히 확인을 하였는지를 전자서명이나 전자우편 등의 방법으로 확인한 후에 청약의 주문을 받을 수 있습니다. 
    
                                    발행인이 합리적이고 명확한 기준에 따라 투자자의 자격을 제한하거나 배정방법 및 그 기준을 다르게 설정하기를 회사에 요청한 경우 회사는 그 내용을 홈페이지에 게재하며, 이 경우 회원은 위 내용에 따라 청약의 주문 신청이나 증권의 배정을 받는데 제한을 받게 될 수 있습니다. 
    
                                    회사는 발행인이 정정 게재를 하는 경우 자본시장법 등 관계법령이 정하는 바에 따라 회원에게 정정 게재 사실을 통지하고 회원의 청약 의사를 재확인합니다. 또한 회사는 회원의 온라인소액투자중개의 위험성에 대한 충분한 이해도를 확인하고 청약을 받아야 하며, 회사는 회원이 재청약 의사를 표시하였는지를 확인하기 전에는 그 청약의 주문을 받을 수 없으며, 이 경우 회원의 기존 청약의 주문 신청은 취소됩니다. `
                                }
                                </li>
                                <li className="li_title">제9조 [투자의견의 교환 등]</li>
                                <li className="li_txt pre">{
                                    `회원은 홈페이지에 개설된 게시판을 통해 투자정보에 대한 질의 또는 답변을 게시하는 방법으로 투자의견을 교환할 수 있습니다. 

                                    회사는 자신의 홈페이지를 통하여 공개되는 투자자들의 의견을 임의로 삭제하거나 수정하여서는 아니 됩니다. 다만, 다른 법률에 근거가 있는 경우 그러하지 아니합니다. 
    
                                    발행인은 증권의 청약기간의 종료일부터 7일 전까지 회사가 관리하는 홈페이지를 통하여 투자자의 투자판단에 도움을 줄 수 있는 정보를 제공할 수 있습니다. 
    
                                    회사는 발행인의 신용 또는 투자 여부에 대한 투자자의 판단에 영향을 미칠 수 있는 자문이나 발행인의 경영에 관한 자문에 응하지 아니한다. `
                                }
                                </li>
                                <li className="line_title"><span className="point_color">4장</span>[청약의 주문 및 접수 등]</li>
                                <li className="li_title">제10조 [청약의 주문 신청]]</li>
                                <li className="li_txt pre">{
                                    `본 약관에 따라 투자하려는 증권에 대한 청약의 주문을 하고자 하는 회원은 아래와 같은 정보를 회사가 제공하는 양식에 따라 입력하여야 합니다. 

                                    회원의 실명(법인인 경우 상호 및 명칭) 
    
                                    주민등록번호(법인인 경우 법인등록번호·사업자등록번호, 외국인의 경우 외국인등록번호·국내거소신고번호) 
    
                                    투자자의 유형 
    
                                    청약하려는 금액(이하 “청약금”) 
    
                                    청약수량 
    
                                    증권이 발행되어 입고될 회원 명의의 증권계좌번호(대상계좌는 증권회사의 영업점 또는 연계기관에서 정상적으로 등록이 완료된 위탁 증권거래 계좌에 한함) 
    
                                    청약철회시 청약금을 반환받을 회원 명의의 은행계좌번호 
    
                                    그 밖에 자본시장법 등 관계법령에 따라 온라인소액투자중개에 필요한 투자자 정보 
    
                                    회사는 청약의 주문을 하려는 회원의 실명인증 및 투자자 본인과의 동일성 확인을 위한 인증절차를 거쳐야 합니다. 
    
                                    회원은 본 조 제1항 제3호와 관련하여 홈페이지의 <회원정보란>에서 정한 투자자유형과 다른 유형의 투자자자격으로 청약의 주문을 하려는 경우 청약의 주문 전에 <회원정보란>에서 투자자유형을 사전에 변경하여야 합니다. 
    
                                    회원은 일반투자자가 아닌 경우(소득적격투자자, 전문투자자)에 이에 관한 증빙자료(소득요건 등에 관한 자료, 법인등기부등본 등)를 제출한 후에 청약의 신청이 가능합니다. 
    
                                    회원은 자본시장법 등 관계법령에서 정한 투자한도를 준수하여 청약의 주문을 하여야 합니다. 
    
                                    본 조에 따라 투자자가 제출한 정보는 자본시장법 등 관계법령에 따라 중앙기록관리기관에 제공됩니다. 
    
                                    회사는 투자자의 재산인 청약증거금을 청약증거금 관리기관에 예치 또는 신탁하며, 회사는 회원의 예치 또는 신탁된 청약금을 양도하거나 담보로 제공하지 않습니다.`
                                }
                                </li>
                                <li className="li_title">제11조 [청약의 주문 접수]</li>
                                <li className="li_txt pre">{
                                    `회원은 회사가 제공한 양식에 따라 청약의 주문 신청 정보를 입력하고 실명인증 등 확인절차를 이행한 후 “청약의 주문”을 의미하는 버튼을 클릭하면 청약의 주문이 회사에 신청되며, 이와 같은 청약의 주문 신청을 회사가 접수를 하면 청약의 주문 접수가 완료됩니다.  

                                    회사는 예탁결제원을 통해 투자자의 청약 가능 여부를 확인하며 이 정보를 투자자에게 제공하여야 합니다. 
    
                                    청약의 주문 접수 결과 등을 전자우편, 문자메시지 또는 SNS를 통해 통지하여야 하며, 투자자는 청약 가능 여부를 확인한 후 청약증거금을 입금하여야 합니다. 
    
                                    회사는 투자자가 청약의 의사를 표시하지 아니한 상태에서 투자자의 재산으로 증권의 청약을 하여서는 아니됩니다.  
    
                                    청약의 주문이 접수되면 홈페이지에 청약모집률이 게시됩니다. 다만, 본 약관에 따라 청약의 철회가 있거나 청약의 주문이 효력이 상실되는 경우에는 청약모집률은 변동될 수 있습니다. 
    
                                    청약의 주문이 접수된 후에 제10조에 따라 입력한 정보에 변동사항이 있는 경우 회원은 청약기간이 종료되기 전에 한하여 전자우편 등의 방법으로 통지한 후 변경을 요청할 수 있습니다. `
                                }
                                </li>
                                <li className="li_title">제12조 [청약의 주문 취소 등]</li>
                                <li className="li_txt pre">{
                                    `회사는 청약기간이 종료되기 전까지 청약의 주문을 통해 제공받은 정보들의 전부 또는 일부에 대하여 회사 또는 회사가 업무를 위탁한 기관이 정한 절차에 따라 그 진위 여부 또는 유효성에 대한 사실확인절차를 이행하여야 합니다. 

                                    회사는 필요한 경우 제1항에 따른 확인절차를 이행하기 위하여 자본시장법 등 관계법령이 허용하는 한도 내에서 중앙기록관리기관 등에 정보조회를 의뢰할 수 있습니다. 
    
                                    회사가 본 조에 따른 사실확인절차를 이행한 결과 본 약관에 따른 청약 주문 신청에 입력되고 이행되어야 할 전부 또는 일부의 사항들(소득적격투자자 또는 전문투자자 요건, 증권계좌유효성)이 추후 허위로 판명되거나 누락된 경우 또는 입증이 이루어지지 아니하는 경우(증빙자료가 제출되지 않은 경우 포함)(이하 “청약의 주문 취소사유”)에는 청약의 주문이 취소되어 효력이 상실될 수 있습니다. 
    
                                    증권의 모집이 개시된 이후에도 발행회사의 사정 또는 회사와 발행인과의 온라인소액투자중개계약 해지 등 관계법령이 정하는 사유로 인하여 증권의 발행이 취소될 수 있습니다. 이 경우 회원의 청약의 주문 신청의 효력은 상실됩니다. `
                                }
                                </li>
                                <li className="li_title">제13조 [청약의 철회]</li>
                                <li className="li_txt pre">{
                                    `회원은 청약기간의 종료 전(본 약관에서 정한 사유로 청약기간이 연장된 경우에는 연장된 청약기간의 종료 전)까지 회사가 제공한 양식에 따라 회사에게 청약철회 신청을 하는 방법으로 청약의 의사표시를 철회할 수 있습니다. 

                                    회원이 청약증거금을 입금한 후에 제1항에 따라 회원이 청약을 철회를 한 경우, 위 청약증거금을 청약철회신청이 회사에게 도달한 날로부터 지체 없이 회원의 계좌로 반환됩니다. `
                                }
                                </li>
                                <li className="li_title">제14조 [회원탈퇴 등에 대한 조치]</li>
                                <li className="li_txt pre">{
                                    `회원이 청약의 주문을 위해 청약증거금을 입금한 후 청약기간이 종료되기 이전에 탈퇴 혹은 가입약관의 해지사유가 발생한 경우에는 회사는 회원에게 이와 같은 사실을 사전에 통지하고 청약의 철회의 경우와 동일한 방법으로 청약증거금을 반환합니다. `
                                }
                                </li>
                                <li className="line_title"><span className="point_color">5장</span>[모집결과에 따른 증권의 배정·발행·예탁 등]</li>
                                <li className="li_title">제15조 [모집결과의 게시 및 통보 등]</li>
                                <li className="li_txt pre">{
                                    ` 1. 청약기간이 종료되면 회사는 모집결과를 아래와 같은 기준에 따라 청약 모집률이 80% 이상인 경우 “성공”으로, 청약 모집률이 80% 이하인 경우는 “실패”로 구분하여 대상증권의 청약 및 발행에 관한 내역을 홈페이지에 게시하고, 청약의 접수를 완료한 투자자에게 다음 각 호의 내역을 전자우편 등을 통해 통지합니다. 

                                    - 전체 투자자의 청약증거금액, 청약수량, 청약 증거금 및 그밖에 증권의 취득에 관한 청약의 세부사항 
    
                                    - 모집결과의 “성공”, “실패” 여부, 전체 투자자로부터 발행인에게 실제 납입될 증권 대금, 그 밖에 증권의 발행에 관한 세부사항 
    
                                    - 투자한 회원에게 배정된 증권의 가액 및 수량, 납입기일, 그 밖에 증권 배정 및 납입에 관한 사항 
    
                                    - 회사가 청약증거금을 반환하여야 할 경우 그 금액 및 반환일정 등 반환에 관한 사항 
    
                                    2. 청약된 금액이 모집예정금액을 초과하였을 때에는 발행인의 의사에 따라 당초 목표한 모집금액이 증액될 수 있으며, 이 경우 제6조에 따라 게재되는 정보의 변경이 있게 되면 변경된 사항(모집가액, 모집자금의 사용 목적 등)은 홈페이지에 정정되어 게재됩니다. 
    
                                    3. 제2항에 따라 모집가액이 증액되어 변경됨에 따라 자본시장법 등 관계법령에서 발행인에게 요구하는 회계감사의 단계가 변경되는 경우에는 증액된 금액에 상응하는 회계감사의 기준에 따라 정정된 정보가 게재됩니다. `
                                }
                                </li>
                                <li className="li_title">제16조 [청약금의 납입 및 반환]</li>
                                <li className="li_txt pre">{
                                    `청약증거금은 청약증거금관리기관에 예치 또는 신탁되며 회사는 청약증거금이 투자자 명의의 계좌에서 청약증거금관리기관에 개설된 회사 명의의 청약증거금 관리계좌로 직접 이체되도록 하여야 합니다.  

                                    발행인에 대한 전체 투자자의 청약금액 모집결과가 “성공”인 경우 청약증거금관리기관에 예치되어 있던 청약증거금 전액이 발행인 명의 납입계좌로 납입됩니다. 
    
                                    발행인에 대한 전체 투자자의 청약금액 모집결과가 “실패”인 경우 회원이 입금한 청약증거금 원금은 청약기간이 종료한 경우 지체 없이 회원의 계좌로 반환됩니다. 단, 반환되는 청약금에서 이체수수료가 공제될 수 있습니다.  
    
                                    본 약관에 따라 청약의 주문 접수가 되지 않거나 청약의 주문이 효력을 상실한 경우 회원이 입금한 청약증거금은 지체 없이 회원이 회사에 등록한 계좌로 반환됩니다. `
                                }
                                </li>
                                <li className="li_title">제17조 [증권의 발행 및 예탁 등]</li>
                                <li className="li_txt pre">{
                                    `본 약관에 따라 청약금이 납입되면 게재되었던 당해 발행조건(변경된 발행조건 포함)에 따라 증권이 발행되어 증권의 배정을 받은 회원 명의가 투자자명부에 등록됨으로써 중앙기록관리기관에 배정받은 증권이 예탁되거나 계좌관리기관에 개설된 투자자의 고객계좌에 수량이 기재됨으로써 전자등록되어 발행됩니다. 

                                    제1항에 따라 발행 후 예탁된 증권은 의무적으로 중앙기록관리기관에 예탁 또는 의무보유 등록되거나 보호예수되며, 투자자는 배정받은 증권을 6개월 간 매도, 양도하거나 인출할 수 없습니다. 다만, 관계법령에 따라 예외적으로 매도가 가능한 경우(전문투자자에 대한 매도 등)로 인정되는 경우에는 그러하지 아니합니다. `
                                }
                                </li>
                                <li className="line_title"><span className="point_color">6장</span>[기타]</li>
                                <li className="li_title">제18조 [권리의 귀속 등]</li>
                                <li className="li_txt">
                                회사가 제공하는 서비스(데이터, 소프트웨어, 게시물의 저작권 등)에 관한 권리는 회사에게 귀속됩니다.
                                </li>
                                <li className="li_title">제19조 [고객정보에 대한 비밀보장]</li>
                                <li className="li_txt pre">{
                                    `회사는 관계법령에서 정한 경우를 제외하고는 서비스를 수행함에 있어 알게 된 다음 각 호의 어느 하나에 해당하는 투자자 정보를 고객의 동의를 얻지 아니하고 타인에게 제공하거나 업무상 목적 외에 사용하지 아니합니다. 

                                    투자자의 인적사항 
    
                                    투자자의 계좌, 접근매체 및 청약 거래의 내용과 실적에 관한 정보 또는 자료 `
                                }
                                </li>
                                <li className="li_title">제20조 [회사의 책임]</li>
                                <li className="li_txt pre">{
                                    `회사는 관련법령 위반 등으로 인하여 투자자에게 손해가 발생할 경우 이에 대한 배상 책임을 부담합니다.  

                                    회사는 제3자 또는 회원의 고의 또는 과실로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다. 
    
                                    회사는 회원 간 또는 회원과 제3자 상호간에 서비스를 매개로 하여 개별적으로 거래 등을 한 경우에는 책임을 지지 않습니다.  
    
                                    회사는 천재지변, 전시·사변 또는 이에 준하는 불가항력이라고 인정되는 사유로 인하여 회원에게 발생하는 손해에 대하여 책임을 지지 아니합니다. `
                                }
                                </li>
                                <li className="li_title">제21조 [약관의 변경]</li>
                                <li className="li_txt pre">{
                                    `회사는 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「전자문서 및 전자거래기본법」, 「전자금융거래법」, 「전자서명법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「소비자기본법」, 「자본시장과 금융투자업에 관한 법률」등 관련 법을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다. 다만, 자본시장법 등 관계법령의 제ㆍ개정에 따른 제도 변경 등으로 약관이 변경되는 경우로서 본문에 따라 안내하기가 어려운 급박하고 부득이한 사정이 있는 경우에는 변경내용을 앞의 문장과 같은 방법으로 개정 약관의 시행일 전에 게시합니다. 

                                    회사가 본 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행 약관과 함께 홈페이지에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만 회원에게 불리하거나 중요한 내용을 변경하는 경우 서면 또는 전자우편 등 회원과 사전에 합의한 방법을 통해 개별적으로 통지합니다.  
    
                                    회사는 본 약관을 개정할 경우 개정 전 내용과 개정 후 내용을 명확하게 비교하여 회원이 알기 쉽도록 표시합니다.  
    
                                    회사가 본 약관을 개정하여 약관의 내용이 회원에게 불리하게 변경된 경우는 물론 유리하게 변경된 경우라고 하더라도 약관은 회원이 체결할 당시의 약관으로 적용됩니다.  
    
                                    본 조 제4항에도 불구하고 다음 각 호의 경우 개정약관 조항이 적용됩니다. 
    
                                    개정된 약관에 대하여 이미 계약을 체결한 회원이 약관의 내용을 변경하기로 하는 취지로 합의한 경우 
    
                                    회원이 구 약관에 의한 권리를 주장할 이익을 포기하는 취지의 의사를 표시하는 경우 
    
                                    회사가 본 조에 따라 개정 약관을 개별적으로 통지하면서 회원에게 7일 내에 의사표시를 하지 아니하면 의사표시가 표명된 것으로 본다는 뜻을 명확하게 고지하고, 고지한 날부터 7일이 지나도 회원으로부터 명시적 거부 의사표시가 없는 경우  
    
                                    기타 위에 준하는 특별한 사정이 있는 경우  
    
                                    약관이 개정된 후 회원이 체결했던 당시의 약관을 회원에게 적용할 수 없는 특별한 사정이 있는 경우 회사는 회원과의 이용 계약을 해지할 수 있습니다. `
                                }
                                </li>
                                <li className="li_title">제22조 [약관의 효력 및 해석]</li>
                                <li className="li_txt pre">{
                                    `본 약관에서 정하고 있는 사항에 관하여 회사와 회원이 약관의 내용과 다르게 합의한 사항이 있을 때에는 그 합의 사항은 본 약관보다 우선하여 적용됩니다. 

                                    본 약관에서 정하지 아니한 사항이나 해석에 대해서는 관계법령 또는 상관례에 따릅니다. 
    
                                    본 약관과 관련한 한 개 또는 수 개의 조항이 법령에 따라 무효, 위법 또는 집행불능으로 되더라도 본 약관에 명시된 나머지 조항의 효력, 적법성 및 집행가능성은 그로 인하여 아무런 영향을 받지 아니합니다. `
                                }
                                </li>
                                <li className="li_title">제23조 [준거법 및 재판관할]</li>
                                <li className="li_txt pre">{
                                    `본 약관의 해석 및 적용에 관하여는 대한민국법을 준거법으로 합니다. 

                                    본 약관에 의한 거래와 관련하여 회사와 회원 간 발생한 분쟁에 관한 소송은 서울중앙지방법원으로 합니다. `
                                }
                                </li>
                                <li className="line_title"><span className="point_color">-</span>부칙</li>
                                <li className="li_title">제1조 [시행일]</li>
                                <li className="li_txt pre">
                                본 약관은 2020년 4월 1일부터 적용됩니다.
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