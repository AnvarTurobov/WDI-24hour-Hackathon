Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});

Router.route('/insert_tutorial', {
  name: 'insertTutorial',
  controller: 'TutorialsController',
  action: 'insert',
  where: 'client'
});


Router.route('tutorials_list', {
  name: 'tutorialsList',
  controller: 'TutorialsController',
  action: 'list',
  where: 'client'
});

Router.route('/tutorial/:_id', {
  name: 'editTutorial',
  controller: 'TutorialsController',
  action: 'edit',
  where: 'client'
});

Router.onBeforeAction(function() {
  if (!Meteor.user()) {
    this.render('AccessDenied');
  } else
  {
     this.next();
  }
}, {only: ['tutorialsList', 'insertTutorial']});
