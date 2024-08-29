import Feed from "@/components/Feed";
import LeftBar from "@/components/LeftBar";
import RightSide from "@/components/RightSide";

export default function Home() {
  return (
    <main className="flex w-[1300px] mx-auto items-center ">
      <LeftBar />
      <Feed />
      <RightSide />
    </main>
  );
}
