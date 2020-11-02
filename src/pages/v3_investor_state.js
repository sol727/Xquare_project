import React from 'react'
import { Link } from 'react-router-dom';
import Studio_gnb from '../components/Studio_gnb'
import InvestorCont from '../components/investorCont'
import Back_header from '../components/back_header';

export default class V3_investor_state extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>                
                <section className="v3 investor_state studio">
                    <Back_header/>
                    <div className="clearfix">
                        <Studio_gnb/>
                        <div className="cont">
                            <div className="top_box container">
                                <h1>투자자 현황</h1>
                            </div>
                            <div className="gray_bg clearfix2">
                                <div className="api_box"></div>
                                <ul className="list_box">
                                    <li>
                                        <InvestorCont
                                            date="2021년 04월 01일 12:34"

                                            li ={
                                                <>
                                                <li>개인투자자</li>
                                                <li>전문투자자</li>
                                                </>
                                            }
                                            name="홍길동"
                                            price="n주 총 nn,nnn원"
                                            box_title ="계좌 유효성 확인 완료"
                                            BoxDisabled={true}
                                        />
                                    </li>
                                    <li>
                                        <InvestorCont
                                            date="2021년 04월 01일 12:34"

                                            li ={
                                                <>
                                                <li>법인투자자</li>
                                                <li>전문투자자</li>
                                                </>
                                            }
                                            name="활빈당그로스밸류인베스트먼트"
                                            price="n주 총 nn,nnn원"
                                            box_title ="계좌 유효성 확인 미완료"
                                            BoxDisabled={false}
                                        />
                                    </li>
                                    <li>
                                        <InvestorCont
                                            date="2021년 04월 01일 12:34"

                                            li ={
                                                <>
                                                <li>법인투자자</li>
                                                <li>전문투자자</li>
                                                </>
                                            }
                                            name="활빈당그로스밸류인베스트먼트"
                                            price="n주 총 nn,nnn원"
                                            box_title ="계좌 유효성 확인 미완료"
                                            BoxDisabled={false}
                                        />
                                    </li>
                                    <li>
                                        <InvestorCont
                                            date="2021년 04월 01일 12:34"

                                            li ={
                                                <>
                                                <li>개인투자자</li>
                                                <li>전문투자자</li>
                                                </>
                                            }
                                            name="홍길동"
                                            price="n주 총 nn,nnn원"
                                            box_title ="계좌 유효성 확인 완료"
                                            BoxDisabled={true}
                                        />
                                    </li>
                                    <li>
                                        <InvestorCont
                                            date="2021년 04월 01일 12:34"

                                            li ={
                                                <>
                                                <li>법인투자자</li>
                                                <li>전문투자자</li>
                                                </>
                                            }
                                            name="활빈당그로스밸류인베스트먼트"
                                            price="n주 총 nn,nnn원"
                                            box_title ="계좌 유효성 확인 미완료"
                                            BoxDisabled={false}
                                        />
                                    </li>
                                    <li>
                                        <InvestorCont
                                            date="2021년 04월 01일 12:34"

                                            li ={
                                                <>
                                                <li>법인투자자</li>
                                                <li>전문투자자</li>
                                                </>
                                            }
                                            name="활빈당그로스밸류인베스트먼트"
                                            price="n주 총 nn,nnn원"
                                            box_title ="계좌 유효성 확인 미완료"
                                            BoxDisabled={false}
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}