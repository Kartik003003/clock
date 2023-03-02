function rtc(){
    var realtime = new Date();

    var hour=realtime.getHours();
    var min=realtime.getMinutes();
    var second=realtime.getSeconds();

    var ampm = (hour<12) ? "AM" : "PM";
    hour=(hour>12)? hour-12:hour;
    
    hour=("0"+hour).slice(-2);
    min=("0"+min).slice(-2);
    second=("0"+second).slice(-2);

    document.getElementById('clock').innerHTML=hour+" : "+ min+" : "+second+" "+ampm;
     
    var t=setTimeout(rtc,500);

    console.log("Clock is running");

}
