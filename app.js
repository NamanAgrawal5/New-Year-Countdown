const  Daysel  = document.getElementById('Days');
const hoursel = document.getElementById('hours');
const  minsel = document.getElementById('mins');
const secsel = document.getElementById('secs');



const end="1 Jan 2023";
function countdown(){
    const newYearsDate=new Date(end);
    const currentdate=new Date();
    var seconds=(newYearsDate-currentdate)/1000;
    var mins=Math.ceil(seconds/60);
    var hours=Math.floor(mins/60);
    var days=Math.ceil(hours/24);
    seconds=Math.ceil(seconds%60);
    mins=mins%60;
    hours=hours%24;
    Daysel.innerHTML=days;
    hoursel.innerHTML=formatTime(hours);
    minsel.innerHTML=formatTime(mins);
    secsel.innerHTML=formatTime(seconds);

}
function formatTime(time){
    // return time < 10 ? :time;
    return time;
}
countdown();
setInterval(countdown,1000);
