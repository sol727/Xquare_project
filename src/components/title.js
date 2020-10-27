import React from 'react'

export default class Title extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="box_title">
               {
                    this.props.labelShow ?
                    <p className="label" style={{ background: this.props.labelDisabled ? '#bfbfbf' : '#ff8e40' }}>{this.props.label_title}</p> :
                    <></>
               }               
               <h3 className="title"><span className="playF">{this.props.num}</span>{this.props.title}<span className="star">{this.props.star}</span></h3>
               {this.props.text}
          </div>
          
        )
    }
}