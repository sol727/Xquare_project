import React, { useEffect } from 'react'
import $ from 'jquery'

export default function Mount () {

     useEffect(() => {

          //이미지 사이즈
          setTimeout(function(){
               var imgWidth = $('.img_box img').width();
               var imgHeight = $('.img_box img').height();
               //console.log(imgWidth)
               if(imgWidth > imgHeight){
               $('.img_box img').css({'height':'100%'});
               }else if(imgWidth < imgHeight){
               $('.img_box img').css({'width':'100%'});
               }else if(imgWidth = imgHeight){
               $('.img_box img').css({'width':'100%'});
               }
          },1);

          


     } , [])

     return (
          <></>
     )
}