import Image from "next/image";
import Sidebar from "./components/Sidebar";
import PostFeed from "./components/PostFeed";
import Widgets from "./components/Widgets";
import SignUpPrompt from "./components/SignUpPrompt";
import CommentsModal from "./components/modals/CommentsModal";

export default function Home() {
  return (
    <>
   <div className="text-[#0f1419] min-h-screen max-w-[1400px] mx-auto flex justify-center">
    <Sidebar/>
    <PostFeed/>
    <Widgets/>
   </div>
   <CommentsModal />
   <SignUpPrompt/>
   </>
  );
}
