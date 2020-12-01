$(document).ready(function () {
    //頁籤功能切換
    $('.books-tab-btn1').click(function (e) { 
        $('.books-content1').css('display','flex');
        $('.books-content2').css('display','none');
        $('.books-content3').css('display','none');
        $('.books-content4').css('display','none');
        return false;
    });
    $('.books-tab-btn2').click(function (e) { 
        $('.books-content2').css('display','flex');
        $('.books-content1').css('display','none');
        $('.books-content3').css('display','none');
        $('.books-content4').css('display','none');
        return false;
    });
    $('.books-tab-btn3').click(function (e) { 
        $('.books-content3').css('display','flex');
        $('.books-content1').css('display','none');
        $('.books-content2').css('display','none');
        $('.books-content4').css('display','none');
        return false;
    });
    $('.books-tab-btn4').click(function (e) { 
        $('.books-content4').css('display','flex');
        $('.books-content1').css('display','none');
        $('.books-content2').css('display','none');
        $('.books-content3').css('display','none');
        return false;
    });
});