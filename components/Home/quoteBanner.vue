<template>
    <section class="slideshow">
     <div class="content">
        <div class="slider-content">
           <figure class="shadow"><img src="/images/gallery2.jpg"></figure>
           <figure class="shadow"><img src="/images/gallery2.jpg"></figure>
           <figure class="shadow"><img src="/images/gallery2.jpg"></figure>
           <figure class="shadow"><img src="/images/gallery2.jpg"></figure>
           <figure class="shadow"><img src="/images/gallery2.jpg"></figure>
           <figure class="shadow"><img src="/images/gallery2.jpg"></figure>
           <figure class="shadow"><img src="/images/gallery2.jpg"></figure>
           <figure class="shadow"><img src="/images/gallery2.jpg"></figure>
           <figure class="shadow"><img src="/images/gallery2.jpg"></figure>
           <figure class="shadow"><img src="/images/gallery2.jpg"></figure>
        </div>
     </div>
  </section>
  </template>
  
  <script>
  
  </script>
  
  <style scoped>
  .slideshow{
    margin: 0 auto;
    padding-top: 50px;
    height: 700px;
    perspective: 1000px;
  }
  .content{
    margin: auto;
    width: 150px;
    perspective: 1000px;
    position:relative;
    padding-top: 80px;
    transform-style: preserve-3d;
  }
  .slider-content{
    width: 100%;
    position:absolute;
    float:right;
    animation: rotate 15s infinite linear;
    transform-style: preserve-3d;
  }
  .slider-content:hover{
    cursor: pointer;
    animation-play-state: paused;
  }
  .slider-content figure{
    width:180px;
    height:120px;
    border:1px solid #555;
    overflow:hidden;
    position:absolute;
  }
  .slider-content img{
    image-rendering: auto;
    transition: all 300ms;
    width: 100%;
    height: 100%;
  }
  .slider-content img:hover{
     transform: scale(1.2); 
     transition: all 300ms; 
  } 
  .shadow{ 
     position: absolute; 
     box-shadow: 0px 0px 0px #000; 
  }
  .slider-content figure:nth-child(1){
    transform:rotateY(0deg) translateZ(300px);
  }
   
  .slider-content figure:nth-child(2){
    transform:rotateY(40deg) translateZ(300px);
  }
  .slider-content figure:nth-child(3){
    transform:rotateY(80deg) translateZ(300px);
  }
  .slider-content figure:nth-child(4){
    transform:rotateY(120deg) translateZ(300px);
  }
  .slider-content figure:nth-child(5){
    transform:rotateY(160deg) translateZ(300px);
  }
  .slider-content figure:nth-child(6){
    transform:rotateY(200deg) translateZ(300px);
  }
  .slider-content figure:nth-child(7){
    transform:rotateY(240deg) translateZ(300px);
  }
  .slider-content figure:nth-child(8){
    transform:rotateY(280deg) translateZ(300px);
  }
  .slider-content figure:nth-child(9){
    transform:rotateY(320deg) translateZ(300px);
  }
  @keyframes rotate {
    from{
      transform: rotateY(0deg);
    }
    to{
        transform: rotateY(360deg);
    }
  }
  </style>