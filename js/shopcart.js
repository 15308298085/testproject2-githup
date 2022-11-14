$(function () {
    // 全选框
    $('.quanxuan').change(function () {
        $(".j-checked, .quanxuan").prop('checked', $(this).prop('checked'))
    })
    $('.j-checked').change(function () {
        if ($('.j-checked:checked').length == $('.j-checked').length) {
            $('.quanxuan').prop('checked', true)
        } else {
            $('.quanxuan').prop('checked', false)
        }
    })
    // 数量加减
    $('.jia').click(function () {
        var n = $(this).siblings('input').val()
        n++
        $(this).siblings('input').val(n)

        // 小计
        subTotal(n, $(this))
    })
    $('.jian').click(function () {
        var n = $(this).siblings('input').val()
        if (n > 1 ) {
            n--
            $(this).siblings('input').val(n)
        }

        // 小计
        subTotal(n, $(this))
    })
    // 小计函数
    function subTotal(n, dom) {
        var subprice = n * parseFloat(dom.closest('tr').find('.price').text())
        dom.closest('tr').find('.subprice').text(subprice.toFixed(2))
    }
    // 删除
    $('.del').click(function () {
        $(this).closest('tr').remove()
    });
    $('.j-checked').click(function () {
        var flag = true
        var totalPrice = 0
        $('.j-checked').each(function (i, input) {
            if (!$(input).prop('checked')) {
                flag = false
            } else {
                totalPrice += parseFloat($(this).closest('tr').find('.subprice').text())
            }
        })
        $('.total').text(totalPrice.toFixed(2))
    })
})