import Navbar from "@/component/nav";
import SideSlideCardList from "@/component/side-slide-card";
export default function HomePage() {
  return (
    <>
      <Navbar/>
      <main className="px-2">
        <div className="my-[122px]">
          <h1 className="flex font-bold text-[64px] justify-center text-title-thefigmagod-brown">News</h1>
          <SideSlideCardList></SideSlideCardList>
        </div>
      </main> 
    </>
  );
}