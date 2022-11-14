$(document).ready(function () {
    //点击增加按钮触发事件
    $(".jia").click(function () {
        var $num = $(this).siblings('input').val()
        //单品数量增加
        $num.text(parseInt($num.text()) + 1);
        //商品总数增加
        var totalNum = parseInt($(".totalNum").text());
        totalNum++
        $(".totalNum").text(totalNum);
        //计算总价
        var goods_price = parseInt($(this).closest('tr').find('.subprice').text());
        $(".total").text(parseInt($(".total").text()) + goods_price);
    });

    //点击减少按钮触发事件
    $(".jian").click(function () {
        var num = $(this).siblings('input').val()
        if (parseInt(num.text())) {
            num.text(parseInt(num.text()) - 1);
            var totalNum = parseInt($(".totalNum").text());
            totalNum--
            $(".totalNum").text(totalNum);
            var goods_price = parseInt($(this).closest('tr').find('.subprice').text());
            $(".total").text(parseInt($(".total").text()) - goods_price);
        } else {
            num.text("0");
        }
    });
});