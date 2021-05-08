var newSongs = document.getElementById('newSongs');
var allCurrents = document.getElementById('allCurrents');
// 新歌速递和新碟上架
var page1 = document.getElementById('page1');
var page2 = document.getElementById('page2');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
// 点击显示
opt1.onclick = function(){
    opt1.className = 'opt-choose';
    opt2.className = '';
    page1.style.display = 'block';
    page2.style.display = 'none';
}
opt2.onclick = function(){
    page2.style.display = 'block';
    page1.style.display = 'none';
    opt2.className = 'opt-choose';
    opt1.className = '';
}
// 新歌速递page1
var x = 0; //当前页面数
//调用Ajax设置当前的页数
ajax({
    type: 'get',
    url: 'https://recruit-exam.topviewclub.cn/api/recruit/getSongList',
    data:{    
    },
    success: function(res){
        // 如果请求成功
        //创建分页 li
        if(res.success){
           var pages = res.data.pages;
    
           for(var i = 1; i <= pages; i++){
                // 创建 li
                let li = document.createElement('li');
                li.setAttribute('index',i);
                li.innerHTML += i;
                allCurrents.appendChild(li);

                //不同页面的点击
                li.onclick = function(){
                    // 排他思想
                    for(var j = 0; j <pages; j++){
                        allCurrents.children[j].style.backgroundColor = ''
                    }
                    // 显示当前页面
                    this.style.backgroundColor = '#ddd';
                    // 当当前页面已展示时，再次点击当前的分页不再触发 ajax
                    if(x == this.getAttribute('index')){
                        return;
                    }else{
                        fn(this.getAttribute('index'));
                        x = this.getAttribute('index');
                    }
               }
            }
        } 
        
    },
    error: function(res){
        console.log(res + '请求失败');
    }
})
//调用Ajax提供音乐内容
function fn(current){
    ajax({
        type: 'get',
        url: 'https://recruit-exam.topviewclub.cn/api/recruit/getSongList',
        data:{
            current:current,
        },
        success: function(res){
            // 如果请求成功
            if(res.success){
                // 将当前的音乐列表设置为空 
                newSongs.innerHTML = '';
                // 音乐列表的歌曲数量
                var size = res.data.size;
                // 最后一页的歌曲数量
                if(current == res.data.pages){
                    size = res.data.total-(res.data.pages - 1)*res.data.size; 
                }
                // 重新设置音乐列表的内容
                for(var j = 0; j < size; j++){
                    let  li = document.createElement('li')
                    let id = document.createElement('div');
                    let img = document.createElement('img');
                    let name = document.createElement('span');
                    let singer = document.createElement('span');
                    let album = document.createElement('span');
                    let durtion = document.createElement('span');
                    id.innerHTML = double(res.data.records[j].id);
                    img.src = res.data.records[j].picUrl;
                    name.innerHTML =  res.data.records[j].name;
                    singer.innerHTML =  res.data.records[j].singer;
                    album.innerHTML =  res.data.records[j].album;
                    durtion.innerHTML =  res.data.records[j].duration;
                    li.appendChild(id)
                    li.appendChild(img)
                    li.innerHTML +='<i class="imgPlay"><span class="p2 iconfont icon-play--filled--alt"></span></i>';
                    li.appendChild(name)
                    li.appendChild(singer)
                    li.appendChild(album)
                    li.appendChild(durtion)
                    newSongs.appendChild(li);
                    console.log(li.innerHTML);
                }
            } 
        },
        error: function(res){
            // tip.innerHTML = res.message;
            // tip.className = 'error';
        }
    });
    console.log(1);

}
// fn(1,'li')
// 将数化为 01 02的格式
function double(id){
    if(id < 10){
        id = '0'+id;
    }
    else{
        id = ''+id;
    }
    return id;
}

//新碟上架 page2
ajax({
    type: 'get',
    url: 'https://recruit-exam.topviewclub.cn/api/recruit/getWaterFallList',
    data: {},
    success: function(res){
        var arr='' ;
        for(var i = 0; i < res.data.length; i++){
            var img = document.createElement('img');
            img.src = res.data[i];
            var div = document.createElement('div');
            div.appendChild(img);
            page2.appendChild(div);
            // 使用拼接字符串
            // arr += '<div><img src="'+ res.data[i] +'"></img></div>';
        } 
        // page2.innerHTML += arr;
    },
    error: function(res){}
})
page2.on = function(){
    console.log('width'+page2.children[2].childNodes[0].offsetWidth);
   }    
var timer = setInterval(function(){
    if(page2.children[2].childNodes[0].offsetWidth)
    console.log('width'+page2.children[2].childNodes[0].offsetWidth);
    clearInterval(timer)
},1000)
document.getElementById('btn').onclick = function(){
    ajax({
        type: 'get',
        url: 'https://recruit-exam.topviewclub.cn/api/recruit/getWaterFallList',
        data: {},
        success: function(res){
            var arr='' ;
            for(var i = 0; i < res.data.length; i++){
                var img = document.createElement('img');
                img.src = res.data[i];
                var div = document.createElement('div');
                div.appendChild(img);
                page2.appendChild(div);
            } 
            // console.log(arr);
            // page2.innerHTML += arr;
            console.log(document.documentElement.scrollTop);

        },
        error: function(res){}
    })
}
console.log(page2.offsetWidth);
//被卷去的高度
window.onscroll =function(){
//   console.log(document.documentElement.clientHeight + document.documentElement.scrollTop);

    
}


// 懒加载实现
