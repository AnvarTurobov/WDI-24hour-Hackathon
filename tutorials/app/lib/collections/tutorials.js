Tutorials = new Mongo.Collection('tutorials');
Tutorials.attachSchema(new SimpleSchema({
  title:{
    type: String,
    label: “Title”,
    max: 200
  },
  description:{
    type: String,
    label: “Description”,
    max: 1024
  },
  dueDate:
  {
    type: Date,
    label: “Due Date”,
    optional: true
  },
  priority:
  {
    type: String,
    label: “Priority”,
    allowedValues: [‘High’, ‘Medium’, ‘Low’],
    optional: true
  },
  createdBy: {
    type: String,
    autoValue: function() {
    return this.userId
  }
}}));
if (Meteor.isServer) {
  Tutorials.allow({ 
    insert: function (userId, doc) {
      return true;
    },
    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },
    remove: function (userId, doc) {
      return true;
    }
  });
}