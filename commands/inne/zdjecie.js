const img = require('images-scraper')
const Discord = require('discord.js')

const google = new img({
    puppeteer : {
        headless : true,

    }
})

module.exports = {
    name: "zdjecie",
    aliases: ['zdjecia', 'photos', 'photo', 'fotka', 'fota'],
    run : async(client, message, args) => {
        const query = args.join(" ")
        const iembed1 = new Discord.MessageEmbed()
        .setTitle('**Wysukiwarka zdjęć**')
        .setColor('0xFF0000')
        .setDescription('Musisz podać fraze, którą chcesz wyszukać!')
        .setTimestamp()
        if(!query) return message.channel.send(iembed1)


        const results = await google.scrape(query, 1)
        message.channel.send(results[0].url)
    }
}