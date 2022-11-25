// 返回顶部功能函数封装
$(function () {
   
    window.gotoTop = function (options) {
        var defaults = {
            bottom: '100px'
        }
        var params = $.extend({}, defaults, options)

        var $gotoTopHtml = $('<div class="backtotop"><img src="${params.imgUrl}" alt="" /></div >');
        $('.backtotop').css({
            position: 'fixed',
            left: '610px',
            bottom: params.bottom,
            width: '30px',
            height: '50px',
            marginLeft: '50%',
            display: 'block'
        })
        /* 返回顶部 */
        $(document).scroll(function () {
            var topDistance = $('html,body').scrollTop()
            console.log(topDistance);
            if (topDistance > 500) {
                console.log($('.backtotop').css());
                $('.backtotop').fadeIn();
            } else {
                $('.backtotop').fadeOut();
            }
        })
        $('body').on('click', '.backtotop', function () {
            $('html,body').animate({
                scrollTop: 0
            }, 300)
        });
        $('body').append($gotoTopHtml)
    }
})