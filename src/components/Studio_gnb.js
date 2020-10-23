import React from 'react'
export default class Studio_gnb extends React.Component {

    constructor(props) {
          super(props);
    }

    render() {
        return (
            <div className="v3 studio_gnb">
               <button className="gnb_btn"><img src={ require('../images/icons/ic_menu_left.png') } alt="gnb접기아이콘"/></button>
               <div className="gnb_wrap">
                    <div>
                         
                    </div>
                    <ul>
                         <li>

                         </li>
                    </ul>
               </div>
               
            </div>
        )
    }
}