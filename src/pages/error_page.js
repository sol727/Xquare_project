import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer';
import $ from 'jquery'

export default class Error_page extends React.Component {
    
    constructor(props) {
    super(props);
    }

    componentDidMount(){
        
    
    }

    render() {
        return (
            <>
                <Header />

                <section className="error_page">
                    <div className="container">
                        <div className="text_box">
                            <p>서비스 이용에 불편을 드려 죄송합니다.</p>
                            <h1>원하시는 페이지를 찾을 수가 없습니다</h1>
                            <div className="txt">
                                찾으시려는 페이지의 주소가 잘못 입력되었거나,<br/>
                                페이지 주소의 변경 혹은 삭제로 인해 현재 사용하실 수 없습니다.<br/>
                                입력하신 페이지의 주소가 정확한지 다시 한번 확인해주시길 부탁드립니다.
                            </div>
                            <div className="btn_wrap clearfix2">
                                <button type="button" onClick={() => window.history.back()}>이전페이지로</button>
                                <button type="button" onClick={() => window.location.pathname = "/"}>홈으로 이동</button>
                            </div>
                        </div>
                        <img src={ require('../images/error_page_bg.png') } alt="error_page 이미지"/>
                    </div>
                </section>
                
                <Footer/>
            </>
        )
    }
}