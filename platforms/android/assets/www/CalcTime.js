 /* CalcTime.js */ 
 
 $( document ).ready(function() {
	
	setTimeout(calcTime,1000);
 
});

var totalTime = 2999024919000;
function calcTime() 
{ 
	
	var nowtime = new Date().getTime();        //今天的日期(毫秒值)
    var youtime = totalTime-nowtime;//还有多久(毫秒值)
    var seconds = youtime/1000;
    var minutes = Math.floor(seconds/60);
    var hours = Math.floor(minutes/60);
    var days = Math.floor(hours/24);
	var months = Math.floor(days/30);
	var years = Math.floor(months/12);
	
	var Cyear = years;
	var CMonth = months % 12;
    var CDay= days % 30 ;
    var CHour= hours % 24;
    var CMinute= minutes % 60;
    var CSecond= Math.floor(seconds%60);//"%"是取余运算，可以理解为60进一后取余数，然后只要余数。
	
	$("#remainingTime").html(Cyear + "年" + CMonth + "月" + CDay+"天" +"</br>"+ CHour+"时"+CMinute+"分"+CSecond+"秒"); 
	
	setTimeout(calcTime,1000);
}
