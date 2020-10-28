import React from 'react'

export default class Text_input extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        return (
          <div className={`text_input clearfix ${this.props.input_class}`}>
              <p className="">{this.props.input_text2}</p>
               <input type="text" placeholder={this.props.placeholder} /> 
               <p className="rightT">{this.props.input_text}</p>
          </div>
        )
    }
}