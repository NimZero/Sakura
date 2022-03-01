const { SapphireClient } = require('@sapphire/framework');
const { token } = require('../config.json');

const client = new SapphireClient({
    intents: ['GUILDS', 'GUILD_MESSAGES', 'DIRECT_MESSAGES'],
    activity: { name: '<help', type: 'LISTENING' },
    status: 'online',
    defaultPrefix: '<',
    disableMentionPrefix: true,
});

client.login(token);
