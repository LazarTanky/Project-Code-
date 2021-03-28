module.exports = {
    name: 'clear',
    description: "Clear messages!",
    async execute(message, args){
        if(!args[0]) return message.reply('Please enter the abount of messages you want to clear!');
        if(isNaN(args[0])) return message.reply('Please enter a real number');

        if(args[0] > 100) return message.reply('You cannnot delete mre that 100 messages');
        if(args[0] < 1) return message.reply('You must delete atleast one message')
        

        await message.channel.message.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        })
    }
        
    }
