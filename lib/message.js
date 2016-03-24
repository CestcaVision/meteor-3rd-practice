Messages = new Mongo.Collection('messages');
Meteor.methods({
  'messageAdd': function(username,avatar,message){
    var talk = {
      owner:username,
      avatar:avatar,
      content:message,
      createAt:new Date()
    }
    Messages.insert(talk)
  }
})
