import Image from "next/image";
import Sidebar from "./components/Sidebar";
import PostFeed from "./components/PostFeed";
import Widgets from "./components/Widgets";

export default function Home() {
  return (
   <div className="text-[#0f1419] min-h-screen border-2 border-black max-w-[1400px] mx-auto flex">
    <Sidebar/>
    <PostFeed/>
    <Widgets/>
   </div>
  );
}
