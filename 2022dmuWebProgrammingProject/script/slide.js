start();
var imgs = 2;
var now =0;
function start(){
        $(".slidebox > img").eq(0).siblings().css({"margin-top":"-300px"});
        setInterval(function(){slide();}, 3000);

}
function slide(){
        now = now == img?0:now+=1;
        $(".slidebox > img").eq(now-1).css({"margin-top":"-300px"});
        $(".slidebox > img").eq(now).css({"margin-top":"0px"});
       
}
