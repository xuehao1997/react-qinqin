//网易方案
function font () {
    //如果将来拿到的是设计稿
    // document.documentElement.style.fontsize = document.documentElement.clientWidth/7.5 + 'px';
    //如果参考的是猫眼项目
    document.documentElement.style.fontsize = document.documentElement.clientWidth/3.75 + 'px';
}

font();

window.onresize = font; 