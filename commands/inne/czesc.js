const Discord = require('discord.js')
const { run } = require('../info/help')
const nazwabota = require('../../config.json').nazwabota
const prefix = require('../../config.json').prefix

module.exports = {
    name: "czesc",
    aliases:['siema', 'elo'],
    run : async(client, message, args) => {
        const sembed = new Discord.MessageEmbed()
        .setTitle('Cześć!')
        .setColor('0x09FF00')
        .setDescription(`Cześć jestem ${nazwabota}. Jestem wielofunkcyjnym botem discord, pomagam w prowadzeniu serwerów discord. Mój aktualny prefix to "${prefix}".`)
    message.channel.send(sembed)
    }
}