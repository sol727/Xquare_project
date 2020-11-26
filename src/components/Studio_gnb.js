import React from 'react'
import { Link } from 'react-router-dom';
import ProjectContent from '../components/ProjectContent'
import PerfectScrollbar from '@opuscapita/react-perfect-scrollbar';

export default class Studio_gnb extends React.Component {

    constructor(props) {
          super(props);

        this.state = {
            activeIndex : null,
        }
        
          this.menuOn = this.menuOn.bind(this)
          this.menuOn2 = this.menuOn2.bind(this)
          this.menuOn3 = this.menuOn3.bind(this)
          this.gnbOff = this.gnbOff.bind(this)
          this.gnbOn = this.gnbOn.bind(this)
          this.initActive = this.initActive.bind(this)
          this.getElementIndex = this.getElementIndex.bind(this)
          this.onHover = this.onHover.bind(this)
          this.onLeave = this.onLeave.bind(this)
        //   this.active_li = this.active_li.bind(this)
        
    }   

    onClickLink (link) {
        window.location.pathname = link
    }

    onHover(e) {
        e.preventDefault()
        if ( e.target.tagName === "LI" ) {
            this.initActive();
            e.target.classList.add('active');

        }

    }


    onLeave(e) {
        e.preventDefault()
        if ( e.target.tagName === "LI" ) {
            let off_menu = document.querySelectorAll('ul.off_menu li');
            let index =  this.getElementIndex(off_menu, e.target);

           

            if(this.state.activeIndex != index){
                e.target.classList.remove('active');
                this.initActive();
            }else if(this.state.activeIndex == null){
                e.target.classList.remove('active');
            }

        }
        document.querySelector('.v3.studio_gnb .gnb_wrap .off_menu li:nth-child('+this.props.off_index+')').classList.add('active');
        
    }

    // Active Class 초기화
    initActive(){
        let target = this;
        let off_menu = document.querySelectorAll('ul.off_menu li');
        let active_menu = document.querySelector('ul.off_menu li.active');

        if(this.state.activeIndex == null && active_menu){
            let index = this.getElementIndex(off_menu, active_menu);

            this.setState({
                activeIndex:index
            }, () => {
                let menu_index = 0;
                off_menu.forEach(function(om){
                    if(target.state.activeIndex != menu_index){
                        om.classList.remove("active");
                    }
                    //menu_index++;
                });
            });
        }else{
            let menu_index = 0;
            off_menu.forEach(function(om){
                if(target.state.activeIndex != menu_index){
                    om.classList.remove("active");
                }
                //menu_index++;
            });
        }
    }

     // HTML 요소의 Indext 찾기
     getElementIndex(element, range) {
        // 추가
        if (!!range) return [].indexOf.call(element, range);
        return [].indexOf.call(element.parentNode.children, element);
     }

    componentDidMount() {
        window.onresize = function() {
            if( document.querySelector('body').offsetWidth > 1247 ) {
                document.querySelector('.studio_gnb').style.display = 'block'
                document.querySelector('.studio_gnb').classList.add('off')
            }else{
                document.querySelector('.studio_gnb').style.display = 'none'
            }
        };
        if ( localStorage.gnb_state === 'off' ) {
            document.querySelector('.studio_gnb').classList.add('off')
            document.querySelector('.v3.studio').classList.add('gnb_off')
        }
        document.querySelector('.v3.studio_gnb .gnb_wrap .on_menu li').classList.remove('on')
        document.querySelector('.v3.studio_gnb .gnb_wrap .off_menu li').classList.remove('active')
        var on = document.querySelector('.v3.studio_gnb .gnb_wrap .on_menu li:nth-child('+this.props.on_index+')')
        var active = document.querySelector('.v3.studio_gnb .gnb_wrap .off_menu li:nth-child('+this.props.off_index+')')
        var prev = on.previousSibling;
        var next = on.nextSibling;
        on.className += " on"
        active.className += " active"

        if (prev)  prev.className += " prev_li"
        else        on.parentNode.parentNode.previousSibling.className += " prev_li"
        
        if ( next ) next.className += " next_li"
        else         prev.parentNode.nextSibling.className += " next_li"

        document.querySelector('body').style.background = '#eff1f7'
        
    }

    gnbOff(e) {

        if( document.querySelector('body').offsetWidth <= 1247 ) {
            document.querySelector('.studio_gnb').style.display = 'none'
        } else {
            var mother = e.target.parentNode;            
            mother.className += " off"
    
            var section = document.getElementsByClassName('v3 studio')[0];
            section.className += " gnb_off"

            var off_box = document.querySelectorAll('.account3 .off_box'); 
            for ( var i = 0; i < off_box.length; i++ ) {
                off_box[i].classList.add('off')
              }
              
            localStorage.setItem('gnb_state','off')
        }       

    }
    
