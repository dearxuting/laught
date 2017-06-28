$(function(){
	$(".header1 span").on("tap",function(){
		$(location).prop('href', 'video.html');
	})
	var urlid=[];
	urlid= sessionStorage.getItem("urlid").split(',');
	var Ifurl="http://proxy.e12e.com/?https://fun.html5.qq.com/api/getcomment_2?&size=12&_t=1498007720253&ch=881123"
	var str="";
	var str1="";
	console.log(urlid)
	if(urlid[4]==0){
		 str = "<div class='content'><div class='one'><img src=" +
							urlid[1] + " align='absmiddle'/><span>" +
							urlid[2] + "</span></div><div class='two'><div class='two1'><p>" +
							urlid[3] + "</p></div></div>" +
							"<div class='there'>" +
							"<div class='there1'><span class='sp1'><i class='iconfont'>&#xe6af;</i></span><span class='sp1_1'>" + urlid[5] + "</span></div>" +
							"<div class='there2'><span class='sp2'><i class='iconfont'>&#xe69c;</i></span><span class='sp2_2'>" + urlid[6] + "</span></div>" +
							"<div class='there3'><span class='sp3'><i class='iconfont'>&#xe69b;</i></span><span class='sp3_3'>" + urlid[7] + "</span></div>" +
							"<div class='there4'><span class='sp4'><i class='iconfont'>&#xe718;</i></span><span class='sp4_4'>" + urlid[8] + "</span></div>" +
							"</div></div>"
	}else{
		 str = "<div class='content'><div class='one'><img src=" +
							urlid[1] + " align='absmiddle'/><span>" +
							urlid[2] + "</span></div><div class='two'><div class='two1'><p>" +
							urlid[3] + "</p></div><div class='two2'><img src=" +
							urlid[4]+ " /></div></div>" +
							"<div class='there'>" +
							"<div class='there1'><span class='sp1'><i class='iconfont'>&#xe6af;</i></span><span class='sp1_1'>" + urlid[5] + "</span></div>" +
							"<div class='there2'><span class='sp2'><i class='iconfont'>&#xe69c;</i></span><span class='sp2_2'>" + urlid[6] + "</span></div>" +
							"<div class='there3'><span class='sp3'><i class='iconfont'>&#xe69b;</i></span><span class='sp3_3'>" + urlid[7] + "</span></div>" +
							"<div class='there4'><span class='sp4'><i class='iconfont'>&#xe718;</i></span><span class='sp4_4'>" + urlid[8] + "</span></div>" +
							"</div></div>"
							
	}

	

	$.get(Ifurl,{id: urlid[0]},function(data){
		var obj = JSON.parse(data);
		var res=obj.commonComment;
		var len=obj.commonComment.length;
		console.log(len)
		var str2="";
		var str3="";
		var str4="";
		var res1=obj.wonderComment
		if(len>0){
				for(var i=0;i<len;i++){
				var comment1=res[i].comment;//评论内容
				var referUser=res[i].referUser;//回复评论用户
				var userName=res[i].userName;//评论用户
				var userFaceIcon=res[i].userFaceIcon;//评论用户头像
				var referComment=res[i].referComment//回复评论内容
				var praiseNum=res[i].praiseNum//点赞数
				if(!referUser){
					str2+="<li>"+
				"<p class='yonghu'><img src="+userFaceIcon+" align='center'/><span>"+userName+"</span><span class='zan'>赞"+praiseNum+"</span></p>"+
				"<p class='neirong'>"+ comment1+"<p>"+
				"<time>06-04 </time>"+
				"</li>"
				}else{
					str2+="<li>"+
				"<p class='yonghu'><img src="+userFaceIcon+" align='center'/><span>"+userName+"</span><span class='zan'>赞"+praiseNum+"</span></p>"+
				"<p class='neirong'>"+ comment1+"<span class='huif'>"+referUser+'&nbsp;:&nbsp;'+ referComment+"</span><p>"+
				"<time>06-04 </time>"+
				"</li>"
				}
				
			}	
			
			if(res1!=null){
					for(var i=0;i<res1.length;i++){
						 var acomment=res1[i].comment;//内容
						 var auserFaceIcon=res1[i].userFaceIcon;//头像
						 var apraiseNum=res1[i].praiseNum;//赞
						 var auserName=res1[i].userName;//名字
						str4+="<li>"+
						 "<p class='yonghu'><img src="+auserFaceIcon+" align='center' /><span class='yhname'>"+auserName+"</span><span class='zan'>赞"+apraiseNum+"</span></p>"+
						 "<p class='neirong'>"+acomment+"</p>"+
						 "<time>06-04</time>"
						"<li>"
					}
					str3="<ul class='shengp'><p class='spl_title'>神评论</p>"+str4+"</ul>";
				}else{
					
				}
			   str1="<div class='comment'>"+str3+"<ul class='xinp'><p class='xxpl_title'>新鲜评论</p>"+str2+"</ul></div>"
			
			
		}
		
		$(".section").html(str+str1);
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

     $(".section").on("tap",".sp2",function(){
     	m++
     	if(m==1){
     		$(this).find("i").addClass("color2");
     		var con1=parseInt($(this).next().text())+1;
     		$(this).next().html(con1);
     		if(n==1){
     			var con=parseInt($(this).parent().prev().find(".sp1_1").html())-1;
     			$(this).parent().prev().find(".sp1_1").html(parseInt(con));
     			$(this).parent().prev().find("i").removeClass("color1");
     			n=0;
     		}
     	}else if(m==2){
     		$(this).find("i").removeClass("color2");
     		var con1=parseInt($(this).next().html())-1;
     		$(this).next().html(con1)
     		m=0;
     	}

     });
   $(".section").on("tap",".two2","img",function(){
		if(urlid[10]==0){
		

		}else{
			$(this).replaceWith("<video src="+urlid[10]+" autoplay='autoplay' controls='controls'></video>");
		}
	})
});