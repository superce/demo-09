import React, { PropTypes } from 'react'
import marked from 'marked';
import axios from 'axios';
import hljs from 'highlight.js'
class Item extends React.Component {
  constructor(){
    super();
    this.state={
      data:""
    }
  }
  componentDidMount(){
    let address = this.props.params.title;
    axios.get('')
    axios.get(
      `https://raw.githubusercontent.com/superce/demo-09/master/data/${address}.md`)
        .then(res =>this.Setstate({data:res.data}) )
        .catch(err => alert(err))

  }
  render () {
       let content = this.state.data.length==0 ? 'loading' : marked(this.state.data);
       marked.setOptions({
        highlight: function (code) {
          return hljs.highlightAuto(code).value;
        }
      });
    return(
      <div>
        <div className='post-wrap' dangerouslySetInnerHTML={{__html:content}} />



      </div>
    )


  }
}

export default Item;
