var mongoose = require('mongoose');
var passwordLocalMongoose = requre('passport-local-mongoose')

var UserSchema = new mongoose.Schema({
	username:String,
	password:String
});

UserSchema.plugin(passwordLocalMongoose);

module.export = mongoose.model('User', UserSchema);