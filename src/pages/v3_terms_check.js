import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer';
import Mount from '../components/mount';
import PerfectScrollbar from '@opuscapita/react-perfect-scrollbar';

export default class V3_terms_check extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            check1 : false ,
            check2 : false ,
            arrow1 : true ,
            arrow2 : false
        }

        this.onChangeCheck = this.onChangeCheck.bind(this)
        this.onClcikArrow = this.onClcikArrow.bind(this)
    }


    onChangeCheck(e) {
        if ( e.target.id === "check1" ) {
            
            this.setState({
                check1 : e.target.checked
            })

        } else {

            this.setState({
                check2 : e.target.checked
            })

        }
    }

    onClcikArrow(e) {
        console.log(e.target)
        if (e.target.id === "arrow1") {
            this.setState({
                arrow1 : !this.state.arrow1
            })
        } else {
            this.setState({
                arrow2 : !this.state.arrow2
            })
        }
    }

    render() {

        const check1 = this.state.check1
        const check2 = this.state.check2
        const arrow1 = this.state.arrow1
        const arrow2 = this.state.arrow2

        return (
            <>
               <Mount />
                <Header />

                <section className="invest_page v3 terms_check signup signup2">
                    <div className="top_banner">
                        <h1>투자하기</h1>
                    </div>
                    <div className="invest_top_box">
                        <ul className="clearfix">
                            <li className="mo_none">
                                <Link to="/">
                                    <img src={ require('../images/icons/home_icon.png') } alt="홈아이콘"/>
                                </Link>
                            </li>
                            <li>투자하기</li>
                            <li className="on">전체 펀딩보기</li>
                        </ul>
                    </div>
                    <div className="container">
                         <div className="title_wrap centerT ">
                              <h1 className="mb16">약관확인</h1>
                              <h3>엑스퀘어는 개인정보이용 관련 법률과 규정을 준수합니다. 아래의 내용을 확인해 주시기 바랍니다.</h3>
                         </div>
                         
                    </div>
                    <div className="container">
                        <div className="terms_wrap">
                            <ul className="agree_box">
                                <li className="agree_wrap mb16">
                                    <div className={`check_wrap check_wrap2 clearfix2 ${check1 ? 'on' : ''}`}>
                                        <div className="clearfix">
                                            <input value={this.state.check1} onChange={this.onChangeCheck} type="checkbox" id="check1" className="solo_check" name="agree"/>
                                            <label htmlFor="check1"></label>
                                            <label htmlFor="check1" className="label_txt">개인정보 수집·이용 및 제3자 제공 동의</label>
                                        </div>
                                        <button onClick={this.onClcikArrow} type="button" className={`down_btn ${arrow1 ? 'on' : ''}`}><img id="arrow1" src={ require(`../images/down_arrow${check1 ? '_w' : ''}.png`) } alt="화살표 아이콘"/></button>
                                    </div>
                                    <div className={`info_txt ${arrow1 ? '' : 'hide'}`}>
                                        <PerfectScrollbar>
                                        <div className="txt_box2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue leo lectus nisl, at. Sed pretium amet, sagittis consectetur est. Sed risus pellentesque morbi aliquam sit etiam lorem. Dui vitae sed convallis elit ut ut orci at. Tortor risus pharetra, integer scelerisque libero consectetur turpis at varius. Urna orci ut lectus eu urna. Arcu mauris dignissim eget in pharetra vestibulum massa sed hac. Nunc condimentum aenean id nunc curabitur. Amet, nunc consectetur pulvinar ullamcorper leo rutrum sed diam. Adipiscing cras habitant sed non malesuada.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue leo lectus nisl, at. Sed pretium amet, sagittis consectetur est. Sed risus pellentesque morbi aliquam sit etiam lorem. Dui vitae sed convallis elit ut ut orci at. Tortor risus pharetra, integer scelerisque libero consectetur turpis at varius. Urna orci ut lectus eu urna. Arcu mauris dignissim eget in pharetra vestibulum massa sed hac. Nunc condimentum aenean id nunc curabitur. Amet, nunc consectetur pulvinar ullamcorper leo rutrum sed diam. Adipiscing cras habitant sed non malesuada.
                                        </div>
                                        <button type="button" className="agree_btn">동의하기</button>
                                        </PerfectScrollbar>
                                    </div>

                                </li>
                                <li className="agree_wrap">
                                    <div className={`check_wrap check_wrap2 clearfix2 ${check2 ? 'on' : ''}`}>
                                        <div className="clearfix">
                                            <input value={this.state.check2} onChange={this.onChangeCheck} type="checkbox" id="check2" className="solo_check" name="agree"/>
                                            <label htmlFor="check2"></label>
                                            <label htmlFor="check2" className="label_txt">가상예치계좌 발급 및 예치금 신탁 동의</label>
                                        </div>
                                        <button onClick={this.onClcikArrow} type="button" className={`down_btn ${arrow2 ? 'on' : ''}`}><img id="arrow2" src={ require(`../images/down_arrow${check2 ? '_w' : ''}.png`) } alt="화살표 아이콘"/></button>
                                    </div>
                                    <div className={`info_txt ${arrow2 ? '' : 'hide'}`}>
                                        <PerfectScrollbar>
                                        <div className="txt_box2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue leo lectus nisl, at. Sed pretium amet, sagittis consectetur est. Sed risus pellentesque morbi aliquam sit etiam lorem. Dui vitae sed convallis elit ut ut orci at. Tortor risus pharetra, integer scelerisque libero consectetur turpis at varius. Urna orci ut lectus eu urna. Arcu mauris dignissim eget in pharetra vestibulum massa sed hac. Nunc condimentum aenean id nunc curabitur. Amet, nunc consectetur pulvinar ullamcorper leo rutrum sed diam. Adipiscing cras habitant sed non malesuada.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue leo lectus nisl, at. Sed pretium amet, sagittis consectetur est. Sed risus pellentesque morbi aliquam sit etiam lorem. Dui vitae sed convallis elit ut ut orci at. Tortor risus pharetra, integer scelerisque libero consectetur turpis at varius. Urna orci ut lectus eu urna. Arcu mauris dignissim eget in pharetra vestibulum massa sed hac. Nunc condimentum aenean id nunc curabitur. Amet, nunc consectetur pulvinar ullamcorper leo rutrum sed diam. Adipiscing cras habitant sed non malesuada.
                                        </div>
                                        <button type="button" className="agree_btn">동의하기</button>
                                        </PerfectScrollbar>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="btn_wrap clearfix2">
                            <button type="button" className="back_btn">이전</button>

                            {/* 가입완료활성화될때 class에 orange_btn 추가↓ */}
                            <button type="button" className="unable_btn">다음</button>
                        </div>
                    </div>
                </section>
                
                <Footer/>
            </>
        )
    }
}