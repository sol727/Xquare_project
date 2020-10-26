import React from 'react'
export default class Circle extends React.Component {

    constructor(props) {
          super(props);
    }

    render() {
        return (
            <div className="circle">
                <div className="base"></div>
                <div className="over"></div>
                <span>{this.props.percent}</span>
            </div>
        )
    }
}