    gnbOn(e) {
        console.log(e.target);
        
        var menu = document.getElementsByClassName('studio_gnb')[0];
        menu.classList.remove('off')

        var section = document.getElementsByClassName('v3 studio')[0];
        section.classList.remove('gnb_off')

        var off_box = document.querySelectorAll('.account3 .off_box');
        for ( var i = 0; i < off_box.length; i++ ) {
            off_box[i].classList.remove('off')
        }

        localStorage.setItem('gnb_state','on')

    }
    
    menuOn(e) {
        console.log(e.target);
        
        var mother = e.target.parentNode;
        var prev = mother.previousSibling;
        var next = mother.nextSibling;
        mother.className += " on"
        prev.className += " prev_li"
        next.className += " next_li"

    }

    menuOn2(e) {
        console.log(e.target);
        
        var mother = e.target.parentNode;
        var mother2 = mother.parentNode.parentNode;
        var prev = mother2.previousSibling;
        var next = mother.nextSibling;
        mother.className += " on"
        prev.className += " prev_li"
        next.className += " next_li"
    }

    menuOn3(e) {
        console.log(e.target);
        
        var mother = e.target.parentNode;
        var mother2 = mother.parentNode;
        var prev = mother.previousSibling;
        var next = mother2.nextSibling;
        var next2 = next.nextSibling;

        mother.className += " on"
        prev.className += " prev_li"
        next.className += " next_li"
    }

