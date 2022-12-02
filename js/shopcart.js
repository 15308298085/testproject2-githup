$(function(){
    var $theadInput = $('table thead input[type=checkbox]')
    var $tbodyInput = $('table tbody input[type=checkbox]')
    var $allPriceInput = $('.totalPrice input[type=checkbox]')
    // 全选
    $theadInput.change(function(){
        var state = $(this).prop('checked')
        $tbodyInput.prop('checked',state)
        $allPriceInput.prop('checked', state)

        // 调用计算总价函数
        calcTotalPrice()
    })
    // 结束全选框
    $allPriceInput.change(function(){
        var state = $(this).prop('checked')
        $theadInput.prop('checked', state)
        $tbodyInput.prop('checked', state)
        // 调用计算总价函数
        calcTotalPrice()
    })
    // 表单选择框,影响全选框
    $tbodyInput.change(function(){
        var flag = true
        // 总价
        var totalPrice = 0
        $tbodyInput.each(function(i,input){
            if(!$(input).prop('checked')){
                flag = false
            } else {
                totalPrice +=parseFloat($(this).closest('tr').find('.subprice').text())
            }
        })
        $theadInput.prop('checked',flag)
        $allPriceInput.prop('checked', flag)
        // 调用计算总价函数
        calcTotalPrice()
    })
    // 数量的加减功能
    // 加
    $('.jia').on('click',function(){
        var $nextInput = $(this).prev()
        var oldVal = parseInt($nextInput.val())
        oldVal++
        $nextInput.val(oldVal)
        // 小计
        subTotalPrice(oldVal, $(this))
        // 调用计算总价函数
        calcTotalPrice()
    })
    // 减
    $('.jian').on('click', function () {
        var $prevInput = $(this).next()
        var oldVal = parseInt($prevInput.val())
        oldVal--
        oldVal = oldVal < 1? 1:oldVal
        $prevInput.val(oldVal)
        // 小计
        subTotalPrice(oldVal,$(this))
        // 调用计算总价函数
        calcTotalPrice()
    })
    // 数量框
    $('.shu').change(function(){
        var n = $(this).val()
        var m = $(this).closest('tr').find('.price').html()
        $(this).closest('tr').find('.subprice').html((n*m).toFixed(2))
        calcTotalPrice()
    })
    // 小计函数
    function subTotalPrice(oldVal,dom){
        var subtotal = oldVal * parseFloat(dom.closest('tr').find('.price').text())
        dom.closest('tr').find('.subprice').text(subtotal.toFixed(2))
    }
    // 删除
    $('.del').click(function(){
        $(this).closest('tr').remove()
        calcGoodsCount()
        calcTotalPrice()
    })
    // 计算总价的函数
    function calcTotalPrice(){
        // 总价
        var totalPrice = 0
        // 数量
        var count = 0
        $('table tbody input[type=checkbox]').each(function(i,input) {
            if($(input).prop('checked')){
                count++
                totalPrice += parseFloat($(input).closest('tr').find('.subprice').text())
            }
        })
        $('.total').text(totalPrice.toFixed(2))
        $('.count').text(count)
    }
    // 全部商品
    function calcGoodsCount(){
        $('.goodsCount').text($('table tbody tr').length)
    }
    calcGoodsCount()
    // 删除选中商品
    $('.deleteChecked').on('click',function(){
        $tbodyInput.each(function(i,input){
            if($(this).prop('checked')){
                $(this).closest('tr').remove()
            }
        })
        calcGoodsCount()
        calcTotalPrice()
    })
})