const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = '-';

const { Client, MessageEmbed } = require('discord.js');

const hook = new Discord.WebhookClient('825548308352860191', 'l48-nq6WxHC2GQUbhong-8VkeZ5DoAZ-lQ47f5wfupCNxILVv205RW4VGYrfqRQfujXe');

const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}


client.on('ready', () => {
    console.log(`${client.user.tag} successfully logged in!`)
    client.user.setActivity('Current updates: 40!!!!!', ({type: "PLAYING"}))
    console.log(`Statas loaded`)
})


client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Swords-people');
 
    guildMember.roles.add(welcomeRole);
});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }  else if (command === 'hello'){
        client.commands.get('hello').execute(message, args);
    }  else if (command === 'clear'){
        client.commands.get('clear').execute(message, args);
    }  else if (command === 'am i cool???'){
        client.commands.get('ami').execute(message, args);
    }  else if (command === 'commands'){
        client.commands.get('commands').execute(message, args);
    }  else if (command === 'ping2'){
        client.commands.get('advancedping').execute(message, args);
    } else if (command === 'kick'){
        client.commands.get('kick').execute(message, args);
    }  else if (command === 'ban'){
        client.commands.get('ban').execute(message, args);
    }  else if (command === 'mute'){
        client.commands.get('mute').execute(message, args);
    }  else if (command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    }   else if (command === 'reactionrole'){
        client.commands.get('unmute').execute(message, args, Disocrd, client);
    }  
}); 

client.on('message', message => {
    let msg = message
    if(message.content === `${prefix}tweet`){
        msg.channel.send('Post ponned till 4:00 bc of bloxys')
    }
        
    
})


client.on('message', message => {
    // If the message is "how to embed"
    if (message.content === 'how to embed') {
      // We can create embeds using the MessageEmbed constructor
      // Read more about all that you can do with the constructor
      // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
      const embed = new MessageEmbed()
        // Set the title of the field
        .setTitle('Rules!')
        // Set the color of the embed
        .setColor(0xff0000)
        // Set the main content of the embed
        .setDescription('Rule 1. nice');
      // Send the embed to the same channel as the message
      message.channel.send(embed);
    }
  });

  hook.send('40 UPDATES WOOOOOOO!');
  





client.login('ODI1MTc2MTQ4OTY2NTA2NTQ4.YF6HLA.7EVcbl3EB59vuVA_eSrz7ssqvcA');
