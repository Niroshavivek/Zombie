$(function(){
	

var pp=$('#mann').position();
						var eee=pp.left;
						console.log(eee);
						var p=$('#zombie').position();
						var eeee=p.left;
						console.log(eeee);
var m=0;
var ee=0;
var ff=0;
var nn=0;
var we=0;
var arr=[];
var mcount=0;
var zcount=0;
var restart_btn=$("#restart_btn");
var over=$("#over");
//dice moving
	var dice = $("#dice");
	dice.click(function(){
		$(".wrap").append("<div id='dice_mask'></div>");//add mask
		dice.attr("class","dice");//After clearing the last points animation
		dice.css('cursor','default');
		var num = Math.floor(Math.random()*6+1);//random num 1-6
		dice.animate({left: '+2px'}, 100,function(){
			dice.addClass("dice_t");
		}).delay(10).animate({top:'-2px'},100,function(){
			dice.removeClass("dice_t").addClass("dice_s");
		}).delay(10).animate({opacity: 'show'},600,function(){
			dice.removeClass("dice_s").addClass("dice_e");
		}).delay(10).animate({left:'-2px',top:'2px'},500,function(){
			dice.removeClass("dice_e").addClass("dice_"+num);
			$("#result").html("Your throwing points are<span>"+num+"</span>");
			dice.css('cursor','pointer');
			$("#dice_mask").remove();
//man moving
		if(m==0)
		{
			
			for(var i=0;i<num;i++)
			{
			$("#mann").css('background-image', 'url("./images/man.gif")');
			a();
			function a(){
			$("#mann").animate({
				left:"+=30px"
				},'2000000',function(){
					ee++;
					if (ee==num) {
						h();
					ee=0;
			}
					
				});
	
			}
			}
		}		
		function h( ){
			$("#mann").css('background-image', 'url("./images/man1.png")');
			m=1;
			$("#m").text("For zombie");
		}
///////////////////////////////////////////////////////////////////////////////////		
	
		if(m==1)
		{	
			
				for(var i=0;i<num;i++)
				{
					$("#zombie").css('background-image', 'url("./images/zom.gif")');
					$("#zombie").animate({
					left:"+=30px"
					},'200',function(){
						var pp=$('#mann').position();
						var eee=pp.left-60;
						console.log(eee);
						var p=$('#zombie').position();
						var eeee=p.left;
						console.log(eeee);
						if (eee==eeee) {
							hh1();
							$("#zombie").stop();
						}
					ff++;
					if (ff==num) {
						hh();
						ff=0;
					}
					});
				}
			}
		
	
////////////////////////////////////////////
		function hh( ){
			$("#zombie").css('background-image', 'url("./images/zom1.png")');
			m=0;
		}
		function hh1(){
			stop_the_game();
		}
		});

		function stop_the_game(){
		restart_btn.show();
		over.show();
	}
		restart_btn.click(function(){
		location.reload();
	});
});
//dice moving














});

