/* # Exclusively from danuma project 
# Do not use this fore any commercial thing
# If you abuse thais bot we wil kick you from bot 
# Do not edit (Respect to the Devaoloper) 
# All rights reserved Â©Lasiya @lasiya99X t.me/lasiya99X
# Get more about devaoloper https://lasiya.ml
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const Api = (Config.LOL_API_KEY)


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'zgglow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage();

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/textprome/greenneon?apikey=${Api}&text=${match[1].replace(/Ã–/g, "%C3%96").replace(/Ã¶/g, "%C3%B6").replace(/Ã¼/g, "%C3%BC").replace(/Ãœ/g, "%C3%9C").replace(/Äž/g, "%C4%9E").replace(/ÄŸ/g, "%C4%9F").replace(/ÅŸ/g, "%C5%9F").replace(/Åž/g, "%C5%9E").replace(/Ã§/g, "%C3%A7").replace(/Ã‡/g, "%C3%87").replace(/Ä±/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/Ä°/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by X-Troid ☄️' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'zgglow ?(.*)', fromMe: false,deleteCommand: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage();

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/textprome/greenneon?apikey=${Api}&text=${match[1].replace(/Ã–/g, "%C3%96").replace(/Ã¶/g, "%C3%B6").replace(/Ã¼/g, "%C3%BC").replace(/Ãœ/g, "%C3%9C").replace(/Äž/g, "%C4%9E").replace(/ÄŸ/g, "%C4%9F").replace(/ÅŸ/g, "%C5%9F").replace(/Åž/g, "%C5%9E").replace(/Ã§/g, "%C3%A7").replace(/Ã‡/g, "%C3%87").replace(/Ä±/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/Ä°/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by X-Troid ☄️' })

    }));
    
}
