'use client';
import React, { useEffect,useState } from 'react';
import PostInput from './PostInput'; 
import Post from './Post';
import { collection, DocumentData, onSnapshot, orderBy, query, QueryDocumentSnapshot } from 'firebase/firestore';
import { db } from '@/firebase';

function PostFeed(){
  const [posts, setPosts] = useState<QueryDocumentSnapshot<DocumentData, DocumentData>[]>([])
  useEffect(()=>{
      const q=query(collection(db, "socialPost"), orderBy("timestamp", "desc"))
   console.log(q)
      const unsubscribe = onSnapshot(q,(snapshot)=>{
        const snapshotDocs =snapshot.docs
        setPosts(snapshotDocs)
      })
      return unsubscribe
  },[])
  return (
    <div  className="flex-grow max-w-2xl border-x border-gray-100">
      <div className="py-4 px-3 text-lg sm:text-xl stickt top-0 z-50 bg-white bg-opacity-80 backdrop-blur-sm border-b border-gray-100">Home</div>
     <PostInput/>
     {posts.map(post=> <Post key={post.id} data={post.data()} id={post.id}/>)}
     </div>
  )
}

export default PostFeed;
