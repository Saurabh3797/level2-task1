// console.log("hii");

// make image enlarge 
function getImage(imgs){

    let getsImage = document.getElementById("slidingImg");
    // console.log("hello")
    getsImage.src = imgs.src;
    getsImage.parentElement.style.display = "block";
}


// make slide show imag
 
  let runFunction = true;
  let slideIndex = 0;

  function makeSlideShow() {

    if(runFunction){
    
      let slides = document.getElementsByClassName("slide");
      console.log("silde")
      // Hide all slides
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
    
      // Increment slide index and display the next slide
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
    
      slides[slideIndex - 1].style.display = "block";
    
      // Call showSlides function every 3 seconds
      setTimeout(makeSlideShow, 3000);

    }
   
  }
  

  // stop Slide show  

  function stopSlide(){
    runFunction = false;
    if(runFunction== false){
      
      let slide = document.getElementById("slideshow-container");
      slide.style.display = "none";
      
    }
    
    // console.log("stop")
    // let slide = document.getElementById("slideshow-container");
    // slide.style.display = "none";
  }