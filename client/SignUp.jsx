const {TextField,RaisedButton, Card}=mui;
SignUp = React.createClass({
  handleSubmit(e){
    e.preventDefault();
    let username = this.refs.username.getValue();
    let password = this.refs.password.getValue();
    Accounts.createUser({
      username:username,
      password:password
    },(err)=>{
      if(err){
        console.log(err);
        return;
      }
      this.context.router.push('/account')
    })
  },
  contextTypes:{
    router: React.PropTypes.object.isRequired
  },
  render(){
    return (
      <Card>
      <form onSubmit={this.handleSubmit}>
      <TextField ref='username'/>
      <TextField ref='password'/>
      <RaisedButton type='submit' label='注册'/>
      </form>
      </Card>
    )
  }
})
