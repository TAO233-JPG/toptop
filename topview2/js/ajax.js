function ajax(opt){

    //创建Ajax对象
    var xhr = new XMLHttpRequest();
   
    //告诉Ajax对象要向哪里发送请求， 以什么方式发送
    var params = '';

    for(var k in opt.data){
        params += k + '=' + opt.data[k] + '&' ;
    }
    params = params.substr(0, params.length  -1);

    if(opt.type == 'get'){
        opt.url = opt.url + '?' + params;
    }

    xhr.open(opt.type, opt.url);

    //发送请求
    if(opt.type == 'post'){
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(params);
    }else{
        xhr.send();
    }

    //获取数据
    xhr.onload = function(){

        var responseText = xhr.responseText;

        // 获取响应头中的数据
        var contentType = xhr.getResponseHeader('Content-Type');
        // 如果响应类型中包含 application/json
        if (contentType.includes('application/json')){
            responseText = JSON.parse(responseText);
        }
        if(xhr.status == 200){
            opt.success(responseText);
        }else{
            opt.error(responseText);
        }
    }
}