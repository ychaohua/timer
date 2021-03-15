	var se, t, m = 0, h = 0, s = 0, ss = 1, n1 = 0, n2 = 0;
	var FixedSpeed;//定义一个固定速度用来记录速度
	function settime(a){
		if(a<10)
			a = "0"+a;
		return a;
	}
	function second(){					//计时函数
			if((ss%100)==0){s+=1;ss=1;}
			if(s>0 && (s%60)==0){m+=1;s=0;}
			if(m>0 && (m%60)==0){h+=1;m=0;}
		// t = h+"时"+m+"分"+s+"秒"+ss+"毫秒";
		    var showh = settime(h);
            var showm = settime(m);
            var shows = settime(s);
			t = showh+":"+showm+":"+shows;
			document.getElementById("showtime").innerHTML=t;
			ss+=1;
	} 
	function startclock(){ 
			var x=1; n1+=x;//让n1获取左边按键的点击数
			if(n2==0)
			{
				if(n1%2==1)//单数计时
				{
					se=setInterval("second()", 10);//每10毫秒调用一次second（）函数
			        document.getElementById("Start").innerHTML="Pause";
				}
				else if(n1%2==0)//双数暂停
				{
					clearInterval(se);
				    document.getElementById("Start").innerHTML="Continue";
				}
			}
			else if(n2>0)//当Stop键被点击或者连续点击时，Reset功能成立
			{
				document.getElementById("Start").innerHTML="Start";
				document.getElementById("showtime").innerHTML="00:00:00";
				document.getElementById("speed").innerHTML="";
				n2 = 0;//有关记录归零，避免对后续操作产生影响
				n1 = 0;
			}
			
	}
	//function pauseclock(){ clearInterval(se);}
	function stopclock(){	 //结束和计算速度的函数
		var y=1; n2+=y;//让n2获取右边按键的点击数
		clearInterval(se); 
		if(n2==1)//输出速度
		{
			if(h==0 && m==0 && s==0 && ss==1)//特殊情况，没有计时就直接点击Stop键（ss是从1开始的，不是0）
			{
				var speed=0;
				FixedSpeed = speed;//记录速度 
				alert("错误操作，没有计时，请按“Reset”键重新开始");
			}
			else//正常情况
			{
				var wordCount = document.getElementById("wordCount").innerHTML;
				var speed = Math.round(wordCount/(h*60+m+s/60+ss/6000));
			    FixedSpeed = speed;//记录速度
			}
			document.getElementById("speed").innerHTML=speed + "&#160;WPM";//WPM是每分钟多少个单词
		}
		else if(n2>1)//避免当Stop键被重复点击时，输出一个非正常值,所以直接输出一个旧值
		{
			if(FixedSpeed==0) {alert("错误操作，没有计时，请按“Reset”键重新开始");}
			document.getElementById("speed").innerHTML=FixedSpeed + "&#160;WPM";
	    }
		ss=1;m=h=s=0;     //时间归零
		document.getElementById("Start").innerHTML="Reset";//重新改变左边按键的功能
			
	}
	
