function startTime() {
    var today = new Date();
    var h = today.getHours();
    var min = today.getMinutes();
    var s = today.getSeconds();
    var d = today.getDay();
    var mon = today.getMonth();
    var y = today.getFullYear();
    min = checkTime(min);
    s = checkTime(s);
    
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    document.getElementById('_nav_1').innerHTML =
    h + ":" + min + ":" + s + " " + " " + days[d] + " "+ months[mon] + " "+ y;
    var t = setTimeout(startTime, 500);
    }
    function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
    }