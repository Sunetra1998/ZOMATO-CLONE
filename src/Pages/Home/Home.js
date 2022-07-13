import React, { useState } from 'react'
import Footer from '../../Components/Common/Footer/Footer'
import Header from '../../Components/Common/Header/Header'
import TabOptions from '../../Components/Common/TabOptions/TabOptions'
import Delivery from '../../Components/Delivery/Delivery'
import DiningOut from '../../Components/DiningOut/DiningOut'
import Nightlife from '../../Components/Nightlife/Nightlife'

const Home = () => {
    const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div>
        <Header/>
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
        {getCorrectScreen(activeTab)}
        <Footer/>
    </div>
  )
}

const getCorrectScreen=(tab)=>{
switch (tab) { 
    case"Delivery":
    return <Delivery />;
    case"Dining Out":
    return <DiningOut />;
    case"Nightlife":
    return <Nightlife />;
    default: return <Delivery />;
}
}

export default Home