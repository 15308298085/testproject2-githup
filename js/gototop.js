// 返回顶部功能函数封装
$(function () {
    window.gotoTop = function (options) {
        var $gotoTopHtml = $(<div class="backtotop">
            <img src="${options.imgUrl}" alt="" />
        </div >);
        $gotoTopHtml.css({
            position: 'fixed',
            left: '610px',
            bottom: options.bottom,
            width: '30px',
            height: '50px',
            marginLeft: '50%',
            // display: 'none',
        })
        /* 返回顶部 */
        $(document).scroll(function () {
            var topDistance = $('html,body').scrollTop()
            if (topDistance > 500) {
                $('.backtotop').fadeIn();
            } else {
                $('.backtotop').fadeOut();
            }
        })
        $('body').on('click','.backtotop' ,function () {
            $('html,body').animate({
                scrollTop:0
            },300)
        });
        $('body').append($gotoTopHtml)
    }
})