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

      //https://unsplash.com?photo=TilfTdj3x6U
      //https://unsplash.com?photo=2zLEAIZi92M
      //https://unsplash.com/search/chicken?photo=LdYXkt5zeL0
      //https://unsplash.com/search/black?photo=w39PTDxKiK8
      //https://unsplash.com/search/dark?photo=049M_crau5k
      //https://unsplash.com/search/dark?photo=_Yz_vyvV72A

  })
