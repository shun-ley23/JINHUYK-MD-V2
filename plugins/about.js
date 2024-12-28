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



const config = require('../config');


const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["darrell"],
    react: "🧠",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let madeMenu = `━━━━━━━━━━━━━━━━━━━━━━━━

*👋 HELLO ${pushname}*\n\n *I AM JINHUYK-MD-V2*\n\n
I am  WhatsApp Based Multi Device Bot Created By Emmanuel  Sasaki from congo-brazzaville.\nMy sole purpose is to remove the burden or cost of purchusing data bundle to download Songs, Apps, Videos & Movies by  using whatsapp  bundles.
\n\n *For More Visit*: https://ssk-campagny-tech-lwigvv2.gamma.site/
━━━━━━━━━━━━━━━━━━━━━━━━

> *SOURCE CODE* : https://github.com/KangJinhuyk/JINHUYK-MD-V2

> *FOLLOW OWNER* :https://github.com/KangJinhuyk/

> *OWNER'S WHATSAPP* : https://wa.me/242067274660/?text=Jinhuyk+Fan+Here

> *maintained by* :
https://wa.me//221768649590?text=Arthur+Fan+Here

> *SUPPORT CHANNEL* : https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41

> *FOLLOW INSTAGRAM* :https://instagram.com/sasaki.242

> *FOLLOW OWNER* :https://github.com/KangJinhuyk/

 *RELEASE DATE* - *25 December 2024*
 
> *KANG JINHUYK*

━━━━━━━━━━━━━━━━━━━━━━━━
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
