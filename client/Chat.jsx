Chat = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    Meteor.subscribe('userData');
    Meteor.subscribe('messages');
    return {
      currentUser:Meteor.user(),
      messages: Messages.find({},{sort:{createdAt:1}}).fetch()
    }
  },
  render(){
    return (
      <div>
      <MessageList messages={this.data.messages}/>
      <MessageMenu currentUser={this.data.currentUser}/>
      </div>
    )
  }
})
