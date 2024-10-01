import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'

import { allBlogs } from 'contentlayer/generated'

import Main from './Main' 
import MyComponent from '@/components/Books' 

export default async function Page() { 
  const sortedPosts = sortPosts(allBlogs) 
  const posts = allCoreContent(sortedPosts) 
  return (
    <>
      <MyComponent />
      <Main posts={posts} />    
    </>
  ) 
     
}
