const Discord = require('discord.js')

module.exports = {
    name: "clear",
    alias: "wyczysc",
    run : async(client, message,args) => {
    const cembed = new Discord.MessageEmbed()
    .setTitle('**Czyszczenie**')
    .setColor('0xff000')
    .setDescription('Nie masz permisi aby wyczyścić czat!')
    .setTimestamp()
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(cembed)
    const cembed2 = new Discord.MessageEmbed()
    .setTitle('**Czyszczenie**')
    .setColor('0xFF0000')
    .setDescription('Podaj ilość wiadomości jaką chcesz wyczyścić! (1-99)')
    .setTimestamp()
    if(!args[0]) return message.channel.send(cembed2)
    const cembed3 = new Discord.MessageEmbed()
    .setTitle('**Czyszczenie**')
    .setColor('0xFF0000')
    .setDescription('Możesz używać tylko liczb!')
    if(isNaN(args[0])) return message.channel.send(cembed3)
    const cembed4 = new Discord.MessageEmbed()
    .setTitle('**Czyszczenie**')
    .setColor('0xFF0000')
    .setDescription('Maksymalna liczba wiadomości jaką możesz wyczyścić wynosi 99!')
    if(parseInt(args[0]) > 99) return message.channel.send(cembed4)
    const cembed5 = new Discord.MessageEmbed()
    .setTitle('**Czyszczenie**')
    .setColor('0x09FF00')
    .setDescription(`Wyczyszczono ${args[0]} wiadomości!`)
    .setTimestamp()
        await message.channel.bulkDelete(parseInt(args[0]) + 1)
            .catch(err => console.log(err))
        message.channel.send(cembed5).then(m => m.delete({timeout: 5000}))
    }
}