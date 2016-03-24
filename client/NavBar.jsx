const {Tabs,Tab}=mui;
NavBar= React.createClass({
  getInitialState(){
    return {
      selectedTab:''
    }
  },
  handleChange(value){
    this.context.router.push(value)
  },
  contextTypes:{
    router: React.PropTypes.object.isRequired
  },
  componentWillMount(){
    this.setState({
      selectedTab:this.getSelectedTab()
    })
  },
  componentWillReceiveProps(){
    this.setState({
      selectedTab:this.getSelectedTab()
    })
  },
  getSelectedTab(){
    return this.context.router.isActive('/home')?'/home':
    this.context.router.isActive('/signup')?'/signup':
    this.context.router.isActive('/login')?'/login':''
    },
  render(){
    let currentUser = this.props.currentUser;
    let logOutMenu = (currentUser)?<LogOutMenu currentUser={currentUser}/>:'';
    return (
      <div>
      <Tabs value={this.state.selectedTab} onChange={this.handleChange}>
      <Tab value='/home' label='主页'/>
      <Tab value={currentUser?'/account':'/signup'} label={currentUser?'我的账户':'注册'}/>
      <Tab value={currentUser?'/chat':'/login'} label={currentUser?'聊天室':'登录'}/>
      </Tabs>
      {logOutMenu}
      </div>
    )
  }
})
