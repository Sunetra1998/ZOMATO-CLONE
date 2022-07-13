import React from 'react'
import Collection from '../Common/Collection/Collection';
import "./DiningOut.css";
import {diningOut} from "../../data/DiningOut";
import Filters from "../Common/Filters/Filters";
import ExploreSection from "../Common/ExploreSection/ExploreSection";


const collectionList=[
  {
    id:"1",
    title:"Live Cricket Screening",
    cover:"https://b.zmtcdn.com/data/collections/ca1c3eba724a6465d83d09953af0768d_1648214147.png",
    places:"54 Places"
  },
  {
    id:"2",
    title:"Newly Opened",
    cover:"https://b.zmtcdn.com/data/collections/031c2dd47d839ff2bf98dbb66147ab4f_1648708839.jpg",
    places:"13 Places"
  },
  {
    id:"3",
    title:"Trending This Week",
    cover:"https://b.zmtcdn.com/data/collections/f60eb469dbcdadaaa48c8be4f5ba48b3_1646040546.png",
    places:"30 Places"
  },
  {
    id:"4",
    title:"Best of Bengaluru",
    cover:"https://b.zmtcdn.com/data/collections/53be5a745e959a8f6c51c52dd3d9edd1_1536825795.jpg",
    places:"155 Places"
  },
  {
    id:"5",
    title:"Best Pizza Places In Town",
    cover:"https://b.zmtcdn.com/data/collections/f6e7f7d903d6499e1420d755ddc0ab11_1647253868.jpg",
    places:"25 Places"
  },
  {
    id:"6",
    title:"Brilliant Biriyanis",
    cover:"https://b.zmtcdn.com/data/collections/121c28675e83cd77ae12f5904580f241_1647256967.jpg",
    places:"27 Places"
  },
  {
    id:"7",
    title:"Darshini",
    cover:"https://b.zmtcdn.com/data/collections/3ec0a1d41a727287821715478cb6ee2b_1633438403.jpg",
    places:"30 Places"
  },
  {
    id:"8",
    title:"Flavours of Punjab",
    cover:"https://b.zmtcdn.com/data/collections/81d955a89e9530661ed96b0373dcbe9f_1647258270.jpg",
    places:"30 Places"
  },
];
const diningFilters=[
  {
    id:1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title:"filters"
  },
  {
    id:2,
    title:"Rating: 4.0+"
  },
  {
    id:3,
    title:"Pro Offers",
    icon: <i className="fi fi-rr-angle-small-down"></i>
  },
  {
    id:4,
    title:"Outdoor Seating"
  },
  {
    id:5,
    title:"Serves Alcohol"
  },
  {
    id:6,
    title:"Open Now"
  },
];
const diningList = diningOut;
console.log("//data",diningList);
const DiningOut = () => {
  return (
    <div>
        <Collection list={collectionList} />
        <div className="max-width">
          <Filters filterList={diningFilters} />
        </div>
        <ExploreSection list={diningList} collectionName="Dine-Out Restaurants in Bangalore"  />
    </div>
  )
}

export default DiningOut