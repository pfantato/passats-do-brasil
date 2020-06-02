// import { TweenMax }  from 'gsap';
// import * as Scroll from 'react-scroll';

// const scroll = Scroll.animateScroll;

// export const dragSlider = (slider, wrapper, bar, items) => {

//     let sliderWidth = 1;
//     let wrapperWidth = wrapper.offsetWidth;

//     console.log('wrapperW:' + wrapperWidth);

//     let i

//     for ( i = 0; i < items.length; i++ ) {
//       sliderWidth += items[i].offsetWidth;
//     }

//     //size of bar

//     let barSize = (wrapperWidth/sliderWidth)*100;

//     bar.style.width = barSize + "%";
//     slider.style.width = sliderWidth + "px";


//     // add interactive shizzle

//     slider.addEventListener('mousedown', startMove);
//     slider.addEventListener('mouseup', endMove);
//     slider.addEventListener('touchstart', startMove);
//     slider.addEventListener('touchend', endMove);
//     slider.addEventListener('mouseleave', endMove);
//     slider.addEventListener('wheel', moveSliderWheel)

//     let mouseXstart = 0;
//     let startPosition = 0;
//     let position = 0;

//     function startMove(e) {

//       if ( !e.touches ) {
//         e.preventDefault();
//       }
      
//       mouseXstart = e.clientX || e.touches[0].clientX;
//       slider.addEventListener('mousemove', moveSlider);
//       slider.addEventListener('touchmove', moveSlider);
//     }

//     function moveSlider(e) {
//       let clientX = e.clientX || e.touches[0].clientX
      
//       position = startPosition + (clientX - mouseXstart) * 2;
      
//       console.log(mouseXstart);
      
//       if ( position > 0) { position = 0;}
//       if ( position < wrapperWidth - sliderWidth) { position = wrapperWidth - sliderWidth;}
//       TweenMax.to(slider, .5, {x: position})
//       //slider.style.transform = 'translateX(' + position + 'px)'
//       TweenMax.to(bar, .5, {x: (-position/wrapperWidth*100) + "%"})
//     }

//     function moveSliderWheel(e) {
//       e.preventDefault();
//       //restore normal vertical scroll behaviour
//       let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//       scroll.scrollTo( 0, scrollTop + e.deltaY);
      
//       position -= e.deltaX;

//       if ( position > 0) { position = 0;}
//       if ( position < wrapperWidth - sliderWidth) { position = wrapperWidth - sliderWidth;}
//       TweenMax.to(slider, .5, {x: position})
//       //slider.style.transform = 'translateX(' + position + 'px)'
//       TweenMax.to(bar, .5, {x: (-position/wrapperWidth*100) + "%"})
//     }

//     function endMove(e) {
//       startPosition = position;
//       slider.removeEventListener('mousemove', moveSlider);
//       slider.removeEventListener('touchmove', moveSlider);
//     }
// }
// export default dragSlider;