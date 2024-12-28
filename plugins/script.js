/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ⭐ＰＲＯＪＥＣＴ ＮＡＭＥ:
    ＪＩＮＨＵＹＫ-Ｖ２ ＷＨＡＴＳＡＰＰ ＭＤ ＢＯＴ
    
    ⭐ＤＥＶＥＬＯＰＥＲ
     ＫＡＮＧ ＪＩＮＨＵＹＫ 
     
    ⭐ ＭＹ ＴＥＡＭ
     ＳＡＳＡＫＩ ＣＯＭＰＡＧＮＩＥ
     
    ⭐ ＯＵＲ ＷＥＢＳＩＴＥ
     https://github.com/KangJinhuyk/JINHUYK-MD-V2

© ＴＲＹ ＤＥＣＲＹＰＴＩＮＧ ＩＦ ＹＯＵ ＣＡＮ⚠

╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/






const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","Kang"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬*
 
 *ONCE AGAIN THANK YOU FOR CHOOSING JINHUYK-MD-V2 AS ONE OF YOUR DAILY BOT I HOPE IT WILL MAKE THINGS EASIER FOR YOU IN YOUR WHATSAPP BROWSER*
 
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*GITHUB:* *https://github.com/KangJinhuyk/JINHUYK-MD-V2*
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *SUPPORT GROUP:* https://chat.whatsapp.com/IdB2EfQiNlKBekQrigN9m9
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*SUPPORT CHANNEL:* https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *DEVELOPER NUMBER:* *https://wa.me/242067274660?text=*
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363321386877609@newsletter',
      newsletterName: "JINHUYK-MD-V2",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'JINHUYK-MD-V2',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://i.postimg.cc/cLL0MWyT/JINHUYK-MD-V2.jpg" ,
thumbnailUrl: "https://i.postimg.cc/prRgWQPk/JINHUYK-BOT1.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
