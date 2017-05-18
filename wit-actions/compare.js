'use strict';

const GraphAPI = require('../graphAPI');
const sessionStore = require('../sessionStore');

const witHelpers = require('../witHelpers');

const mobileService = require('../services/mobile');

const debug = require('debug')('cbp:actions:sample');

// a boiler for your compare price action just type compare in bot executes and it will automatically execute this action
module.exports = function({sessionId, context, text, entities}) {

	return sessionStore.get(sessionId)
	.then(session => {
		const recipientId = session.fbid;
		debug(`Session ${sessionId} received ${text}`);
		debug(`The current context is ${JSON.stringify(context)}`);
		debug(`Wit extracted ${JSON.stringify(entities)}`);

		// extract the model name for each phone form entities
		let firstModelName = witHelpers.getEntityValues(entities, 'model[1]');
		let secondModelName = witHelpers.getEntityValues(entities, 'model[2]');


		// query each mobile from the database by modelName
		mobileService.getByModelName(firstModelName).then((mobile)=>{
			let firtMobile =  mobile;
		});
		mobileService.getByModelName(secondModelName).then((mobile)=>{
			let secondMobile =  mobile;
		});
		

		// Now you have the two mobiles you can format your responce and pass it to the user
		// you can do the same thing for compareing mobile attrinutes, you will only send the user those 
		// attributes values and not the entire mobile object

		return GraphAPI.sendPlainMessage(recipientId, JSON.stringify(firtMobile) + JSON.stringify(secondMobile) );

	})
	.then(function() {
		return context;
	});
}