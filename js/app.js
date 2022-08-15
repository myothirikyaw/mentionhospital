// console.log("hi");

$(document).ready(function(){
  
  // Start Header Section

  // Start Banner Section

       // $(".carousel").carousel({
       // 	   interval:500
       // });

  // End Banner Section
  // End Header Section

  // Start Info Section
    $(window).scroll(function(){
    	let getscrollpoint = $(this).scrollTop();
    	console.log(getscrollpoint);

    	if(getscrollpoint >= 220){
    		$(".infotexts").addClass("fromlefts");
    		$(".infopics").addClass("fromrights");
    	}else{
    		$(".infotexts").removeClass("fromlefts");
    		$(".infopics").removeClass("fromrights")
    	}
    })
  // End Info Section

  // Start ADV Section
  $("#videos").click(function(){
    var getmodal = $(this).data("bs-target");
    var getvideosrc = $(this).data("video");
    var videourlwithauto = getvideosrc + "?autoplay=1";

    $(getmodal + " iframe").attr("src",videourlwithauto);

    $(getmodal + "button.btn-close").click(function(){
       $(getmodal+ " iframe").attr("src",getvideosrc);
    });

    $(getmodal).click('hidden.bs.modal',function(){
      $(getmodal+ " iframe").attr("src",getvideosrc);
    });
  });
  // End ADV Section

  // Start Premises Section
   $("#lightslider").lightSlider({
    item : 4,
    loop : true,
    slideMove: 1,
    speed: 600,
    // auto: true,
   }).play();

  // End Premises Section


  // Start Pricing Section

  $(window).scroll(function(){
    let getscroll = $(this).scrollTop();
    console.log(getscroll);

    if(getscroll >= 2450){
      $(".cardones").addClass("movelefts");
      $(".cardthrees").addClass("moverights");
      $(".cardtwos").addClass("movebottoms");
    }else{
      $(".cardones").removeClass("movelefts");
      $(".cardthrees").removeClass("moverights");
      $(".cardtwos").removeClass("movebottoms");
    }
  })
  // End Pricing Section

  // Start Join Us Section
  $(".accordion").accordion();
  // End Join Us Section

  // Start Footer Section
  $("#getyear").text(new Date().getUTCFullYear());
  // End Footer Section



  // Start Progress Section

  // By jquery

  // $(window).scroll(function(){
  //    var getprogress = $("#progresses");
  //    var getprogressval = $("#progressvalues");
  //    var getscrolltop = $(this).scrollTop();
     // console.log(getscrolltop);
     
     // formula ==> scrolltop * 100 / (pjheight - currentviewheight)

     // var getscrollheight = $(document).height();
     // console.log(getscrollheight);
     // var getclientheight = $(window).height();
     // console.log(getclientheight);
     // var calcheight = getscrollheight - getclientheight;
     // var getfinalheight = Math.round(getscrolltop * 100 / calcheight);
     // console.log(getfinalheight);

     // getprogressval.text(`${getfinalheight}%`);
     // getprogress.css({
        // "background" : `conic-gradient(steelblue ${getfinalheight}%,#eee ${getfinalheight}%)`
     // });
  // });


  // By Javascript

     var getscrollheight = document.documentElement.scrollHeight;
     // console.log(getscrollheight);
     var getclientheight = document.documentElement.clientHeight;
     // console.log(getclientheight);
     var calcheight = getscrollheight - getclientheight;
     var getfinalheight = Math.round(getscrolltop * 100 / calcheight);
     // console.log(getfinalheight);

     getprogressval.text(`${getfinalheight}%`);
     getprogress.css({
        "background" : `conic-gradient(steelblue ${getfinalheight}%,#eee ${getfinalheight}%)`
     });
  // End Progress Section

  

});