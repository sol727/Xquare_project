import React from 'react'
import { Link } from 'react-router-dom';
import Back_header from '../components/back_header';
import Studio_gnb from '../components/Studio_gnb'
import File_down from '../components/File_down';


export default class V3_Feedback extends React.Component {

    
    constructor(props) {
        super(props);
        this.state = {
            focus : 1,
            feedbackHeight : [],
        }
        this.initSlide = this.initSlide.bind(this);
        this.slide = this.slide.bind(this);
        this.getElementIndex = this.getElementIndex.bind(this);

    }

    initSlide(){
        let detail_wrap = document.querySelectorAll(".detail_wrap .detail");

        let heightList = [];
        let index = 0
        detail_wrap.forEach(function(dt){
            heightList.push(dt.offsetHeight);
            dt.style.height = 0;
            index ++
        });

        return heightList;
    }

    slide(target, e){
        let titleHTMLDom = e.target;

        if(!e.target.classList.contains("feedback_li")){
            titleHTMLDom = e.target.parentNode;
        }

        let index = this.getElementIndex(document.querySelectorAll('.detail_wrap'),titleHTMLDom.parentNode);
        let detail = titleHTMLDom.nextElementSibling;
        
        // style.scss 에 있는 .deatil 의 패딩값을 꼭 더해주세요
        let padding = 24

        padding = (padding * 2);

        this.initSlide();

        if(target != this.state.focus){
            detail.style.offsetHeight  = this.state.feedbackHeight[index];
            detail.style.height = (detail.style.offsetHeight + padding)+"px";
        }

        this.setState({
            focus : (target != this.state.focus) ? target : ""
        });
    } 

    getElementIndex(element, range) {
        // 추가
        if (!!range) return [].indexOf.call(element, range);
        return [].indexOf.call(element.parentNode.children, element);
      }

    componentDidMount(){
        let heightList = this.initSlide();

        document.querySelector('#starter').style.height = 'auto'

        this.setState({
            feedbackHeight : heightList
        })


        document.querySelector("body").style.background = '#fff';
        let contHeight = document.querySelector(".cont").offsetHeight;
        document.querySelector(".studio_gnb").style.minHeight = contHeight + "px";
        
    }

