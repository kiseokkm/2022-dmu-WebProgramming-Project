$(document).ready(function(){
    //   메뉴   //  
      $(".submenu").hide();
      $(".navi >ul> li").mouseover(function(){
          $(".submenu").stop().slideDown();
      });
      $(".navi >ul> li").mouseout(function(){
          $(".submenu").stop().slideUp();
      });
  
  // 탭메뉴 //
      $(".tab > gallery > a").siblings().css("display", "none");
      $(".tab > li > a").click(function(){
          $(".tab > li >a").siblings().css("display", "none");
          $(this).siblings().css("display", "block");
          return false; /* a태그를 실행하지 말고 제이쿼리를 먼저 실행 */
      });
  
  
  });




  function startScroll(interval) {
	setInterval("autoScroll()", interval);
}

function autoScroll() {
	window.scrollBy(0,10); // 10픽셀 위로 이동
}

