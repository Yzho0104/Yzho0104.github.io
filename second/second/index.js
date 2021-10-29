// 获取当前鼠标位置，已确认当前移动哪块拼图
document.onmousedown = function (event) {
    console.log('x: ', event.pageX, ' y: ', event.pageY)
    var xPost = event.pageX
    var yPost = event.pageY
    if (xPost > 280 && xPost < 395 && yPost > 70 && yPost < 190) {
        console.log('topleft')
        movse('topleft', xPost, yPost)
    }
    if (xPost > 1025 && xPost < 1160 && yPost > 670 && yPost < 790) {
        console.log('topcenter')
        movse('topcenter', xPost, yPost)
    }
    if (xPost > 1780 && xPost < 1870 && yPost > 160 && yPost < 260) {
        console.log('toprighttop')
        movse('toprighttop', xPost, yPost)
    }
    if (xPost > 1610 && xPost < 1720 && yPost > 380 && yPost < 510) {
        console.log('toprightbottom')
        movse('toprightbottom', xPost, yPost)
    }
    if (xPost > 105 && xPost < 240 && yPost > 2150 && yPost < 2240) {
        console.log('bottomlefttop')
        movse('bottomlefttop', xPost, yPost)
    }
    if (xPost > 120 && xPost < 250 && yPost > 2450 && yPost < 2560) {
        console.log('bottomleftbottom')
        movse('bottomleftbottom', xPost, yPost)
    }
    if (xPost > 1515 && xPost < 1630 && yPost > 1670 && yPost < 1780) {
        console.log('bottomrighttop')
        movse('bottomrighttop', xPost, yPost)
    }
    if (xPost > 1720 && xPost < 1850 && yPost > 1850 && yPost < 1950) {
        console.log('bottomlrightbottom')
        movse('bottomlrightbottom', xPost, yPost)
    }
}


function movse (dom, xPost, yPost) {
    var xMove = 0, yMove = 0
    var xOrigin = 0, yOrigin = 0
    var obj = document.getElementsByClassName(dom)[0];
    xOrigin = window.getComputedStyle(obj).getPropertyValue('top')
    yOrigin = window.getComputedStyle(obj).getPropertyValue('left')
    document.onmousemove = function (event) {
        xMove = event.pageX
        yMove = event.pageY

        obj.style.top = yMove - yPost + parseInt(xOrigin) + 'px'
        obj.style.left = xMove - xPost + parseInt(yOrigin) + 'px'

        if (xMove > 800 && xMove < 910 && yMove < 1520 && yMove > 1390) {
            if (dom == 'topleft') {
                obj.style.transform = 'rotateZ(-40deg)'
                obj.style.top = '1345px'
                obj.style.left = '739px'
                var bg1 = document.getElementsByClassName('main1')[0]
                bg1.classList.add("main-class");
                time(bg1)
            }
            if (dom == 'topcenter') {
                obj.style.transform = 'rotateZ(100deg)'
                obj.style.top = '1377px'
                obj.style.left = '751px'
                var bg2 = document.getElementsByClassName('main2')[0]
                bg2.classList.add("main-class");
                time(bg2)
            }
            if (dom == 'toprighttop') {
                obj.style.transform = 'rotateZ(45deg)'
                obj.style.top = '1350px'
                obj.style.left = '751px'
                var bg3 = document.getElementsByClassName('main3')[0]
                bg3.classList.add("main-class");
                time(bg3)
            }
            if (dom == 'toprightbottom') {
                obj.style.transform = 'rotateZ(-36deg)'
                obj.style.top = '1336px'
                obj.style.left = '738px'
                var bg4 = document.getElementsByClassName('main4')[0]
                bg4.classList.add("main-class");
                time(bg4)
            }
            if (dom == 'bottomlefttop') {
                obj.style.transform = 'rotateZ(51deg)'
                obj.style.top = '1330px'
                obj.style.left = '733px'
                var bg5 = document.getElementsByClassName('main5')[0]
                bg5.classList.add("main-class");
                time(bg5)
            }
            if (dom == 'bottomleftbottom') {
                obj.style.transform = 'rotateZ(45deg)'
                obj.style.top = '1332px'
                obj.style.left = '733px'
                var bg6 = document.getElementsByClassName('main6')[0]
                bg6.classList.add("main-class");
                time(bg6)
            }
            if (dom == 'bottomrighttop') {
                obj.style.transform = 'rotateZ(54deg)'
                obj.style.top = '1336px'
                obj.style.left = '738px'
                var bg7 = document.getElementsByClassName('main7')[0]
                bg7.classList.add("main-class");
                time(bg7)
            }
            if (dom == 'bottomlrightbottom') {
                obj.style.transform = 'otateZ(-45deg)'
                obj.style.top = '1336px'
                obj.style.left = '738px'
                var bg8 = document.getElementsByClassName('main8')[0]
                bg8.classList.add("main-class");
                time(bg8)
            }
        }
    }
    function time (dom) {
         setInterval(() => {
            dom.style['border-radius'] = '0px'
            var circle = document.getElementsByClassName('circle')[0]
            var circleTr = document.getElementsByClassName('circleTr')[0]
            circle.classList.add("circleTr")
            circle.style.background = '#8a4980'
            circleTr.style.background = '#8a4980'
        }, 2000);
    }
    document.onmouseup = function(event){
        //清除事件
        document.onmouseup = null;
        document.onmousemove = null;
        if (xMove < 800 || xMove > 910 || yMove > 1520 || yMove < 1390) {
            obj.style.top = '0px'
            obj.style.left = '0px'
        }
    }
}