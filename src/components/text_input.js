import React from 'react'

export default class Text_input extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
          <div className="text_input clearfix2">              
               <input type="text"/> 
               <p className="rightT">{this.props.input_text}</p>
          </div>
        )
    }
}