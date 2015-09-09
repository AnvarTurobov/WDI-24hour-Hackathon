Template.TutorialsList.events({
});

Template.TutorialsList.helpers({

  youtubeId: function(url) {
      var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      var match = url.match(regExp);

      if (match && match[2].length == 11) {
        return match[2];
      } else {
        return 'error';
      }
  },

  tutorials: function () {
     // var tutorials = Tutorials.find();
     // for (var i = 0; i < tutorials.length; i++) {
     //  tutorials[i].test = youtubeId(tutorials[i].description)
     // }
     // return tutorials;
     return Tutorials.find();
  },

  uploadDateFormatted: function () {
    return moment(this.uploadDate).format("MMM Do YY");
  },

  levelAdvanced: function() {
    if (this.level === 'Advanced')
      return true;
    else
      return false;
  },

  levelIntermediate: function() {
    if (this.level === 'Intermediate')
      return true;
    else
      return false;
  },

  levelBeginner: function() {
    if (this.level === 'Beginner')
      return true;
    else
      return false;
  }
});
