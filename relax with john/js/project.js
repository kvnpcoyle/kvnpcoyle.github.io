



//img fadesout 3 seconds after pageload//

$(document).ready(function(){
    // setTimeout(function(){ $("#image").fadeOut(); }, 7000);
    setInterval(moveDiv, 7000);
// });

// //h1 fades out 2 seconds after image
// $(document).ready(function(){
    setTimeout(function(){ $("h1").fadeOut(); }, 6000);
});



//random movement of image

function moveDiv() {
	// console.log("Move div called")
    var image = $("#image");
    
    image.fadeOut(7000, function() {
        var maxLeft = $(window).width() - image.width();
        var maxTop = $(window).height() - image.height();
        var leftPos = Math.floor(Math.random() * (maxLeft + 1))
        var topPos = Math.floor(Math.random() * (maxTop + 1))
     
        image.css({ left: leftPos, top: topPos }).fadeIn(1000);
    });
};

moveDiv();


   //trying to stop animation at 480px

 $(window).resize(function() {
   if ($(this).width() > "480px") {
     function moveDiv() {
    var image = $("#image");
    
    image.fadeOut(7000, function() {
        var maxLeft = $(window).width() - image.width();
        var maxTop = $(window).height() - image.height();
        var leftPos = Math.floor(Math.random() * (maxLeft + 1))
       var topPos = Math.floor(Math.random() * (maxTop + 1))
     
        image.css({ left: leftPos, top: topPos }).fadeIn(1000);
    });
};
   }
});
   //$("#image").animate({ top: "-=85px"}).delay(3000).animate({ top: "480px"}, {
    //complete: function() {
         //$("#image").stop("")
    //}
//});


