


     var sub_header = $(".sub-header");
     sub_header[0].style.marginLeft =  (-1 * (sub_header[0].clientWidth / 2)).toString() +"px";
     sub_header[1].style.marginLeft =  (-1 * (sub_header[1].clientWidth / 2)).toString() +"px";
     
  $(window).resize(function() {
    sub_header[0].style.marginLeft =  (-1 * (sub_header[0].clientWidth / 2)).toString() +"px";
    sub_header[1].style.marginLeft =  (-1 * (sub_header[1].clientWidth / 2)).toString() +"px";
    
    
  });