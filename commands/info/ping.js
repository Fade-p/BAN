const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'ping',
    category : 'info',
    description : 'Returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        const msg = await message.channel.send(`🏓 Pinguje...`)
        const embed = new MessageEmbed()
            .setTitle('Pong!')
            .setColor('0x09FF00')
            .setDescription(`Opuźnienie websocket'u wynosi ${client.ws.ping}MS\nOpóźnienie wysyłania wiadomości wynosi ${Math.floor(msg.createdAt - message.createdAt)}MS!`)
            await message.channel.send(embed)
            msg.delete()

    }
}
