import { pickRandom} from './lib/other-function.js'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import { watchFile, unwatchFile } from 'fs'
import fs from "fs"
import moment from 'moment-timezone'
/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
let wibm = moment.tz('Asia/Jakarta').format('mm')
let wibs = moment.tz('Asia/Jakarta').format('ss')
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`    
let d = new Date(new Date + 3600000)
let locale = 'id'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
//TIME
global.waktu = `${date}`
global.namabot = '⫹⫺ ᴢʏᴋᴏʙᴏᴛᴢ ᴍᴅ'
global.v = '-'   
global.botdate = `⫹⫺ DATE: ${week} ${date}\n⫹⫺ TIME: ${wktuwib}`
global.bottime = `T I M E : ${wktuwib}`
// Sticker WM
global.packname = `☂︎ ᴄʀᴇᴀᴛᴇ ʙʏ ᴢʏᴋᴏ`
global.author = `© 𝟸𝟶𝟸𝟷 - 𝟸𝟶𝟸𝟹`

/* ===========Hiasan=========== */
let htjava = pickRandom(["乂", "❏", "⫹⫺", "⎔", "✦", "⭔", "⬟"])
let pmenus = pickRandom(["乂", "◈", "➭", "ଓ", "⟆•", "⳻", "•", "↬", "◈", "⭑", "ᯬ", "◉", "᭻", "»", "〆", "々", "✗", "♪"])
global.eror = "_sedang error _"
global.lopr = "🅟"
global.lolm = "Ⓛ"
global.dmenut = htjava + "───『"
global.dmenub = "│" + pmenus
global.dmenub2 = "│" + pmenus
global.dmenuf = "╰━━━━━━━━┈─◂"
global.cmenut = htjava + "───『"
global.cmenuh = "』───" + htjava
global.cmenub = "│" + pmenus
global.cmenuf = "╰━━━━━━━━┈─◂"
global.cmenua = "\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     "
global.dashmenu = "✧────···[ *Dashboard* ]···────✧"
global.pmenus = pickRandom(["乂", "◈", "➭", "ଓ", "⟆•", "⳻", "•", "↬", "◈", "⭑", "ᯬ", "◉", "᭻", "»", "〆", "々", "✗", "♪"])
global.htjava = pickRandom(["乂", "❏", "⫹⫺", "⎔", "✦", "⭔", "⬟"])
global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.emojis = pickRandom(["👑", "🎗", "️🗿", "🕹", "️💡", "🪄", "🎈", "🎊", "🔖", "📍", "❤", "‍🔥", "💤", "💭", "🕚", "💬", "🚩", "🎐", "🍃", "🌿", "🥀", "✨", "⚡", "☂️"])

//--------[WATERMARK]
global.wm = ' x ᴍ ɴ ᴢ ᴢ - ᴠ ʟ ʟ ɴ ᴢ' //Main WM
global.wm2 = '꒷︶꒷꒥꒷ ‧₊˚ ꒰ฅ˘バージニティハンター˘ฅ ꒱ ‧₊˚꒷︶꒷꒥꒷'
global.wm3 = '⫹⫺ ᴢʏᴋᴏ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ'
global.md = 'ᴢ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ‌'
//-----[OWNER]
global.nomorown = '15155188267'
global.owner = [
['15155188267'], // global owner 0
['15155188267'], // global owner 1
['15155188267'], // global owner 2
['15155188267', 'XMnzzVllnz🦄', true] // global owner 3
]
global.mods = [] // Want some help?
global.prems = ['15155188267','62857059457518'] // Premium user has unlimited limit

// =================={[(API KEYS)]}==================
global.mupar = 'xᴍɴᴢᴠʟʟɴ | ᴢʏᴋᴏʙᴏᴛᴢ'
global.org = '4SVXAlaZC9Ix9LK5O33M7qeZ'
global.openai = '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' // ISI APIKEY OPENAI LU 🥵
global.APIs = {
can: 'https://pnggilajacn.my.id',
skizo: 'https://xzn.wtf',
xteam: 'https://api.xteam.xyz',
nrtm: 'https://fg-nrtm.ddns.net',
bg: 'http://bochil.ddns.net',
lol : 'https://api.lolhuman.xyz' , 
fgmods: 'https://api-fgmods.ddns.net',
violetics : 'https://violetics.pw',
zenz: 'https://zenzapi.xyz',
xzn: 'https://xzn.wtf'
}
global.APIKeys = {
'https://pnggilajacn.my.id': '_',      // ISI APIKEY OPENAI LU 🥵
'https://xzn.wtf': 'Zxfrcv',     // https://wa.me/6289523302916 🙂
'https://api.xteam.xyz': '_',    // ISI APIKEY OPENAI LU 🥵
'https://zenzapis.xyz': '_',    // ISI APIKEY OPENAI LU 🥵
'https://api-fgmods.ddns.net': 'Jyg8aCRF',    // ISI APIKEY OPENAI LU 🥵
'https://zenzapi.xyz': '_',    // ISI APIKEY OPENAI LU 🥵
'https://violetics.pw': '_',   // ISI APIKEY OPENAI LU 🥵
'https://api.lolhuman.xyz': '_',   // https://wa.me/6289523302916LU 🙂
'https://xzn.wtf/': '_'      // https://wa.me/6289523302916 🙂
}
global.lolkey = '_'    // https://wa.me/6289523302916 🙂
global.lolkeysapi = [ '_' ]     // ISI APIKEY OPENAI LU 🥵
global.lol = '_'      // https://wa.me/6289523302916 🙂
global.rose = '_'  // ISI APIKEY OPENAI LU 🥵
global.xyro = '_'  // ISI APIKEY OPENAI LU 🥵
global.xzn = '_'   // https://wa.me/6289523302916 🙂
global.wait = '*_Tunggu sedang diproses..._*'
///==================/thumbnail 
global.thumb = 'https://a.uguu.se/NVMaNaXH.jpg' //Main Thumbnail
global.thumb2 = 'https://a.uguu.se/NVMaNaXH.jpg'
global.thumbbc = 'https://a.uguu.se/DAyocVHY.jpg' //For broadcast
global.giflogo = 'https://a.uguu.se/wBerVNpr.mp4'
global.thumblvlup = 'https://telegra.ph/file/a3e66e0fa840b08236c75.jpg'
global.footer = '꒷︶꒷꒥꒷ ‧₊˚ ꒰ ฅ˘ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ˘ฅ ꒱ ‧₊˚꒷︶꒷꒥꒷'
/*============== SOCIAL ==============*/
global.sig = 'https://instagram.com' //Link Instagrammu
global.sgh = 'https://github.com/SlavMnzz' //Link Githubmu
global.sgc = 'https://chat.whatsapp.com/ITuY4qQrA4v1TPX2f0PC4Y'
global.sdc = 'https://astrobotz.carrd.co' //Isi Pake Link Discordmu Kalo Gada Biarin aja
global.snh = 'https://nhentai.net/g/HaramTod🗿' //Hmmm, Ini boleh kalian isi terserah :v
//global.logo = ImgMountain()
global.sfb = 'https://github.com/SlavMnzz'
global.syt = 'https://github.com/SlavMnzz'
//====== Url Template Buttons ======//
global.dtu = 'ᴅᴏɴᴀᴛᴇ'
global.urlnya = "https://github.com/SlavMnzz"
//========== callButtons ==========//
global.dtc = 'ᴄᴀʟʟ ᴏᴡɴᴇʀ'
global.phn = +'62 821-5401-6437'
global.ephemeral = '86400' // 86400 = 24jam, kalo ingin di hilangkan ganti '86400' jadi 'null' atau ''
global.monitor = "u2325729-e9abf6a33aa8198e3849730c" // Ambil di https://uptimerobot.com
global.multiplier = 69 // The higher, The harder levelup
/*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'
global.htjava = '⫹⫺' 
global.fgig = '▢ mupar'
global.docs = [
    'application/pdf',
    'application/msword',
    'application/vnd.ms-excel',
    'application/vnd.ms-powerpoint',
    'application/zip',
    'application/x-rar-compressed',
    'application/x-tar',
    'application/x-7z-compressed',
    'application/epub+zip',
    'application/json'
];
// =============={[(END)]}=================
global.ppbot = [ 'https://telegra.ph/file/76dac6b1c51affd5b249e.jpg','https://cdnb.artstation.com/p/assets/images/images/065/283/211/large/aoi-ogata-sereule-10.jpg','https://cdnb.artstation.com/p/assets/images/images/065/283/211/large/aoi-ogata-sereule-10.jpg','https://cdnb.artstation.com/p/assets/images/images/065/049/227/large/aoi-ogata-fcd-1.jpg','https://cdnb.artstation.com/p/assets/images/images/063/225/261/large/aoi-ogata-htgyvj.jpg','https://cdnb.artstation.com/p/assets/images/images/062/235/023/large/aoi-ogata-tvfyg.jpg']
// ================={[(THUMBNAIL)]}===========
    global.hwaifu= ['https://telegra.ph/file/76dac6b1c51affd5b249e.jpg','https://cdnb.artstation.com/p/assets/images/images/065/283/211/large/aoi-ogata-sereule-10.jpg','https://cdnb.artstation.com/p/assets/images/images/065/283/211/large/aoi-ogata-sereule-10.jpg','https://cdnb.artstation.com/p/assets/images/images/065/049/227/large/aoi-ogata-fcd-1.jpg','https://cdnb.artstation.com/p/assets/images/images/063/225/261/large/aoi-ogata-htgyvj.jpg','https://cdnb.artstation.com/p/assets/images/images/062/235/023/large/aoi-ogata-tvfyg.jpg'    
       ]
//===[THUMBNAIL MENU]===

    global.thumbnailUrl= [
'https://a.uguu.se/MfXUWjpR.jpg','https://a.uguu.se/NelyQJCs.jpg','https://a.uguu.se/MfXUWjpR.jpg'
]
global.Pallmenu = [
'https://a.uguu.se/NVMaNaXH.jpg','https://a.uguu.se/NVMaNaXH.jpg','https://a.uguu.se/DAyocVHY.jpg'
]
global.AraChu2 = [
  "https://a.uguu.se/pouwyemS.jpg",
  "https://a.uguu.se/pqYKFNvz.jpg",
  "https://a.uguu.se/MfXUWjpR.jpg",
  "https://a.uguu.se/pqYKFNvz.jpg",
  "https://a.uguu.se/glHVaCxe.jpg",
  "https://a.uguu.se/MfXUWjpR.jpg",
  "https://a.uguu.se/glHVaCxe.jpg",
  "https://a.uguu.se/pqYKFNvz.jpg",
  "https://a.uguu.se/MfXUWjpR.jpg",
  "https://a.uguu.se/EzAtqpZy.jpg",
  "https://a.uguu.se/EzAtqpZy.jpg",
  "https://a.uguu.se/MfXUWjpR.jpg",
  "https://a.uguu.se/MfXUWjpR.jpg",
  "https://a.uguu.se/MfXUWjpR.jpg",
  "https://a.uguu.se/MfXUWjpR.jpg",
  "https://a.uguu.se/MfXUWjpR.jpg",
  "https://a.uguu.se/MfXUWjpR.jpg",
  "https://a.uguu.se/MfXUWjpR.jpg"
]
//["https://img.coomer.party/thumbnail/data/20/17/2017bbb33e4b2c492fb1b17f2dbd53273496dbce85b87605c4d701e14fce0267.jpg"]
  //['https://cdnb.artstation.com/p/assets/images/images/014/689/195/large/aoi-ogata-hate20181.jpg']
/*global.thumbnailUrl = [
'https://telegra.ph/file/3deaa6abaa91e7edd3a4b.jpg',
'https://telegra.ph/file/4d4bff6d786a173f503ee.jpg',
'https://telegra.ph/file/6b941a1e7b06dfe34c470.jpg',
'https://telegra.ph/file/8847890dd68461f43d1ea.jpg',
'https://telegra.ph/file/ad0adaacd97227ac10309.jpg'
]*/
//global.ppbot = ['https://telegra.ph/file/76dac6b1c51affd5b249e.jpg','https://cdnb.artstation.com/p/assets/images/images/065/283/211/large/aoi-ogata-sereule-10.jpg','https://cdnb.artstation.com/p/assets/images/images/065/283/211/large/aoi-ogata-sereule-10.jpg','https://cdnb.artstation.com/p/assets/images/images/065/049/227/large/aoi-ogata-fcd-1.jpg','https://cdnb.artstation.com/p/assets/images/images/063/225/261/large/aoi-ogata-htgyvj.jpg','https://cdnb.artstation.com/p/assets/images/images/062/235/023/large/aoi-ogata-tvfyg.jpg']
/*global.hwaifu = [
    'https://ll--lasdanon.repl.co/api/asupan/image/korean?apikey=Onlasdan',
    'https://ll--lasdanon.repl.co/api/asupan/image/china?apikey=Onlasdan',
       ]
*/
global.fla = pickRandom(ImgLogoFlam())

/* Img Flamming */
function ImgLogoFlam() {
    let Flam = [
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=arcade-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=dance-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=emperor-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=flame-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=matrix-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=robot-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=skate-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=spaceships-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=spider-men-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=wrestler-logo&text="
]
    return Flam
}

global.rpg = {
    emoticon(string) {
        string = string.toLowerCase()
        let emot = {
            Fox: "🦊",
            agility: "🤸‍♂️",
            anggur: "🍇",
            apel: "🍎",
            aqua: "🥤",
            arc: "🏹",
            armor: "🥼",
            bank: "🏦",
            batu: "🧱",
            berlian: "💎",
            bibitanggur: "🍇",
            bibitapel: "🍎",
            bibitjeruk: "🍊",
            bibitmangga: "🥭",
            bibitpisang: "🍌",
            botol: "🍾",
            bow: "🏹",
            bull: "🐃",
            cat: "🐈",
            centaur: "🎠",
            chicken: "🐓",
            coal: "⚱️",
            common: "📦",
            cow: "🐄",
            crystal: "🔮",
            darkcrystal: "♠️",
            diamond: "💎",
            dog: "🐕",
            dragon: "🐉",
            eleksirb: "🧪",
            elephant: "🐘",
            emasbatang: "🪙",
            emasbiasa: "🥇",
            emerald: "💚",
            exp: "✉️",
            fishingrod: "🎣",
            foodpet: "🍱",
            fox: "🦊",
            gardenboc: "🗳️",
            gardenboxs: "📦",
            gems: "🍀",
            giraffe: "🦒",
            gold: "👑",
            griffin: "🦒",
            health: "❤️",
            healtmonster: "❤‍🔥",
            horse: "🐎",
            intelligence: "🧠",
            iron: "⛓️",
            jeruk: "🍊",
            kaleng: "🥫",
            kardus: "📦",
            kayu: "🪵",
            ketake: "💿",
            keygold: "🔑",
            keyiron: "🗝️",
            knife: "🔪",
            koinexpg: "👛",
            kucing: "🐈",
            kuda: "🐎",
            kyubi: "🦊",
            legendary: "🗃️",
            level: "🧬",
            limit: "🌌",
            lion: "🦁",
            magicwand: "⚕️",
            makanancentaur: "🥗",
            makanangriffin: "🥙",
            makanankyubi: "🍗",
            makanannaga: "🍖",
            makananpet: "🥩",
            makananphonix: "🧀",
            mana: "🪄",
            mangga: "🥭",
            money: "💵",
            mythic: "🗳️",
            mythic: "🪄",
            naga: "🐉",
            pancingan: "🎣",
            pet: "🎁",
            petFood: "🍖",
            phonix: "🦅",
            pickaxe: "⛏️",
            pisang: "🍌",
            pointxp: "📧",
            potion: "🥤",
            rock: "🪨",
            rubah: "🦊",
            sampah: "🗑️",
            serigala: "🐺",
            snake: "🐍",
            stamina: "⚡",
            strength: "🦹‍♀️",
            string: "🕸️",
            superior: "💼",
            sword: "⚔️",
            tiger: "🐅",
            tiketcoin: "🎟️",
            trash: "🗑",
            umpan: "🪱",
            uncommon: "🎁",
            upgrader: "🧰",
            wood: "🪵"
        }
        let results = Object.keys(emot).map(v => [v, new RegExp(v, "gi")]).filter(v => v[1].test(string))
        if (!results.length) return ""
        else return emot[results[0][0]]
    }
}


//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
//=========/===
