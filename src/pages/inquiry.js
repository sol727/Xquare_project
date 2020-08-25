import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer'

export default class Inquiry extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
                <Header />
                <section className="invest_page inquiry">
                    <div className="container">
                        <div className="title_wrap centerT">
                            <h1 className="mb16">1:1문의하기</h1>
                            <h3>엑스퀘어에 문의하고자 하는 내용을 남겨주시면,<br/>빠른 시일 내에 답변 드립니다.</h3>
                        </div>
                        <ul className="prepare_ul">
                            <li>
                                <div className="clearfix2">
                                    <div className="txt">
                                        <h3>엑스퀘어 회원이라면?</h3>
                                    </div>
                                    <button type="button" className="navy_btn" onClick={() => window.location.pathname = "/inquiry_check_member"}>로그인 후 문의하기</button>
                                </div>
                            </li>
                            <li>
                                <div className="clearfix2">
                                    <div className="txt">
                                        <h3>엑스퀘어 회원이 아니라면?</h3>
                                    </div>
                                    <button type="button" className="navy_btn" onClick={() => window.location.pathname = "/inquiry_check"}>비회원 문의하기</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            <Footer />
            </>
        )
    }
}