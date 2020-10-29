import React from 'react'

export default class File_upload extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
          <div className="file_upload">
               {
                    this.props.downShow ?
                         <button type="button" className="down_btn">양식 다운로드</button>:
                    <></>
               }               
               <div className="clearfix2">
                    <div className="file_name">
                         <input type="text" placeholder="파일을 업로드해주세요."/> 
                         <button type="button" className="file_delete_btn"><img src={ require('../images/icons/input_delt_icon.png')} alt="삭제아이콘"/></button>
                    </div>             
                     <label htmlFor={this.props.flie_id} className={`upload_btn ${this.props.btn_class}`}><input type="file" name="" id={this.props.flie_id}/>업로드</label> 
               </div>              
          </div>
        )
    }
}