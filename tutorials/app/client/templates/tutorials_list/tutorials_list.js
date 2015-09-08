Template.TutorialsList.events({
});

Template.TutorialsList.helpers({
  issues: function () {
    return Tutorials.find();
  },

  dueDateFormatted: function () {
    return moment(this.dueDate).format("MMM Do YY");
  },

  priorityHigh: function() {
    if (this.priority === 'High')
      return true;
    else
      return false;
  },

  priorityMedium: function() {
    if (this.priority === 'Medium')
      return true;
    else
      return false;
  },

  priorityLow: function() {
    if (this.priority === 'Low')
      return true;
    else
      return false;
  }
});