import React from 'react'
import $ from 'jquery'
export default class Radio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
             checked : false
        }

        this.onChangeRadio = this.onChangeRadio.bind(this)
    }

    onChangeRadio(e) {
        if ( this.props.step ) {
            this.props.onChangeStep(this.props.id , this.props.step )
        } else {
            this.props.onChangeStep(this.props.id )
        }
    }

    render() {
        return (
          <div className={`radio_box ${this.props.radio_box} ${this.props.focus === this.props.id ? 'on' : ''}`}>
               <input type="radio" onChange={this.onChangeRadio} checked={this.state.checked} name={this.props.name} className={`radio_input ${this.props.radio_class}`} id={this.props.id}/>
               <label htmlFor={this.props.id}></label><label htmlFor={this.props.id}>{this.props.text}</label>
          </div>
        )
    }
}