const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";

2348163398919


//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "",  /SUHAIL_03_03_09_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzksXG4gICAgICAgIDYwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcwLFxuICAgICAgICA0NixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjIwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODksXG4gICAgICAgIDc2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUzLFxuICAgICAgICAzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NixcbiAgICAgICAgMixcbiAgICAgICAgMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOCxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDExLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMixcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDUyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMixcbiAgICAgICAgMTY4LFxuICAgICAgICA5MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDk3LFxuICAgICAgICAyOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICA3MixcbiAgICAgICAgMTUxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODksXG4gICAgICAgIDU3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY2LFxuICAgICAgICA2NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICA0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MSxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMixcbiAgICAgICAgOTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDgsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImNXZ1ZWRHhwL0drK0hmVmd0YTFnNmdxL3RBM2Z6Mmw2OE8ycFh2RXNsT2M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm9HM3VrV1pMVGdDbUZkcnBBQUV4Y2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmZkM2E1MjktZDA0Zi00YmZhLTkwMzgtMzg1YWIyOTM2YzNiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOSxcbiAgICAgIDEwNixcbiAgICAgIDcyLFxuICAgICAgMjA3LFxuICAgICAgMTIwLFxuICAgICAgMjI1LFxuICAgICAgMTk0LFxuICAgICAgMTk4LFxuICAgICAgNzcsXG4gICAgICA3NixcbiAgICAgIDE2MyxcbiAgICAgIDU1LFxuICAgICAgMjU0LFxuICAgICAgNjksXG4gICAgICAyMjYsXG4gICAgICAxOCxcbiAgICAgIDIyMyxcbiAgICAgIDE2NyxcbiAgICAgIDIzNCxcbiAgICAgIDE1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDUsXG4gICAgICA0MyxcbiAgICAgIDI0NixcbiAgICAgIDE2NyxcbiAgICAgIDI1NCxcbiAgICAgIDE5MixcbiAgICAgIDE1NSxcbiAgICAgIDIwNSxcbiAgICAgIDIzNyxcbiAgICAgIDE0LFxuICAgICAgNzMsXG4gICAgICAxNzcsXG4gICAgICAyMjYsXG4gICAgICAxMjcsXG4gICAgICAxMDIsXG4gICAgICAyNTEsXG4gICAgICA3LFxuICAgICAgMTMzLFxuICAgICAgNjIsXG4gICAgICAxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTRVlWRkI0RVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2MzM5ODkxOTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzNTk5MjIyODU5Nzc4Njo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xpcnl0MEZFSW5XMUxZR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVkFVUDhOT3h3cmtWYzIzMVZTSCtwWlhEVGZXdlZldUd1ZzhnajZOM0lrND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPRlNZaEMvMm04NDVCNG4xSFZPZXczZnArRjBIbDkzRlcxQWMxMUN3YXlkaWVFWlJ6MllQbG9ZWEZaTnF1MittTm1IUjBraWxUL1BXcFJ0NmkrVC9BZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHMnJ1b2VlNHcycUxic0s4Um1LNFdENytJSDlBNHBSSFN3OTVvTnZLTm5tdTZxTDhjcDAvM0NucFQ1a2dXUUtiaEVVbTd0d1ZtWU1yWnN3enVtckVoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTYzMzk4OTE5OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTI0NjIyMVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=/ PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
