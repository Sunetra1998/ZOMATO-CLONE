import React from 'react'
import './DeliveryCollections.css';
import Slider from "react-slick";
import NextArrow from '../../Common/Carousel/NextArrow';
import PrevArrow from '../../Common/Carousel/PrevArrow';
import DeliveryItem from './DeliveryItem/DeliveryItem';

const deliveryItems = [
    {
        id:1,
        title:"Home Style",
        cover:"https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png"
    },
    {
        id:2,
        title:"Biriyani",
        cover:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    },
    {
        id:3,
        title:"Chicken",
        cover:"https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
    },
    {
        id:4,
        title:"Pizza",
        cover:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    },
    {
        id:5,
        title:"Burger",
        cover:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
    },
    {
        id:6,
        title:"Paratha",
        cover:"https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png"
    },
    {
        id:7,
        title:"Rolls",
        cover:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
    },
    {
        id:8,
        title:"Noodles",
        cover:"https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png"
    },
    {
        id:9,
        title:"Cake",
        cover:"https://b.zmtcdn.com/data/dish_photos/1f4/8e9fddddba09090f999520e902a601f4.jpg?output-format=webp",
    },
    {
        id:10,
        title:"Fries",
        cover:"https://b.zmtcdn.com/data/o2_assets/13bdf0d4c96d44e6ddb21fedde0fe4081632716661.png"
    },
    {
        id:11,
        title:"Chaat",
        cover:"https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png"
    },
    {
        id:12,
        title:"Bowl",
        cover:"https://b.zmtcdn.com/data/dish_images/838c7929dcc09479600f118c9088af7b1614910398.png"
    },
    {
        id:13,
        title:"Shake",
        cover:"https://b.zmtcdn.com/data/dish_images/8187d3223ac2cc42cc24f723c92877511634805403.png"
    },
    {
        id:14,
        title:"Ice Cream",
        cover:"https://b.zmtcdn.com/data/o2_assets/4c7697178c268c50e1b1641fca205c231634401116.png"
    },
    {
        id:15,
        title:"Juice",
        cover:"https://b.zmtcdn.com/data/dish_images/76337f566ed166fad8a5ad6b5e29d75b1634805122.png"
    },
];
const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  };

const DeliveryCollections = () => {
  return (
    <div className="delivery-collection">
        <div className="max-width">
            <div className="collection-title">Eat what makes you happy</div>
            <Slider {...settings}>
                {deliveryItems.map((item)=>{
                    return(
                        <DeliveryItem item={item} />
                    )
                })}
            </Slider>
        </div>
    </div>
  )
}

export default DeliveryCollections