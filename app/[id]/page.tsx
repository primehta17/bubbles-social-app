import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import SignUpPrompt from '../components/SignUpPrompt';
import PostDetail from '../components/PostDetail';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return (
    <>
      <div className="text-[#0f1419] min-h-screen max-w-[1400px] mx-auto flex justify-center">
        <Sidebar />
        <PostDetail id={id} />
        <Widgets />
      </div>
      <SignUpPrompt />
    </>
  );
}
