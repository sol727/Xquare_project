import React from 'react'

export default class Modal extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={ this.props.id } style={{ display : "none" , width : "100vw" , height : "100vh" , position : "relative" , background : "rgba(0,0,0,0.5)" }}>
                <div 
                style={{ width : "200px" , height : "200px" , position : "absolute" , left : '50%' , top : "50%" , transform : "translate(-50% , -50%)" , background : "#fff" }}
                dangerouslySetInnerHTML={{__html : this.props.msg}}
                >
                </div>
            </div>
        )
    }
}