import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './postSlice';
import { selectAllUsers } from '../users/usersSlice';

const AddPostsForm = () => {

    const dispatch = useDispatch()

    const users = useSelector(selectAllUsers)
    const [formValues, setFormValues] = useState({
      title: "",
      content: "",
    });
    const [userId, setUserId] = useState('')

    // console.log(formValues.title)

    const handleChange = (e) => {
        setFormValues({...formValues,[e.target.name]:e.target.value})
    }

    const handlePost = (e) => {
        e.preventDefault();
        if (formValues.title && formValues.content){
            dispatch(postAdded(formValues.title, formValues.content, userId))
        }
        setFormValues({
            title: '',
            content: ''
        })
    }

    const userOption = users.map((data) => (
      <option id={data.id} value={data.id}>
        {data.name}
      </option>
    ));

    const canPost = Boolean(formValues.title) && Boolean(formValues.content) && Boolean(userId);

  return (
    <div>
      <form className="ml-3" onSubmit={handlePost}>
        <h1 className=" p">Title</h1>
        <input
          className="border border-l-blue-800 p-3 outline-none border-l-4"
          type="text"
          name="title"
          value={formValues.title}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="userid">Authors</label>
        <select
          id="userid"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value=""></option>
          {userOption}
        </select>
        <br />
        <h2>Content</h2>
        <input
          className="border border-l-blue-800 p-3 outline-none border-l-4"
          type="text"
          name="content"
          value={formValues.content}
          onChange={handleChange}
        />
        <button
          className={canPost ? "bg-sky-700 px-5 py-2" : "bg-sky-400 px-5 py-2"}
          type="submit"
          disabled={!canPost}
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default AddPostsForm