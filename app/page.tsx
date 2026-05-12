import Image from "next/image";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
   <div className="text-[#0f1419] min-h-screen bg-gray-400 max-w-[1400px] mx-auto">
    <Sidebar/>
   </div>
  );
}
