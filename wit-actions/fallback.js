'use strict';

const GraphAPI = require('../graphAPI');
const sessionStore = require('../sessionStore');
const debug = require('debug')('cbp:actions:sample');

// another way to implemnt you default fallback is to execute this action whenever a general entity is triggerd 
module.exports = function({sessionId, context, text, entities}) {

	function generateRandom  (list){
		return list[Math.floor(Math.random() * list.length )]
		}

	return sessionStore.get(sessionId)
	.then(session => {
		const recipientId = session.fbid;
		debug(`Session ${sessionId} received ${text}`);
		debug(`The current context is ${JSON.stringify(context)}`);
		debug(`Wit extracted ${JSON.stringify(entities)}`);

		let replies = ['Sorry I didn\'t get this ','What do you ? ', 'I\'m sorry '+context.userData.first_name+' I don\'t understand.'] 
		
		return GraphAPI.sendPlainMessage(recipientId, generateRandom(replies));
	})
	.then(function() {
		return context;
	});
}