// 乐购商场首页 2022-10-21 by 蒲
$("#bannerInner").tyslide({
    boxh: 460,//盒子的高度
    w: 1000,//盒子的宽度
    h: 390,//图片的高度
    isShow: true,//是否显示控制器
    isShowBtn: true,//是否显示左右按钮
    controltop: 40,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW: 20,//控制按钮宽度
    controlsH: 20,//控制按钮高度
    radius: 10,//控制按钮圆角度数
    controlsColor: "#d7d7d7",//普通控制按钮的颜色
    controlsCurrentColor: "#ff6600",//当前控制按钮的颜色
    isShowNum: true //是否显示数字
});
// 电子书table 切换
$("#ebooks-banner").tyslide({
    boxh: 223,//盒子的高度
    w: 332,//盒子的宽度
    h: 223,//图片的高度
    isShow: true,//是否显示控制器
    isShowBtn: true,//是否显示左右按钮
    controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW: 20,//控制按钮宽度
    controlsH: 2,//控制按钮高度
    controlsColor: "#d7d7d7",//普通控制按钮的颜色
    controlsCurrentColor: "#00ff00",//当前控制按钮的颜色
    
});
// 新书列表手风琴效果
$(".ebooks .right-box ul > li").mouseenter(function(){
    $(this).siblings().find('.desc').hide();
    $(this).siblings().find('.ebooks-title').show();
    $(this).find('.ebooks-title').hide();
    $(this).find('.desc').show();
})
// 服装table 切换
$("#fz").tyslide({
    boxh: 350,//盒子的高度
    w: 431,//盒子的宽度
    h: 350,//图片的高度
    isShow: true,//是否显示控制器
    isShowBtn: true,//是否显示左右按钮
    controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW: 20,//控制按钮宽度
    controlsH: 2,//控制按钮高度
    controlsColor: "#d7d7d7",//普通控制按钮的颜色
    controlsCurrentColor: "#00ff00",//当前控制按钮的颜色
})
$("#yd").tyslide({
    boxh: 350,//盒子的高度
    w: 431,//盒子的宽度
    h: 350,//图片的高度
    isShow: true,//是否显示控制器
    isShowBtn: true,//是否显示左右按钮
    controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW: 20,//控制按钮宽度
    controlsH: 2,//控制按钮高度
    controlsColor: "#d7d7d7",//普通控制按钮的颜色
    controlsCurrentColor: "#00ff00",//当前控制按钮的颜色
})
$("#tz").tyslide({
    boxh: 350,//盒子的高度
    w: 431,//盒子的宽度
    h: 350,//图片的高度
    isShow: true,//是否显示控制器
    isShowBtn: true,//是否显示左右按钮
    controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW: 20,//控制按钮宽度
    controlsH: 2,//控制按钮高度
    controlsColor: "#d7d7d7",//普通控制按钮的颜色
    controlsCurrentColor: "#00ff00",//当前控制按钮的颜色
})
// 推广商品切换
$(".promotion .top ul li").mouseenter(function(){
    // 导航激活类切换
    $(this).addClass('active').siblings().removeClass('active')
    // 内容切换
    var index = $(this).index()
    console.log(index);
    $('.promotion .bottom .inner-box').animate({
        'left': -index * 1200
    })
})