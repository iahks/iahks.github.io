function ShowTime(){
    var nowDate=new Date();
    var yyyy=nowDate.getFullYear();
    var mm=nowDate.getMonth()+1;
    var dd=nowDate.getDate();
    var hour=nowDate.getHours();
    var min=nowDate.getMinutes();
    var sec=nowDate.getSeconds();
    document.getElementById('showbox').innerHTML ='現在時間:'+mm+'-'+dd+'-'+yyyy+' '+hour+':'+min+':'+sec;
    setTimeout('ShowTime()',1000);
    }
ShowTime();
