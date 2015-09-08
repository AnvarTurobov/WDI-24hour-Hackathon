Template.TutorialsList.events({
});

Template.TutorialsList.helpers({
  tutorials: function () {
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