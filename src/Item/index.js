import React, { PropTypes } from 'react'
import marked from 'marked';
class Item extends React.Component {
  render () {
    let content = this.props.params.title==0 ? 'first' :
                  this.props.params.title=1 ? 'second' :
                  this.props.params.title=1 ? 'third' :   'hhh'
    return(
      <div>
         {content}

         
      </div>
    )


  }
}

export default Item;
