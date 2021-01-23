const Commando = require('discord.js-commando')
const codeMatchRegex = /```[A-Za-z]*\n+([\x00-\x59\x61-\x7F\\_]+)\n+```|`([\x00-\x59\x61-\x7F\\_]+)`|^([\x00-\x59\x61-\x7F\\_]+)$/

class CodeArgumentType extends Commando.ArgumentType {
    constructor(client) { super(client, 'code') }

    isEmpty( val, msg ) {
        if( !val )
            return true
        const result = val.match(codeMatchRegex)
        return !result
    }

    validate( val, msg ) {
        const result = val.match(codeMatchRegex)
        return !!result
    }

    parse( val, msg ) {
        const result = val.match(codeMatchRegex)
        return result
    }
}

module.exports = CodeArgumentType