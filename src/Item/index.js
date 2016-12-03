import React, { PropTypes } from 'react'

class Item extends React.Component {
  render () {
    let content = this.props.params.title==0 ? 'first' :
                  this.props.params.title=1 ? 'second' : 'hhh';
    return(
      <div>
         {content}
      </div>
    )


  }
}

export default Item;
