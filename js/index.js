
$(".letters").each( function(){
    $(this).html( $(this).text().replace(/([^\x00-\x80]|\w)/g, `<span class="single-letter"> $& </span>`) );
  });
  
  var tl2 = anime.timeline();
  tl2.add({
    targets: ".lineUnder",
    scaleX:[0,1],
    opacity:[.1,1],
    easing:"easeOutExpo",
    duration:1000,
    delay:500
  })
  .add({
    targets:".single-letter",
    opacity: [0,1],
    translateX: [100,0],
    translateZ: 0,
    scaleX: [0, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600',
    delay: function(el, i) {
      return 150 + 25 * i;
    }
  })
  .add({
    targets: '.line-drawing .infinity path',
    scaleX:[0,1],
    duration: 500,
  });







var sub_header = $(".sub-header");
sub_header[0].style.marginLeft =  (-1 * (sub_header[0].clientWidth / 2)).toString() +"px";
sub_header[1].style.marginLeft =  (-1 * (sub_header[1].clientWidth / 2)).toString() +"px";
  
$(window).resize(function() {
 sub_header[0].style.marginLeft =  (-1 * (sub_header[0].clientWidth / 2)).toString() +"px";
 sub_header[1].style.marginLeft =  (-1 * (sub_header[1].clientWidth / 2)).toString() +"px";
});





$(document).ready(function() {
  $('a[href*=\\#]').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
          scrollTop : $(this.hash).offset().top
      }, 500);
  });
});



// $(function() {

//   var $body = $(document);
//   $body.bind('scroll', function() {
//       // "Disable" the horizontal scroll.
//       if ($body.scrollLeft() !== 0) {
//           $body.scrollLeft(0);
//       }
//   });

// }); 