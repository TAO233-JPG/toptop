var down = document.getElementsByClassName('hidden');
var timer = null;
for(let i = 0; i < down.length; i++){
    down[i].parentNode.onmouseover = function(){
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            down[i].style.top='0px';
            // down[i].extElementSiblingstyle.display = 'none';
        }, 1000);
    }
    down[i].parentNode.onmouseleave = function(){
        clearTimeout(down[i].parentNode.timer)
        this.timer = setTimeout(() => {
            down[i].style.top='-34px';
            // down[i].extElementSibling.style.display = 'block';
        }, 500);
        // down[i].style.height= '0px';
    }
    
}
