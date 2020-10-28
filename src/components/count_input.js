import React from 'react'
import $ from 'jquery'
export default class Count_input extends React.Component {

    constructor(props) {
        super(props);
    }   
    

    render() {
        return (
          <div className={`count_input ${this.props.count_class}`}>
               <input type="text" placeholder={this.props.count_placeholder}/>
               <p>(0/{this.props.count})</p>
          </div>
        )
    }
}