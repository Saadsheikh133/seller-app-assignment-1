import { useEffect } from "react";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import HotelTab from "../HotelTab/HotelTab";
import 'react-tabs/style/react-tabs.css';


const HotelInfo = () => {
    const [hotels, setHotels] = useState([]);
    const [tabIndex, setTabIndex] = useState("New York")

    const newYork = hotels.filter(hotel => hotel.city === 'New York');
    const paris = hotels.filter(hotel => hotel.city === 'paris');
    const london = hotels.filter(hotel => hotel.city === 'London');
    const denver = hotels.filter(hotel => hotel.city === 'Denver');

    const handleProducts = () => {
        
    }

    useEffect(() => {
        fetch('../../../public/hotelInfo.json')
            .then(res => res.json())
            .then(data => setHotels(data))
    }, []);

    return (
        <div>
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-2">Featured Listed Property</h2>
                <p className="text-xl">Real state can be bought, sold, leased, or rented and can be a <br /> valuable investment opportunity. The value of real state can be....</p>
            </div>
            <div className="mx-10 mt-10 relative">
                <div>
                    <Tabs className='' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList className="flex gap-2">
                            <Tab className="bg-slate-300 mx-2 px-4 py-1 rounded-2xl cursor-pointer">New York</Tab>
                            <Tab className="bg-slate-300 mx-2 px-4 py-1 rounded-2xl cursor-pointer">Paris</Tab>
                            <Tab className="bg-slate-300 mx-2 px-4 py-1 rounded-2xl cursor-pointer">London</Tab>
                            <Tab className="bg-slate-300 mx-2 px-4 py-1 rounded-2xl cursor-pointer">Denver</Tab>
                        </TabList>

                        <TabPanel>
                            <HotelTab hotel={newYork}></HotelTab>
                        </TabPanel>
                        <TabPanel>
                            <HotelTab hotel={paris}></HotelTab>
                        </TabPanel>
                        <TabPanel>
                            <HotelTab hotel={london}></HotelTab>
                        </TabPanel>
                        <TabPanel>
                            <HotelTab hotel={denver}></HotelTab>
                        </TabPanel>
                    </Tabs>
                </div>
                <div className="absolute top-0 right-0">
                    <button className="text-blue-700 font-semibold border rounded-3xl border-blue-700 px-4 py-1">View all</button>
                </div>
            </div>
            <div className="py-4 text-center">
                <button className="bg-blue-700 text-xl font-semibold text-white rounded-2xl px-4 py-2">Show More</button>
            </div>
        </div>
    );
};

export default HotelInfo;