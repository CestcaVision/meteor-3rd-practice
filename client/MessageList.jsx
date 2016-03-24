MessageList= React.createClass({
render(){
 let allmessages = _.map(this.props.messages,(message,key)=>{
   return (
   <Message owner={message.owner} avatar={message.avatar} content={message.content} createdAt={message.createdAt} key={key}/>
 ) })
 return (<div>
   {allmessages}
 </div>)
}
})
