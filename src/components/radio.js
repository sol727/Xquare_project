import React from 'react'
import $ from 'jquery'
export default class Radio extends React.Component {

    constructor(props) {
        super(props);
    }
    componentDidMount(){

     
          // var chk_radio = document.querySelector('input[type="radio"]');
          // var parent = checked.parentNode; 
		// var sel_type = null;
		// for(var i=0;i<chk_radio.length;i++){
		// 	if(chk_radio[i].checked == true){ 
		// 		sel_type = chk_radio[i].value;
		// 	}
		// }
		// if(sel_type == null){

          //      parent.classList.add('on');
		// 	return false;
		// }else{
          //      parent.classList.remove('on');
          // }
          
     
    



     
     // var checked= document.querySelector('input[type="radio"]');
     // var parent = checked.parentNode; 
     //      if(checked.checked == true){ 
     //           parent.classList.add('on');
     //      }else{
     //           parent.classList.remove('on');
     //      } 
    }
    

    render() {
        return (
          <div className="radio_box">
               <input type="radio" name={this.props.name} className={`${this.props.class}`} 
               id={this.props.id}/><label htmlFor={this.props.id}></label><label htmlFor={this.props.id}>{this.props.text}</label>
          </div>
        )
    }
}