/* # Exclusively from danuma project 
# Do not use this fore any commercial thing
# If you abuse thais bot we wil kick you from bot 
# Do not edit (Respect to the Devaoloper) 
# All rights reserved ©Lasiya @lasiya99X t.me/lasiya99X
# Get more about devaoloper https://lasiya.ml
*/

const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('zpack');


if (Config.WORKTYPE == 'private') {
  if (Config.LANG == 'EN') {

    Asena.addCommand({pattern: 'zpack', fromMe: true, desc: Lang.MAIN_INFO}, (async (message, match) => {    

                await message.sendMessage('🧪 command👉🏻 *.zbt*\n📃 guide👉🏻Make battlefield 4 logo\n\n🧪 command👉 *.zcf*\n📃 guide👉🏻 Make hart coffee cup logo\n\n🧪 command👉 *.zccf*\n📃 guide👉 Make coffee cup logo\n\n🧪 command👉🏻 *.zlogo*\n📃 guide👉🏻 Make green black logo\n\n🧪 command👉🏻 *.zsky*\n📃 guide👉🏻 make sky shadow logo\n\n🧪 command👉🏻 *.zglow*\n📃 guide👉🏻 Make neone colour logo\n\n🧪 command👉🏻 *.zgglow*\n📃 guide👉🏻 Make stylish neone logo\n\n🧪 command👉🏻 *.zharry*\n📃 guide👉🏻 Make harry potter efect logo\n\n🧪 command👉🏻 *.zlove*\n📃 guide👉🏻 Make lovely name card\n\n🧪 command👉🏻 *.zmug*\n📃 guide👉🏻 Make name printed mug logo\n\n🧪 command👉🏻 *.zpep*\n📃 guide👉🏻 Make paer strip on grass logo\n\n🧪 command👉🏻 *.zpubg*\n📃 guide👉🏻 Make pubg mobile logo\n\n🧪 command👉🏻 *.zttok*\n📃 guide👉🏻 Make tiktok efect logo\n\n🧪 command👉🏻 *.zwood*\n📃 guide👉🏻 Make name on wood block logo\n\n🧪 command👉🏻 *.zphub*\n📃 guide👉🏻 Make pornhub style Logo');

    }));
  },
    if (Config.LANG == 'si') {

    Asena.addCommand({pattern: 'zpack', fromMe: true, desc: Lang.MAIN_INFO}, (async (message, match) => {    

                await message.sendMessage('si🧪 command👉🏻 *.zbt*\n📃 guide👉🏻Make battlefield 4 logo\n\n🧪 command👉 *.zcf*\n📃 guide👉🏻 Make hart coffee cup logo\n\n🧪 command👉 *.zccf*\n📃 guide👉 Make coffee cup logo\n\n🧪 command👉🏻 *.zlogo*\n📃 guide👉🏻 Make green black logo\n\n🧪 command👉🏻 *.zsky*\n📃 guide👉🏻 make sky shadow logo\n\n🧪 command👉🏻 *.zglow*\n📃 guide👉🏻 Make neone colour logo\n\n🧪 command👉🏻 *.zgglow*\n📃 guide👉🏻 Make stylish neone logo\n\n🧪 command👉🏻 *.zharry*\n📃 guide👉🏻 Make harry potter efect logo\n\n🧪 command👉🏻 *.zlove*\n📃 guide👉🏻 Make lovely name card\n\n🧪 command👉🏻 *.zmug*\n📃 guide👉🏻 Make name printed mug logo\n\n🧪 command👉🏻 *.zpep*\n📃 guide👉🏻 Make paer strip on grass logo\n\n🧪 command👉🏻 *.zpubg*\n📃 guide👉🏻 Make pubg mobile logo\n\n🧪 command👉🏻 *.zttok*\n📃 guide👉🏻 Make tiktok efect logo\n\n🧪 command👉🏻 *.zwood*\n📃 guide👉🏻 Make name on wood block logo\n\n🧪 command👉🏻 *.zphub*\n📃 guide👉🏻 Make pornhub style Logo');

    }));
  }
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'xmedia', fromMe: false, desc: Lang.MAIN_INFO}, (async (message, match) => {    

                await message.sendMessage('h');

    }));
}
