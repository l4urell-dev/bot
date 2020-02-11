//Завершено

const Discord = require("discord.js");
const { letterTrans } = require('custom-translate');

module.exports.run = async (bot, message, args) => {
    let bk = require('../botconfig.json');
    if (args) if (args[0] == 'help') return bot.send(`**textflip** - Переворачивает ваш текст (Author:3ефирка❤)\n**Использование:** ${bk.prefix}textflip TEXT`);
    var dictionary = {

        "a": "ɐ",

        "b": "q",

        "c": "ɔ",

        "d": "p",

        "e": "ǝ",

        "f": "ɟ",

        "g": "ƃ",

        "h": "ɥ",

        "i": "ᴉ",

        "j": "ɾ",

        "k": "ʞ",

        "m": "ɯ",

        "n": "u",

        "p": "d",

        "q": "b",

        "r": "ɹ",

        "t": "ʇ",

        "u": "n",

        "v": "ʌ",

        "w": "ʍ",

        "y": "ʎ",

        "A": "∀",

        "C": "Ɔ",

        "E": "Ǝ",

        "F": "Ⅎ",

        "G": "פ",

        "J": "ſ",

        "L": "˥",

        "M": "W",

        "P": "Ԁ",

        "T": "┴",

        "U": "∩",

        "V": "Λ",

        "W": "M",

        "Y": "⅄",

        "1": "Ɩ",

        "2": "ᄅ",

        "3": "Ɛ",

        "4": "ㄣ",

        "5": "ϛ",

        "6": "9",

        "7": "ㄥ",

        "9": "6",

        ",": "'",

        ".": "˙",

        "'": ",",

        "\"": ",,",

        "_": "‾",

        "&": "⅋",

        "!": "¡",

        "?": "¿",

        "`": ","

    }
    if (!args) return;
    const text = args.join(' ');

    const converted = letterTrans(text, dictionary);

    bot.send(converted);

}

module.exports.help = {

    name: "textflip",
    aliases: ["tflip", "tf", 'текстфлип', 'перевернутьтекст', 'текстперевернуть', 'перевернитекст', 'перевернутыйтекст']

}