'use strict';
const GraphAPI = require('../graphAPI');
const sessionStore = require('../sessionStore');
const wit = require('../wit');
const _ = require('lodash');

module.exports = function handleTextMessage (session, sessionId, context, msg) {
	context.message = msg;
	//console.log(context)
	var confidence = [];


		// a check if the bot understand the message with high confidence
		wit.message(msg).then((res)=>{
			// this is the best way to implement a fallback if the bot didn't understand the user

			console.log(JSON.stringify(res));
			// first getting an array of confidence in each entity
			searchObj(res,'confidence')

			console.log(_.max(confidence));

			// if the max confidence is less than 90% execute the default fallback
			if(_.max(confidence) < 0.90 ){

				let replies = ['Sorry I didn\'t get this ','What do you mean? ', 'I\'m sorry '+context.userData.first_name+' I don\'t understand.','put it in other words'] 
				 GraphAPI.sendPlainMessage(session.fbid, generateRandom(replies));
			
			}else{
				// run actions as usual
				wit.runActions(sessionId, msg, context).then((context) => {

				 console.log('Waiting for futher messages.');




				 // you can add contex key done to help you when the context finshes
				if (context['done']) {
				   	sessionStore.destroy(sessionId);
				}

				// you can change the context and save it to the session for complicated messages
				// sessionStore.saveSession(sessionId, session)

				}).catch((err) => {
				    console.error('Oops! Got an error from Wit: ', err.stack || err);
				})
			}
		})




		function searchObj (obj, query) {

		    Object.keys(obj).forEach((elem)=>{
		        let value = obj[elem];

		        if (typeof value === 'object') {
		          if (value[query] != null ) {
		            confidence.push(value[query])
		          }
		          searchObj(value , query)
		        }

		    }) 

		}

		function generateRandom  (list){
		return list[Math.floor(Math.random() * list.length )]
		}
	
	};


