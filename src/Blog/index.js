import React from 'react';
import BlogCard from '../component/BlogCard.js';
let data=[
  {index:1,title:'hello',desc:'wrold'},
  {index:2,title:'this is car',desc:'wrold2'},
  {index:3,title:'hello3',desc:'wrold3'},
  {index:4,title:'hello4',desc:'wrold4'}
]
class Blog extends React.Component{
  render(){
    let cards=data.map((item,i)=><BlogCard{...item} key={i} />)
    return(
      <div className='blog-wrap'>

        {cards}

      </div>
    )
  }
}

export default Blog;
