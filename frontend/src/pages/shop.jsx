import React from 'react'
import { Hero } from '../components/Hero/Hero';
import { Popular, popular } from '../components/popular/popular';
import { Offers } from '../components/Offers/Offers';
import { NewCollections } from '../components/NewCollections/NewCollections';
import { NewsLetter } from '../components/NewsLetter/NewsLetter';
// import { popular } from '../components/popular/popular';






export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}
