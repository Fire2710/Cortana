const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("/")

bot.on('ready', function() {
    bot.user.setGame("Command : /help");
    console.log("COnnected");
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Comands list:\n\n -**help** \n\n```diff\nOther commands is in [WIP]\n```")
    }

    if (message.content === "cc"){
        message.reply("Hey, i wait you");
        console.log("Réponse a 'cc' éfféctuer");
    }
});
