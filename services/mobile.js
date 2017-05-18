var mongoose = require('mongoose');
var mobile = mongoose.model('mobiles_compared_collection');

exports.getByModelName = function (name) {
    return mobile.findOne(
	    {
	    	'general_specifications.model_name' : name
	    }
    );
};		