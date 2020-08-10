import React from 'react'
import * as js from '../js/style'
import Header from '../components/header'
import Modal from '../components/modal';

export default class index extends React.Component {

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
        <div className="test" onClick={ (e) => js.show("modal1",e) }>
        </div>
          <Modal msg="인덱스 메시지 입니다.<br/>줄바꿈" id="modal1" />
        </section>


      </>
    )
  }
}