TutorialsController = RouteController.extend({
  subscriptions: function () {
    this.subscribe('tutorials', Meteor.userId());
  },

  data: function () {
    return Tutorials.findOne({_id: this.params._id});
  },

  insert: function () {
    this.render('InsertTutorial', {});
  },

  list: function() {
    this.render('TutorialsList', {});
  },

  edit: function() {
    this.render('EditTutorial', {});
  }
});