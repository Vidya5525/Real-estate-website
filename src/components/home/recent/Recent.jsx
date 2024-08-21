import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='"Discover the Next Chapter of Your Life: Our Recent Listings Bring You Closer to Finding a Home That Reflects Your Aspirations and Lifestyle".' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
