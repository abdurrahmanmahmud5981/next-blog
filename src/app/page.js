import BlogCard from "@/components/BlogCard";


export default async function Home() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts
`)
  const data = await response.json() || [];
  return (
    <>
      <div className="container mx-auto">
        {data.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         { data.map(card => <BlogCard key={card?.id} card={card} />)}
        </div> : <>No Blog Found </>}
      </div>
    </>
  );
}