    render() {

        
        return (
            <div className="v3 studio_gnb">
               <button className="gnb_btn" onClick={this.gnbOff}></button>
                <div className="gnb_wrap">
                    <div className="centerT menu_btn">
                        <button type="button" className="gnb_btn2" onClick={this.gnbOn}></button>
                    </div>
                    <div className="top centerT">
                        <img src={ require('../images/img_logo_xquare_w.png') } alt="logo"/>
                        <h1>프로젝트 스튜디오</h1>
                    </div>
                    <div className="state_box_wrap"> 
                        <div className="state_box">
                            <ProjectContent
                                state="준비중"
                                date="yymmdd-hhnn" 
                                title="제목없음"
                                label_li = {
                                    <>
                                    <li>미지정</li>
                                    </>
                                }
                                alarmShow={false}
                                bottomShow={false}
                                txt1="진행 기간"
                                start="시작일"
                                start_day="미지정"
                                end="마감일"
                                end_day="미지정"
                                txt2="달성률"
                                goal="목표 모금액"
                                goal_txt="미지정"
                                attain="달성 모금액"
                                attain_txt="0원"
                                circle={[
                                    {
                                        text : '-' ,
                                        percentage : 0 ,
                                        type : 0
                                    } ,
                                    {
                                        text : '-' ,
                                        percentage : 0 ,
                                        type : 1
                                    }
                                ]}
                            />
                        </div>
                    </div>
                    <PerfectScrollbar className="on_scroll">
                    <ul className="on_menu">
                         <li className="">
                            <Link to="/v3_project_state" onClick={this.menuOn2}>프로젝트상세</Link>                            
                         </li>
                         <li className=""  >
                            <Link to="/v3_account">계약준비</Link>
                         </li>
                         <li className="sub_menu">
                            <Link to="/v3_account" className="arrow" onClick={this.menuOn}>자격확인</Link>
                        </li>
                        <li className="sub_menu">
                            <Link to="/v3_account2" className="arrow" onClick={this.menuOn}>기본자료</Link>
                        </li>
                        <li className="sub_menu">
                            <Link to="/v3_account3" className="arrow" onClick={this.menuOn}>발행정보</Link>
                        </li>
                        <li className="sub_menu">
                            <Link to="/v3_account4" className="arrow" onClick={this.menuOn}>기타정보</Link>
                        </li>
                        <li className="" >
                            <Link to="/v3_funding1">펀딩준비</Link>
                         </li>
                         <li className="sub_menu">
                            <Link to="/v3_funding1" className="arrow" onClick={this.menuOn}>발행정보 확정</Link>
                        </li>
                        <li className="sub_menu">
                            <Link to="/v3_funding2" className="arrow" onClick={this.menuOn}>펀딩 소개 작성</Link>
                        </li>
                        <li className="sub_menu">
                            <Link to="/v3_funding3" className="arrow" onClick={this.menuOn}>추가 자료</Link>
                        </li>
                        <li className="" >
                            <Link to="/v3_feedback" className="arrow" onClick={this.menuOn}>엑스퀘어 피드백 <span className="count">9999</span></Link>
                         </li>
                         <li className="" >
                            <Link to="/v3_investor_state" className="arrow" onClick={this.menuOn}>투자자 현황 </Link>
                         </li>
                         <li className="" >
                            <Link to="/v3_investor_opinion" className="arrow" onClick={this.menuOn}>투자자 의견 <span className="count">1</span></Link>
                         </li>
                         <li className="alert" >
                            <Link to="/v3_news" className="arrow" onClick={this.menuOn}>새소식 관리  <img src={ require('../images/icons/ic_ic_alert_alert_circle.png') } alt="느낌표아이콘"/></Link>
                         </li>
                         <li className="alert" >
                            <Link to="/v3_data" className="arrow" onClick={this.menuOn3}>결산자료 제출 및 확인  <img src={ require('../images/icons/ic_ic_alert_alert_circle.png') } alt="느낌표아이콘"/></Link>
                         </li>
                         {/* <li className="">
                            <Link to="/" className="arrow">투자광고 </Link>
                         </li>
                         <li className="">
                            <Link to="/" className="arrow">설정 </Link>
                         </li>
                         <li className="">
                            <Link to="/" className="arrow">프로젝트 문의</Link>
                         </li> */}
                    </ul>
                    <div className="bottom rightT"> 
                        <button type="button" className="studio_btn">프로젝트 삭제</button>
                    </div>
                    </PerfectScrollbar>
                    <PerfectScrollbar  className="off_scroll">
                    <ul className="off_menu">
                        <li className="" onMouseOver={this.onHover} onMouseLeave={this.onLeave} onClick={() => window.location.pathname = "/V3_Project_state"}>
                            <p>프로젝트상세</p>
                            <Link to="/V3_Project_state"></Link>
                            
                        </li>
                        <li className="sub_menu first_sub" onMouseOver={this.onHover} onMouseLeave={this.onLeave} onClick={() => window.location.pathname = "/v3_account"}>
                            <p>자격확인</p>
                            <Link to="/v3_account"></Link>
                            
                        </li>
                        <li className="sub_menu"onMouseOver={this.onHover} onMouseLeave={this.onLeave} onClick={() => window.location.pathname = "/v3_account2"}>
                             <p>기본자료</p>
                            <Link to="/v3_account2"></Link>
                           
                        </li>
                        <li className="sub_menu"onMouseOver={this.onHover} onMouseLeave={this.onLeave} onClick={() => window.location.pathname = "/v3_account3"}>
                            <p>발행정보</p>
                            <Link to="/v3_account3"></Link>
                            
                        </li>
                        <li className="sub_menu"onMouseOver={this.onHover} onMouseLeave={this.onLeave} onClick={() => window.location.pathname = "/v3_account4"}>
                             <p>기타정보</p>
                            <Link to="/v3_account4"></Link>
                           
                        </li>
                        <li className="sub_menu first_sub"onMouseOver={this.onHover} onMouseLeave={this.onLeave} onClick={() => window.location.pathname = "/v3_funding1"}>
                            <p>발행정보 확정</p>
                            <Link to="/v3_funding1"></Link>
                            
                        </li>
                        <li className="sub_menu"onMouseOver={this.onHover} onMouseLeave={this.onLeave} onClick={() => window.location.pathname = "/v3_funding2"}>
                            <p>펀딩 소개 작성</p>
                            <Link to="/v3_funding2"></Link>
                           
                        </li>
                        <li className="sub_menu" onMouseOver={this.onHover} onMouseLeave={this.onLeave} onClick={() => window.location.pathname = "/v3_funding3"}>
                            <p>추가 자료</p>
                            <Link to="/v3_funding3"></Link>
                            
                        </li>      
                        <li className="long_menu" onMouseOver={this.onHover} onMouseLeave={this.onLeave} onClick={() => window.location.pathname = "/v3_feedback"}> 
                            <p>엑스퀘어 피드백</p>
                            <Link to="/v3_feedback"></Link>
                           
                        </li>      
                        <li className="" onMouseOver={this.onHover} onMouseLeave={this.onLeave} onClick={() => window.location.pathname = "/v3_investor_state"}> 
                            <p>투자자 현황</p>
                            <Link to="/v3_investor_state"></Link>
                         
                        </li>  
                        <li className="" onMouseOver={this.onHover} onMouseLeave={this.onLeave} onClick={() => window.location.pathname = "/v3_investor_opinion"}>
                            <p>투자자 의견</p>
                            <Link to="/v3_investor_opinion"></Link>
                           
                        </li>  
                        <li className="" onMouseOver={this.onHover} onMouseLeave={this.onLeave} onClick={() => window.location.pathname = "/v3_news"}>
                            <p>새소식 관리</p>
                            <Link to="/v3_news"></Link>
                            
                        </li>    
                        <li className="long_menu long_menu2" onMouseOver={this.onHover} onMouseLeave={this.onLeave} onClick={() => window.location.pathname = "/v3_data"} >
                            <p>결산자료 제출 및 확인</p>
                            <Link to="/v3_data"></Link>
                           
                        </li>              
                        {/* <li className="">
                            <p>투자광고</p>
                            <a href=""></a>                            
                        </li>    
                        <li className="clearfix">
                            <p>설정</p>
                            <a href=""></a>                            
                        </li>    
                        <li className="clearfix">
                            <p>프로젝트 문의</p>
                            <a href=""></a>
                           
                        </li>     */}
                    </ul>
                    </PerfectScrollbar>                    
               </div>               
            </div>
        )
    }
}