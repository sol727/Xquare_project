import React from 'react'
import Count_input from '../components/count_input';
export default class Paragraph extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
          <div className="paragraph">
               <div  className="clearfix2 drag_box" >
                    <div className="clearfix">
                         <button type="button" className="drag"><img src={ require('../images/icons/ic_drag_handle.png') } alt="드래그아이콘"/></button>
                         <p>문단</p>
                    </div>                    
                    <ul className="clearfix">
                         <li> <button type="button"><img src={ require('../images/icons/ic_ic_dropdown_ic_dropdown_up.png') } alt="드롭업아이콘"/></button></li>
                         <li><button type="button"><img src={ require('../images/icons/ic_ic_dropdown_ic_dropdown_down.png') } alt="드롭다운아이콘"/></button></li>
                         <li><button type="button"><img src={ require('../images/icons/ic_remove_circle_a.png') } alt="지우기아이콘"/></button></li>
                    </ul>
               </div>
                 <p className="error mb8">·error here</p>
                 <Count_input
                    count_class="title mb8"
                    count_placeholder="프로젝트 제목 (최대 24자)"
                    count="24"
                />
                <p className="error mb8">·error here</p>
                <textarea name="" id="" cols="30" rows="10" placeholder="본문 내용 입력"></textarea>
          </div>
        )
    }
}