import Sidebar from "../components/Sidebar";
import PostFeed from "../components/PostFeed";
import Widgets from "../components/Widgets";
import CommentsModal from "../components/modals/CommentsModal";
import SignUpPrompt from "../components/SignUpPrompt";
import { ArrowLeftIcon, ArrowUpTrayIcon, ChartBarIcon, ChatBubbleOvalLeftEllipsisIcon, EllipsisHorizontalIcon, HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { PostHeader } from "../components/Post";
import { getDoc,doc } from "firebase/firestore";
import { db } from "@/firebase";

const fetchPost = async(id : string)=>{
   const postRef = doc(db, "socialPost", id);
   const postSnap = await getDoc(postRef)
   return postSnap.data()
}

interface PageProps {
  params:{
    id: string
  };
}

interface Comment  {
  name:string;
  text:string;
  username: string;
}

export default async function page({params}:PageProps) {
 const { id } = params
 const post = await fetchPost(id)
 console.log(post)

  return (
    <>
   <div className="text-[#0f1419] min-h-screen max-w-[1400px] mx-auto flex justify-center">
    <Sidebar/>
      <div className="flex-grow max-w-2xl border-x border-gray-100">
          <div className="py-4 px-3 text-lg sm:text-xl sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-sm border-b border-gray-100 flex items-center">
            <Link href="/">
                <ArrowLeftIcon className="w-5 h-5 mr-10" />
            </Link>
            Bubbles
          </div>
          <div className="flex flex-col p-3 space-y-5 border-b border-gray-100">
            <div className="flex justify-between items-center mb-1.5">
              <div className="flex space-x-3">
              <Image src='/assets/profile.png' width={44} height={44} alt="profile photo" className='w-11 h-11'/>
              <div className="flex flex-col text-[15px]">
                <span className="font-bold whitespace-nowrap max-w-[60px] min-w-[400px]:max-w-[100px] min-[500px]:max-w-[140px] sm:max-w-[160px] overflow-hidden text-ellipsis">{post?.name}</span>
                <span className="text-[#707E89] whitespace-nowrap max-w-[60px] min-w-[400px]:max-w-[100px] min-[500px]:max-w-[140px] sm:max-w-[160px] overflow-hidden text-ellipsis">{post?.username}</span>
              </div>
              </div>
              <EllipsisHorizontalIcon className="w-5 h-5"/>
            </div>
            <span className="text-[15px]">{post?.text}</span>
          </div>
          <div className="border-b border-gray-100 p-3 text-[15px]"><span className="font-bold">{post?.likes?.length || 0}</span> Likes</div>
          <div className="border-b border-gray-100 p-3 text-[15px] flex justify-evenly">
            <ChatBubbleOvalLeftEllipsisIcon className="w-[22px] h-[22px] text-[#707E89] cursor-not-allowed" />
            <HeartIcon className="w-[22px] h-[22px] text-[#707E89] cursor-not-allowed"/>
            <ChartBarIcon className="w-[22px] h-[22px] text-[#707E89] cursor-not-allowed"/>
            <ArrowUpTrayIcon className="w-[22px] h-[22px] text-[#707E89] cursor-not-allowed" />
          </div>
          {post?.comments?.map((comment: Comment, index:number) => (
            <Comment key={index} name={comment.name} username={comment.username} text={comment.text}/>
          ))}
      </div>
      <Widgets/>
    </div>
   <SignUpPrompt/>
   </>
  );
}

interface CommentProps {
  name:string;
  username: string;
  text: string;
}

function Comment( {name, username,text} :CommentProps){
  return(
    <div className="border-b border-gray-100">
       <PostHeader name={name} username={username} text={text} />
       <div className="flex space-x-14 p-3 ms-16">
            <HeartIcon className="w-[22px] h-[22px]  cursor-not-allowed"/>
            <ChatBubbleOvalLeftEllipsisIcon className="w-[22px] h-[22px] cursor-not-allowed" />
            <ChartBarIcon className="w-[22px] h-[22px]  cursor-not-allowed"/>
            <ArrowUpTrayIcon className="w-[22px] h-[22px] cursor-not-allowed" />
       </div>
    </div>
  )
}
