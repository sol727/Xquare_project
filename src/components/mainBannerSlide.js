import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";

export default class MainBannerSlide extends React.Component {

     constructor(props) {
          super(props)
          this.state = {
               focus : 0
          }

    this.sliderEvent = this.sliderEvent.bind(this)
    this.onClickLink = this.onClickLink.bind(this)
     }

     sliderEvent ( currentSlide, nextSlide ) {
          this.setState( { 
               focus : nextSlide
          } )
     }
     onClickLink (link) {
          window.location.pathname = link
     }

     render() {
          return (
               <div className="main_banner_wrap">
                    <ul className="main_banner" >
                    <Slider slidesToShow={1} slidesToScroll={1} speed={500} dots={false} infinite={false} beforeChange={this.sliderEvent}>
                         <li onClick={() => this.onClickLink("/Invest_index")}>
                              <div className="text" >
                              <h1 className="white_color">누구나 쉽게 투자하는</h1>
                              <h1>에너지 금융</h1>
                              <p className="white_color">지구를 깨끗하게 하는 신재생 에너지 발전<br/>안정적인 금융상품에 직접 투자하세요.</p>
                              <button type="button" className="white_color">투자하러가기 <img src={ require('../images/icons/w_arrow.png') } alt="화살표아이콘"/></button>
                              </div>
                         </li>
                         <li onClick={() => this.onClickLink("/Invest_index")}>
                              <div className="text" >
                              <h1 className="white_color">누구나 쉽게 투자하는</h1>
                              <h1>에너지 금융2</h1>
                              <p className="white_color">지구를 깨끗하게 하는 신재생 에너지 발전<br/>안정적인 금융상품에 직접 투자하세요.</p>
                              <button type="button" className="white_color">투자하러가기 <img src={ require('../images/icons/w_arrow.png') } alt="화살표아이콘"/></button>
                              </div>
                         </li>
                         <li onClick={() => this.onClickLink("/Invest_index")}>
                         <div className="text" >
                              <h1 className="white_color">누구나 쉽게 투자하는</h1>
                              <h1>에너지 금융3</h1>
                              <p className="white_color">지구를 깨끗하게 하는 신재생 에너지 발전<br/>안정적인 금융상품에 직접 투자하세요.</p>
                              <button type="button" className="white_color">투자하러가기 <img src={ require('../images/icons/w_arrow.png') } alt="화살표아이콘"/></button>
                         </div>
                         </li>     
                    </Slider>
                    </ul>
                    <ul className="dot_wrap clearfix">
                    <li className={ this.state.focus === 0 ? "active" : ""  } ></li>
                    <li className={ this.state.focus === 1 ? "active" : ""  } ></li>
                    <li className={ this.state.focus === 2 ? "active" : ""  } ></li>
                    </ul>
                    </div>
          )
     }

}