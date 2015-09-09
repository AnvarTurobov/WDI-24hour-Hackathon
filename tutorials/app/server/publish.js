Meteor.publish('tutorials', function (userId) {
 return Tutorials.find({});
});

/*SearchSource.defineSource('tutorials', function(searchText, options) {
  var options = {sort: {isoScore: -1}, limit: 20};
  
  if(searchText) {
    var regExp = buildRegExp(searchText);
    var selector = {$or: [
      {title: regExp},
      {description: regExp}
    ]};

    return Packages.find(selector, options).fetch();
  } else {
    return Packages.find({}, options).fetch();
  }
});

function buildRegExp(searchText) {
  // this is a dumb implementation
  var parts = searchText.trim().split(/[ \-\:]+/);
  return new RegExp("(" + parts.join('|') + ")", "ig");
}*/


/*Meteor.publish('tutorials', function (userId) {
 return Tutorials.find({createdBy: userId});
});*/
