module.exports = {
    name: 'rules',
    description: "This gives you an embed",
    execute(message, args){
        client.on('message', message => {
            // If the message is "how to embed"
            if (message.content === 'how to embed') {
              // We can create embeds using the MessageEmbed constructor
              // Read more about all that you can do with the constructor
              // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
              const embed = new MessageEmbed()
                // Set the title of the field
                .setTitle('This is a test')
                // Set the color of the embed
                .setColor(0xff0000)
                // Set the main content of the embed
                .setDescription('This is a test');
              // Send the embed to the same channel as the message
              message.channel.send(embed);
            }
          });

        } 
        
    }
