$(function(){
	
    		$(".nav ul li").on("tap",function(){
    			var i=$(this).index();
    			$(".on").removeClass("on");
    			$("nav ul li").eq(i).find("a").addClass("on").siblings().removeClass("on");
    		})
    		$("#colse").on("tap",function(){
    			$("header").hide();
    		})
    	
    	$(".go").click(function(){
    		$('body,html,section').stop().animate({scrollTop:0},500);
    	})
    	
    	 var n=0;
    var m=0;
     $(".section").on("tap",".sp1",function(){
     	n++
     	if(n==1){
     		$(this).find("i").addClass("color1");
     		var con=parseInt($(this).next().html())+1;
     		$(this).next().html(con);
     		if(m==1){
     			var con=parseInt($(this).parent().next().find(".sp2_2").html())-1;
     			$(this).parent().next().find(".sp2_2").html(parseInt(con));
     			$(this).parent().next().find("i").removeClass("color2");
     			m=0;
     			
     		}
     		
     	}else if(n==2){
     		$(this).find("i").removeClass("color1");
     		var con=parseInt($(this).next().html())-1;
     		$(this).next().html(con)
     		n=0;
     	}

     })
     
     
   
			
 function  datas1(UL){
   var stdiv = "<div class='tdiv'>20条新内容loading...</div>";
  $(".section").html(stdiv);
    var str="";
    var obj=[];
    var UL= "http://proxy.e12e.com/?https://fun.html5.qq.com/api/list_2?key=5&limit=8&rt=1&_t=1497877111819&ch=001201";
    	$.ajax({
    		type:"get",
    		url:UL,
    		dataType:"json",
    		success:function(data){
    			obj.push(data);
    			var len=obj[0].vArticleList.length;
    			for(var i=0;i<len;i++){
    				var sTitle = obj[0].vArticleList[i].vContent[0].sText;
					var UserName = obj[0].vArticleList[i].stFunUser.sUserName;
					var UserIcon = obj[0].vArticleList[i].stFunUser.sUserIcon;
					var UserId = obj[0].vArticleList[i].stFunUser.UserId;
					var sPoster = obj[0].vArticleList[i].vContent[1].sPoster;
					var iTimesUp = obj[0].vArticleList[i].iTimesUp;
					var iTimesDown = obj[0].vArticleList[i].iTimesDown;
					var iCommentNum = obj[0].vArticleList[i].iCommentNum;
					var iTimesShare = obj[0].vArticleList[i].iTimesShare;
					var lFunId=obj[0].vArticleList[i].lFunId;
					var obj1 = obj[0].vArticleList[i].vGodComments;
					if(obj[0].vArticleList[i].vGodComments.length >= 1) {
    	              var  vGodComments=obj1[0].sText;
    	              var sUserName =obj1[0].stFunUser. sUserName;
    	              var sp=sUserName+":"+vGodComments;
    	              str += "<div class='content'><div class='one'><img src=" +
							UserIcon + " align='absmiddle'/><span>" +
							UserName + "</span></div><div class='two'  id="+lFunId+"><div class='two1'><p>" +
							sTitle + "</p></div><div class='two2'><img src=" +
							sPoster + " /></div></div>" +
							"<div class='there'>" +
							"<div class='there1'><span class='sp1'><i class='iconfont'>&#xe6af;</i></span><span class='sp1_1'>" + iTimesUp + "</span></div>" +
							"<div class='there2'><span class='sp2'><i class='iconfont'>&#xe69c;</i></span><span class='sp2_2'>" + iTimesDown + "</span></div>" +
							"<div class='there3'><span class='sp3'><i class='iconfont'>&#xe69b;</i></span><span class='sp3_3'>" + iCommentNum + "</span></div>" +
							"<div class='there4'><span class='sp4'><i class='iconfont'>&#xe718;</i></span><span class='sp4_4'>" + iTimesShare + "</span></div>" +
							"</div><p class='shenping'><span class='shenping1'></span><span class='shenping2'>" +
							"" + sp + "</span></p></div>"
					} else {
						str += "<div class='content'><div class='one'><img src=" +
							UserIcon + " align='absmiddle'/><span>" +
							UserName + "</span></div><div class='two' id="+lFunId+"><div class='two1'><p>" +
							sTitle + "</p></div><div class='two2'><img src=" +
							sPoster + " /></div></div>" +
							"<div class='there'>" +
							"<div class='there1'><span class='sp1'><i class='iconfont'>&#xe6af;</i></span><span class='sp1_1'>" + iTimesUp + "</span></div>" +
							"<div class='there2'><span class='sp2'><i class='iconfont'>&#xe69c;</i></span><span class='sp2_2'>" + iTimesDown + "</span></div>" +
							"<div class='there3'><span class='sp3'><i class='iconfont'>&#xe69b;</i></span><span class='sp3_3'>" + iCommentNum + "</span></div>" +
							"<div class='there4'><span class='sp4'><i class='iconfont'>&#xe718;</i></span><span class='sp4_4'>" + iTimesShare + "</span></div>" +
							"</div></div>"
					}
                   
				}
				$(".section").html(str);

			}
		});
	}
       datas1();  
         
     var sy, st, dir, flag = false, tdiv;
			$(".section").on("touchstart", function(ev) {
				sy = ev.touches[0].pageY;
				st = $(this).scrollTop();
			})
			$(".section").on("touchmove", function(ev) {
				dir = ev.touches[0].pageY - sy;
				if(dir > 0 && st == 0) {
					if(!flag) {
					    tdiv = $("<div class='tdiv'>loading...</div>").prependTo($(this));
						flag = true;
					}
				}
			})

			$(".section").on("touchend", function(ev) {
				index=$(".border1").index();
				var a=sy-dir;
				if(dir > 50 && st == 0) {
					if(index == 0) {
						var sulr = "http://proxy.e12e.com/?https://fun.html5.qq.com/api/list_2?key=5&limit=8&rt=1&_t=1497877111819&ch=001201";
						datas(sulr);                        
					} else if(index == 1) {
						var sulr = "http://proxy.e12e.com/?https://fun.html5.qq.com/api/list_2?key=5&limit=10&rt=1&_t=1498034647584&ch=881123";
						datas1(sulr);
					
					} else if(index == 2) {
						var sulr = "http://proxy.e12e.com/?https://fun.html5.qq.com/api/list_2?key=4&limit=8&rt=2&_t=1498034736845&ch=881123";
						datas5(sulr);
					} else if(index == 3) {
						var sulr = "http://proxy.e12e.com/?https://fun.html5.qq.com/api/list_2?key=2&limit=11&rt=2&_t=1498034971522&ch=881123";
						datas2(sulr);
					} else if(index == 4) {
						var sulr = "http://proxy.e12e.com/?https://fun.html5.qq.com/api/list_2?key=1&limit=9&rt=2&_t=1498034813841&ch=881123";
						datas4(sulr);
					}
				}
				flag=false;
				$(".tdiv").remove()
			});
        $(".section").on("tap",".content",function(){
          	var surl=$(this).find(".two").attr('id');
            var a=$(this).find(".one").find("img").attr('src');
            var b=$(this).find(".one").find("span").html();
            var c=$(this).find(".two1").find("p").html();
            var d;
            if(!$(this).find(".two2").find("img").attr('src')){
            	d=0;
            }else{
            	d=$(this).find(".two2").find("img").attr('src');
            }
            
            
            var e=$(this).find(".sp1_1").html();
            var f=$(this).find(".sp2_2").html();
            var g=$(this).find(".sp3_3").html();
            var h=$(this).find(".sp4_4").html();
            var n=$(this).find(".shenping2").html();
            var m;
            if (!$(this).find(".two2").find("img").attr('myAttr')) {
            
            	m=0;
            }else{
            	
            		m=$(this).find(".two2").find("img").attr('myAttr');
            }
            console.log(m);
            var arr=[surl,a,b,c,d,e,f,g,h,n,m];
          	sessionStorage.setItem("urlid",arr);
          	$(location).prop('href', 'about.html');
          	
          })
           		var h;
//  		滚动条事件
    		 $(window).scroll(function(){
               h= $("body").scrollTop();
//  			console.log(h);
    			if(h<200){
    				$(".main").css("display","block");
    			}
    			else{
    			$(".main").css("display","none");
    			}
    		})
    	})
    	