'use strict';
const _ = require('lodash');


/*
* send quick replies hellper 
* @text the message 
* @replies an array of strings represinting the replies
*/
exports.generateQuickReplies = function (text, replies) {
		return { 
		    "text": text,
		    "quick_replies": _.map(Object.keys(replies), key => {
		    	return {
			        "content_type":"text",
			        "title": replies[key],
			        "payload": key
			      }	
		    })
		}
	}




exports.generateSendLocation = function (text) {
	return { 
	    text: text,
	    quick_replies: [{content_type: 'location'}]
	}	
}