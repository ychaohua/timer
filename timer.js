	/*var se, t, m = 0, h = 0, s = 0, ss = 1, n1 = 0, n2 = 0;
	var FixedSpeed;
	function settime(a){
		if(a<10)
			a = "0"+a;
		return a;
	}
	function second(){
			if((ss%100)==0){s+=1;ss=1;}
			if(s>0 && (s%60)==0){m+=1;s=0;}
			if(m>0 && (m%60)==0){h+=1;m=0;}

		    var showh = settime(h);
	var showm = settime(m);
	var shows = settime(s);
			t = showh+":"+showm+":"+shows;
			document.getElementById("showTime").innerHTML=t;
			ss+=1;
	}
	function startclock(){
			var x=1; n1+=x;
			if(n2==0)
			{
				if(n1%2==1)
				{
					se=setInterval("second()", 10);
			document.getElementById("start").innerHTML="Pause";
				}
				else if(n1%2==0)
				{
					clearInterval(se);
				document.getElementById("start").innerHTML="Continue";
				}
			}
			else if(n2>0)
			{
				document.getElementById("start").innerHTML="Start";
				document.getElementById("showTime").innerHTML="00:00:00";
				document.getElementById("speed").innerHTML="";
				n2 = 0;
				n1 = 0;
			}

	}

	function stopclock(){
		var y=1; n2+=y;
		clearInterval(se);
		if(n2==1)
		{
			if(h==0 && m==0 && s==0 && ss==1)
			{
				var speed=0;
				FixedSpeed = speed;
				alert("Please first reset and then start again.");
			}
			else
			{
				var wordCount = document.getElementById("wordCount").innerHTML;
				var speed = Math.round(wordCount/(h*60+m+s/60+ss/6000));
				FixedSpeed = speed;
			}
			document.getElementById("speed").innerHTML=speed + "&#160;wpm";
		}
		else if(n2>1)
		{
			if(FixedSpeed==0) {alert("Please first reset and then start again.");}
			document.getElementById("speed").innerHTML=FixedSpeed + "&#160;wpm";
		}
		ss=1;m=h=s=0;
		document.getElementById("start").innerHTML="Reset";

	}*/




function settime(a) {
		if(a<10)
		a = "0"+a;
		return a;
	}
	h = 0;
	m = 0;
	s = 0;

function launch() {
		var showh = settime(h);
		var showm = settime(m);
		var shows = settime(s);
		document.getElementById("Timer").innerHTML=showh+":"+showm+":"+shows;

		s++;
		if(s == 60)
			{
				s = 0;
				m++;
			}
		if(m == 60)
			{
				m = 0;
				h++;
			}

		t = setTimeout("launch()",1000);
	}
		window.onload = launch;

function endtime() {
		clearTimeout(t);
	}
