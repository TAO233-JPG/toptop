
// 交换logo和背景的颜色
var otherWays = document.getElementById('otherWay');
var ways = document.querySelectorAll('#otherWays li')
for(let i = 0; i < ways.length; i++){
    ways[i].onmouseenter= function(){
        let computedStyle = document.defaultView.getComputedStyle(this.firstChild, null); 
        this.style.background = computedStyle.color;
         this.firstChild.style.color = '#fff';
        
    }
    ways[i].onmouseleave = function(){
        this.firstChild.style.color = this.style.background;
        this.style.background = '#fff';
    }
}
//拖拽
var logoPage = document.getElementById("logoPage"); //获取元素
var x, y; //鼠标相对与div左边，上边的偏移
var isDrop = false; //移动状态的判断鼠标按下才能移动
logoPage.onmousedown = function(e) {
    var e = e || window.event; //要用event这个对象来获取鼠标的位置
    x = e.clientX - logoPage.offsetLeft;
    y = e.clientY - logoPage.offsetTop;
    isDrop = true; //设为true表示可以移动
}

document.onmousemove = function(e) {
    //是否为可移动状态                　　　　　　　　　　　 　　　　　　　
    if(isDrop) {　　　　
        var e = e || window.event;                    　　
        var moveX = e.clientX - x; //得到距离左边移动距离                    　　
        var moveY = e.clientY - y; //得到距离上边移动距离
        //可移动最大距离
        var maxX = document.documentElement.clientWidth - logoPage.offsetWidth;
        var maxY = document.documentElement.clientHeight - logoPage.offsetHeight;
        //范围限定  当移动的距离最小时取最大  移动的距离最大时取最小
        //范围限定方法一
        if(moveX < 177) {
            moveX = 177
        } else if(moveX > maxX) {
            moveX = maxX;
        }
        if(moveY < 0) {
            moveY = 0;
        } else if(moveY > maxY) {
            moveY = maxY;
        }　
        // //范围限定方法二　
        // moveX=Math.min(maxX, Math.max(0,moveX));
        
        moveY=Math.min(maxY, Math.max(0,moveY));
        logoPage.style.left = moveX + "px";　　
        logoPage.style.top = moveY + "px";　　　　　　　　　　
    } else {
        return;　　　　　　　　　　
    }
}
document.onmouseup = function() {
    isDrop = false; //设置为false不可移动
}
// 打开
var unlogin = document.getElementById('unlogin');
var userlogin = document.getElementById('userlogin');
unlogin.onclick = function(){
    logoPage.style.display = 'block';
    console.log(2);   
}
userlogin.onclick = function(){
    logoPage.style.display = 'block';   

}
//关闭
var close = document.getElementById('close');
close.onclick = function(){
    logoPage.style.display = 'none';
}
