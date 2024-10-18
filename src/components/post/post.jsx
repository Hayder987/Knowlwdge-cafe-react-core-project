import React from 'react'


export default function Post({blog, conditon, btnHandeller,bookmarkHandller}) {
    const {id, cover,title,author_img,author, posted_date,reading_time, hashtags} = blog;
    
  return (
    <div className="">
         <div className='border-b-2 p-4 flex flex-col gap-6'>
       <img src={cover} alt="" className="w-full object-cover" />
       <div className="flex justify-between items-center">
        <div className="">
           <div className="flex gap-6">
             <img src={author_img} alt="" className="w-12 h-12" />
             <div className="">
                <h4 className="text-2xl font-semibold">{author}</h4>
                <p className="text-gray-500">{posted_date}</p>
             </div>
           </div>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <p>{reading_time} min read</p>
          <button onClick={()=>bookmarkHandller({id})} className="">
            {conditon?<i className="fa-regular fa-bookmark"></i>: 
            <i class="fa-solid fa-bookmark"></i>}</button>
          
        </div>
       </div>
       <h1 className="font-semibold text-2xl">{title}</h1>
       <div className="flex gap-4">
       <p className='flex gap-4'>
         {hashtags.map((tag, index) => (
           <span key={index}>#{tag} </span>
         ))}
       </p>
        
       </div>
       <div>
         <button onClick={()=> btnHandeller({title})} className="text-blue-600 underline font-semibold">Mark as read</button>
       </div>
      </div>
    </div>
  )
}
