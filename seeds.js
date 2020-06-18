var mongoose = require('mongoose');
var Compground = require('./models/campground');
var Comment = require('./models/comment')

var data = [
	{
		name: "Cloud's Rest",
		image:"https://www.google.com/imgres?imgurl=http%3A%2F%2Fres.cloudinary.com%2Fsimpleview%2Fimage%2Fupload%2Fv1584361003%2Fclients%2Fpoconos%2FCampgrounds_Exterior_Keen_Lake_1_PoconoMtns_d606c492-eb33-450d-a725-e173b70c6cb8.jpg&imgrefurl=https%3A%2F%2Fwww.poconomountains.com%2Fplaces-to-stay%2Fcampgrounds%2F&tbnid=y85XGJ6Wq0ioCM&vet=12ahUKEwiriPK41P3pAhXYxCoKHaFRB4wQMygCegUIARCWAQ..i&docid=FueU2AH9O2W5pM&w=1400&h=1000&q=campgrounds&ved=2ahUKEwiriPK41P3pAhXYxCoKHaFRB4wQMygCegUIARCWAQ",
		description:"blabla"
	},
	{
		name: "Cloud's Rest",
		image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fq9m3bv0lkc15twiiq99aa1cy-wpengine.netdna-ssl.com%2Fwp-content%2Fuploads%2F2019%2F07%2FTENT.jpeg&imgrefurl=https%3A%2F%2Fwildwater.com%2Fbest-golden-bc-campgrounds%2F&tbnid=Zs6dVnCpWEzSfM&vet=12ahUKEwiriPK41P3pAhXYxCoKHaFRB4wQMygFegUIARCcAQ..i&docid=4dDeS9g95GcCwM&w=640&h=480&q=campgrounds&ved=2ahUKEwiriPK41P3pAhXYxCoKHaFRB4wQMygFegUIARCcAQ",
		description:"blabla"
	},
	{
		name: "Cloud's Rest",
		image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.oregonlive.com%2Fresizer%2F0FVk7bpZHdb--Lw10Y-443t0ylM%3D%2F450x0%2Fsmart%2Farc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com%2Fpublic%2FDUNWFNGOAVCRLAHO4ZPTBKNJEM.jpg&imgrefurl=https%3A%2F%2Fwww.oregonlive.com%2Ftravel%2F2020%2F05%2Foregon-state-parks-will-reopen-some-campgrounds-june-9-with-limited-services.html&tbnid=8uwvciwWz6s_IM&vet=12ahUKEwiriPK41P3pAhXYxCoKHaFRB4wQMygoegUIARDkAQ..i&docid=Wxm_EPnWv5GjTM&w=450&h=311&q=campgrounds&ved=2ahUKEwiriPK41P3pAhXYxCoKHaFRB4wQMygoegUIARDkAQ",
		description:"blabla"
	},
]

function seedDB(){
	// Remove all campgrounds
	Campground.remove({},function(err){
		if(err){
			console.log(err);
		}
		console.log("removed campgrounds");
		//Add a few campgrounds
		data.forEach(function(seed){
			Campground.create(seed, function(err, campground){
				if (err){
					console.log(err)
				} else{
					console.log("add a campground")
					//create a comment
					Comment.create(
						{
						text: 'this is a great place',
						author: "Homer"
					}, function(err, comment){
						if (err){
							console.log()
						} else{
							campground.comments.push(comment);
							campground.save();
							console.log("Create a new commend")
						}
						
					});
				}
			})；
		});
	});
}

module.exports = seedDB;