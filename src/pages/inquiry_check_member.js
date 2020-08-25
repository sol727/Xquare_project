import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer'

export default class Inquiry_check_member extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <>
                <Header />
                <section className="invest_page inquiry_check">
                    <div className="container">
                        <div className="title_wrap centerT">
                            <h1 className="mb16">1:1문의하기</h1>
                            <h3>엑스퀘어에 문의하고자 하는 내용을 남겨주시면,<br/>빠른 시일 내에 답변 드립니다.</h3>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        )
    }
}