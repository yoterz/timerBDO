const Discord = require('discord.js')
const bot = new Discord.Client()
bot.login(process.env.BOT_TOKEN)

bot.on("ready",() => {
    console.log('Ready...')
        
})


bot.on("message", (msg) => {
    if (msg.content === "aaa"){
        timestart()
        
        msg.channel.send("ปัจจุบัน"+countz)
        setcount()
        msg.channel.send(utcDate1)
        msg.channel.send("เวลาเซท"+timez)
        count = timez - countz
        msg.channel.send("เวลานับ"+count)
        countdown(count)
    }

  })
  
function timestart(){
currentUtcTime = new Date(); // This is in UTC
thTimeZone = new Date(currentUtcTime.toLocaleString('en-US', { timeZone: 'Asia/Bangkok' }))
    
countz = new Date(currentUtcTime.toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })).getTime()

day= thTimeZone.getDay()   
d = thTimeZone.getDate()
month = thTimeZone.getMonth()
year = thTimeZone.getFullYear()
h = thTimeZone.getHours()
m = thTimeZone.getMinutes()   
s = thTimeZone.getSeconds()
days = new Array('Sun', 'Monร์', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat')
months = new Array('Jan', 'feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec')

}

 function setcount(settime){
 var settime = [year , month ,d , 14 , 40 , s]     
 utcDate1 = new Date(settime[0],settime[1],settime[2],settime[3],settime[4],settime[5]) //เวลาที่ตั้งค่ามา
 timez = new Date(utcDate1).getTime() //แปลงเป็นmsec

 //var countz = new Date().getTime() //เวลาปัจจุบัน
 currentUtcTime = new Date(); // This is in UTC
 countz = new Date(currentUtcTime.toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })).getTime();

 }

function countdown(count) {
// ดึงเวลาปัจจุบัน+เวลาที่จะนับถอยหลัง 
var currentUtcTimez = new Date(); // This is in UTC
var countDownDatez = new Date(currentUtcTimez.toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })).getTime();
var countDownDate =  countDownDatez + count
//console.log('countdown =  '+countDownDate)

// อัพเดท เรียกใช้ทุก1 วินาที
var x = setInterval(function() {

    // ดึงเวลาปัจจุบัน
    //var now = new Date().getTime();
    var currentUtcTimez = new Date();
    var now = new Date(currentUtcTimez.toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })).getTime();
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
