// 返回顶部功能函数封装
$(function () {
    window.gototop = function (options) {
        var $gototophtml = $(<div class="backtotop">
            <img src="options.imgUrl" alt="" />
        </div >);
        $gototophtml.css({
            position: 'fixed',
            left: '610px',
            bottom: '10px;',
            width: '30px',
            height: '50px',
            marginLeft: '50%',
            display: 'none',
        })
        {/* 返回顶部 */}
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

        $('body').append($gototophtml)
    }
})