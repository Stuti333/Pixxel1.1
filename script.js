
var date=new Date("sept 26,2021 00:00:00").getTime();
var x=setInterval(function(){
var today=new Date().getTime();
var dif=date-today;
//console.log(seconds);
var hours=Math.floor(((dif%(1000*60*60*24))/(1000*60*60))+(24*dif/(1000*60*60*24)));
console.log(hours);
var minutes=Math.floor((dif%(1000*60*60))/(1000*60));
console.log(minutes);
var seconds=Math.floor((dif%(1000*60))/1000);
console.log(seconds);
document.getElementById("hours").innerHTML=hours+"<span class=label><br><br>hrs</span>";
document.getElementById("minutes").innerHTML=minutes+"<span class=label><br><br>mins</span>";
document.getElementById("seconds").innerHTML=seconds+"<span class=label><br><br>secs</span>";
if(dif<=0){
    clearInterval(x);
document.getElementById("hours").innerHTML=0+"<span class=label><br><br>hrs</span>";
document.getElementById("minutes").innerHTML=0+"<span class=label><br><br>mins</span>";
document.getElementById("seconds").innerHTML=0+"<span class=label><br><br>secs</span>";
}
},1000);

$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){

      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');

      if($(window).scrollTop() > 0){
        $('.scroll-top').show();
      }else{
        $('.scroll-top').hide();
      }

      // scroll spy 

      
    $('section').each(function(){

      let height = $(this).height();
      let offset = $(this).offset().top - 100;
      let id = $(this).attr('id');
      let top = $(window).scrollTop();

      if(top > offset && top < offset + height){
        $('.navbar ul li a').removeClass('active')
        $('.navbar').find(`[href="#${id}"]`).addClass('active');
      }

    });

    });

    // smooth scrolling

    $('a[href*="#"]').on('click',function(e){

      e.preventDefault();

      $('html, body').animate({

        scrollTop : $($(this).attr('href')).offset().top,

      },
      500,
      'linear'
      )

    })

});