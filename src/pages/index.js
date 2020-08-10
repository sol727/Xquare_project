import React from 'react'
import * as js from '../js/style'
import Header from '../components/header'

export default class Index extends React.Component {

  constructor(props) {
    super(props);
  }

  // $(document).ready({ ... })
  componentDidMount(){
    
  }

  
  render() {
    return (
      <>

        <Header />

        <section>          
        {/*  <div className="test" onClick={ (e) => js.show("modal1",e) }>
        </div>
          <Modal msg="인덱스 메시지 입니다.<br/>줄바꿈" id="modal1" />*/}
          <div className="main_banner" >
            <img src={ require('../images/main_banner_bg.png') } alt="메인배너이미지"/>
          </div>
          <div className="section1">
            <h1>Xquare List</h1>
            <p>엑스퀘어의 친환경 투자상품을 소개합니다.</p>
          </div>
        </section>


      </>
    )
  }
}