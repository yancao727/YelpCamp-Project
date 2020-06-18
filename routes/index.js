var express = require('express')
var router = express.Router();
var password = require('password');
var User = require('../models/user')

//Route Router
router.get("/", function(req,res){
	res.render('comgrounds/landing');
});


//Show Register Form
router.get('/register', function(req,res){
	res.render('register')
})
//Handle sign up logic
router.post('/register', function(req,res){
	var newUser = new User({username: req.body.username});
	User.register(newUser, req.body.password, function(err, user){
		if(err){
			console.log('err');
			return res.render('register')
		}	
		passport.authenticate('local')(req,res,function(){
			res.redirect('/campgrounds')
		})
	});
});

//Show login form
router.get('/login', function(req,res){
	res.render('longin');
});
//Handle login logic
router.post('/login', passport.authenticate('local', {successRedirect:'/campgrounds',failureRedirect:'/login'}) function(req,res){	
});
//Logout Route
router.get('/logout', function(req,res){
	req.logout();
	res.redirect('/campgrounds');
})

funtion isLoggedIn(req,res,next){
	if (req.isAuthenticated()){
		return next();
	}
	res.redirect('/login')
}

module.exports = router;