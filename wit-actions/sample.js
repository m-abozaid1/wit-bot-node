'use strict';

const GraphAPI = require('../graphAPI');
const sessionStore = require('../sessionStore');
const debug = require('debug')('cbp:actions:sample');


module.exports = function({sessionId, context, text, entities}) {

	return sessionStore.get(sessionId)
	.then(session => {
		const recipientId = session.fbid;
		debug(`Session ${sessionId} received ${text}`);
		debug(`The current context is ${JSON.stringify(context)}`);
		debug(`Wit extracted ${JSON.stringify(entities)}`);

		// sending a  plain text message and updating the context
		return GraphAPI.sendPlainMessage(recipientId, 'you got this').then(()=>{
			context.loc = 'Brussels';
		});
	})
	.then(function() {
		return context;
	});
}