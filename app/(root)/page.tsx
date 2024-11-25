import SeachForm from "@/components/SeachForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}: {searchParams: Promise<{query: string}>}){
  
  const query = (await searchParams).query;
  const posts  = [{
    _createdAt: new Date(),
    views: 55,
    author:{_id: 1, name: "Name"},
    _id: 1,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    image: 'https://images.unsplash.com/photo-1725900737080-54b5a571b38c',
    category: 'Technology',
    title: 'Startup 1',
  }];

  return (
    <>
    <section className="pink_container">
      <h1 className="text-center heading">Pitch your startup,<br/> Connect with Enterprenurs</h1>
      <p className="sub-heading !max-w-3xl">
        Submit Ideas and get noticed in virtual competitions  
       </p>
       <SeachForm query={query}/>
    </section>

    <section className="section_container">
      <p className="text-30-semibold">
        {query ? `Search results for "${query}"` : 'Latest Startups'}
      </p>
  
      <ul className="mt-7 card_grid">
        {posts?.length > 0 ?(posts.map((post: StartupCardType, index: number) =>(<StartupCard key={post?._id} post={post} />))): 
          (<p className="no-result">No Startups Found</p>)}

      </ul>
      
    </section>

    </>
  );
}
