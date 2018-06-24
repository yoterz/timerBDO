const Discord = require('discord.js')
const bot = new Discord.Client()
bot.login(process.env.BOT_TOKEN)

bot.on("ready",() => {
    console.log('Ready...')
        
})


bot.on("message", (msg) => {
    if (msg.content === "aaa"){
        timestart()
        msg.channel.send(utcDate1)
        msg.channel.send(countz)
        msg.channel.send(count)
       
    }

  })
  
function timestart(){
currentUtcTime = new Date(); // This is in UTC
thTimeZone = new Date(currentUtcTime.toLocaleString('en-US', { timeZone: 'Asia/Bangkok' }))

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
 var settime = [year , month ,d , 23 , 20 , s]     
 utcDate1 = new Date(settime[0],settime[1],settime[2],settime[3],settime[4],settime[5]) //เวลาที่ตั้งค่ามา
 timez = new Date(utcDate1).getTime() //แปลงเป็นmsec

 //var countz = new Date().getTime() //เวลาปัจจุบัน
 currentUtcTime = new Date(); // This is in UTC
 countz = new Date(currentUtcTime.toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })).getTime();

 count = timez - countz //เวลาตั้ง - เวลาจิง

 }
