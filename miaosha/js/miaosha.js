$(function () {
    $('.miao-mu').on('click','li',function () {
        console.log(this);
       // console.log($('.miao-mu').find('li').eq(0));
        for (var i = 0; i < $('.miao-mu').find('li').size(); i++) {
            $('.miao-mu').find('li').eq(i).removeClass('miao-add');

        }
        $(this).addClass('miao-add');
    });
    $('#miaoRight').on('mouseover',function () {
        $('#moseBox').css({'display':'block'});
        $('#moseBox').animate({'top':'44px'},200);
    })
    $('#moseBox').on('mouseover',function () {
        $('#moseBox').css({'display':'block'});
        $('#miaoRight').on('mouseout',function () {
            $('#moseBox').css({'display':'none'});
        });
    })
    $('#moseBox').on('mouseout',function () {
        $('#moseBox').animate({'top':'100px'},200);
        $('#moseBox').css({'display':'none'});
    });

    $('#banner-text').on('mouseover',function () {
        $('#banner-h').css({'display':'block'});
        $('#banner-h').animate({'opacity':1},300);

    })
    $('#banner-text').on('mouseout',function () {
        $('#banner-h').animate({'opacity':0},300);
        $('#banner-h').css({'display':'none'});

    })
    document.onscroll=function(){
        var juli=$('#miaoShaCon')[0].offsetTop-document.documentElement.scrollTop;
        console.log(juli);
        if(juli<=100){
            $('#msNav').addClass("anmi");
           setTimeout(function () {
               $('#msNav').addClass("fix");
           },240)
            for (let i = 0; i <$('#msNav').find('ul').find('div').size(); i++) {
                $('#msNav').find('ul').find('div').eq(i).addClass("res");
                $('#msNav').find('ul').find('h4').eq(i).addClass("res");
            }
        }else if (juli>100){
            $('#msNav').removeClass("anmi");
            setTimeout(function () {
                $('#msNav').removeClass("fix");
            },240)
            for (let i = 0; i <$('#msNav').find('ul').find('div').size(); i++) {
                $('#msNav').find('ul').find('div').eq(i).removeClass("res");
                $('#msNav').find('ul').find('h4').eq(i).removeClass("res");
            }
        }
    }
    $.ajax({
            type:'get',
            url : "img.json",
            success:function (data) {
                let str="";
                for (let i = 0; i < data.length; i++) {
                    console.log(data[i]);
                    str+=`<li style="float: left;margin-right:6px; ">
        <a href="#">
            <div id="ShaCon-img" style="margin: 10px 45px">
            <img src="img/${data[i].img}" alt="" style="width: 200px" height="200px" id="ShaCon-img">
            </div>
            <h4 class="seckill_mod_goods_title ">${data[i].h4}</h4>
            <div>
                <p class="miaoShaCon-text">
                    包邮价
                </p>
                <p class="miaoShaCon-text">
                    更划算
                </p>
            </div>
        </a>
        <div class="minM">79天历史最低价</div>
        <div class="miaoShaCon-pic">
            <span>￥ ${data[i].mo1}</span>
            <span>${data[i].mo2}</span>
        </div>
        <a href="#" class="buy">立即抢购</a>
        <div class="buyNum">
            <span>已售:${data[i].buy}%</span>
            <div class="tiao"></div>
        </div>
    </li>`;
                }
                $('#miaoAdd').html(str);
            }
        }
    )
    var timer="";
    function setCookie(key,value,iDay){
        var oDate = new Date();
        oDate.setDate(oDate.getDate()+iDay);//用来设置过去时间
        timer=oDate;
        document.cookie = key+'='+value+";expires="+oDate.toString();
    }
    setCookie("秒杀","自行车",7);
    setInterval(function () {
        newTime=(timer-new Date().getTime())/1000;
        //console.log(timer);
        //console.log(parseInt(newTime /(86400)));
        var t=parseInt(newTime /(86400));
        var h=parseInt((newTime-(86400*t))/(60*60));
        var f=parseInt((newTime-(86400*t+3600*h))/60);
        var m=parseInt(newTime-(86400*t+3600*h+60*f));
       /* console.log(t);
        console.log(h);
        console.log(m);
        console.log(f);*/
       var s=`距结束：<span>${h}:${f}:${m}</span>`;
        $('#mend').html(s);
    },1000)
})