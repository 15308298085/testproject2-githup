// 注册模块
$(function(){
    // 调用插件
    $('#registerForm').validate({
        // 验证规则
        rules:{
            // 用户名验证
            username:{
                required: true,  // 非空    
                rangelength: [3,6]   //长度验证
            }
        },
        //提示信息
        messages:{
            // 用户名验证
            username:{
                required: '用户名不能为空哦',
                rangelength: '长度为3~6位'
            }
        }
    })
})