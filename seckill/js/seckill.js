$(document).ready(function(){

    $('.slider1').bxSlider({

        slideWidth: 200,

        minSlides: 2,

        maxSlides: 4,

        slideMargin: 10,
        controls: true//隐藏左右按钮
    });

});
$(function () {
    var sectime=0;
    setInterval(function () {
        if(sectime == -600){
            sectime=-200;
            $('.secPot').css({'left':'0'});
        }
        $('.secPot').animate({left:sectime},500);
        sectime=sectime-200;


    },3000);
    setInterval(function () {
        var date=new Date();
        var h=date.getHours();
        var f=date.getMinutes();
        var s=date.getSeconds();
        $('.sec-h').html(h);
        $('.sec-f').html(f);
        $('.sec-s').html(s);
    })
},1000);
$(function () {
    $('#ran-left-top-ul1').on('mouseover','li',function () {
        console.log($(this).html());
        for (let i = 0; i < $('#ran-left-top-ul1').find('li').size(); i++) {
            $('#ran-left-top-ul1').find('li').eq(i).removeClass('ranclick');
        }
        $(this).addClass('ranclick');

        if ($(this).html()=="生活电器"){
            $.ajax({
                type:'get',
                url : "http://localhost:63342/项目/seckill/json.json",
                success:function (data) {
                    let str=`<div class="ran-left-lefe" >
                        <img src="img/a2.png" alt="" class="ran-img1">
                        <img src="img/${data[0].img1}" alt="" class="ran-img2" style="width: 100px" height="100px">
                        <a href="#"><span class="tan_name">${data[0].text1}</span></a>
                        <ul >
                            <li><a href="#">好物榜</a></li>
                            <li><a href="#">折扣榜</a></li>
                            <li><a href="#">店铺榜</a></li>
                            <li><a href="#">热搜榜</a></li>
                        </ul>
                    </div>
                    <div class="ran-left-right" >
                        <a href="#">
                            <div class="ran-left-right-b">
                                <img src="img/a3.png" alt="" class="b-img1">
                                <img src="img/${data[0].img2}" alt="" class="b-img2">
                                <p>${data[0].text2}</p>
                            </div>
                        </a>
                        <a href="#">
                            <div class="ran-left-right-b">
                                <img src="img/a4.png" alt="" class="b-img1">
                                <img src="img/${data[0].img3}" alt="" class="b-img2">
                                <p>${data[0].text3}</p>
                            </div>
                        </a>
                        <a href="#">
                            <div class="ran-left-right-b">
                                <img src="img/a5.png" alt="" class="b-img1">
                                <img src="img/${data[0].img4}" alt="" class="b-img2">
                                <p>${data[0].text4}</p>
                            </div>
                        </a>
                    </div>`;
                $('#ran-all').html(str);
                }
            })
        }else if($(this).html()=="厨房小电"){
            $.ajax({
                type:'get',
                url : "http://localhost:63342/项目/seckill/json.json",
                success:function (data) {
                    let str=`<div class="ran-left-lefe" >
                        <img src="img/a2.png" alt="" class="ran-img1">
                        <img src="img/${data[1].img1}" alt="" class="ran-img2" style="width: 100px" height="100px">
                        <a href="#"><span class="tan_name">${data[1].text1}</span></a>
                        <ul >
                            <li><a href="#">好物榜</a></li>
                            <li><a href="#">折扣榜</a></li>
                            <li><a href="#">店铺榜</a></li>
                            <li><a href="#">热搜榜</a></li>
                        </ul>
                    </div>
                    <div class="ran-left-right" >
                        <a href="#">
                            <div class="ran-left-right-b">
                                <img src="img/a3.png" alt="" class="b-img1">
                                <img src="img/${data[1].img2}" alt="" class="b-img2">
                                <p>${data[1].text2}</p>
                            </div>
                        </a>
                        <a href="#">
                            <div class="ran-left-right-b">
                                <img src="img/a4.png" alt="" class="b-img1">
                                <img src="img/${data[1].img3}" alt="" class="b-img2">
                                <p>${data[1].text3}</p>
                            </div>
                        </a>
                        <a href="#">
                            <div class="ran-left-right-b">
                                <img src="img/a5.png" alt="" class="b-img1">
                                <img src="img/${data[1].img4}" alt="" class="b-img2">
                                <p>${data[1].text4}</p>
                            </div>
                        </a>
                    </div>`;
                    $('#ran-all').html(str);
                }
            })
        }else if ($(this).html()=="二胡"){
            $.ajax({
                type:'get',
                url : "http://localhost:63342/项目/seckill/json.json",
                success:function (data) {
                    let str=`<div class="ran-left-lefe" >
                        <img src="img/a2.png" alt="" class="ran-img1">
                        <img src="img/${data[2].img1}" alt="" class="ran-img2" style="width: 100px" height="100px">
                        <a href="#"><span class="tan_name">${data[2].text1}</span></a>
                        <ul >
                            <li><a href="#">好物榜</a></li>
                            <li><a href="#">折扣榜</a></li>
                            <li><a href="#">店铺榜</a></li>
                            <li><a href="#">热搜榜</a></li>
                        </ul>
                    </div>
                    <div class="ran-left-right" >
                        <a href="#">
                            <div class="ran-left-right-b">
                                <img src="img/a3.png" alt="" class="b-img1">
                                <img src="img/${data[2].img2}" alt="" class="b-img2">
                                <p>${data[2].text2}</p>
                            </div>
                        </a>
                        <a href="#">
                            <div class="ran-left-right-b">
                                <img src="img/a4.png" alt="" class="b-img1">
                                <img src="img/${data[2].img3}" alt="" class="b-img2">
                                <p>${data[2].text3}</p>
                            </div>
                        </a>
                        <a href="#">
                            <div class="ran-left-right-b">
                                <img src="img/a5.png" alt="" class="b-img1">
                                <img src="img/${data[2].img4}" alt="" class="b-img2">
                                <p>${data[2].text4}</p>
                            </div>
                        </a>
                    </div>`;
                    $('#ran-all').html(str);
                }
            })
        }else if ($(this).html()=="个人健康"){
            $.ajax({
                type:'get',
                url : "http://localhost:63342/项目/seckill/json.json",
                success:function (data) {
                    let str=`<div class="ran-left-lefe" >
                        <img src="img/a2.png" alt="" class="ran-img1">
                        <img src="img/${data[3].img1}" alt="" class="ran-img2" style="width: 100px" height="100px">
                        <a href="#"><span class="tan_name">${data[3].text1}</span></a>
                        <ul >
                            <li><a href="#">好物榜</a></li>
                            <li><a href="#">折扣榜</a></li>
                            <li><a href="#">店铺榜</a></li>
                            <li><a href="#">热搜榜</a></li>
                        </ul>
                    </div>
                    <div class="ran-left-right" >
                        <a href="#">
                            <div class="ran-left-right-b">
                                <img src="img/a3.png" alt="" class="b-img1">
                                <img src="img/${data[3].img2}" alt="" class="b-img2">
                                <p>${data[3].text2}</p>
                            </div>
                        </a>
                        <a href="#">
                            <div class="ran-left-right-b">
                                <img src="img/a4.png" alt="" class="b-img1">
                                <img src="img/${data[3].img3}" alt="" class="b-img2">
                                <p>${data[3].text3}</p>
                            </div>
                        </a>
                        <a href="#">
                            <div class="ran-left-right-b">
                                <img src="img/a5.png" alt="" class="b-img1">
                                <img src="img/${data[3].img4}" alt="" class="b-img2">
                                <p>${data[3].text4}</p>
                            </div>
                        </a>
                    </div>`;
                    $('#ran-all').html(str);
                }
            })
        }else if ($(this).html()=="集成灶"){
            $.ajax({
                type:'get',
                url : "http://localhost:63342/项目/seckill/json.json",
                success:function (data) {
                    let str=`<div class="ran-left-lefe" >
                        <img src="img/a2.png" alt="" class="ran-img1">
                        <img src="img/${data[1].img1}" alt="" class="ran-img2" style="width: 100px" height="100px">
                        <a href="#"><span class="tan_name">${data[1].text1}</span></a>
                        <ul >
                            <li><a href="#">好物榜</a></li>
                            <li><a href="#">折扣榜</a></li>
                            <li><a href="#">店铺榜</a></li>
                            <li><a href="#">热搜榜</a></li>
                        </ul>
                    </div>
                    <div class="ran-left-right" >
                        <a href="#">
                            <div class="ran-left-right-b">
                                <img src="img/a3.png" alt="" class="b-img1">
                                <img src="img/${data[1].img2}" alt="" class="b-img2">
                                <p>${data[1].text2}</p>
                            </div>
                        </a>
                        <a href="#">
                            <div class="ran-left-right-b">
                                <img src="img/a4.png" alt="" class="b-img1">
                                <img src="img/${data[1].img3}" alt="" class="b-img2">
                                <p>${data[1].text3}</p>
                            </div>
                        </a>
                        <a href="#">
                            <div class="ran-left-right-b">
                                <img src="img/a5.png" alt="" class="b-img1">
                                <img src="img/${data[1].img4}" alt="" class="b-img2">
                                <p>${data[1].text4}</p>
                            </div>
                        </a>
                    </div>`;
                    $('#ran-all').html(str);
                }
            })
        }

    })
})