import React from 'react';
import BlogCard from '../component/BlogCard.js';
import axios from 'axios';
import Loading from '../component/Loading.js'

class Blog extends React.Component{

    constructor(){
      super();
      this.state={
        data:[],
        wait:true
      }
    }
    componentDidMount(){
    axios.get('https://raw.githubusercontent.com/superce/demo-09/master/data/blogCard.json?' ) 
      .then(res => this.setState({data:res.data,wait:false}))
  }
  render(){

    return(
      <div className='blog-wrap'>
        {this.state.wait ? <Loading /> :

            this.state.data.map( (item,i) => <BlogCard {...item} key={i} />)
          }

      </div>
    )
  }
}

export default Blog;
