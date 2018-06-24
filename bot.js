const Discord = require('discord.js')
const bot = new Discord.Client()
bot.login(process.env.BOT_TOKEN)
bot.on("ready",() => {
    console.log('Ready...')
    chktime()
    
})


bot.on("message", (msg) => {
    if (msg.content === "aaa"){
        msg.channel.send('```autohotkey\n '+'           เวลากลางคืน\n'+'        02.40   -   03.20\n'+'        06.40   -   07.20\n'
        +'        10.40   -   11.20\n'+'        14.40   -   15.20\n'+'        18.40   -   19.20\n'+'        22.40   -   23.20'+'``` ')
     bot.user.setUsername('Timer BDO')
        msg.channel.send(h+' '+m)
        msg.channel.send(hh+' '+mm)
    }

  })


 function chktime(){
    timestart()

    if (h == 0 || h == 1|| (h == 2 && m < 40)){
        var settime = [year , month ,d , 2 , 40 , s]      //เซทเวลาสิ้นสุดการนับ
        setgame = 'Night'
    }
    if ((h == 2 && m > 39) || (h == 3 && m < 20)){
        var settime = [year , month ,d , 3 , 20 , s]      //เซทเวลาสิ้นสุดการนับ
        setgame = 'Daytime'
    }
    if ((h == 3 && m > 19) || h == 4 || h == 5 || (h == 6 && m < 40)){
        var settime = [year , month ,d , 6 , 40 , s]      //เซทเวลาสิ้นสุดการนับ
        setgame = 'Night'
    }
    if ((h == 6 && m > 39) || (h == 7 && m < 20)){
        var settime = [year , month ,d , 7 , 20 , s]      //เซทเวลาสิ้นสุดการนับ
        setgame = 'Daytime'
    }
    if ((h == 7 && m > 19) || h == 8 || h == 9 || (h == 10 && m < 40)){
        var settime = [year , month ,d , 10 , 40 , s]      //เซทเวลาสิ้นสุดการนับ
        setgame = 'Night'
    }
    if ((h == 10 && m > 39) || (h == 11 && m < 20)){
        var settime = [year , month ,d , 11 , 20 , s]      //เซทเวลาสิ้นสุดการนับ
        setgame = 'Daytime'
    }
    if ((h == 11 && m > 19) || h == 12 || h == 13 || (h == 14 && m < 40)){
        var settime = [year , month ,d , 14 , 40 , s]      //เซทเวลาสิ้นสุดการนับ
        setgame = 'Night'
    }
    if ((h == 14 && m > 39) || (h == 15 && m < 20)){
        var settime = [year , month ,d , 15 , 20 , s]      //เซทเวลาสิ้นสุดการนับ
        setgame = 'Daytime'
    }
    if ((h == 15 && m > 19) || h == 16 || h == 17 || (h == 18 && m < 40)){
        var settime = [year , month ,d , 18 , 40 , s]      //เซทเวลาสิ้นสุดการนับ
        setgame = 'Night'
    }
    if ((h == 18 && m > 39) || (h == 19 && m < 20)){
        var settime = [year , month ,d , 19 , 20 , s]      //เซทเวลาสิ้นสุดการนับ
        setgame = 'Daytime'
    }
    if ((h == 19 && m > 19) || h == 20 || h == 21 || (h == 22 && m < 40)){
        var settime = [year , month ,d , 22 , 40 , s]      //เซทเวลาสิ้นสุดการนับ
        setgame = 'Night'
    }
    if ((h == 22 && m > 39) || (h == 23 && m < 20)){
        var settime = [year , month ,d , 23 , 20 , s]      //เซทเวลาสิ้นสุดการนับ
        setgame = 'Daytime'
    }
    if ((h == 23 && m >19) || (h == 23 && m < 60)){
        var settime = [year , month ,d+1 , 2 , 40 , s]      //เซทเวลาสิ้นสุดการนับ
        setgame = 'Night'
    }
    
    setcount(settime)
 }

 function setcount(settime){
     
 var utcDate1 = new Date(settime[0],settime[1],settime[2],settime[3],settime[4],settime[5]) //เวลาที่ตั้งค่ามา
 var timez = new Date(utcDate1).getTime() //แปลงเป็นmsec

 //var countz = new Date().getTime() //เวลาปัจจุบัน
 var currentUtcTime = new Date(); // This is in UTC
 var countz = new Date(currentUtcTime.toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })).getTime();

 var count = timez - countz //เวลาตั้ง - เวลาจิง

 countdown(count)
 }

function timestart(){
var currentUtcTime = new Date(); // This is in UTC
var thTimeZone = new Date(currentUtcTime.toLocaleString('en-US', { timeZone: 'Asia/Bangkok' }));

day= thTimeZone.getDay()   
d = thTimeZone.getDate();
month = thTimeZone.getMonth();
year = thTimeZone.getFullYear();
h = thTimeZone.getHours()
m = thTimeZone.getMinutes()   
s = thTimeZone.getSeconds();
days = new Array('Sun', 'Monร์', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');    
months = new Array('Jan', 'feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');

}


function countdown(count) {
// ดึงเวลาปัจจุบัน+เวลาที่จะนับถอยหลัง 
var currentUtcTime = new Date(); // This is in UTC
var countDownDate = new Date(currentUtcTime.toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })).getTime()+count;
//console.log('countdown =  '+countDownDate)

// อัพเดท เรียกใช้ทุก1 วินาที
var x = setInterval(function() {

    // ดึงเวลาปัจจุบัน
   // var now = new Date().getTime();
    var currentUtcTime = new Date(); // This is in UTC
    var now = new Date(currentUtcTime.toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })).getTime();
    // เวลาที่จถึง-เวลาปัจจุบัน
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    hh = hours
    mm = minutes
    // แสดง วันเวลา
    //console.log(distance)
    bot.user.setGame(setgame+' in '+hours + "h "+ minutes+ "m ")
   
    
    // นับถึง1หรือน้อยกว่า0 แสดงข้อความ 
    if (distance < 1000) {
        clearInterval(x);
        chktime()
    	
    }
    
}, 1000);
}