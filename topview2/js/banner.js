
var lis = document.querySelectorAll('#rec-banner #pic-box li');
var left = document.getElementById('left-btn')
var right = document.getElementById('right-btn')
var timerlater = null;
var timer  = null;
var i = 0;              //i记录当前 li 的位置
var num = lis.length;
// timer = setInterval(animate, 2000);
ajax({
    type: 'get',
    url: 'https://recruit-exam.topviewclub.cn/api/recruit/getBannerList',
    data:{
        
    },
    success: function(res){
        // 如果请求成功
        if(res.success){
           for(var j = 0; j < num; j++){
               lis[j].childNodes[0].src = res.data[j];
           }
        } 
        // 905 302
    },
    error: function(res){
        // tip.innerHTML = res.message;
        // tip.className = 'error';
    }
});
//动态创建小圆点
var box = document.getElementById('box')
for(var j = 0; j < num; j++){
    var li = document.createElement('li');
    //设置 索引值 index 
    li.setAttribute('index',j);
    box.appendChild(li);
    li.onmouseover = function(){
        clearInterval(timer);
        var x = this.getAttribute('index');
        i = parseInt(x);
        animate();
    }
    li.onmouseleave = function(){
        // timer = setInterval(animate, 2000);
    }
}
box.children[0].className = 'now';
// 自动播放

//指向时停止
var ul = document.querySelector('#rec-banner #pic-box');
ul.onmouseover = function(){
   clearInterval(timer);
//    左右箭头
// console.log(4);
   right.style.display = 'block';
   left.style.display = 'block';
}
ul.onmouseleave = function(){
    timer = setInterval('animate()', 1800);
    // setTimeout(function(){
        console.log(4431);
        right.style.display = 'none';
        left.style.display = 'none';
    // },590)
};
right.onmouseenter = function(){
    right.style.display = 'block';
    left.style.display = 'block';
    clearInterval(timer);
}
left.onmouseenter = function(){
    right.style.display = 'block';
    left.style.display = 'block';
    clearInterval(timer);

}
right.onclick = function(){
    // i = i + 1;
    clearInterval(timer)
    animate();
}
left.onclick = function(){
    clearInterval(timer);
    i = i - 2;
    animate()
}
timer = setInterval('animate()', 1800);

function animate(){
    if(i == lis.length){
        i = 0;
    }
    if(i < 0){
        i = lis.length - 1;
    } 
    lis[(i+2) % num].className = '';            
    lis[(i+3) % num].className = '';
    lis[(i+4) % num].className = '';
    lis[(i+5) % num].className = '';
    lis[i % num].className = 'center';
    lis[(i+1) % num].className = 'right';
    lis[(i+6) % num].className = 'left';

    // 选择对应小圆圈
    for(let j = 0; j < num; j++){
        box.children[j].className = '';
    }
    box.children[(i) % num].className = 'now';         
    i = i+1;
   
}
