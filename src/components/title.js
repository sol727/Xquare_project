import React from 'react'

export default class Title extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="box_title">
               {
                    this.props.buttonShow ?
                    <p style={{ color : this.props.buttonDisabled ? '#f00' : '#000' }}>투자자 노출</p> :
                    <></>
               }
               <h3 className="title"><span className="playF">{this.props.num}</span>{this.props.title}<span className="star">{this.props.star}</span></h3>
               {this.props.text}
          </div>
          
        )
    }
}