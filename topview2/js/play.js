//右下角的播放键 cornerPlay
var cornerPlay = document.getElementsByClassName('cornerPlay');

for(let i = 0; i < cornerPlay.length; i++){
    //播放键-淡入
    cornerPlay[i].parentElement.onmouseenter = function(){
        fadeIn(cornerPlay[i], 10, 50);
        
    }
    //播放键-淡出
    cornerPlay[i].parentElement.onmouseleave = function(){
        fadeOut(cornerPlay[i], 60)
    }
}
// 中间的播放键
var centerPlay = document.getElementsByClassName('centerPlay');

for(let i = 0; i < centerPlay.length; i++){
    //播放键-淡入
    centerPlay[i].parentElement.onmouseenter = function(){
        fadeIn(centerPlay[i], 10, 50);
        
    }
    //播放键-淡出
    centerPlay[i].parentElement.onmouseleave = function(){
        fadeOut(centerPlay[i], 60)
    }
}
//淡入
var fadeIn = function(node, target, speed){            
    clearInterval(node.timer);                   //使用 node.timer 防止各个事件公用一个 timer          
    if(node.style.opacity != target/10){
        var num = 0;
        node.timer = setInterval(function(){
            num++;
            node.style.opacity = num/10;
            if(num >= target){
                clearInterval(node.timer);
            }
        }, speed);
    }
}
//淡出
var fadeOut = function(node, speed){
    clearInterval(node.timer);               //使用 node.timer 防止各个事件公用一个 timer
    if(node.style.opacity != 0){
        var num =  node.style.opacity * 10;
        node.timer = setInterval(function(){
        num--;
        node.style.opacity = num/10;
        if(num<=0){
            clearInterval(node.timer);
        }
        }, speed);
    }

}