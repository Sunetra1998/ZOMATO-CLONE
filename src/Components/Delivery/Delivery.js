import React from 'react'
import ExploreSection from '../Common/ExploreSection/ExploreSection';
import Filters from '../Common/Filters/Filters';
import "./Delivery.css";
import DeliveryCollections from './DeliveryCollections/DeliveryCollections';
import TopBrands from './TopBrands/TopBrands';
import {restaurants} from "../../data/Restaurants";

const deliveryFilters=[
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
    title:"Safe and Hygenic"
  },
  {
    id:4,
    title:"Pure Veg"
  },
  {
    id:5,
    icon: <i class="fi fi-rr-apps-sort absolute-center"></i>,
    title:"Delivery Time"
  },
  {
    id:6,
    title:"Great Offers"
  },
];
const restaurantList =restaurants;
console.log("//restau",restaurantList);
const Delivery = () => {
  return (
    <div className="delivery">
      <div className="max-width">
        <Filters filterList={deliveryFilters} />
      </div>
      <DeliveryCollections/>
      <TopBrands/>
      <ExploreSection list={restaurantList} collectionName="Delivery Restaurants in Bangalore" />
    </div>
  )
}

export default Delivery