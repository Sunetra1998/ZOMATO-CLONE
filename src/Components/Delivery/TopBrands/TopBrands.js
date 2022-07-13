import React from 'react'
import Slider from 'react-slick';
import NextArrow from '../../Common/Carousel/NextArrow';
import PrevArrow from '../../Common/Carousel/PrevArrow';
import "./TopBrands.css";


const topBrandList=[
    {
        id:1,
        time:"22mins",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/ec72c289aa01d947fe15a009ce8e559f_1616052816.png"
    },
    {
        id:2,
        time:"21mins",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/4c0ad890a010ebed2a98520a45a1a222_1543210471.png"
    },
    {
        id:3,
        time:"21mins",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png"
    },
    {
        id:4,
        time:"22mins",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/526e7511008f07f7d630549c7c5809b1_1638685733.png"
    },
    {
        id:5,
        time:"27mins",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png"
    },
     {
        id:6,
        time:"21mins",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png"
    }, {
        id:7,
        time:"23mins",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/5ef673b417cd25b5a04176ce341d425a_1630505477.png"
    },
    {
        id:8,
        time:"24mins",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png"
    },
    {
        id:9,
        time:"29mins",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/dc49d77dce0ee7fc8e495fa35be0e747_1648715086.png"
    },
     {
        id:10,
        time:"27mins",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/9742d760cf95e9dbf9b869ca9c753f8f_1613210633.png"
    },
    {
        id:11,
        time:"20mins",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/ccfc99a48a81fd2a0092e9c4ad02614c_1575441347.png?output-format=webp"
    }
];
const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  };

const TopBrands = () => {
  return (
    <div className="top-brands max-width">
        <div className="collection-title">Top brands for you</div>
        <Slider {...settings}>
            {topBrandList.map((brand)=>{
                return <div>
                    <div className="top-brands-cover">
                        <img src={brand.cover} className="top-brands-image" alt={brand.time} />
                    </div>
                </div>
            })}
        </Slider>
    </div>
  )
}

export default TopBrands