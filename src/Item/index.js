import React, { PropTypes } from 'react'
import marked from 'marked';
import axios from 'axios';
class Item extends React.Component {
  componentDidMount(){
    let address = this.props.params.title;
    axios.get('')
  }
  render () {

    return(
      <div>
         {content}

          <div dangerouslySetInnerHTML={{__html:marked(`# ssss`)}} />
      </div>
    )


  }
}

export default Item;
