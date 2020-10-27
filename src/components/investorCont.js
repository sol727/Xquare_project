import React from 'react'

export default class InvestorCont extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="investor_cont">
                <p className="date">{this.props.date}</p>
                <ul className="clearfix mb10">
                    {this.props.li}
                </ul>
                <h5 className="mb10 font_16">{this.props.name}</h5>
                <h6 className="rightT mb10 font_13">{this.props.price}</h6>
                <div className="box" style={{ background : this.props.BoxDisabled ? '#fff7f2' : '#eff1f7',color : this.props.BoxDisabled ? '#ff8e40' : '#1f318d'}}>{this.props.box_title}</div>
            </div>

        )
    }
}