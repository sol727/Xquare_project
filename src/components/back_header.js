import React from 'react'

export default function Back_header() {

    const onClickBack  = () => {
        document.querySelector('.studio_gnb').style.display = 'block'
        document.querySelector('.studio_gnb').classList.remove('off')
    }

        return (
          <header className="back_header">
               <div className="clearfix2">
                    <button onClick={onClickBack} type="button" className="back_btn"><img src={ require('../images/icons/back_arrow.png') } alt="뒤로가기아이콘"/></button>
                    <p className="notice_bell"><img src={ require('../images/icons/bell.png') } alt="벨아이콘"/><span className="playF">99</span></p>
               </div>
          </header>          
        )
}