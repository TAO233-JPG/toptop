window.onload = function(){
    var findM = document.getElementById('findMusic');
    var lis = document.querySelectorAll('#findMusic nav ul li');

    // 为了使字体变大的时候字体位置不移动，需要保证字体的盒子的宽度足够大，
    // 但又要保证各个盒子的距离大致相同，所以用 js 将 li 的宽度设置为刚好存放字的宽度
    //设置宽度
    for(let i = 0; i < lis.length; i++){
        lis[i].className = 'selected';
        lis[i].style.width = lis[i].offsetWidth + 'px';
        lis[i].className = '';
    }

    var underline = document.createElement('em');
    underline.className = 'underline';
    //绑定鼠标事件

    for(let i = 0; i < lis.length; i++){
        lis[i].onclick = function(){
            
            // 取消全部的样式，再为其单独添加样式（排他思想）
            for(let j = 0; j < lis.length; j++){
                lis[j].className = '';
            }
            //添加下划线
            this.children[0].appendChild(underline);
            // 添加样式
            lis[i].className = 'selected';
        }
    }

    // 设置第一项默认为选中状态
    lis[0].className = 'selected';
    lis[0].children[0].appendChild(underline);

}