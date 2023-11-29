import React from 'react'
import { useSelector } from "react-redux";
import { selectAllPosts } from './postSlice';
import AddPostsForm from './AddPostsForm'
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';

const PostsList = () => {
    const posts = useSelector(selectAllPosts)
// const orderPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderPosts = posts.map((data) => (
        <article className='border border-black rounded-md m-5 p-5' key={data.id}>
            <p>{data.title}</p>
            <p>{data.content.slice(1, 100)}</p>
            <p>
              <PostAuthor userId={data.userId}/>
              <TimeAgo timeStamp={data.date}/>
            </p>
        </article>
    ))

    
  
  return (
    <div>
      <h1>Posts</h1>
      <AddPostsForm />
      <div>{renderPosts}</div>
    </div>
  );
}

export default PostsList