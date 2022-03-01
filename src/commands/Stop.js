const { Command, CommandOptionsRunTypeEnum } = require('@sapphire/framework');

class UserCommand extends Command {
    constructor(context, options) {
        super(context, {
            ...options,
            preconditions: ['DMOnly', 'OwnerOnly'],
        });
    }

    async messageRun(message) {
        return message.channel.send('Hello world!');
    }
}

exports.UserCommand = UserCommand;
