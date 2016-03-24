Message = React.createClass({
  render(){
    return(
      <div>
      <img src={this.props.avatar}/>
      <b>{this.props.owner}</b>
      <span>{this.props.content}</span>
      <span>{this.props.createdAt}</span>
      </div>
    )
  }
})
