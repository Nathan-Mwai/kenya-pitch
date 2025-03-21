import SearchForm from "@/components/SearchForm";
import Image from "next/image";

export default async function Home({searchParams}: {
  searchParams: Promise<{query?:string}>
}) {
  const query = (await searchParams).query;
  return (
    <>
      <section className="pink_container bg-gradient-to-r from-black-200 via-red-600 to-green-600 pattern">
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
    </>
  );
}
