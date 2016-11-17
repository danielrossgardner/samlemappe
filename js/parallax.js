$(window).scroll(function(){

  //find the scroll and use this variable to move elements
    //ask the studenst what object  'this' refers to?---> the window. scroll top returns the current verticle posistion
    var winScroll = $(this).scrollTop();

  // left branch moves out of view on the x-axis on scroll

    $('.left-line').css({
        'transform': 'translate(-'+ winScroll /40 +'%, 0px)'
      });

  // right branch moves out of view on the x-axis on scroll

    $('.right-line').css({
        'transform': 'translate('+ winScroll /40 +'%, 0px)'
      });

    $('.center-line').css({
        'transform': 'translate('+ winScroll /10 +'%, 0px)'
      });

  // image moves down on the y-axis on scroll

    $('.parallax-holder').css({
        'transform': 'translate(0px, '+ winScroll /40 +'%)'
      });

    $('.menu-button').on('click',function(){
      $('.menu-holder').css({'visibility':'visible'});
    });

    $('.main-container, .menu-holder').on('click',function(){
      $('.menu-holder').css({'visibility':'hidden'});
    });
    //////////////////////////////////////////////////


      // <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
      // <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="560" width="588">
      //   <polygon points="294,3 585.246118,214.602691 474,556.983037 114,556.983037 2.753882,214.602691" fill="white" stroke="black" stroke-width="4"/></svg>
      //
      //
      //
      // W 50 588 294
      // ----------------
      // H 50 560 3
      //
      // [[294,3]
      // [585.246118,214.602691]
      // [474,556.983037]
      // [114,556.983037]
      // [2.753882,214.602691]]
      //
      // 294    x
      // --- = ---
      // 588   100
      //  3     x
      // --- = ---
      // 560   100


    // var pentagonpoints = [[294,3],
    // [585.246118,214.602691],
    // [474,556.983037],
    // [114,556.983037],
    // [2.753882,214.602691]];
    //
    // var pentagonsizer = function(points,scale,origscale) {
    // 	var newpent = pentagonpoints.map(function(point){
    // 		return [((point[0] * scale[0]) / origscale[0])+5
    // 		,((point[1] * scale[1]) / origscale[1])+5];
    // 	});
    // 	return newpent;
    // };
    //
    // var midpoint = function(points) {
    // 	var newpoints = points.map(function(point,index){
    // 		var i = index + 1 < points.length ? index + 1 : 0;
    // 		return [(point[0] + points[i][0]) / 2 , (point[1] + points[i][1]) / 2 ];
    // 	});
    // 	return newpoints;
    // };
    //
    // var p = pentagonsizer(pentagonpoints,[40,40],[588,560]);
    //
    // midpoint(midpoint(midpoint(midpoint(midpoint(p)))));


      //https://unsplash.com?photo=TilfTdj3x6U
      //https://unsplash.com?photo=2zLEAIZi92M
      //https://unsplash.com/search/chicken?photo=LdYXkt5zeL0
      //https://unsplash.com/search/black?photo=w39PTDxKiK8
      //https://unsplash.com/search/dark?photo=049M_crau5k
      //https://unsplash.com/search/dark?photo=_Yz_vyvV72A

  })