    render() {
        return (
            <>
                <section className="v3 feedback studio">
                    <Back_header/>
                    <div className="clearfix">
                        <Studio_gnb on_index="11" off_index="9"/>
                        <div className="cont">
                            <div className="top_box container">
                                <h1>엑스퀘어 피드백</h1>
                            </div>
                            <div className="detail_wrap">
                                {/* div 클래스에 new 추가하면 new라벨노출되고 li 배경색 변경됨▼ */}
                                <div className="feedback_li clearfix new" onClick={(event) => this.slide(1, event)}>
                                    <span>new</span>
                                    <p>yyyy년 mm월 dd일 n차 피드백</p>
                                </div>
                                <div id="starter" className={`detail ${this.state.focus === 1 ? 'slideOn' : ''}`}>
                                    <div className="centerT">
                                        <img src={ require('../images/img_img_thumnail_default.png') } alt="리스트이미지"/>
                                        <p className="leftT">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare lacus, feugiat cras eget ultricies. Neque, bibendum sed id diam quis ipsum eget. Et maecenas mi, habitant velit, feugiat. Ipsum purus amet, nulla habitasse bibendum. Risus scelerisque pellentesque aliquam vestibulum, et amet, mi turpis egestas. Blandit quis quam sed tellus. Justo, eu blandit mollis vitae lorem sapien blandit integer vulputate. Diam vitae pellentesque pulvinar in tempus enim commodo tellus. Praesent montes, vel malesuada mauris eget tellus. Congue vitae nulla sed morbi congue mauris malesuada est. Nisl curabitur malesuada nec faucibus egestas. Diam lectus dui quis bibendum viverra a elementum ornare. Ut commodo, arcu sapien facilisis auctor ut tortor diam orci.</p>
                                        <img src={ require('../images/img_img_thumnail_default.png') } alt="리스트이미지"/>
                                        <p className="leftT">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare lacus, feugiat cras eget ultricies. Neque, bibendum sed id diam quis ipsum eget. Et maecenas mi, habitant velit, feugiat. Ipsum purus amet, nulla habitasse bibendum. Risus scelerisque pellentesque aliquam vestibulum, et amet, mi turpis egestas. Blandit quis quam sed tellus. Justo, eu blandit mollis vitae lorem sapien blandit integer vulputate. Diam vitae pellentesque pulvinar in tempus enim commodo tellus. Praesent montes, vel malesuada mauris eget tellus. Congue vitae nulla sed morbi congue mauris malesuada est. Nisl curabitur malesuada nec faucibus egestas. Diam lectus dui quis bibendum viverra a elementum ornare. Ut commodo, arcu sapien facilisis auctor ut tortor diam orci.</p>
                                    </div>
                                    <div className="file_wrap clearfix2 mb16">
                                        <p className="font_13 dark_gray_color">파일</p>
                                        <ul>
                                            <li>
                                                <File_down name="filename.file" name2="nnKB"/>
                                            </li>
                                            <li>
                                                <File_down name="filename.file" name2="nnKB"/>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                    <div className="file_wrap clearfix2">
                                        <p className="font_13 dark_gray_color">링크</p>
                                        <ul>
                                            <li className="link_li">
                                                <File_down name="link title from meta data" name2="www.address.co.domain"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="detail_wrap">
                                <div className="feedback_li clearfix new" onClick={(event) => this.slide(2, event)}>
                                    <span>new</span>
                                    <p>yyyy년 mm월 dd일 n차 피드백</p>
                                </div>
                                <div className={`detail ${this.state.focus === 2 ? 'slideOn' : ''}`}>
                                    <div className="centerT">
                                        <img src={ require('../images/img_img_thumnail_default.png') } alt="리스트이미지"/>
                                        <p className="leftT">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare lacus, feugiat cras eget ultricies. Neque, bibendum sed id diam quis ipsum eget. Et maecenas mi, habitant velit, feugiat. Ipsum purus amet, nulla habitasse bibendum. Risus scelerisque pellentesque aliquam vestibulum, et amet, mi turpis egestas. Blandit quis quam sed tellus. Justo, eu blandit mollis vitae lorem sapien blandit integer vulputate. Diam vitae pellentesque pulvinar in tempus enim commodo tellus. Praesent montes, vel malesuada mauris eget tellus. Congue vitae nulla sed morbi congue mauris malesuada est. Nisl curabitur malesuada nec faucibus egestas. Diam lectus dui quis bibendum viverra a elementum ornare. Ut commodo, arcu sapien facilisis auctor ut tortor diam orci.</p>
                                    </div>
                                    <div className="file_wrap clearfix2 mb16">
                                        <p className="font_13 dark_gray_color">파일</p>
                                        <ul>
                                            <li>
                                                <File_down name="filename.file" name2="nnKB"/>
                                            </li>
                                            <li>
                                                <File_down name="filename.file" name2="nnKB"/>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                    <div className="file_wrap clearfix2">
                                        <p className="font_13 dark_gray_color">링크</p>
                                        <ul>
                                            <li className="link_li">
                                                <File_down name="link title from meta data" name2="www.address.co.domain"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="detail_wrap">
                                <div className="feedback_li clearfix" onClick={(event) => this.slide(3, event)}>
                                    <span>new</span>
                                    <p>yyyy년 mm월 dd일 n차 피드백</p>
                                </div>
                                <div className={`detail ${this.state.focus === 3 ? 'slideOn' : ''}`}>
                                    <div className="centerT">
                                        <img src={ require('../images/img_img_thumnail_default.png') } alt="리스트이미지"/>
                                        <p className="leftT">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare lacus, feugiat cras eget ultricies. Neque, bibendum sed id diam quis ipsum eget. Et maecenas mi, habitant velit, feugiat. Ipsum purus amet, nulla habitasse bibendum. Risus scelerisque pellentesque aliquam vestibulum, et amet, mi turpis egestas. Blandit quis quam sed tellus. Justo, eu blandit mollis vitae lorem sapien blandit integer vulputate. Diam vitae pellentesque pulvinar in tempus enim commodo tellus. Praesent montes, vel malesuada mauris eget tellus. Congue vitae nulla sed morbi congue mauris malesuada est. Nisl curabitur malesuada nec faucibus egestas. Diam lectus dui quis bibendum viverra a elementum ornare. Ut commodo, arcu sapien facilisis auctor ut tortor diam orci.</p>
                                    </div>
                                    <div className="file_wrap clearfix2 mb16">
                                        <p className="font_13 dark_gray_color">파일</p>
                                        <ul>
                                            <li>
                                                <File_down name="filename.file" name2="nnKB"/>
                                            </li>
                                            <li>
                                                <File_down name="filename.file" name2="nnKB"/>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                    <div className="file_wrap clearfix2">
                                        <p className="font_13 dark_gray_color">링크</p>
                                        <ul>
                                            <li className="link_li">
                                                <File_down name="link title from meta data" name2="www.address.co.domain"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="detail_wrap">
                                <div className="feedback_li clearfix" onClick={(event) => this.slide(4, event)}>
                                    <span>new</span>
                                    <p>yyyy년 mm월 dd일 n차 피드백</p>
                                </div>
                                <div className={`detail ${this.state.focus === 4 ? 'slideOn' : ''}`}>
                                    <div className="centerT">
                                        <img src={ require('../images/img_img_thumnail_default.png') } alt="리스트이미지"/>
                                        <p className="leftT">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare lacus, feugiat cras eget ultricies. Neque, bibendum sed id diam quis ipsum eget. Et maecenas mi, habitant velit, feugiat. Ipsum purus amet, nulla habitasse bibendum. Risus scelerisque pellentesque aliquam vestibulum, et amet, mi turpis egestas. Blandit quis quam sed tellus. Justo, eu blandit mollis vitae lorem sapien blandit integer vulputate. Diam vitae pellentesque pulvinar in tempus enim commodo tellus. Praesent montes, vel malesuada mauris eget tellus. Congue vitae nulla sed morbi congue mauris malesuada est. Nisl curabitur malesuada nec faucibus egestas. Diam lectus dui quis bibendum viverra a elementum ornare. Ut commodo, arcu sapien facilisis auctor ut tortor diam orci.</p>
                                    </div>
                                    <div className="file_wrap clearfix2 mb16">
                                        <p className="font_13 dark_gray_color">파일</p>
                                        <ul>
                                            <li>
                                                <File_down name="filename.file" name2="nnKB"/>
                                            </li>
                                            <li>
                                                <File_down name="filename.file" name2="nnKB"/>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                    <div className="file_wrap clearfix2">
                                        <p className="font_13 dark_gray_color">링크</p>
                                        <ul>
                                            <li className="link_li">
                                                <File_down name="link title from meta data" name2="www.address.co.domain"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}