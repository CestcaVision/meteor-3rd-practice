const {TextField,RaisedButton,Card}= mui;
MessageMenu = React.createClass({
  getInitialState(){
    return {
      input:''
    }
  },
  handleSubmit(e){
    e.preventDefault();
    let currentUser = this.props.currentUser;
    let username = currentUser.username;
    let avatar = currentUser.avatar;
    let message = this.refs.message.getValue();
    Meteor.call('messageAdd',username,avatar,message,(err)=>{
      if(err){
        console.log(err);
        return;
      }
      this.setState({input:''})
    })
  },
  handleChange(){
    this.setState({
      input:this.refs.message.getValue()
    })
  },
  render(){
    return (
      <Card>
      <form onSubmit={this.handleSubmit}>
      <TextField ref='message' value = {this.state.input} onChange={this.handleChange}/>
      <RaisedButton type='submit' label='发送'/>
      </form>
      </Card>
    )
  }
})
