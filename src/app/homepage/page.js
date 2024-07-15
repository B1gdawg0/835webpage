import Navbar from "@/component/nav";
import Newslist from "@/component/newslist";

export default function HomePage() {
  return (
    <>
      <Navbar/>
      <main className="px-6">
        <div className="my-[122px]">
          <h1 className="flex font-bold text-[64px] justify-center text-title-thefigmagod-brown">News</h1>
          <Newslist></Newslist>
        </div>
      </main> 
    </>
  );
}