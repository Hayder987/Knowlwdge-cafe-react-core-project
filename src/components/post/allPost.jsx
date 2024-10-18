import React from 'react'
import Post from './post'
import { useEffect } from 'react';
import { useState } from 'react'
import BookMark from '../bookmark/BookMark';
import ReadTime from '../bookmark/ReadTime';

export default function AllPost() {

    const [users, setUsers] = useState([]);
    const [conditon, setCondition] = useState(true)
    const [bookmark, setBookMark] = useState([])
    const [btnId, setBtnId ]= useState(0)

     useEffect(()=>{
       const fetchData =async()=>{
        const url = "./blogs.json";
        const res = await fetch(url);
        const data = await res.json();
        setUsers(data)
       }
       fetchData()
  },[]);

  function bookmarkHandller ({id}){
    setCondition(!conditon)
    setBtnId(id)
  }

 
  function btnHandeller ({title}){
    setBookMark([...bookmark, title]);    
  }
  
  return (
    <div className='p-12 flex gap-4'>
      <div className='flex flex-col gap-10 w-8/12'>
        {users.map(blog=> <Post conditon={blog.id===btnId ?conditon: true} key={blog.id} bookmarkHandller={bookmarkHandller} blog={blog} btnHandeller={btnHandeller}></Post>)}
      </div>
      <div className="w-4/12 flex flex-col gap-4">
        <ReadTime></ReadTime>
        <div className="bg-gray-300 p-3 rounded-xl flex flex-col gap-2">
          {bookmark.map(item=> <BookMark item={item}></BookMark>)}
        </div>
      </div>
    </div>
  )
}
