import React from 'react'
import Collection from '../Common/Collection/Collection';
import ExploreSection from '../Common/ExploreSection/ExploreSection';
import Filters from '../Common/Filters/Filters';
import './Nightlife.css';
import {nightlife} from "../../data/Nightlife";


const collectionList=[
  {
    id:1,
    title:"Microbreweries",
    cover:"https://b.zmtcdn.com/data/collections/f29fa95355a78edb148d737d12bd9ef0_1647256377.jpg",
    places:"32 Places"
  },
  {
    id:2,
    title:"Best Bars & Pubs",
    cover:"https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
    places:"30 Places"
  },
  {
    id:3,
    title:"Late Night Restaurants",
    cover:"https://b.zmtcdn.com/data/collections/3ba72a421fd45b218711dffffe18a9d9_1647338500.jpg?output-format=webp",
    places:"29 Places"
  },
  {
    id:4,
    title:"Great Cafes",
    cover:"https://b.zmtcdn.com/data/collections/d15ef9b6c5294100b9c8047a8804bdff_1647257377.jpg?output-format=webp",
    places:"30 Places"
  },
  {
    id:5,
    title:"Rooftops",
    cover:"https://b.zmtcdn.com/data/collections/6efffe7eb3b046f36bf87ba0d0e306c8_1647256704.jpg?output-format=webp",
    places:"31 Places"
  },
  {
    id:6,
    title:"Kickass Burgers",
    cover:"https://b.zmtcdn.com/data/collections/077bf4f922e340f1317a1c83543b716d_1647256205.jpg?output-format=webp",
    places:"24 Places"
  },
];
const nightFilters=[
  {
    id:1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title:"filters"
  },
  {
    id:2,
    title:"Pro Offers",
    icon: <i className="fi fi-rr-angle-small-down"></i>
  },
  {
    id:3,
    title:"Distance"
  },
  {
    id:4,
    title:"Rating: 4.0+"
  },
  {
    id:5,
    title:"Pubs & Bars"
  },
];
const nightList = nightlife;
const Nightlife = () => {
  return (
    <div>
      <Collection list={collectionList} />
        <div className="max-width">
          <Filters filterList={nightFilters} />
        </div>
        <ExploreSection list={nightList} collectionName="Nightlife Restaurants in Bangalore" />
    </div>
  )
}

export default Nightlife