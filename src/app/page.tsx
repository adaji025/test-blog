import Trending from "@/components/Trending/Trending";

export default function Home() {
  return (
    <main className="">
      <h1 className="text-center font-black text-5xl mt-10 text-black/90">Trending</h1>
      <div className="mt-20 max-w-[1300px] mx-auto px-10 py-5 flex justify-center">
        <Trending />
      </div>
    </main>
  );
}
