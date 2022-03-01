const { Listener } = require('@sapphire/framework');

class UserEvent extends Listener {
    constructor(context, options = {}) {
        super(context, {
            ...options,
            once: true,
            event: 'ready',
        });
    }

    run(client) {
        const { username, discriminator } = client.user;
        this.container.logger.info(`Successfully logged in as ${username}#${discriminator}`);
    }
}

exports.UserEvent = UserEvent;
