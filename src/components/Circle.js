import React from 'react'
export default class Circle extends React.Component {

    constructor(props) {
          super(props);
    }

    render() {

        const base_percentage = this.props.percentage > 100 ? 100 : this.props.percentage
        const over_percentage = this.props.percentage > 100 ? this.props.percentage - 100 : 0

        return (
            <div className="circle">
                <div className="base" style={{ background : `conic-gradient(#${this.props.type ? '5dcf17' : '5a7cfa'} 0% ${base_percentage}%,transparent 0% 0%)` }}></div>
                <div className="over" style={{ background : `conic-gradient(#${this.props.type ? '5dcf17' : '5a7cfa'} 0% ${over_percentage}%,transparent 0% 0%)` }}></div>
                <span>{this.props.text}</span>
            </div>
        )
    }
}