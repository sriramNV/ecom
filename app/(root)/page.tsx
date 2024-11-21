import SeachForm from "@/components/SeachForm";

export default async function Home({searchParams}: {searchParams: Promise<{query: string}>}){
  const query = (await searchParams).query;

  return (
    <>
    <section className="pink_container">
      <h1 className="text-center heading">Pitch your startup,<br/> Connect with Enterprenurs</h1>
      <p className="sub-heading !max-w-3xl">
        Submit Ideas and get noticed in virtual competitions  
       </p>
       <SeachForm query={query}/>
    </section>
    </>
  );
}
