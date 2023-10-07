import React from 'react'
import BlogCard from './BlogCard'

const BlogList = () => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
      {[...Array(6)].map((_, index) => (
        <BlogCard key={index} />
      ))}
    </div>
  )
}

export default BlogList
