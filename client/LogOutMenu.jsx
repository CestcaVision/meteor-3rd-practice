const {IconMenu,IconButton} = mui;
const { MenuItem } = mui.Menus;
const { NavigationMoreVert } = mui.SvgIcons;
LogOutMenu = React.createClass({
  contextTypes:{
    router: React.PropTypes.object.isRequired
  },
  handleSignOut(){
    Meteor.logout();
    this.context.router.push('/home')
  },
  render(){
    return (<IconMenu  iconButtonElement={
                <IconButton>
                  <NavigationMoreVert />
                </IconButton>}>
      <MenuItem primaryText={this.props.currentUser.username} />
      <MenuItem primaryText="SIGN OUT" onTouchTap={this.handleSignOut}/>
      </IconMenu>
    )
  }
})
