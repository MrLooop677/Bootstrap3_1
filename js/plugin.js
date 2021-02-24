$("document").ready(function () {
  // nice scroll
  $("html").niceScroll()



  $(".carousel").carousel({
    interval: 3000,
  });

  $(".carousel").carousel("pause");

  // check box by js
// document.querySelector(".option-box .gear-check").onclick=function(){
// document.querySelector(".option-box").classList.toggle("show")
// }

  // check box by jQuery
$(".gear-check").on("click",function(){
  $(".color-option").fadeToggle()
})

// change color by js
// let lists=document.querySelectorAll(".color-option ul li")
// lists[0].style.background="#e41b17"
// lists[1].style.background="#E426D5"
// lists[2].style.background="#FFD500"
// lists[3].style.background="#009AFF"
// lists.forEach((li)=>{
// li.addEventListener("click",function(){
//   document.querySelector("link[href*=theme]").setAttribute("href",this.getAttribute("data-value"))
// })
// })

// change color by jQuery
$(".color-option ul li").eq(0).css("background","#e41b17").end()
.eq(1).css("background","#E426D5").end()
.eq(2).css("background","#FFD500").end()
.eq(3).css("background","#009AFF").end()

$(".color-option ul li").on("click",function(){
  $("link[href*=theme]").attr("href",$(this).attr("data-value"))
})

// scroll Top
// showing and hidden scroll
let scrollTop=$(".scroll-top");
$(window).on("scroll",function(){
  $(this).scrollTop()>=$(".features").offset().top?scrollTop.fadeIn():scrollTop.fadeOut()
})
// to scroll Up
scrollTop.on("click",function(){
  $("html,body").animate({scrollTop:0},600)
})
});

// loading by jQuery
$(window).on("load",function(){
$(".loading-overlay .spinner").fadeOut(2000,function(){
  $("body").css("overflow","auto")

  $(this).parent().fadeOut(2000,function(){
   
    $(this).remove()
  })
})
})
