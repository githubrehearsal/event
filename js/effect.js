$(document).ready(function () {
    //頁籤功能切換
    $('.books-tab-btn1').click(function (e) { 
        $('.books-content1').css('display','flex');
        $('.books-content2').css('display','none');
        $('.books-content3').css('display','none');
        $('.books-content4').css('display','none');
        $('.books-tab-btn').removeClass('tab-default');
        $('.books-tab-btn').removeClass('tab-active');
        $(this).addClass('tab-active');
        return false;
    });
    $('.books-tab-btn2').click(function (e) { 
        $('.books-content2').css('display','flex');
        $('.books-content1').css('display','none');
        $('.books-content3').css('display','none');
        $('.books-content4').css('display','none');
        $('.books-tab-btn').removeClass('tab-default');
        $('.books-tab-btn').removeClass('tab-active');
        $(this).addClass('tab-active');
        return false;
    });
    $('.books-tab-btn3').click(function (e) { 
        $('.books-content3').css('display','flex');
        $('.books-content1').css('display','none');
        $('.books-content2').css('display','none');
        $('.books-content4').css('display','none');
        $('.books-tab-btn').removeClass('tab-default');
        $('.books-tab-btn').removeClass('tab-active');
        $(this).addClass('tab-active');
        return false;
    });
    $('.books-tab-btn4').click(function (e) { 
        $('.books-content4').css('display','flex');
        $('.books-content1').css('display','none');
        $('.books-content2').css('display','none');
        $('.books-content3').css('display','none');
        $('.books-tab-btn').removeClass('tab-default');
        $('.books-tab-btn').removeClass('tab-active');
        $(this).addClass('tab-active');
        return false;
    });
    //置頂功能
    $('.top-btn').click(function (e) { 
		$('html,body').animate({ scrollTop: 0, }, 1000);
    });
});