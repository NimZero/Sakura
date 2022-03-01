const { Precondition } = require('@sapphire/framework');
const { owner } = require('../../config.json');


class OwnerOnlyPrecondition extends Precondition {
  run(message) {
    return message.author.id == owner
      ? this.ok()
      : this.error({ message: 'Only the bot owner can use this command!' });
  }
}

module.exports = {
  OwnerOnlyPrecondition
};