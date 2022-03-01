const { Command } = require('@sapphire/framework');

class UserCommand extends Command {
    constructor(context, options) {
        super(context, {
            ...options
        });
    }

    async messageRun(message) {
        const msg = await message.channel.send('Ping?');

        const content = `Pong ! Bot Latency ${Math.round(this.container.client.ws.ping)}ms. API Latency ${msg.createdTimestamp - message.createdTimestamp}ms.`;

        return msg.edit(content);
    }
}

exports.UserCommand = UserCommand;
