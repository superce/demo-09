import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
class BlogCard extends React.Component {
  render () {
    return(

      <div className='blog-card'>
        <div className='blog-index'> <span>{this.props.index}</span>  </div>
      <div className='blog-content clearfix'>
            <h3>{this.props.title}</h3>
            <p>{this.props.desc}</p>
            <RaisedButton label="yuedu" secondary={true}  />
          </div>

      </div>
    )
  }
}
  BlogCard.defaultProps={
    index:1,
    title:'morenbiaoti',
    desc:'morenjieshao'
  }
  BlogCard.PropTypes={
    index:React.PropTypes.number,
    title:React.PropTypes.string,
    desc:React.PropTypes.string
  }

export default BlogCard;
