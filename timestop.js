var strdt = "202205231415";
var now = new Date();

year = now.getFullYear();
month = now.getMonth()+1;
if((month+"").length < 2){
    month="0"+ month;
}
date = now.getDate();
if((date+"").length < 2){
    date="0"+ date;
}
hour = now.getHours();
if((hour+"").length < 2){
    hour="0"+ hour;      
}
mnt = now.getMinutes();
if((mnt+"").length < 2){
    mnt = "0" + mnt;
}
today = year + "" + month + "" + date + "" + hour + "" + mnt;

if ((eval(today)<eval(strdt))){
    alert("아직 시작시간이 아닙니다.");
    window.location.href = "about:blank"
}