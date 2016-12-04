import React, { PropTypes } from 'react'
import {Link} from 'react-router';
class LeftNav extends React.Component {
  render () {
    return(

      <div className='leftNav-wrap'>

        <h3>superce@{this.props.title}</h3>

        <Link to = '/' activeStyle={{backgroundColor:'red'}} onlyActiveOnIndex={true}>home</Link>
        <Link to = 'blog' activeStyle={{backgroundColor:'red'}}>Blog</Link>
        <Link to = 'work' activeStyle={{backgroundColor:'red'}}>work</Link>
        <Link to = 'about' activeStyle={{backgroundColor:'red'}}>about</Link>
      </div>
    )
  }
}

export default LeftNav;
