Tutorials = new Mongo.Collection('tutorials');

/*if(Meteor.isServer) {
  Tutorials._ensureIndex({packageName: 1, description: 1});
}*/

// Extended configuration
Tutorials.initEasySearch(['title', 'level'], {
    'limit' : 20,
    'use' : 'mongo-db'
});

Tutorials.attachSchema(new SimpleSchema({
  title:{
    type: String,
    label: "Title",
    max: 100
  },
  description:{
    type: String,
    label: "Description",
    max: 1024
  },
  uploadDate:
  {
    type: Date,
    label: "Upload Date",
    optional: true
  },
  level:
  {
    type: String,
    label: "Level",
    allowedValues: ['Advanced', 'Intermediate', 'Beginner'],
    optional: true
  },
  createdBy: {
    type: String,
    autoValue: function() {
       return this.userId
    }
  }
}));

if (Meteor.isServer) {
  Tutorials.allow({
    insert: function (userId, doc) {
      return userId;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return userId;
    },

    remove: function (userId, doc) {
      return userId;
    }
  });
}
