Meteor.publish('tutorials', function (userId) {
 return Tutorials.find({});
});


/*Meteor.publish('tutorials', function (userId) {
 return Tutorials.find({createdBy: userId});
});*/
