// 注册模块
$(function () {
    // 调用插件
    $('#registerForm').validate({
        // 验证规则
        rules: {
            // 用户名验证
            username: {
                required: true,  // 非空    
                rangelength: [3, 6]   //长度验证
            },
            // 验证密码
            password: {
                required: true,  // 非空 
                isPassword: true   //自定义密码验证
            },
            //确认信息
            checkpassword: {
                required: true,  // 非空 
                equalTo: '#password'   //验证密码一致
            },
            //电话号码
            tel: {
                required: true,
                isTel: true
            }
        },
        //提示信息
        messages: {
            // 用户名验证
            username: {
                required: '用户名不能为空哦',  //非空提示
                rangelength: '长度为3~6位'    //长度提示
            },
            // 密码提示信息
            password: {
                required: '密码不能为空',  // 非空提示
                isPassword: '亲!输入5-10个,包含字母,数字的字符串额'
            },
            // 确认密码提示信息
            checkpassword: {
                required: '请再次输入密码',  //非空
                equalTo: '两次密码不一致'  //密码一致性
            },
            //电话号码提示
            tel: {
                required: '电话号码不能为空',
                isTel: '电话号码格式不正确'
            }
        }
    })
    //密码自定义验证
    jQuery.validator.addMethod("isPassword", function (value, element) {
        var pwdReg = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,9}$/;
        return this.optional(element) || (pwdReg.test(value));
    });
    // 手机号码自定义验证
    jQuery.validator.addMethod("isTel", function (value, element) {
        var telReg = /^[1]+[3,4,5,6,7,8,9]+\d{9}$/;
        return this.optional(element) || (telReg.test(value));
    });

})
