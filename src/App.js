import React from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavHeader from './component/NavHeader';
import NavFooter from './component/NavFooter';
import LeftNav from './component/LeftNav';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      title:'Home',
      showLeftNav:false
    }
  }
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  componentWillReceiveProps(){
    this.setTitle();
  }
  componentWillMount(){
    this.setTitle();
    if(window.innerWidth>760){
      this.setState({showLeftNav:true})
    }
  }
  componentDidMount(){
    window.onresize=this.setNavBar.bind(this)
  }
  setNavBar(){
    this.setState({
      showLeftNav:window.innerWidth>760 ? true : false
    })
  }

  componentWillMount(){
    let _this = this;

    window.onresize = function(){
      if(window.innerWidth>760){
      _this.setState({
        showLeftNav:true
      })


    }else {
       _this.setState({
         showLeftNav:false
       })
    }
  }
  }
  setTitle(){
    this.setState({
      title:this.props.router.isActive('/',true) ? 'Home' :
      this.props.router.isActive('blog') ? 'Blog' :
      this.props.router.isActive('work') ? 'Work' :
      this.props.router.isActive('about') ? 'About' : 'Blog'
    })
  }
  render () {
    return(
      <div className='my-wrap'>
        {this.state.showLeftNav ? <LeftNav title={this.state.title}/> : <NavHeader title={this.state.title}/>}
      


        <div className='main'>
          {this.props.children}
        </div>
        {this.state.showLeftNav ? null : <NavFooter />}

      </div>
    )
  }
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object
};
export default App;
