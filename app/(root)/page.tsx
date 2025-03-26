import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home({searchParams}: {
  searchParams: Promise<{query?:string}>
}) {
  const query = (await searchParams).query;

  const posts =  await client.fetch(STARTUPS_QUERY);

  // console.log(JSON.stringify(posts));
  

  // const posts = [
  //   {
  //     _createdAt: new Date(),
  //     views: 55,
  //     author: { _id: 1, name: "Nathan" },
  //     _id: 1,
  //     description: "This is a description",
  //     image:"https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     category:"Robots",
  //     title: "We Robots",
  //   }
  // ];
  
  return (
    <>
      <section className="pink_container bg-gradient-to-r from-black-200 via-red-600 to-green-600">
        <h1 className="heading">
          Pitch Your Idea
          <br />
          Connect with Your Future{" "}
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Gauge The Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query}/>
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}" `: 'All Startups'}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType)=>(
              <StartupCard key={post?._id} post={post} />
            ))
          ): (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
