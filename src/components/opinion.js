import React from 'react'

export default class Opinion extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="opinion_cont">
                <ul className="label_ul clearfix">
                    {this.props.label_li}
                </ul>
                {
                    this.props.NameBoxShow ?
                    <div className="name_box clearfix">
                        <h4 className={`feel ${this.props.feel_class}`}>{this.props.name}</h4>
                        {
                            this.props.TimeShow ?
                            <span className="font_13 gray2_color">{this.props.time}</span> : <></>
                        }
                        {
                            this.props.labelShow ?
                            <p className="label">{this.props.label}</p> : <></>
                        }
                    </div> : <></>
                }
                <div className="txt_box">
                    {
                        this.props.TitleShow ?
                        <h3 className="txt_title">{this.props.title}</h3> : <></>
                    }
                    {
                        this.props.DateShow ?
                        <p className="txt_date">{this.props.txt_date}</p> : <></>
                    }
                    <p className="font_14 line_h5">{this.props.txt}</p>
                    {
                        this.props.ButtonShow ?
                    <button type="button" className="txt_btn">{this.props.button}</button>: <></>
                    }
                </div>
            </div>

        )
    }
}