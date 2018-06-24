const Discord = require('discord.js')
const bot = new Discord.Client()
bot.login(process.env.BOT_TOKEN)

bot.on("ready",() => {
    console.log('Ready...')
        
})


bot.on("message", (msg) => {
    if (msg.content === "aaa"){
        timestart()
        msg.channel.send(thTimeZone)
        msg.channel.send(h+' '+m)
       
    }

  })
  
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
