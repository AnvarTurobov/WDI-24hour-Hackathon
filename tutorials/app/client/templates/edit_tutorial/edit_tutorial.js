Template.EditTutorial.events({
});

Template.EditTutorial.helpers({
  beforeRemove: function () {
      return function (collection, id) {
        var doc = collection.findOne(id);
        if (confirm('Really delete tutorial: "' + doc.title + '"?')) {
          this.remove();
          Router.go('tutorialsList');
        }
      };
    }
});

AutoForm.addHooks(null, {
  onSuccess: function(operation, result, template) {
    Router.go('tutorialsList');
  }
});