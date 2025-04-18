import SearchForm from "@/components/SearchForm";
import StartupCard, {StartupTypeCard} from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import {sanityFetch, SanityLive} from "@/sanity/lib/live";
export default async function Home({searchParams}: {
  searchParams: Promise<{query?:string}>
}) {
  const query = (await searchParams).query;
  const params = { search : query || null };

  const {data: posts} = await sanityFetch({query:STARTUPS_QUERY, params});

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
            posts.map((post: StartupTypeCard)=>(
              <StartupCard key={post?._id} post={post} />
            ))
          ): (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>

      <SanityLive/>
    </>
  );
}
