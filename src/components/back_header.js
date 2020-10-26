import React from 'react'

export default class Back_header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <header className="back_header">
               <div className="clearfix2">
                    <button type="button" className="back_btn"><img src={ require('../images/icons/back_arrow.png') } alt="뒤로가기아이콘"/></button>
                    <p className="notice_bell"><img src={ require('../images/icons/bell.png') } alt="벨아이콘"/><span className="playF">99</span></p>
               </div>
          </header>          
        )
    }
}