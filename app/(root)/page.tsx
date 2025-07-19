import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import React from 'react'

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {

  const query = (await searchParams).query?.trim();

  const posts = [{
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: 'Adrian'},
      _id: 1,
      description: "This is a description",
      image: "https://picsum.photos/id/13/200/300",
      category: "Nature",
      title: "Rocky Beach Shoreline",
    }, 
  ];

  return (
    <>
      <section className='pink_container'>
        <h1 className="heading">Pitch Your Startup, <br/> Connect With Entrepreneurs</h1>
        <p className='sub-heading !max-w-3xl'>
          Submit Ideas, Vote on Pitches, and Get Notices in Virtual Competitions.
        </p>
        <SearchForm query={query}/>
      </section>
      
      <section className="section_container">
        <p className='text-30-semibold'>
          {query ? `Search results for "${query}"` : 'All Startups'}
        </p>

        <ul className='mt-7 card_grid'>
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post}/>
            ))
          ) : (
           <p className='no-result'>
            No startups found.
           </p>
          )}
        </ul>
      </section>
    </>
  );
}
