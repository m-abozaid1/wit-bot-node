'use strict';

const GraphAPI = require('../graphAPI');
const sessionStore = require('../sessionStore');
const debug = require('debug')('cbp:actions:sample');

// a boiler for your compair price action just type compare in bot executes and it will automatically execute this action
module.exports = function({sessionId, context, text, entities}) {

	return sessionStore.get(sessionId)
	.then(session => {
		const recipientId = session.fbid;
		debug(`Session ${sessionId} received ${text}`);
		debug(`The current context is ${JSON.stringify(context)}`);
		debug(`Wit extracted ${JSON.stringify(entities)}`);

		
		return GraphAPI.sendPlainMessage(recipientId, 'Comparing the prices for you.');

	})
	.then(function() {
		return context;
	});
}