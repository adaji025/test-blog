import BlogList from "@/components/BlogList/BlogList";
import CategoryCard from "@/components/Category/CategoryCard";
import PopularPost from "@/components/PopularPost/PopularPost";
import Trending from "@/components/Trending/Trending";

export default function Home() {
  return (
    <main className="">
      <h1 className="text-center font-black text-5xl mt-10 text-black/90">
        Trending
      </h1>
      <div className="mt-20 max-w-[1300px] mx-auto px-10 py-5 ">
        <Trending />
        <BlogList />

        <div className="mt-32">
          <h3 className="font-bold text-3xl text-center">Most Popular Posts</h3>
          <PopularPost />
        </div>

        <div className="mt-20 flex gap-10 flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h3 className="font-bold text-xl mb-2">Sports</h3>
            <div>
              {[...Array(4)].map((_, index) => (
                <CategoryCard key={index} />
              ))}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-xl mb-2">Business</h3>
            <div>
              {[...Array(4)].map((_, index) => (
                <CategoryCard key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
