import React from 'react'

export default class Login extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
            <section className="from_page">
                <div className="bg_gradient">
                    <h1 msg="로그인"></h1>   
                    <p msg="에너지엑스 스퀘어의 다양한 서비스를 이용하시려면 로그인을 해주세요."></p>   
                </div>
                <div className="right">
                    <form action="">
                        <h2>SNS 계정으로 간편 로그인</h2>
                        <div className="sns_wrap">
                            <button type="button"><img src="" alt=""/></button>
                            <button type="button"><img src="" alt=""/></button>
                            <button type="button"><img src="" alt=""/></button>
                            <button type="button"><img src="" alt=""/></button>
                        </div>
                        <h2>이메일 계정으로 로그인</h2>
                        <ul>
                            <li><input type="text" placeholder="아이디(이메일)"/></li>
                            <li><input type="password" placeholder="비밀번호"/></li>
                            <li>
                                <div><input type="checkbox"/><label htmlFor=""></label><label htmlFor="">아이디 저장</label></div>
                            </li>
                        </ul>
                    </form>
                </div>
            </section>
        )
    }
}