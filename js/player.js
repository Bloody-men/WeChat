// ---点击删除---
$("button").click(function(){
	$(".hdk-Advertisement").hide();			
});

//---tab切换---
$('.hdk-Catalog li').click(function(){
	//点击li切换样式
	$(this).addClass('hdk-active').siblings().removeClass('hdk-active');
	//根据li的索引值，来确定那个div显示，其她隐藏。
	$('.hdk-index-Player>div').eq($(this).index()).show().siblings().hide();
});

//下拉刷新
$(window).scroll(function(){
    var dmt = $(document).height(); //文件的总高度
    var wid = $(window).height();   //可视区域高度
    var top = $(window).scrollTop()   // 滚动高度
    if(dmt-wid<=top+2){               //文件高度-可视高度<=滚动高度
      for(var i=0;i<1;i++){           //for:滚动一次执行一次
        var html='<div class="hdk-picture"><a href="player.html"><img src="img/cc.png"></a><div class="hdk-information"><div class="box"><div class="hdk-orders"><p>1</p></div><h5>杨柳111</h5><p>1234票</p></div><img src="img/love.png"><button>投票</button></div></div><div class="hdk-picture"><a href="player.html"><img src="img/bb.png"></a><div class="hdk-information"><div class="box"><div class="hdk-orders"><p>2</p></div><h5>杨建222</h5><p>1234票</p></div><img src="img/love.png"><button>投票</button></div></div><div class="hdk-picture"><a href="player.html"><img src="img/cc.png"></a><div class="hdk-information"><div  class="box"><div class="hdk-orders"><p>1</p></div><h5>杨华333</h5><p>1234票</p></div><img src="img/love.png"><button>投票</button></div></div><p style="clear: both;"></p>'
      
      }
      $('.tab,.list').append(html);
    }
});


//---点击选中-----
      $('.menu').click(function(){
        $(this).addClass('menu_border');
        $('.menu').not($(this)).removeClass('menu_border');
        $(this).children("li").show();
        $('.menu').not($(this)).children("li").hide();
      });

//----money-----
  $('.menu').click(function(){
    val=$(this).children('span').html();
    $('.var').html(val);
  })


  //----互动酷协议---
        $('#button').click(function(){
          $('.shadow').show();
        });
        $('#hide').click(function(){
          $('.shadow').hide();
        });


//-----表单验证-----
  $('input[name=address]').blur(function(){
    var a = this.value;
    if(a.length<1){
      $(this).data({'s':0});
      $(this).next().show().delay(3000).fadeOut();
    }else{
      $(this).data({'s':1});
      $(this).next().hide();
    }
  });
  $('input[name=bbj]').blur(function(){
    var a = this.value;
    if(!a.match(/^1[345789]\d{9}$/)){
      $(this).data({'s':0});
      $(this).next().show().delay(3000).fadeOut();
    }else{
      $(this).data({'s':1});
      $(this).next().hide();
    }
  });
  $('input[name=video]').blur(function(){
    var a = this.value;
    if(a.length<1){
      $(this).data({'s':0});
      $(this).next().show().delay(3000).fadeOut();
    }else{
      $(this).data({'s':1});
      $(this).next().hide();
    }
  });
  $('input[name=Voice]').blur(function(){
    var a = this.value;
    if(a.length<1){
      $(this).data({'s':0});
      $(this).next().show().delay(3000).fadeOut();
    }else{
      $(this).data({'s':1});
      $(this).next().hide();
    }
  });
  $('input[name=img]').blur(function(){
    var a = this.value;
    if(a.length<1){
      $(this).data({'s':0});
      $(this).next().show().delay(3000).fadeOut();
    }else{
      $(this).data({'s':1});
      $(this).next().hide();
    }
  });
  $('input[name=name]').blur(function(){
    var a = this.value;
    if(a.length<2){
      $(this).data({'s':0});
      $(this).next().show().delay(3000).fadeOut();
    }else{
      $(this).data({'s':1});
      $(this).next().hide();
    }
  });
  $('input[name=grouping]').blur(function(){
    var a = this.value;
    if(a.length<2){
      $(this).data({'s':0});
      $(this).next().show().delay(3000).fadeOut();
    }else{
      $(this).data({'s':1});
      $(this).next().hide();
    }
  });
  $('.enrollment').submit(function(){
    var tot=0;
    $('.name').each(function(){
      var flag = $(this).data("s");
      if(!flag){
        $(this).next().show().delay(3000).fadeOut();
        return false;
      }
      tot+=$(this).data('s');
    });
    if(tot!=7){
    return false; 
    }
  });

// ------上传图片-----
  $(function() {
    $("#book-file").change(function() {
      var $file = $(this);
      var objUrl = $file[0].files[0];
      //获得一个http格式的url路径:mozilla(firefox)||webkit or chrome 
      var windowURL = window.URL || window.webkitURL;
      //createObjectURL创建一个指向该参数对象(图片)的URL 
      var dataURL = windowURL.createObjectURL(objUrl);
      // $("#imageview").attr("src", dataURL);
      
        var str = "<li style='width: 80px;height: 80px;margin:5px 0 5px 10px;overflow:hidden;float: left;''><img style='width:80px';height:80px; src="+dataURL+" /></li>"
          $('#img_box').before(str);
    });
  });              